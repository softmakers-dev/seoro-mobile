import React, {useCallback, useState} from 'react';
import {View, Text, StyleSheet, SafeAreaView, Button, Alert} from 'react-native';
import YoutubePlayer from 'react-native-youtube-iframe';

const data = [
    {
        seq: 1,
        id: 'IkxviSSN4NM'
    },
    {
        seq: 2,
        id: 'vmy7rDOPiRY'
    },
    {
        seq: 3,
        id: 'WCHQ_snpInc'
    }
];

const SermonsScreen = () => {

    const [playing, setPlaying] = useState(false);

    const onStateChange = useCallback((state) => {
        if (state === "ended") {
            setPlaying(false);
            Alert.alert("video has finished playing!");
        }
    }, []);

    const togglePlaying = useCallback(() => {
        setPlaying((prev) => !prev);
    }, []);

    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <SafeAreaView>
                <View>
                    <YoutubePlayer
                        webViewStyle={{opacity: 0.99}}
                        height={500}
                        play={playing}
                        videoId={data[0].id}
                        onChangeState={onStateChange}
                    />
                </View>
                <Button title={playing ? "pause" : "play"} onPress={togglePlaying} />
            </SafeAreaView>
        </View>
    );
}

const styles = StyleSheet.create({});

export default SermonsScreen;
