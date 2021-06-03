import React, {useState, useContext, createContext} from 'react';
import {View, StyleSheet, Image, Dimensions, Text} from 'react-native';
import BodyText from '../components/BodyText';
import TitleText from '../components/TitleText';
import Colors from '../constants/colors';
import Scissors from '../components/Scissors';
import Paper from '../components/Paper';
import Rock from '../components/Rock';
import {TokenContext} from '../context/TokenContext';
import {GameContext} from '../context/GameContext';
import LoadingPage from "./LoadingPage";
import * as Fetch from "../fetch/Fetch";

const MakeMoveScreen = ({navigation}) => {
        const [madeMove, setMadeMove] = useState(false);
        const [game, setGame] = useContext(GameContext);
        const token = useContext(TokenContext);


        const movePressedHandler = (move) => {
            Fetch.sendChosenMoveToServer(move, token,setGame)
            navigation.navigate("Loading");
        };

        if (!game) {
            return null;
        }
        return (
            <View style={styles.screen}>
                {game.game === "OPEN" && <LoadingPage/>}
                {game.game === "ACTIVE" &&
                <View style={styles.screen}>
                    <View style={styles.textContainer}>
                        <TitleText>YOUR OPPONENT</TitleText>
                        <TitleText >{game.opponentName}</TitleText>
                        <TitleText>ENTERED THE GAME</TitleText>
                    </View>
                    <View style={styles.makeMoveText}>
                        <BodyText style={styles.moveText}>IT'S TIME TO MAKE YOUR MOVE</BodyText>
                        <BodyText>To make your move press on sign image</BodyText>
                    </View>
                    <View style={styles.iconContainer}>
                        <Scissors onPress={() => movePressedHandler("SCISSORS")}/>
                    </View>
                    <View style={styles.iconContainer}>
                        <Paper onPress={() => movePressedHandler("PAPER")}/>
                        <Rock onPress={() => movePressedHandler("ROCK")}/>
                    </View>
                </View>
                }
            </View>
        )

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
        marginBottom: 60,
    },
    moveText: {fontSize: 19},
    iconContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        padding: 20,
    },
    buttonContainer: {
        alignItems: 'center',
    },
    button: {
        height: 20,
        width: 20,
    },
});

export default MakeMoveScreen;
