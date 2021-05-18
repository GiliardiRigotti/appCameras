import 'react-native-gesture-handler';
import React from 'react';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import {Loja} from '../screens/StoreScreen';
import {Casa} from '../screens/HouseScreen';

const Tab = createMaterialTopTabNavigator();

export default function Tabs() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Loja" component={Loja} />
      <Tab.Screen name="Casa" component={Casa} />
    </Tab.Navigator>
  );
}