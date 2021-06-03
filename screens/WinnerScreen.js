import React from 'react';
import {
  View,
  StyleSheet
} from 'react-native';


import MainButton from '../components/MainButton';
import TitleText from '../components/text/TitleText';
import Colors from '../constants/colors';
import {FontAwesome} from "@expo/vector-icons";

const WinnerScreen = props => {
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
            onPress={() => {
              props.navigation.navigate('Home');
            }}
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
