import React, {useEffect} from 'react';
import {View, Text, StyleSheet, Button} from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';
import {CurrentAppVersion} from '../../helpers';
import Orientation from 'react-native-orientation-locker';

const EntranceScreen = ({navigation}) => {

    const _navigatePage = () => {
        try {
            AsyncStorage.setItem('INSTALLED_APP_VERSION', CurrentAppVersion);
            AsyncStorage.setItem('DIS_TIMER', '1');

            navigation.navigate('Main');
        } catch (err) {
            console.log('_navigatePage', err);
        }
    };

    useEffect(() => {
        Orientation.lockToPortrait();
        setTimeout(() => {
            _navigatePage();
        }, 1000);
    }, [])

    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text>Home Screen</Text>
            <Button
                title="Go to Main"
                onPress={() => navigation.navigate('Main')}
            />
        </View>
    )
}

const styles = StyleSheet.create({});

export default EntranceScreen;
