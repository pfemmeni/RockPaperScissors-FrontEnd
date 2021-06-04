import React, {useContext, useState} from 'react';
import {StyleSheet, View,} from 'react-native';
import {GameContext} from "../context/GameContext";
import LoadingPage from "../components/LoadingPage";
import Colors from "../constants/colors";

const ResultScreen = ({navigation}) => {
    const [game, setGame] = useContext(GameContext);

    const gameOverAndNavigateToHome = () => {
       // setGame(null)
        console.log("----------------GAME FUCKING OVER--------")
        navigation.navigate('Home');
    }

    return (
        <View style={styles.screen}>
            {game.game === "ACTIVE" && <LoadingPage text={"MAKE A MOVE"}/>}
            {game.game ==="WIN" && navigation.navigate("Win", gameOverAndNavigateToHome)}
            {game.game ==="DRAW" && navigation.navigate("Draw")}
            {game.game ==="LOSE" && navigation.navigate("Lose")}
        </View>

    )
}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        backgroundColor: Colors.background,
        paddingVertical: 10,
        marginHorizontal: 10,
        alignItems: 'center',
        justifyContent: 'center',
    },
});

export default ResultScreen;
