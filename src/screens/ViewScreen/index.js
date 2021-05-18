import React from 'react';
import {View, StyleSheet, Text} from 'react-native';
import {LivePlayer} from "react-native-live-stream";

export function ViewCamera({navigation, route}){
    const {url, title} = route.params;
    return(
        <View>
            <Text>{title}</Text>
            <LivePlayer source={{uri:url}}
            ref={(ref) => {
                this.player = ref
            }}
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
const styles = StyleSheet.create({
    video: {
      width: 500,
      height:400,
    },
   
  });