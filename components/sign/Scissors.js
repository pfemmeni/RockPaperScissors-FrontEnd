import React from 'react';
import { View, StyleSheet, TouchableOpacity } from 'react-native';
import BodyText from '../text/BodyText';
import { FontAwesome } from '@expo/vector-icons';

const Scissors = props => {
  return (
    <View style={styles.iconContainer}>
      <TouchableOpacity activeOpacity={0.6} onPress={props.onPress}>
        <View style={{ alignItems: 'center' }}>
          <FontAwesome
            name="hand-scissors-o"
            size={50}
            color="black"
            style={styles.icon}
          />
          <BodyText>SCISSORS</BodyText>
        </View>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  iconContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  icon: {
    padding: 4,
  },
});

export default Scissors;
