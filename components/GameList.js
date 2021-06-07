import React, {useContext} from "react";
import {Button, Text, TouchableOpacity, View} from "react-native";
import BodyText from "./text/BodyText";
import * as Fetch from '../fetch/Fetch';
import MainButton from "./MainButton";
import {TokenContext} from "../context/TokenContext";
import {GameContext} from "../context/GameContext";

const GameList = (gameToJoin, onJoinClicked) => {
    const token = useContext(TokenContext);
    const [game, setGame] = useContext(GameContext);


    const joinGame =()=>{
        Fetch.joinGameOnServer(token, props.game.id, setGame)
        navigation.navigate("MakeMove")
    }

    return (
        <View style={{flexDirection: 'row'}}>
            <TouchableOpacity >
                <Text>{!gameToJoin.name? "Anonymous": gameToJoin.name}</Text>
                <Button title={"Join"} onPress={() => onJoinClicked(token, gameToJoin.id, setGame)}/>
            </TouchableOpacity>
        </View>
    )

}
export default GameList;
//onSelectGame={() => joinGame}