import React from 'react';
import {View, StyleSheet, Image, Dimensions, Text} from 'react-native';
import BodyText from '../components/BodyText';

import TitleText from '../components/TitleText';

import Colors from '../constants/colors';

const MakeMoveScreen = props => {
    return (
        <View style={styles.screen}>
            <Image></Image>
            <View style={styles.textContainer}>
                <TitleText>YOUR OPPONENT</TitleText>
                <TitleText>{/*{opponent.name}*/}</TitleText>
                <TitleText>ENTERED THE GAME</TitleText>
            </View>
            <View style={styles.makeMoveText}>
                <BodyText style={styles.moveText}>IT'S TIME TO MAKE YOUR MOVE</BodyText>
                <BodyText>To make your move press on sign image</BodyText>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        backgroundColor: Colors.background,
        justifyContent: 'flex-start',

    },
    textContainer: {
        alignItems: 'center',
        justifyContent: 'center',
        marginVertical: 10,
        marginTop: 100, //hårdkodat sålänge
    },
    makeMoveText: {
        alignItems: 'center',
        justifyContent: 'center',
        marginVertical: 10,
        marginTop: 60,
    },
    moveText: {fontSize: 19}
});

export default MakeMoveScreen;
