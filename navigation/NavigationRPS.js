import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {FontAwesome} from "@expo/vector-icons";
import LandingScreen from '../screens/LandingScreen';
import HomeScreen from '../screens/HomeScreen';
import MakeMoveScreen from '../screens/MakeMoveScreen';
import WinnerScreen from '../screens/WinnerScreen';
import LoseScreen from '../screens/LoseScreen';
import DrawScreen from '../screens/DrawScreen';
import ResultScreen from "../screens/ResultScreen";
import GameListScreen from "../screens/GameListScreen";
import Colors from '../constants/colors';
import GameHistoryScreen from "../screens/GameHistoryScreen";

const Stack = createStackNavigator();

function NavigationRPS() {
    return (
        <Stack.Navigator>
            <Stack.Screen name="Welcome" component={LandingScreen}/>
            <Stack.Screen name="Home" component={HomeScreen}/>
            <Stack.Screen name="MakeMove" component={MakeMoveScreen}/>
            <Stack.Screen name="Games" component={GameListScreen}/>
            <Stack.Screen name="Result" component={ResultScreen}/>
            <Stack.Screen name="Win" component={WinnerScreen}/>
            <Stack.Screen name="Lose" component={LoseScreen}/>
            <Stack.Screen name="Draw" component={DrawScreen}/>
        </Stack.Navigator>

    );
}

const Tab = createBottomTabNavigator();

function NavigationTabRPS() {
    return (
        <Tab.Navigator screenOptions={({route}) => ({
            tabBarIcon: tabInfo => {
                let iconName;

                if (route.name === "Home") {
                    iconName = "home"
                } else if (route.name === "Games") {
                    iconName = "gamepad"
                } else if (route.name === "Game History") {
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
            <Tab.Screen name="Games" component={GameListScreen}/>
            <Tab.Screen name="Game History" component={GameHistoryScreen}/>
        </Tab.Navigator>
    );
}

export default NavigationTabRPS;