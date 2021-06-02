import React from 'react';
import {View, Text, StyleSheet, Platform} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createMaterialBottomTabNavigator} from 'react-navigation-material-bottom-tabs';
import {FontAwesome} from "@expo/vector-icons";

import LandingScreen from '../screens/LandingScreen';
import HomeScreen from '../screens/HomeScreen';
import MakeMoveScreen from '../screens/MakeMoveScreen';
import LoadingPage from '../screens/LoadingPage';
import GameListScreen from '../screens/GameListScreen';
import WinnerScreen from '../screens/WinnerScreen';
import LooseScreen from '../screens/LooseScreen';
import DrawScreen from '../screens/DrawScreen';
import Colors from '../constants/colors';
import MoveOrLoadingScreen from "../screens/MoveOrLoadingScreen";

const Stack = createStackNavigator();

function NavigationRPS() {
    return (
        <Stack.Navigator>
            <Stack.Screen name="Welcome" component={LandingScreen}/>
            <Stack.Screen name="Home" component={HomeScreen}/>
            <Stack.Screen name="MoveOrLoad" component={MoveOrLoadingScreen} />
            <Stack.Screen name="MakeMove" component={MakeMoveScreen}/>
            <Stack.Screen name="Loading" component={LoadingPage}/>
            <Stack.Screen name="Games" component={GameListScreen}/>
        </Stack.Navigator>

    );
}

const Stack2 = createStackNavigator

const Tab = createBottomTabNavigator();

function NavigationTabRPS() {
    return (
        <Tab.Navigator screenOptions={({route}) => ({
            tabBarIcon: tabInfo => {
                let iconName;

                if (route.name === "Home") {
                    iconName = "home"
                } else if (route.name === "Game") {
                    iconName = "gamepad"
                } else if (route.name === "Games") {
                    iconName = "list-ul"
                }
                return <FontAwesome
                    name={iconName}
                    size={25}
                    color="black"
                />
            },
        })}
                       tabBarOptions={{activeTintColor: Colors.primaryColor, inactiveTintColor: Colors.greyish}}>
            <Tab.Screen name="Home" component={NavigationRPS}/>
            <Tab.Screen name="Game" component={MakeMoveScreen}/>
            <Tab.Screen name="Games" component={GameListScreen}/>
        </Tab.Navigator>
    );
}

export default NavigationTabRPS;


//tabBarVisible={false}
//<Tab.Screen name="Home" component={NavigationRPS}/>
/*
 /!*</NavigationContainer>*!/
  /!* <NavigationContainer >*!/
 */


/*            <Stack.Screen name="Winner" component={WinnerScreen} />
            <Stack.Screen name="Lost" component={LooseScreen} />
            <Stack.Screen name="Draw" component={DrawScreen}/>*/
