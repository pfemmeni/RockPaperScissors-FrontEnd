import React, {useContext, useState} from 'react';
import {View,} from 'react-native';
import {GameContext} from "../context/GameContext";
import LoadingPage from "../components/LoadingPage";

const ResultScreen = ({navigation}) => {
    const [game, setGame] = useContext(GameContext);
    return (
        <View>
            {game.game === "ACTIVE" && <LoadingPage text={"MAKE A MOVE"}/>}
            {game.game ==="WIN" && navigation.navigate("Win")}
            {game.game ==="DRAW" && navigation.navigate("Draw")}
            {game.game ==="LOSE" && navigation.navigate("Loose")}
        </View>

    )
}
export default ResultScreen;