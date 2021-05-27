import React from 'react';
import { View, StyleSheet, FlatList } from 'react-native';
import BodyText from '../components/BodyText';
import MainButton from '../components/MainButton';

const GameListScreen = props => {
  return (
    <View>
      <BodyText>Kommer att komma en lista här</BodyText>
      <MainButton>Joina ett spel</MainButton>
      <FlatList />
    </View>
  );
};

export default GameListScreen;
