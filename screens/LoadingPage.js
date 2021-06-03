import React, {useContext, useEffect} from 'react';
import {View, StyleSheet,ActivityIndicator,Text} from 'react-native';

import TitleText from '../components/TitleText';

import Colors from '../constants/colors';

import {GameContext} from "../context/GameContext";


const LoadingPage = ({navigation}) => {
    const [game, setGame] = useContext(GameContext);

    return (
        <View style={styles.screen}>
            <TitleText>HI THERE {game.name}</TitleText>
            <TitleText>WAITING FOR AN OPPONENT TO</TitleText>
            <Text>{game.game ==="OPEN" ? "JOIN THE GAME" : "MAKE A MOVE"}</Text>
            <ActivityIndicator size="large" color="#00ff00" />

        </View>
    );
}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        backgroundColor: Colors.background,
        paddingVertical: 10,
        alignItems: 'center',
        justifyContent: 'center',
    },
});


export default LoadingPage;
