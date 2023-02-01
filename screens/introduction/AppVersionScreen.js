import {SafeAreaView} from 'react-navigation';
import {Card} from 'react-native-elements';
import {useEffect, useState} from 'react';
import AsyncStorage from '@react-native-community/async-storage';
import {StyleSheet, Text} from 'react-native';

const AppVersionScreen = () => {

    const [appVersion, setAppVersion] = useState('');

    useEffect(() => {

        try {
            const latestAppVersion = AsyncStorage.getItem('INSTALLED_APP_VERSION');
            console.log(latestAppVersion);
            setAppVersion(latestAppVersion);
        }
        catch (err) {
            console.log('[useEffect] ' + err);
        }
    },[])

    return(
        <SafeAreaView style={styles.container} >
            <Card style={styles.cardContainer} title='버전정보'>
                <Text style={{marginBottom: 10,}}>{`최신 버전 정보 : ${appVersion}`}</Text>
            </Card>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
        container: {
            flex: 1,
            backgroundColor: '#F5FCFF',
        },
        cardContainer: {
            alignItems: 'center',
        }
    })

export default AppVersionScreen
