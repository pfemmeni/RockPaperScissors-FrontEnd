import React, {useContext, useState} from 'react';
import {StyleSheet, View,} from 'react-native';
import {GameContext} from "../context/GameContext";
import LoadingPage from "../components/LoadingPage";
import Colors from "../constants/colors";

const ResultScreen = ({navigation}) => {
    const [game, setGame] = useContext(GameContext);


    return (
        <View style={styles.screen}>
            {game.game === "ACTIVE" && <LoadingPage />}
            {game.game ==="WIN" && navigation.navigate("Win")}
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
