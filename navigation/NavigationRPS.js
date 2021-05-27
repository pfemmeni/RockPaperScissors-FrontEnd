import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import LandingScreen from '../screens/LandingScreen';
import HomeScreen from '../screens/HomeScreen';
import MakeMoveScreen from '../screens/MakeMoveScreen';
import LoadingPage from '../screens/LoadingPage';
import GameListScreen from '../screens/GameListScreen';

const Stack = createStackNavigator();

function NavigationRPS() {
  return (
    //<NavigationContainer>
    <Stack.Navigator initialRouteName="Landing">
      <Stack.Screen name="Landing" component={LandingScreen} />
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="MakeMove" component={MakeMoveScreen} />
      <Stack.Screen name="Loading" component={LoadingPage} />
    </Stack.Navigator>
    //</NavigationContainer>
  );
}

const Tab = createBottomTabNavigator();

function NavigationTabRPS() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Home" component={NavigationRPS} />
        <Tab.Screen name="GameList" component={GameListScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

export default NavigationTabRPS;
