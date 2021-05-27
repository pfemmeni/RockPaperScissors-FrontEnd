import React, { useState } from 'react';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import * as Font from 'expo-font';
import AppLoading from 'expo-app-loading';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';

import Colors from './constants/colors';
import NavigationRPS from "./navigation/NavigationRPS";

const fetchFonts = () => {
  return Font.loadAsync({
    'open-sans': require('./assets/fonts/OpenSans-Regular.ttf'),
    'open-sans-bold': require('./assets/fonts/OpenSans-Bold.ttf'),
  });
};

export default function App() {
  const [dataLoaded, setDataLoaded] = useState(false);

  if (!dataLoaded) {
    return (
      <AppLoading
        startAsync={fetchFonts}
        onFinish={() => setDataLoaded(true)}
        onError={err => console.log(err)}
      />
    );
  }
  //const startGameHandler = () => {};

  //let content = <HomeScreen></HomeScreen>;
  //   // <LandingScreen onStartGame={startGameHandler} />;

  //  // if (startGameHandler) {
  //     //content =<MakeMoveScreen></MakeMoveScreen>;
  //     //content =
  //   }
  return <NavigationRPS />;
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },
});
