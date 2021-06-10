import React, {useContext, useState} from 'react';
import {StyleSheet, View,} from 'react-native';
import {GameContext} from "../context/GameContext";
import LoadingPage from "../components/LoadingPage";
import Colors from "../constants/colors";
import WinnerScreen from "./WinnerScreen";
import DrawScreen from "./DrawScreen";
import LoseScreen from "./LoseScreen";
import {GameOverContext} from "../context/GameOverContext";



const ResultScreen = ({navigation}) => {
    const [game, setGame] = useContext(GameContext);
    const [gameOver, setGameOver] = useContext(GameOverContext);


    const gameOverAndNavigateToHome = () => {
        setGameOver(true);
        navigation.navigate('Home');
    }

    return (
        <View style={styles.screen}>
            {game.game === "ACTIVE" && <LoadingPage/>}
            {game.game === "WIN" && <WinnerScreen onGameOver={gameOverAndNavigateToHome}/>}
            {game.game === "DRAW" && <DrawScreen onGameOver={gameOverAndNavigateToHome}/>}
            {game.game === "LOSE" && <LoseScreen onGameOver={gameOverAndNavigateToHome}/>}
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
