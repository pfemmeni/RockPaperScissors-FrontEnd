import React from 'react';
import {
  View,
  StyleSheet,
  Image,
  Dimensions,
  Text,
  ScrollView,
} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import BodyText from '../components/BodyText';
import MainButton from '../components/MainButton';
import TitleText from '../components/TitleText';
import MenuButtons from '../components/MenuButtons';
import Colors from '../constants/colors';

const WinnerScreen = props => {
  return (
    <View style={styles.screen}>
      <TitleText>CONGRATULATIONS</TitleText>
      <TitleText>YOU ARE THE WINNER!!!</TitleText>

      <View style={styles.buttonContainer}>
        <MainButton>PLAY AGAIN</MainButton>
        <View style={styles.buttonContainer}>
          <MainButton onPress={() => {props.navigation.navigate("Home")} } style={styles.button}>PLAY AGAIN</MainButton>
        </View>
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
  textContainer: {
    justifyContent: 'center',
  },
  buttonContainer: {
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
  },
/*  buttonContainer: {
    alignItems: 'center',
  },*/
  button: {
    height: 20,
    width: 20,
  },
});

export default WinnerScreen;
