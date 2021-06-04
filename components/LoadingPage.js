import React, {useContext} from 'react';
import {View, StyleSheet, ActivityIndicator, Text} from 'react-native';

import TitleText from './text/TitleText';
import Colors from '../constants/colors';
import {GameContext} from "../context/GameContext";


const LoadingPage = (props, {navigation}) => {
    const [game, setGame] = useContext(GameContext);

    return (
        <View style={styles.screen}>
            <TitleText>HI THERE {game.name}</TitleText>
            <TitleText>WAITING FOR AN OPPONENT TO</TitleText>
            <Text>{props.text}</Text>
            <ActivityIndicator size={200} color="#00ff00"/>
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
