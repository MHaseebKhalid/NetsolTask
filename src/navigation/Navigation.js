// In App.js in a new project

import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Home,Login } from '../screens';


const Stack = createNativeStackNavigator();
const navOptionHandler = () => ({
    headerShown: false,
  });


export const Navigation=()=> {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Login" component={Login} options={navOptionHandler}/>
        <Stack.Screen name="Home" component={Home} options={navOptionHandler}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}
