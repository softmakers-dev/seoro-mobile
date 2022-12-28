import React from 'react';
import {View, Text, StyleSheet, Dimensions, TouchableOpacity} from 'react-native';

const SCREEN_WIDTH = Dimensions.get('window').width;
const SCREEN_HEIGHT = Dimensions.get('window').height;

const Sermon = (params) => {

    const item = params.data;
    const _onPress = () => {
        params.navigation.navigate('SermonWatch', { id: item.id });
    }

    return (
        <TouchableOpacity activeOpacity={0.5} onPress={_onPress}>
            <View style={styles.itemContainer}>
                <View style={{flexDirection:'column', justifyContent:'center', alignItems:'flex-start', borderWidth:0}}>
                    <View style={{flexDirection:'row'}}>
                        <Text style={{fontSize:16}}>{item.TITLE}</Text>
                    </View>
                    <View style={{flexDirection:'row'}}>
                        <Text style={{fontSize:16}}>{item.BOOK_AND_CHAPTER}</Text>
                    </View>
                    <View style={{flexDirection:'row'}}>
                        <Text style={{fontSize:16}}>{item.DATE}</Text>
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

export default Sermon;
