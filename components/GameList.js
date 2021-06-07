import React, {useContext} from "react";
import {Button, Text, TouchableOpacity, View, StyleSheet} from "react-native";
import BodyText from "./text/BodyText";
import * as Fetch from '../fetch/Fetch';
import MainButton from "./MainButton";
import {TokenContext} from "../context/TokenContext";
import {GameContext} from "../context/GameContext";
import TitleText from "./text/TitleText";

const GameList = ({gameToJoin, onJoinClicked}) => {
    const token = useContext(TokenContext);
    const [game, setGame] = useContext(GameContext);


    const joinGame = () => {
        Fetch.joinGameOnServer(token, props.game.id, setGame)
        navigation.navigate("MakeMove")
    }

    return (
        <View>
            <TouchableOpacity>
                <View style={styles.listContainer} onPress={() => onJoinClicked(token, gameToJoin.id, setGame)}>
                    <Text>PLAY AGAINST:</Text>
                    <Text>{!gameToJoin.name ? "Anonymous" : gameToJoin.name}</Text>
                    <View>
                        <Button style={styles.button} title={"Join"} />
                    </View>
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
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    text: {},
    button: {
        width: 10,
        padding: 5,
        height: 10
    },
});
export default GameList;

