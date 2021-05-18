import 'react-native-gesture-handler';
import * as React from 'react';
import { LogBox } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import Stacks from "./navigation/Stacks"

export default function App() {
  LogBox.ignoreLogs(['Reanimated 2']);
  return (
    <NavigationContainer>
      <Stacks />
    </NavigationContainer>
  );
}