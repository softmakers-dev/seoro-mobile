import React, {useEffect, useState} from 'react';
import {View, Text, StyleSheet, Linking, SafeAreaView, FlatList} from 'react-native';
import Scripture from '../../components/Scripture';
import {ScreenWidth} from '../../helpers';
import firestore from '@react-native-firebase/firestore';

const url = 'https://www.facebook.com/groups/272150609517233/permalink/5741333285932244/?mibextid=Nif5oz';

// const items = [
//     {
//         seq: 1,
//         url: 'https://www.facebook.com/groups/272150609517233/permalink/5741333285932244/?mibextid=Nif5oz',
//         DATE: '2021-12-01',
//         BOOK_AND_CHAPTER: '요엘 1장',
//         TITLE: '여호와의 날과 공동체적인 구원',
//         HYMN: '찬송가 170'
//     },
//     {
//         seq: 2,
//         url: 'https://www.facebook.com/groups/272150609517233/permalink/5741333285932244/?mibextid=Nif5oz',
//         DATE: '2021-12-01',
//         BOOK_AND_CHAPTER: '히브리서 11장',
//         TITLE: '하나님을 기쁘시게하는 믿음',
//         HYMN: '찬송가 170'
//     },
//     {
//         seq: 3,
//         url: 'https://www.facebook.com/groups/272150609517233/permalink/5741333285932244/?mibextid=Nif5oz',
//         DATE: '2021-11-01',
//         BOOK_AND_CHAPTER: '사사기 11장',
//         TITLE: '내리셨다 들어올리시는 하나님의 구원',
//         HYMN: '찬송가 170'
//     }
// ];

const ScripturesScreen = () => {

    const [refreshing, setRefreshing] = useState(false);
    const [items, setItems] = useState([]);
    const [fetchCount, setFetchCount] = useState(5);

    const _keyExtractor = (item) => item.seq;
    const _renderItem = ({item}) => (
        <View>
            <Scripture data={item}/>
        </View>
    )

    const _onRefresh = () => {
        setRefreshing(true);
    }

    useEffect(() => {

        const refSermons = firestore()
            .collection('scriptures')
            .orderBy('date', 'desc')
            .limit(fetchCount)
            .get()
            .then(querySnapShot => {

                console.log("Total scriptures : " + querySnapShot.size);
                items = [];
                querySnapShot.forEach(documentSnapShot => {
                    items.push(documentSnapShot.data());
                });
                setItems(items);
            });
    }, []);

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
