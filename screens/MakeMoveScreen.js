import React from 'react';
import { View, StyleSheet, Image, Dimensions, Text } from 'react-native';
import BodyText from '../components/BodyText';
import { FontAwesome } from '@expo/vector-icons';
import { NavigationContainer } from '@react-navigation/native';
import TitleText from '../components/TitleText';

import Colors from '../constants/colors';
import Scissors from '../components/Scissors';
import Paper from '../components/Paper';
import Rock from '../components/Rock';
import MainButton from '../components/MainButton';
import { useState } from 'react/cjs/react.development';
import WinnerScreen from '../screens/WinnerScreen';

const MakeMoveScreen = props => {
  const [madeMove, setMadeMove] = useState(false);

  //;,setMadeMove(false)

  let playAgainButton;
  if (madeMove) {
    playAgainButton = (
      <View style={styles.buttonContainer}>
        <MainButton
          onPress={() => {
            props.navigation.navigate('Home');
          }}
          style={styles.button}
        >
          PLAY AGAIN
        </MainButton>
      </View>
    );
  }

  const scissorsPressedHandler = ({ navigation }) => {
    setMadeMove(true);
    console.log('pressed Scissors');
    props.navigation.navigate('Winner');
  };
  const rockPressedHandler = ({ navigation }) => {
    setMadeMove(true);
    console.log('pressed Rock');
    props.navigation.navigate('Lost');
  };
  const paperPressedHandler = ({ navigation }) => {
    setMadeMove(true);
    console.log('pressed Paper');
    props.navigation.navigate('Draw');
  };

  return (
    <View style={styles.screen}>
      <Image />
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
        <Scissors onPress={scissorsPressedHandler} />
      </View>
      <View style={styles.iconContainer}>
        <Paper onPress={paperPressedHandler} />
        <Rock onPress={rockPressedHandler} />
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
