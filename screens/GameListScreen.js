import React, {useContext} from 'react';
import {View, StyleSheet, Text} from 'react-native';

import * as Fetch from "../fetch/Fetch";
import GameList from "../components/GameList";
import {GameListContext} from "../context/GameListContext";

const GameListScreen = ({navigation}) => {
    const [gameList, setGameList] = useContext(GameListContext);


    const joinGame =(token, gameId, setGame)=>{
        Fetch.joinGameOnServer(token, gameId, setGame)
        navigation.navigate("MakeMove")
    }
    const renderGameList = () => {
        return gameList.map((game) => {
            return (
                <GameList key={game.id}
                          gameToJoin={game}
                onJoinClicked={joinGame}
                />
            )
        })
    }
    return (
        <View style={styles.screen}>
            <View>
                {gameList ? renderGameList() : <Text>No games to join yet...  </Text> }
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: 'center',
    },
});

export default GameListScreen;
