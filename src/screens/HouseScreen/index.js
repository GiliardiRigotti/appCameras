import { create } from 'eslint/lib/rules/*';
import React, { useEffect, useState } from 'react';
import { View, StyleSheet, FlatList, Text, Button, TouchableOpacity, SafeAreaView, StatusBar, ImageBackground } from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import api from '../../services/api';
import { styles } from './styles';

export function Casa() {
  const [cameras, setCameras] = useState([])
  useEffect(() => {
    async function fetchCameras() {
      const { data } = await api.get('casa');
      setCameras(data);
    }
    fetchCameras();
  }, [])
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar hidden={true} />
      <ImageBackground source={require('../../img/back.jpg')} style={styles.image}>
        <FlatList style={styles.flatstyle}
          data={cameras}
          renderItem={({ item }) => (
            <View>
              <TouchableOpacity style={styles.botaos}
                title={item.title} onPress={() => {
                  navigation.navigate('View', { url: item.url, title: item.title });
                }} >
                <MaterialCommunityIcons style={styles.iconcam} name="video" color="white" size={20} />
                <Text style={styles.text}>{item.title}</Text>
              </TouchableOpacity>
            </View>
          )}
        />
        <View>
          <Text style={styles.textfooter}>© 2021 Todos direitos reservados</Text>
        </View>
      </ImageBackground>

    </SafeAreaView>
  );
}