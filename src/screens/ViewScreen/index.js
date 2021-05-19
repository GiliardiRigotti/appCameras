import React,{useEffect} from 'react';
import { View, StyleSheet, Text, BackHandler, StatusBar } from 'react-native';
import { LivePlayer } from "react-native-live-stream";
import Orientation from 'react-native-orientation';
import 'react-native-gesture-handler';
import { styles } from './styles';

export function ViewCamera({ navigation, route }) {
    const { url, title } = route.params;
    useEffect(() => {
        const backAction = async () => {
            await Orientation.lockToPortrait();
            navigation.navigate('Câmeras de Segurança')
        };
          BackHandler.addEventListener(
            "hardwareBackPress",
            backAction
          );
        async function init(){
            await Orientation.lockToLandscape();
        }
        init()
    }, []);
    return (
        <View style={styles.background}>
            <StatusBar hidden={true} />
            <LivePlayer source={{ uri: url }}
                style={styles.video}
                paused={false}
                muted={false}
                bufferTime={300}
                maxBufferTime={1000}
                resizeMode={"contain"}
            />
        </View>
    );
}
