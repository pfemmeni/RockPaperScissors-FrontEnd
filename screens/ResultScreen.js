import React, {useContext, useState} from 'react';
import {StyleSheet, View,} from 'react-native';
import {GameContext} from "../context/GameContext";
import LoadingPage from "../components/LoadingPage";
import Colors from "../constants/colors";
import WinnerScreen from "./WinnerScreen";
import DrawScreen from "./DrawScreen";
import LoseScreen from "./LoseScreen";
import {GameOverContext} from "../context/GameOverContext";
import {GameHistoryContext} from "../context/GameHistoryContext";

const ResultScreen = ({navigation}) => {
    const [game, setGame] = useContext(GameContext);
    const [playedGamesHistory, setPlayedGamesHistory] = useContext(GameHistoryContext);
    const [gameOver, setGameOver] = useContext(GameOverContext);

    const gameOverAndNavigateToHome = () => {
        //setPlayedGamesHistory({...,game})
        playedGamesHistory.push(game)
        setGameOver(true);
        console.log("played games", playedGamesHistory)

        navigation.navigate('Home');
    }

    return (
        <View style={styles.screen}>
            {game.game === "ACTIVE" && <LoadingPage/>}
            {game.game ==="WIN" && <WinnerScreen onGameOver={gameOverAndNavigateToHome}/>}
            {game.game ==="DRAW" && <DrawScreen  onGameOver={gameOverAndNavigateToHome}/>}
            {game.game ==="LOSE" && <LoseScreen  onGameOver={gameOverAndNavigateToHome}/>}
        </View>

    )
}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        backgroundColor: Colors.background,
        // paddingVertical: 10,
        // marginHorizontal: 10,
        alignItems: 'center',
        justifyContent: 'center',
    },
});

export default ResultScreen;
