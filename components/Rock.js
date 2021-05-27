import React from 'react';
import { View, StyleSheet } from 'react-native';
import BodyText from '../components/BodyText';
import { FontAwesome } from '@expo/vector-icons';

const Rock = props => {
  return (
    <View style={styles.iconContainer} onPress={() => {}}>
      <FontAwesome
        name="hand-rock-o"
        size={50}
        color="black"
        style={styles.icon}
      />
      <BodyText>ROCK</BodyText>
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
