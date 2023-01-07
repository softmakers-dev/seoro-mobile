/**
 * utile.js
 */
import {Dimensions, Platform, PixelRatio} from 'react-native';

const {width: screenWidth, height: screenHeight} = Dimensions.get('window');
const scale = screenWidth / 375; ///750; // 아이폰 5의 너비가 320이므로
const scale1 = screenWidth / 375;

const getFormattedNumber = (number) => {
  //  let formattedNumber = Number.parseInt(number).toLocaleString('en');  //안드로이드 실기에서 안됨
  let formattedNumber = Number.parseInt(number)
    .toString()
    .replace(/\B(?=(\d{3})+(?!\d))/g, ',');
  return formattedNumber;
};

const WrapperComponent = (title, msg) => {
  return (
    <View>
      <Modal>
        <View style={{flex: 1}}>
          <Text>{title}</Text>
        </View>
      </Modal>
    </View>
  );
};

function normalize(size) {
  const newSize = size * scale;
  const newSize1 = size * scale1;
  if (Platform.OS === 'ios') {
    return Math.round(PixelRatio.roundToNearestPixel(newSize));
  } else {
    return Math.round(PixelRatio.roundToNearestPixel(newSize1));
  }
}

async function getToCount() {
  try {
    const ToCnt = await AsyncStorage.getItem('TOCNT');

    if (ToCnt == null || ToCnt == undefined || ToCnt == '') {
      return 20;
    } else {
      return ToCnt;
    }
  } catch (err) {
    console.log('[getToCount] ' + err);
  }
}

async function getFromCount() {
  try {
    const FrCnt = await AsyncStorage.getItem('FRCNT');

    if (FrCnt == null || FrCnt == undefined || FrCnt == '') {
      return 1;
    } else {
      return FrCnt;
    }
  } catch (err) {
    console.log('[getFromCount] ' + err);
  }
}

const getParsedDate = (date) => {
  return (
    String(date).slice(0, 4) +
    '-' +
    String(date).slice(4, 6) +
    '-' +
    String(date).slice(6, 8)
  );
  // date = String(date).split(' ');
  // var days = String(date[0]).split('-');
  // var hours = String(date[1]).split(':');
  // return [
  //   parseInt(days[0]),
  //   parseInt(days[1]) - 1,
  //   parseInt(days[2]),
  //   parseInt(hours[0]),
  //   parseInt(hours[1]),
  //   parseInt(hours[2]),
  // ];
};

export {getFormattedNumber, getParsedDate, getFromCount, getToCount, normalize};
