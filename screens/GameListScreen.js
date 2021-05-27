import React, { useState } from 'react';
import { View, StyleSheet, FlatList, ScrollView } from 'react-native';
import BodyText from '../components/BodyText';
import MainButton from '../components/MainButton';

const GameListScreen = props => {
  const [gameList, setGameList] = useState([]);
  return (
    <View style={styles.screen}>
      <BodyText>Kommer att komma en lista här</BodyText>
      <MainButton>Joina ett spel</MainButton>
      {/* <FlatList keyExtractor={(listItem, index) => listItem.id} data={} renderItem={renderGameList} numColumns={2} /> */}
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default GameListScreen;
