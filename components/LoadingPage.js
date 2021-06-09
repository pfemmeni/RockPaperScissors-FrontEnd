import React, {useContext} from 'react';
import {View, StyleSheet, ActivityIndicator, Text, Image, Dimensions} from 'react-native';

import TitleText from './text/TitleText';
import Colors from '../constants/colors';
import {GameContext} from "../context/GameContext";
import BodyText from "./text/BodyText";


const LoadingPage = () => {
    const [game, setGame] = useContext(GameContext);
    let text = "";
    if(game.game==="ACTIVE"){
        text = "MAKE A MOVE"
    }
    if(game.game ==="OPEN"){
        text = "JOIN THIS GAME"
    }

    return (
        <View style={styles.screen}>
            <TitleText>HI THERE {game.name}</TitleText>
            <TitleText>WAITING FOR AN OPPONENT TO</TitleText>
            <Text style={styles.text}>{text}</Text>
            <View style={styles.spinContainer}>
                <ActivityIndicator size={100} color="#4a148c"/>
            </View>
            <BodyText>Meanwhile you may look at this:</BodyText>
            <Image source={require('../assets/funny2.jpg')} style={styles.image}/>
        </View>
    );
}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        backgroundColor: Colors.background,
        marginTop: 60,
        alignItems: 'center',
        justifyContent: 'center',
    },
    spinContainer: {
        backgroundColor: Colors.background,
        marginHorizontal: 20,
    },
    imageContainer: {
        backgroundColor: Colors.background,
        width: Dimensions.get('window').width * 0.7,
        height: Dimensions.get('window').width * 0.7,
        overflow: 'hidden',
        marginVertical: Dimensions.get('window').height / 30,
        justifyContent: 'center',
        alignItems: 'center',

    },
    image: {
        width: '85%',
        height: '45%',
    },
    text: {
        fontFamily: 'open-sans',
        fontSize: 22,
    }
});


export default LoadingPage;
