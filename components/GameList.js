import React, {useContext} from "react";
import {FlatList, Text, TouchableOpacity, View} from "react-native";
import BodyText from "./text/BodyText";
import * as Fetch from '../fetch/Fetch';
import MainButton from "./MainButton";
import {TokenContext} from "../context/TokenContext";
import {GameContext} from "../context/GameContext";

const GameList = (game, {navigation}) => {
    const token = useContext(TokenContext);
    //const [game, setGame] = useContext(GameContext);

    const opponentName= game.opponentName.length ===0 ? "Anonymouse" : game.opponentName

    const joinGame =()=>{
        Fetch.joinGameOnServer(token, game, setGame)
        navigation.navigate("MakeMove")
    }

    return (
        <View style={{flexDirection: 'row'}}>
            <TouchableOpacity onSelectGame={() => joinGame}>
                <Text>{opponentName}</Text>
                <MainButton>JOIN</MainButton>
            </TouchableOpacity>
        </View>
    )

}
export default GameList;
