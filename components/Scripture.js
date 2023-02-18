import React from 'react';
import {View, Text, StyleSheet, Dimensions, TouchableOpacity, Linking} from 'react-native';

const SCREEN_WIDTH = Dimensions.get('window').width;
const SCREEN_HEIGHT = Dimensions.get('window').height;

const Scripture = (params) => {

    const item = params.data;
    const _onPress = () => {
        Linking.openURL(item.url);
    }
    let thisYear = item.date.substring(0,4);
    let thisMonth = item.date.substring(5,7);
    let thisDay = item.date.substring(8,10);

    return (
        <TouchableOpacity activeOpacity={0.5} onPress={_onPress}>
            <View style={styles.itemContainer}>
                <View style={{flexDirection:'column', justifyContent:'center', alignItems:'flex-start', borderWidth:0}}>
                    <View style={{alignSelf:'center'}}>
                        <Text style={{fontSize:16, color:'#aaaaaa'}}>{thisYear}</Text>
                    </View>
                    <View style={{flexDirection:'row'}}>
                        <Text style={{fontSize:18, fontWeight:"bold"}}>{thisMonth}</Text>
                        <Text style={{fontSize:18, fontWeight:"bold"}}>.</Text>
                        <Text style={{fontSize:18, fontWeight:"bold"}}>{thisDay}</Text>
                    </View>
                </View>
                <View style={{
                    flexDirection:'column',
                    justifyContent:'center',
                    alignItems:'flex-start', borderWidth:0,
                    marginLeft: 5
                }}>
                    <View style={{flexDirection:'row'}}>
                        <Text style={{fontSize:16}}>{item.title}</Text>
                    </View>
                    <View style={{flexDirection:'row'}}>
                        <Text style={{fontSize:20, fontWeight:"bold"}}>{item.bookAndChapter}</Text>
                    </View>
                    <View style={{flexDirection:'row'}}>
                        <Text style={{fontSize:16}}>{item.hymn}</Text>
                    </View>
                </View>
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    itemContainer: {
        flex: 1,
        flexDirection: 'row',
        width: SCREEN_WIDTH*0.9,
        marginTop: 10,
        padding: 10,
        borderWidth: 2,
        borderColor: '#aaaaaa',
        backgroundColor: 'white',
        alignSelf: 'center',
    }
});

export default Scripture;
