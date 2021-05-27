import React from 'react';
import { View, StyleSheet, Image, Dimensions } from 'react-native';
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
});

export default LooseScreen;
