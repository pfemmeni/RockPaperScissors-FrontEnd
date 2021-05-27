import React, { useState, useEffect, createContext } from 'react';
import {
  View,
  StyleSheet,
  Image,
  Dimensions,
  TextInput,
  ScrollView,
} from 'react-native';
import BodyText from '../components/BodyText';
import MainButton from '../components/MainButton';
import TitleText from '../components/TitleText';
import Colors from '../constants/colors';

// const TokenContext = createContext('');

const LandingScreen = props => {
  // const [isLoading, setIsLoading] = useState(true);
  // const [token, setToken] = useState('');

  // useEffect(() => {
  //   fetch('http://localhost:8080/auth/token')
  //     .then(response => response.text())
  //     .then(newToken => {
  //       setToken(newToken);
  //       console.log('token:', token);
  //     });
  // }, []);

  return (
    //<TokenContext.Provider value={token}>
    <ScrollView>
      <View style={styles.screen}>
        <View style={styles.imageContainer}>
          <Image source={require('../assets/RPS.jpg')} style={styles.image} />
        </View>
        <TitleText>WELCOME</TitleText>
        <View style={styles.text}>
          <BodyText style={styles.bodyText}>
            This is the worst game ever with the ugliest design made by Agnes
            and Caroline.
          </BodyText>
          <BodyText></BodyText>
          <BodyText style={styles.bodyText}>
            Text Bajs ang regler å blahaaa hnerhg rjghnoergrt jrehgirng
            hduifdbgvgv your name rgu ang regler å blablabla
          </BodyText>
          {/*  <BodyText>{token}</BodyText>*/}
        </View>
        {/* <View style={styles.inputButtonContainer}> */}
        <TextInput style={styles.textInput}>Enter your name here</TextInput>
        <MainButton onPress={() => props.onStartGame()}>START PLAY</MainButton>
      </View>
    </ScrollView>
    // </TokenContext.Provider>
  );
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
