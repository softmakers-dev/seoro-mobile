import {Dimensions, Platform} from 'react-native';

const CurrentAppVersion = '0.1.0';
const FromDateBase = 7;
const Screen = Dimensions.get('window');
const ScreenWidth = Screen.width;
const ScreenHeight = Screen.height;
const isIOS = Platform.OS === 'ios';
const isAndroid = Platform.OS === 'android';

export {
    FromDateBase,
    CurrentAppVersion,
    ScreenWidth,
    ScreenHeight,
    isIOS,
    isAndroid
}
