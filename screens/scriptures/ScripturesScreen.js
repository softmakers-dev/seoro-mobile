import React, {useEffect, useState} from 'react';
import {View, Text, StyleSheet, Linking, SafeAreaView, FlatList} from 'react-native';
import Scripture from '../../components/Scripture';
import {ScreenWidth} from '../../helpers';
import firestore from '@react-native-firebase/firestore';
import {Button} from 'react-native-elements';

const ScripturesScreen = () => {

    const [refreshing, setRefreshing] = useState(false);
    const [items, setItems] = useState([]);
    const [fetchCount, setFetchCount] = useState(7);

    const _keyExtractor = (item, index) => index.toString();

    const _onRefresh = () => {
        setRefreshing(true);
    }

    const fetchData = () => {

        const refScriptures = firestore()
            .collection('scriptures')
            .orderBy('date', 'desc')
            .limit(fetchCount)
            .get()
            .then(querySnapShot => {

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
        setFetchCount(fetchCount + 7);
        fetchData();
    }

    const _renderItem = ({item, index}) => (
        <View>
            <Scripture data={item}/>
            {
                (items.length > 0) && (items.length-1 == index) && (
                    <View style={{alignItems: 'center'}}>
                        <Button
                            buttonStyle={styles.moreListButton}
                            containerStyle={{paddingLeft:5, paddingRight:5}}
                            title={`${fetchCount}일 이전 묵상 더보기`}
                            onPress={_onMoreList} />
                    </View>
                )
            }
        </View>
    )

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
    )
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

export default ScripturesScreen;
