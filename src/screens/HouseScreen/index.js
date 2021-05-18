import React, {useEffect, useState} from 'react';
import { View, StyleSheet, FlatList, Text, Button, TouchableOpacity } from 'react-native';
import api from '../../services/api';

export function Casa(){
  const [cameras, setCameras] = useState([])
  useEffect(()=>{
    async function fetchCameras(){
      const {data} = await api.get('casa');
      console.log(data);
      setCameras(data);
    }
    fetchCameras();
  },[])
  return( 
      <View>
          <FlatList
            data={cameras}
            renderItem={({item})=>(
              <View>
                <TouchableOpacity>
                  <Button title={item.title}onPress={()=>{
                    navigation.navigate('View', {url:item.url, title:item.title});
                  }}/>
                </TouchableOpacity>
              </View>
            )}
          />
      </View>
      );
}
