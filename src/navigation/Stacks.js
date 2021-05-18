import React from "react";
import { createStackNavigator } from '@react-navigation/stack';
import {ViewCamera} from "../screens/ViewScreen";
import Tabs from "./Tabs";

const Stack = createStackNavigator();

export default function Stacks(){
    return(
        <Stack.Navigator initialRouteName="Tabs" screenOptions={{headerShown: false}}>
             <Stack.Screen name="Tabs" component={Tabs}/>
            <Stack.Screen name="View" component={ViewCamera}/>
        </Stack.Navigator>
    );
}