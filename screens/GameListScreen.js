import React, {useState, createContext, useContext} from 'react';
import {View, StyleSheet, FlatList, ScrollView} from 'react-native';
import BodyText from '../components/BodyText';
import MainButton from '../components/MainButton';
import {TokenContext} from '../context/TokenContext';
import {GameContext} from "../context/GameContext";

const GameListScreen = props => {
    const token = useContext(TokenContext);
    const [game, setGame] = useContext(GameContext);

    return (
        <View style={styles.screen}>
            <BodyText>Kommer att komma en lista här</BodyText>

            <MainButton>Joina ett spel</MainButton>
            {/*<FlatList keyExtractor={(gameList, index) => gameList.id} data={gameList} renderItem={renderGameList}/>
                 <FlatList keyExtractor={(listItem, index) => listItem.id} data={} renderItem={renderGameList} numColumns={2} /> */}
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

/*
/*    const fetchGamesFromServer = (token) => {
    fetch('http://192.168.50.139/games', {
        method: 'GET',
        headers: {
            token: token,
            'Content-Type': 'application/json',
        }
    })

{gameList}

const [gameList, setGameList] = useState([]);

setGameList = fetchGamesFromServer();
const renderGameList = () => {};

*/

