import * as React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import LandingScreen from '../screens/LandingScreen';
import HomeScreen from '../screens/HomeScreen';
import MakeMoveScreen from '../screens/MakeMoveScreen';
import LoadingPage from '../screens/LoadingPage';
import GameListScreen from '../screens/GameListScreen';
import WinnerScreen from '../screens/WinnerScreen';
import LooseScreen from '../screens/LooseScreen';
import DrawScreen from '../screens/DrawScreen';

const Stack = createStackNavigator();

function NavigationRPS() {
  return (
    //<NavigationContainer>initialRouteName="Landing"
    <Stack.Navigator>
      <Stack.Screen name="Landing" component={LandingScreen} />
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="MakeMove" component={MakeMoveScreen} />
      <Stack.Screen name="Loading" component={LoadingPage} />
      <Stack.Screen name="Games" component={GameListScreen} />
      <Stack.Screen name="Winner" component={WinnerScreen} />
      <Stack.Screen name="Lost" component={LooseScreen} />
      <Stack.Screen name="Draw" component={DrawScreen} />
    </Stack.Navigator>
    //</NavigationContainer>
  );
}

const Tab = createBottomTabNavigator();

function NavigationTabRPS() {
  return (
    // <NavigationContainer>
      <Tab.Navigator style={styles.tabNavigator}>
        <Tab.Screen name="Home" component={NavigationRPS} />
        <Tab.Screen name="Game" component={MakeMoveScreen} />
        <Tab.Screen name="Games" component={GameListScreen} />
      </Tab.Navigator>
    // </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  tabNavigator: {
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center',
  },
});

export default NavigationTabRPS;
