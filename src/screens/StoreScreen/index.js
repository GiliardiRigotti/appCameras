import React, {useEffect, useState} from 'react';
import { View, StyleSheet, FlatList, TouchableOpacity, Button } from 'react-native';
import api from '../../services/api';

export function Loja({navigation}){
  const [cameras, setCameras] = useState([])
  useEffect(()=>{
    async function fetchCameras(){
      const {data} = await api.get('Loja');
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
                  <Button title={item.title} onPress={()=>{
                    navigation.navigate('View', {url:item.url, title:item.title});
                  }}/>
                </TouchableOpacity>
              </View>
            )}
          />
      </View>
      );
}