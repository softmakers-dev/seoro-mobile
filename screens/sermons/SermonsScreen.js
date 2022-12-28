import React, {useCallback, useState} from 'react';
import {View, Text, StyleSheet, SafeAreaView, Button, Alert, FlatList} from 'react-native';
import YoutubePlayer from 'react-native-youtube-iframe';
import {ScreenWidth} from '../../helpers';
import Sermon from '../../components/Sermon';

const items = [
    {
        seq: 1,
        id: 'IkxviSSN4NM',
        DATE: '2021-12-01',
        BOOK_AND_CHAPTER: '요엘 1장',
        TITLE: '여호와의 날과 공동체적인 구원'
    },
    {
        seq: 2,
        id: 'vmy7rDOPiRY',
        DATE: '2021-12-01',
        BOOK_AND_CHAPTER: '히브리서 11장',
        TITLE: '하나님을 기쁘시게하는 믿음'
    },
    {
        seq: 3,
        id: 'WCHQ_snpInc',
        DATE: '2021-11-01',
        BOOK_AND_CHAPTER: '사사기 11장',
        TITLE: '내리셨다 들어올리시는 하나님의 구원'
    }
];

const SermonsScreen = ({navigation, route}) => {

    const [refreshing, setRefreshing] = useState(false);
    const _keyExtractor = (item) => item.seq;
    const _renderItem = ({ item, index }) => (
        <View>
            <Sermon data={item} navigation={navigation} route={route}/>
        </View>
    )

    const _onRefresh = () => {
        setRefreshing(true);
    }

    return (
        <View style={styles.container}>
            <SafeAreaView style={{flex:1}}>
                <FlatList
                    // style={{paddingBottom:20}}
                    data={items}
                    keyExtractor={_keyExtractor}
                    renderItem={_renderItem}
                    refreshing={refreshing}
                    onRefresh={_onRefresh}
                    showsVerticalScrollIndicator={false}
                    //onEndReachedThreshold={1}
                    //onEndReached={this.onEndReached}
                />
            </SafeAreaView>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        // alignItems: 'center',
        backgroundColor: 'white',
        // paddingBottom:20
    },
    moreListButton: {
        width: ScreenWidth*0.9,
        marginVertical: 10,
        backgroundColor: '#5664C0',
    },
});

export default SermonsScreen;
