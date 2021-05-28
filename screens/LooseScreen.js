import React from 'react';
import { View, StyleSheet, Image, Dimensions } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import BodyText from '../components/BodyText';
import MainButton from '../components/MainButton';
import TitleText from '../components/TitleText';
import Colors from '../constants/colors';

const LooseScreen = props => {
  return (
    <View style={styles.screen}>
      <TitleText>BETTER LUCK NEXT TIME</TitleText>
      <TitleText>YOU LOST!!!</TitleText>
      <MainButton>PLAY AGAIN</MainButton>
        <View style={styles.buttonContainer}>
            <MainButton onPress={() => {props.navigation.navigate("Home")} } style={styles.button}>PLAY AGAIN</MainButton>
        </View>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    backgroundColor: Colors.background,
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
    buttonContainer: {
        alignItems: 'center',
    },
    button: {
        height: 20,
        width: 20,
    },
});

export default LooseScreen;
