import 'react-native-gesture-handler';
import React from 'react';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import {Loja} from '../screens/StoreScreen';
import {Casa} from '../screens/HouseScreen';
import { StatusBar } from 'react-native';

const Tab = createMaterialTopTabNavigator();

export default function Tabs() {
  return (
    <Tab.Navigator
    tabBarOptions={{
      activeTintColor: 'white',
      style:{
          backgroundColor:'#004d51', marginTop:1,
      },
      indicatorStyle:{
          backgroundColor:'yellow',
      },
      labelStyle:{
          fontSize:14,
          padding:0,
          margin:0,
          color:'white'
      },
    }}>
      <Tab.Screen name="Loja" component={Loja} />
      <Tab.Screen name="Casa" component={Casa} />
    </Tab.Navigator>
  );
}