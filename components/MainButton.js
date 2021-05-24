import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  TouchableNativeFeedback,
  Platform,
} from 'react-native';
import Colors from '../constants/colors';

const MainButton = props => {
  let ButtonComponent = TouchableOpacity;

  if (Platform.OS === 'android' && Platform.Version >= 21) {
    ButtonComponent = TouchableNativeFeedback;
  }
  return (
    <View style={styles.buttonContainer}>
      <ButtonComponent activeOpacity={0.6} onPress={props.onPress}>
        <View style={styles.button}>
          <Text style={styles.buttonText}>{props.children}</Text>
        </View>
      </ButtonComponent>
    </View>
  );
};

const styles = StyleSheet.create({
  buttonContainer: {
    borderColor: Colors.primary,
    borderWidth: 1,
    //borderRadius: 25,
    overflow: 'hidden',
    width: '70%',
    height: 80,
    justifyContent: 'center',
  },
  button: {
    backgroundColor: Colors.backgroundColor,
    paddingVertical: 12,
    paddingHorizontal: 30,
    borderRadius: 25,
  },
  buttonText: {
    color: Colors.primary,
    fontFamily: 'open-sans',
    fontSize: 24,
    fontWeight: '600',
    textAlign: 'center',
  },
});

export default MainButton;
