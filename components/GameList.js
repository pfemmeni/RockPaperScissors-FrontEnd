import React, {useContext} from "react";
import {Text, TouchableOpacity, View, StyleSheet} from "react-native";
import * as Fetch from '../fetch/Fetch';

import {TokenContext} from "../context/TokenContext";
import {GameContext} from "../context/GameContext";


const GameList = ({gameToJoin, onJoinClicked}) => {
    const token = useContext(TokenContext);
    const [game, setGame] = useContext(GameContext);

    return (
        <View>
            <TouchableOpacity onPress={() => onJoinClicked(token, gameToJoin.id, setGame)}>
                <View style={styles.listContainer} >
                    <View style={styles.textContainer}>
                        <Text style={styles.text}>PLAY AGAINST:</Text>
                        <Text style={styles.text}>{!gameToJoin.name ? "Anonymous" : gameToJoin.name}</Text>
                    </View>
                    <Text style={styles.button}>JOIN</Text>
                </View>
            </TouchableOpacity>
        </View>
    )
}
const styles = StyleSheet.create({
    listContainer: {
        flex: 1,
        flexDirection: 'row',
        borderColor: 'black',
        borderWidth: 1,
        margin: 15,
        padding: 20,
        borderRadius: 10,
        justifyContent: 'space-around',
        alignItems: 'center',
    },
    textContainer: {
        flexDirection: 'row',
    },
    text: {
        marginRight: 5,
        fontFamily: 'open-sans',
    },
    button: {
        marginRight: 10,
        fontFamily: 'open-sans',
    },
});
export default GameList;

