import React, {useContext} from 'react';
import {View, StyleSheet, ScrollView} from 'react-native';
import BodyText from '../components/text/BodyText';
import TitleText from '../components/text/TitleText';
import Colors from '../constants/colors';
import Scissors from '../components/sign/Scissors';
import Paper from '../components/sign/Paper';
import Rock from '../components/sign/Rock';
import {TokenContext} from '../context/TokenContext';
import {GameContext} from '../context/GameContext';
import LoadingPage from "../components/LoadingPage";
import * as Fetch from "../fetch/Fetch";

const MakeMoveScreen = ({navigation}) => {
    const [game, setGame] = useContext(GameContext);
    const token = useContext(TokenContext);

    const movePressedHandler = (move) => {
        Fetch.sendChosenMoveToServer(move, token, setGame)
        navigation.navigate("Result");
    };

    if (!game) {
        return null;
    }
    return (
        <ScrollView>
            <View style={styles.screen}>
                {game.game === "OPEN" && <LoadingPage/>}
                {game.game === "ACTIVE" &&
                <View >
                    <View style={styles.textContainer}>
                        <TitleText>YOUR OPPONENT</TitleText>
                        <TitleText>{game.opponentName}</TitleText>
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
        </ScrollView>
    )
}


const styles = StyleSheet.create({
    screen: {
        flex: 1,
        backgroundColor: Colors.background,
        alignItems: 'center',

    },
    textContainer: {
        backgroundColor: Colors.background,
        alignItems: 'center',
        justifyContent: 'center',
        marginVertical: 10,
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
        backgroundColor: Colors.background,
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
