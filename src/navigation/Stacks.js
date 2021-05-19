import React from "react";
import { createStackNavigator } from '@react-navigation/stack';
import { ViewCamera } from "../screens/ViewScreen";
import Tabs from "./Tabs";

const Stack = createStackNavigator();

export default function Stacks() {
    return (
        <Stack.Navigator initialRouteName="Câmeras de Segurança" screenOptions={{ headerShown: false,headerTintColor: 'white', headerStyle: { backgroundColor: 'green' },}}>
            <Stack.Screen name="Câmeras de Segurança" component={Tabs} />
            <Stack.Screen name="View" component={ViewCamera} />
        </Stack.Navigator>
    );
}