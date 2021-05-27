import React from 'react';
import { View, StyleSheet, Image, Dimensions, Text } from 'react-native';
import BodyText from '../components/BodyText';
import { FontAwesome } from '@expo/vector-icons';

import TitleText from '../components/TitleText';

import Colors from '../constants/colors';

const Paper = props => {
  return (
    <View style={styles.iconContainer}>
      <FontAwesome
        name="hand-paper-o"
        size={50}
        color="black"
        style={styles.icon}
      />
      <BodyText>PAPER</BodyText>
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

export default Paper;
