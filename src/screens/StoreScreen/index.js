import React, { useEffect, useState } from 'react';
import { View, StyleSheet, FlatList, TouchableOpacity, Button, SafeAreaView, Text, StatusBar, ImageBackground } from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import api from '../../services/api';

export function Loja({ navigation }) {
  const [cameras, setCameras] = useState([])
  useEffect(() => {
    async function fetchCameras() {
      const { data } = await api.get('Loja');
      console.log(data);
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
                <MaterialCommunityIcons style={styles.iconcam} name="home" color="white" size={20} />
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

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  botaos: {
    backgroundColor: '#004d51',
    borderRadius: 30,
    width: '90%',
    height: 50,
    resizeMode: 'contain',
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: 20,
    marginTop: 10,
    flexDirection: "row",
  },
  text: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
  flatstyle: {
    marginTop: 30,
  },
  iconcam: {
    marginRight: 10,
  },
  textfooter: {
    fontSize: 15,
    textAlign: 'center',
    padding: 10,
  },
  image: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center"
  },
})
