import React, { useState, useEffect, createContext } from 'react';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import * as Font from 'expo-font';
import AppLoading from 'expo-app-loading';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';

import Colors from './constants/colors';
import NavigationRPS from './navigation/NavigationRPS';

const TokenContext = createContext('');

const fetchFonts = () => {
  return Font.loadAsync({
    'open-sans': require('./assets/fonts/OpenSans-Regular.ttf'),
    'open-sans-bold': require('./assets/fonts/OpenSans-Bold.ttf'),
  });
};

export default function App() {
  const [dataLoaded, setDataLoaded] = useState(false);
  const [token, setToken] = useState('');

  useEffect(() => {
    fetch("http://localhost:8080/auth/token")
      .then(response => response.text())
      .then(newToken => {
        setToken(newToken);
        console.log('token:', token);
      });
  }, []);

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
  return (
    <TokenContext.Provider value={token}>
      <NavigationRPS />
    </TokenContext.Provider>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },
});
