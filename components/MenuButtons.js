import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  TouchableNativeFeedback,
  Platform,
  Button,
} from 'react-native';
import Colors from '../constants/colors';

const MainButton = props => {
  let ButtonComponent = TouchableOpacity;

  //   if (Platform.OS === 'android' && Platform.Version >= 21) {
  //     ButtonComponent = TouchableNativeFeedback;
  //   }
  return (
    <View style={styles.buttonContainer}>
      <ButtonComponent activeOpacity={0.6} onPress={props.onPress}>
        <View style={styles.button}>
          <Text style={styles.buttonText}>HOME</Text>
        </View>
      </ButtonComponent>
      <ButtonComponent activeOpacity={0.6} onPress={props.onPress}>
        <View style={styles.button}>
          <Text style={styles.buttonText}>GAME</Text>
        </View>
      </ButtonComponent>
      <ButtonComponent activeOpacity={0.6} onPress={props.onPress}>
        <View style={styles.button}>
          <Text style={styles.buttonText}>GAMES</Text>
        </View>
      </ButtonComponent>
    </View>
  );
};

const styles = StyleSheet.create({
  buttonContainer: {
    flexDirection: 'row',
    backgroundColor: Colors.backgroundColor,
    //overflow: 'hidden',
    //marginHorizontal: 1,
    position: 'absolute',
    bottom: 0,
    // left: 2,
    // right: 2,
    //justifyContent: 'space-around',
    //alignItems: 'flex-end',
  },
  button: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Colors.accent,
    //borderColor: Colors.primary,
    //borderWidth: 1,
    marginHorizontal: 14,
    marginLeft: 10,
    paddingVertical: 4,
    //paddingHorizontal: 20,
    borderRadius: 25, //25 blir som vår design
    width: '100%',
    height: 80, //80 blir det som vår design, men känns stort?
  },
  buttonText: {
    color: Colors.primary,
    fontFamily: 'open-sans',
    fontSize: 18,
    fontWeight: '600',
    textAlign: 'center',
  },
});

export default MainButton;
