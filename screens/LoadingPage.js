import React, {useContext, useEffect} from 'react';
import {View, StyleSheet,ActivityIndicator,Text} from 'react-native';

import TitleText from '../components/TitleText';

import Colors from '../constants/colors';

import {GameContext} from "../context/GameContext";


const LoadingPage = ({navigation}) => {
    const [game, setGame] = useContext(GameContext);
    let waitingForJoinOrMakeMove = game.game ==="OPEN" ? "JOIN THE GAME" : "MAKE A MOVE"

return (
        <View style={styles.screen}>
            <TitleText>HI THERE {game.name}</TitleText>
            <TitleText>WAITING FOR AN OPPONENT TO</TitleText>
            <Text>"JOIN THE GAME"</Text>
            <View>
                <ActivityIndicator size="large" color="#00ff00" />
            </View>


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
