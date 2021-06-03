import React, { useContext} from 'react';
import {View, StyleSheet} from 'react-native';

import {TokenContext} from "../context/TokenContext";
import {GameContext} from '../context/GameContext';
import Colors from '../constants/colors';

import LoadingPage from './LoadingPage';
import MakeMoveScreen from './MakeMoveScreen';
import * as Fetch from "../fetch/Fetch";

const MoveOrLoadingScreen = ({navigation}) => {
    const token = useContext(TokenContext);
    const [game, setGame] = useContext(GameContext);

/*    Fetch.getGameStatus(token, setGame);
*/
    if (!game) {
        return null;
    }

    return (
        <View style={styles.screen}>
            {game.game === "OPEN" && navigation.navigate("Loading")}
            {game.game === "ACTIVE" && navigation.navigate("MakeMove")}
        </View>
    );
};

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        backgroundColor: Colors.background,
        justifyContent: 'flex-start'
    },
});

export default MoveOrLoadingScreen;
