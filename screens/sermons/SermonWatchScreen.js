import React, {useCallback, useState} from 'react';
import {View, Text, StyleSheet, Alert, SafeAreaView, Button} from 'react-native';
import YoutubePlayer from 'react-native-youtube-iframe';
import {ScreenHeight, ScreenWidth} from '../../helpers';

const SermonWatchScreen = ({route}) => {

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

    const {id} = route.params;

    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <SafeAreaView>
                <View>
                    <YoutubePlayer
                        webViewStyle={{opacity: 0.99}}
                        height={styles.player.height}
                        width={styles.player.width}
                        play={playing}
                        videoId={id}
                        onChangeState={onStateChange}
                    />
                </View>
                <Button title={playing ? "pause" : "play"} onPress={togglePlaying} />
            </SafeAreaView>
        </View>
    );
}

const styles = StyleSheet.create({
    player: {
        width: ScreenWidth*0.8,
        height: ScreenHeight*0.3,
    }
});

export default SermonWatchScreen;
