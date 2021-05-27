import React from 'react';
import { View, StyleSheet, TouchableOpacity } from 'react-native';
import BodyText from '../components/BodyText';
import TitleText from '../components/TitleText';
import { FontAwesome } from '@expo/vector-icons';

const Rock = props => {
  return (
    <View style={styles.iconContainer}>
      <TouchableOpacity activeOpacity={0.6} onPress={props.onPress}>
        <View style={{ alignItems: 'center' }}>
          <FontAwesome
            name="hand-rock-o"
            size={50}
            color="black"
            style={styles.icon}
          />
          <BodyText>ROCK</BodyText>
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

export default Rock;
