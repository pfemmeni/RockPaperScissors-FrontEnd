import React from 'react';
import { View, StyleSheet } from 'react-native';
import BodyText from '../components/BodyText';
import { FontAwesome } from '@expo/vector-icons';

const Scissors = props => {
  return (
    <View style={styles.iconContainer}>
      <FontAwesome
        name="hand-scissors-o"
        size={50}
        color="black"
        style={styles.icon}
      />
      <BodyText>SCISSORS</BodyText>
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
