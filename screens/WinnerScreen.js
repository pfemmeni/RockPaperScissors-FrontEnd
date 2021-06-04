import React from 'react';
import {
  View,
  StyleSheet
} from 'react-native';


import MainButton from '../components/MainButton';
import TitleText from '../components/text/TitleText';
import Colors from '../constants/colors';
import {FontAwesome} from "@expo/vector-icons";
import {GameContext} from "../context/GameContext";

const WinnerScreen = ({navigation}) => {
    const gameOverAndNavigateToHome = () => {
        navigation.navigate('Home');
    }

  return (
    <View style={styles.screen}>
      <TitleText>CONGRATULATIONS</TitleText>
      <TitleText>YOU ARE THE WINNER!!!</TitleText>
      <FontAwesome
          name="trophy"
          size={200}
          color="gold"
          style={styles.icon}
      />
      <View style={styles.buttonContainer}>
          <MainButton
            onPress={() => {gameOverAndNavigateToHome}}
            style={styles.button}
          >
            PLAY AGAIN
          </MainButton>
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
    alignItems: 'center'
  },
  button: {
    height: 20,
    width: 20,
  },
  icon: {
    marginVertical: 30
  }
});

export default WinnerScreen;
