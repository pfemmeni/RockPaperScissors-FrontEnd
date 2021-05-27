import React from 'react';
import { View, StyleSheet, Image, Dimensions, Text } from 'react-native';
import BodyText from '../components/BodyText';
import { FontAwesome } from '@expo/vector-icons';

import TitleText from '../components/TitleText';

import Colors from '../constants/colors';
import Scissors from '../components/Scissors';
import Paper from '../components/Paper';
import Rock from '../components/Rock';
import MainButton from '../components/MainButton';
import { useState } from 'react/cjs/react.development';

const MakeMoveScreen = props => {
  const [madeMove, setMadeMove] = useState(false);

  if (madeMove) {
    playAgainButton;
    setMadeMove(false);
  }

  const playAgainButton = () => {
    return (
      <View style={styles.buttonContainer}>
        <MainButton style={styles.button}>PLAY AGAIN</MainButton>
      </View>
    );
  };

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
        <Scissors
          onPress={() => {
            madeMove(true), console.log('pressed Scissors');
          }}
        />
      </View>
      <View style={styles.iconContainer}>
        <Paper
          onPress={() => {
            madeMove(true), console.log('pressed PAPER');
          }}
        />
        <Rock
          onPress={() => {
            madeMove(true), console.log('pressed RoCK');
          }}
        />
      </View>
      {playAgainButton}
      {/*       <View style={styles.buttonContainer}>
        <MainButton style={styles.button}>PLAY AGAIN</MainButton>
      </View> */}
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
    marginBottom: 60,
  },
  moveText: { fontSize: 19 },
  iconContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    padding: 20,
  },
  buttonContainer: {
    alignItems: 'center',
  },
  button: {
    height: 20,
    width: 20,
  },
});

export default MakeMoveScreen;
