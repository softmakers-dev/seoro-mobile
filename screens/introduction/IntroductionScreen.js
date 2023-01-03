import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {ListItem} from '@ui-kitten/components';

const navigationScreenList = [
        {
            title: '비전과 핵심가치',
            screen_name: 'AppVersion',
        },
        {
            title: '오시는 길',
            screen_name: 'AppVersion',
        },
        {
            title: '연락처',
            screen_name: 'AppVersion',
        }
    ]

const IntroductionScreen = ({navigation}) => {

    return (
        <View style={styles.container}>
            <View>
                {navigationScreenList.map((l, i) => (
                    <ListItem
                        containerStyle={{borderBottomWidth: 1, paddingRight: 22}}
                        key={i}
                        title={l.title}
                        chevron={true}
                        titleStyle={styles.ListText}
                        //rightIcon={{ name: 'chevron-right'}}
                        onPress={() => navigation.navigate(`${l.screen_name}`)}
                    />
                    ))}
            </View>
        </View>
    )
}

const styles = StyleSheet.create({container: {
        flex: 1,
        backgroundColor: '#ffffff',
        padding: 10,
    },
    ListText: {
        fontSize: normalize(18),
        fontFamily: Fonts.IBMMedium,
    },

});

export default IntroductionScreen;
