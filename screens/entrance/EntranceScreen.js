import React, {useEffect, useState} from 'react';
import {View, Text, StyleSheet, Button, Dimensions, ActivityIndicator, ImageBackground, StatusBar} from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';
import {CurrentAppVersion} from '../../helpers';
import Orientation from 'react-native-orientation-locker';

const SCREEN_WIDTH = Dimensions.get('window').width;
const SCREEN_HEIGHT = Dimensions.get('window').height;

const EntranceScreen = ({navigation}) => {

    const [logoImageLoading, setLogoImageLoading] = useState(false);

    const _navigatePage = () => {
        try {
            AsyncStorage.setItem('INSTALLED_APP_VERSION', CurrentAppVersion);
            AsyncStorage.setItem('DIS_TIMER', '1');

            navigation.navigate('Main');
        } catch (err) {
            console.log('_navigatePage', err);
        }
    };

    const _onLoadStart = () => {
        setLogoImageLoading(true);
    }

    const _onLoadEnd = () => {
        setLogoImageLoading(false);
        setTimeout(() => {
            _navigatePage();
        }, 3000);
    }

    useEffect(() => {
        Orientation.lockToPortrait();
    }, [])

    return (
        <View style={styles.container}>
            <ImageBackground
                style={styles.logo}
                source={require('../../assets/logo_seoro.png')}
                onLoadStart={_onLoadStart}
                onLoadEnd={_onLoadEnd}
            >
                <StatusBar barStyle="default" />
                {
                    logoImageLoading && <ActivityIndicator size='large' color='white' />
                }
            </ImageBackground>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#32CD32',
    },
    logo: {
        width: SCREEN_WIDTH * 0.54,
        height: SCREEN_WIDTH * 0.54 / 2,
        resizeMode: 'contain',
        // marginTop: SCREEN_HEIGHT * 0.2,
        // marginBottom: 10,
    },
});

export default EntranceScreen;
