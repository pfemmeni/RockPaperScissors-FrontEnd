import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {FontAwesome} from "@expo/vector-icons";
import LandingScreen from '../screens/LandingScreen';
import HomeScreen from '../screens/HomeScreen';
import MakeMoveScreen from '../screens/MakeMoveScreen';
import LoadingPage from '../components/LoadingPage';
//import GameListScreen from '../screens/GameListScreen';
import WinnerScreen from '../screens/WinnerScreen';
import LoseScreen from '../screens/LoseScreen';
import DrawScreen from '../screens/DrawScreen';
import Colors from '../constants/colors';
import ResultScreen from "../screens/ResultScreen";
import GameListScreen from "../screens/GameListScreen";

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

const Stack2 = createStackNavigator();

function MakeMoveLooseWinDraw() {
    return (
        <Stack2.Navigator>
            <Stack2.Screen name="MoveOrLoad" component={MoveOrLoadingScreen} />
            <Stack2.Screen name="Loading" component={LoadingPage}/>
            <Stack2.Screen name="MakeMove" component={MakeMoveScreen}/>
            <Stack2.Screen name="Win" component={WinnerScreen}/>
            <Stack2.Screen name="Lose" component={LoseScreen}/>
            <Stack2.Screen name="Draw" component={DrawScreen}/>
        </Stack2.Navigator>);
}


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
/*
const Stack2 = createStackNavigator();

function MakeMoveLooseWinDraw() {
    return (
        <Stack2.Navigator>
            <Stack2.Screen name="Loading" component={LoadingPage}/>
            <Stack2.Screen name="MakeMove" component={MakeMoveScreen}/>
            <Stack2.Screen name="Win" component={WinnerScreen}/>
            <Stack2.Screen name="Loose" component={LoseScreen}/>
            <Stack2.Screen name="Draw" component={DrawScreen}/>
        </Stack2.Navigator>);
}
           <Stack.Screen name="Winner" component={WinnerScreen} />
            <Stack.Screen name="Lost" component={LoseScreen} />
            <Stack.Screen name="Draw" component={DrawScreen}/>*/
