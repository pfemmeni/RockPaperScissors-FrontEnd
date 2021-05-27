import React from 'react';
import { View, StyleSheet, Image, Dimensions, Text } from 'react-native';
import BodyText from '../components/BodyText';
import { FontAwesome } from '@expo/vector-icons';

import TitleText from '../components/TitleText';

import Colors from '../constants/colors';
import Scissors from '../components/Scissors';
import Paper from '../components/Paper';
import Rock from '../components/Rock';

const MakeMoveScreen = props => {
  return (
    <View style={styles.screen}>
      <Image></Image>
      <View style={styles.textContainer}>
        <TitleText>YOUR OPPONENT</TitleText>
        <TitleText>{/*{opponent.name}*/}</TitleText>
        <TitleText>ENTERED THE GAME</TitleText>
      </View>
      <View style={styles.makeMoveText}>
        <BodyText style={styles.moveText}>IT'S TIME TO MAKE YOUR MOVE</BodyText>
        <BodyText>To make your move press on sign image</BodyText>
      </View>
      <View style={styles.iconContainer}>
        <Scissors />
      </View>
      <View style={styles.iconContainer}>
        <Paper />
        <Rock />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: Colors.background,
    justifyContent: 'flex-start',
  },
  textContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 10,
    marginTop: 100, //hårdkodat sålänge
  },
  makeMoveText: {
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 10,
    marginTop: 60,
  },
  moveText: { fontSize: 19 },
  iconContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    padding: 20,
  },
});

export default MakeMoveScreen;
