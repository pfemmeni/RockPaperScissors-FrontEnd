
import React, {useContext, useEffect, useState} from 'react';
import {View, StyleSheet, FlatList, ScrollView} from 'react-native';
import BodyText from '../components/text/BodyText';
import MainButton from '../components/MainButton';
import {TokenContext} from '../context/TokenContext';
import {GameContext} from "../context/GameContext";
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
                onJoinClicked={(token, gameId, setGame) => {
                    Fetch.joinGameOnServer(token, gameId, setGame)
                    navigation.navigate("MakeMove")}}
                />
            )
        });
    }
    return (
        <View style={styles.screen}>
            <View>
                {gameList && renderGameList()}
            </View>
{/*

            <BodyText>Kommer att komma en lista här</BodyText>
            <FlatList data={props.gameListData} renderItem={renderGameList}
                      keyExtractor={(gameItem, index) => gameItem.id} style={{width: '100%'}}/>
*/}


        </View>
    );
};

const styles = StyleSheet.create({
    screen: {
        flex: 1,
       // alignItems: 'center',
        justifyContent: 'center',
    },
});

export default GameListScreen;

/*

{gameList}

const [gameList, setGameList] = useState([]);

setGameList = fetchGamesFromServer();
const renderGameList = () => {};



{/* <FlatList data={listOfOpenGames} keyExtractor={(gameList, index) => gameList.id} data={gameList} renderItem={renderGameList}/>
                 <FlatList keyExtractor={(listItem, index) => listItem.id} data={} renderItem={renderGameList} numColumns={2} />


            <GameList gameListData={listOfOpenGames} keyExtractor={(gameId, index) => game.id} renderItem={renderGameList} />


 */


