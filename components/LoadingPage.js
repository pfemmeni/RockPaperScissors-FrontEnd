import React, {useContext} from 'react';
import {View, StyleSheet, ActivityIndicator, Text, Image, Dimensions} from 'react-native';

import TitleText from './text/TitleText';
import Colors from '../constants/colors';
import {GameContext} from "../context/GameContext";
import BodyText from "./text/BodyText";


const LoadingPage = (props, {navigation}) => {
    const [game, setGame] = useContext(GameContext);

    return (
        <View style={styles.screen}>
            <TitleText>HI THERE {game.name}</TitleText>
            <TitleText>WAITING FOR AN OPPONENT TO</TitleText>
            <Text>{props.text}</Text>
            <View style={styles.spinContainer}>
                <ActivityIndicator size={150} color="#4a148c"/>
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
        paddingVertical: 10,
        alignItems: 'center',
        justifyContent: 'center',
    },
    spinContainer: {
        marginHorizontal: 20,
    },
    imageContainer: {
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
    }
});


export default LoadingPage;
