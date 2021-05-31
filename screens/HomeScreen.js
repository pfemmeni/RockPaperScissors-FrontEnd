import React from 'react';
import { View, StyleSheet, Image, Dimensions, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import BodyText from '../components/BodyText';
import MainButton from '../components/MainButton';
import TitleText from '../components/TitleText';
import MenuButtons from '../components/MenuButtons';
import Colors from '../constants/colors';

const HomeScreen = props => {
  return (
    <View style={styles.screen}>
        <TitleText>Hi {props.playerName}</TitleText>
      <TitleText>GAME RULES</TitleText>
      <View style={styles.textContainer}>
        <BodyText style={styles.bodyText}>
          In the Game you will choose one of the following symbols:
        </BodyText>
        <BodyText>ROCK - SCISSORS - PAPER</BodyText>

        <BodyText />
        <BodyText style={styles.bodyText}>The Winner will be:</BodyText>
        <BodyText> ROCK wins over SCISSORS</BodyText>
        <BodyText style={styles.bodyText}>SCISSORS wins over PAPER</BodyText>
        <BodyText style={styles.bodyText}> PAPER wins over ROCK</BodyText>
        <BodyText>In case of the same symbol it's a Draw</BodyText>
        <BodyText />
        <BodyText style={styles.bodyText}>GOOD LUCK!</BodyText>
      </View>
      <MainButton
        style={styles.buttons}
        onClick={() => {
          startGameHandler;
        }}
      >
        START NEW GAME
      </MainButton>
      <Text style={styles.buttons}>
        ---------------------- OR ----------------------
      </Text>
      {/*<View style={styles.line}></View>*/}
      <MainButton
        onPress={() => {
          props.navigation.navigate('Games');
        }}
        style={styles.buttons}
      >
        JOIN OPEN GAME
      </MainButton>
      {/*<MenuButtons style={styles.menuButtons}></MenuButtons>*/}
    </View>
  );
};
const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: Colors.background,
    paddingVertical: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  container: {},

  textContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    marginHorizontal: 50,
    marginVertical: 35,
  },
  bodyText: { textAlign: 'center' },
  buttons: {
    marginVertical: 20,
  },
  line: {
    borderColor: Colors.primary,
    marginVertical: 20,
  },
  menuButtons: {
    //alignItems: 'center',
    marginTop: '10%',
    //justifyContent: 'center',
  },
});

export default HomeScreen;
