import React from 'react';
import {View, Text, StyleSheet, Button} from 'react-native';

const EntranceScreen = (navigation) => {

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
