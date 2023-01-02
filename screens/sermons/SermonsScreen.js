import React, {useCallback, useEffect, useState} from 'react';
import {View, Text, StyleSheet, SafeAreaView, Alert, FlatList} from 'react-native';
import YoutubePlayer from 'react-native-youtube-iframe';
import {ScreenWidth} from '../../helpers';
import Sermon from '../../components/Sermon';
import firestore from '@react-native-firebase/firestore';
import {Button} from 'react-native-elements';

const SermonsScreen = ({navigation, route}) => {

    const [refreshing, setRefreshing] = useState(false);
    const _keyExtractor = (item, index) => index.toString();
    const [items, setItems] = useState([]);
    const [fetchCount, setFetchCount] = useState(5);

    const fetchData = () => {

        const refSermons = firestore()
            .collection('sermons')
            .orderBy('date', 'desc')
            .limit(fetchCount)
            .get()
            .then(querySnapShot => {
                console.log("sermon querySnapShot size : " + querySnapShot.size);
                let newItems = [];
                querySnapShot.forEach(documentSnapShot => {

                    if(newItems.indexOf(documentSnapShot.data()) === -1) {
                        newItems.push(documentSnapShot.data());
                    }
                });
                setItems(newItems);
            });
    };

    const _onMoreList = () => {
        setFetchCount(fetchCount + 5);
        fetchData();
    }

    const _renderItem = ({ item, index }) => (
        <View>
            <Sermon data={item} navigation={navigation} route={route}/>
            {
                (items.length > 0) && (items.length-1 == index) && (
                    <View style={{alignItems: 'center'}}>
                        <Button
                            buttonStyle={styles.moreListButton}
                            containerStyle={{paddingLeft:5, paddingRight:5}}
                            title={`${fetchCount}주 이전 설교 더보기`}
                            onPress={_onMoreList} />
                    </View>
                )
            }
        </View>
    )

    const _onRefresh = () => {
        setRefreshing(true);
    }

    useEffect( fetchData, []);

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
