import React, { useState, useEffect, createContext, useContext } from 'react';
import {
  View,
  StyleSheet,
  Image,
  Dimensions,
  Input,
  TextInput,
  ScrollView,
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
  Keyboard,
} from 'react-native';

import BodyText from '../components/BodyText';
import MainButton from '../components/MainButton';
import TitleText from '../components/TitleText';
import Colors from '../constants/colors';
import { TokenContext } from '../context/TokenContext';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const LandingScreen = (props, { navigation }) => {
  const token = useContext(TokenContext);
  const [enteredNameValue, setEnteredNameValue] = useState('');
  const [selectedName, setSelectedName] = useState();
  const [confirmed, setConfirmed] = useState(false);

  const setPlayerNameAndNavigateToHome = playerName => {
    fetch('http://localhost:8080/user/name', {
      method: 'POST',
      headers: {
        token: token,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        name: playerName,
      }),
    }).then(response => navigation.navigate('Home'));
  };

  const textInputHandler = inputText => {
    setEnteredNameValue(inputText);
    //console.log('här skall ett webanrop med namnet bli SetName');
  };

  const onStartGameHandler = props => {
    const chosenName = enteredNameValue;
    if (enteredNameValue === '') {
      console.log('vill spela anonym');
      return navigation.navigate('Home');
    }

    setConfirmed(true);
    setSelectedName(chosenName);
    setEnteredNameValue('');
    Keyboard.dismiss();

    //console.log('game started, här skall ett webanrop till servern vara');
  };

  if (confirmed) {
    return navigation.navigate({ routeName: 'Home' });
  }

  return (
    <ScrollView>
      <KeyboardAvoidingView behavior="position" keyboardVerticalOffset={30}>
        <TouchableWithoutFeedback
          onPress={() => {
            Keyboard.dismiss();
          }}
        >
          <View style={styles.screen}>
            <View style={styles.imageContainer}>
              <Image
                source={require('../assets/RPS.jpg')}
                style={styles.image}
              />
            </View>
            <TitleText>WELCOME</TitleText>
            <View style={styles.text}>
              <BodyText style={styles.bodyText}>
                This is the worst game ever with the ugliest design made by
                Agnes and Caroline.
              </BodyText>
              <BodyText></BodyText>
              <BodyText style={styles.bodyText}>
                This is a game, and this game may be fun, it's up to you to find
                that out. When you press "start play" you will find the rules of
                the game.{' '}
              </BodyText>
              <BodyText>And remember to have lots of fun.</BodyText>

              {/*  <BodyText>{token}</BodyText>*/}
            </View>
            {/* <View style={styles.inputButtonContainer}> */}
            <TextInput
              style={styles.textInput}
              placeholder="Enter your name here"
              blurOnSubmit
              autoCapitalize="none"
              onChangeText={textInputHandler}
              autoCorrect={false}
              value={enteredNameValue}
            />
            <MainButton onPress={onStartGameHandler}>START PLAY</MainButton>
          </View>
        </TouchableWithoutFeedback>
      </KeyboardAvoidingView>
    </ScrollView>
  );
};

LandingScreen.navigationOptions = {
  headerTitle: 'Welcome',
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: Colors.background,
    alignItems: 'center',
    justifyContent: 'center',
    //paddingVertical: 10,
  },
  imageContainer: {
    width: Dimensions.get('window').width * 0.6,
    height: Dimensions.get('window').width * 0.6,
    marginVertical: 2,
    alignItems: 'center',
  },
  image: {
    width: '100%',
    height: '100%',
  },
  text: {
    alignItems: 'center',
    justifyContent: 'center',
    marginHorizontal: 30,
    marginVertical: 25,
  },
  bodyText: { textAlign: 'center' },
  inputButtonContainer: {
    alignItems: 'center',
    justifyContent: 'flex-end',
    width: '100%',
  },
  textInput: {
    width: '70%',
    height: 54,
    borderColor: Colors.primary,
    borderWidth: 1,
    padding: 10,
    marginVertical: 10,
  },
});

export default LandingScreen;
