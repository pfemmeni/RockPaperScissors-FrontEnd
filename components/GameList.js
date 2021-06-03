import React from "react";
import {FlatList, TouchableOpacity, View} from "react-native";
import BodyText from "./text/BodyText";
import * as Fetch from '../fetch/Fetch';
import MainButton from "./MainButton";

const GameList = (props, {navigation}) => {
    const renderGameList = gameData => {
        return (
            <View style={{flexDirection: 'row'}}>
                <TouchableOpacity onSelectGame={() => navigation.navigate("MakeMove")}>
                    <BodyText>{props.opponentName}</BodyText>
                    <MainButton>JOIN</MainButton>
                </TouchableOpacity>
            </View>
        )
    }

    return (
        <View>
            <FlatList data={props.gameListData} renderItem={renderGameList} keyExtractor={(gameItem, index) => gameItem.id} style={{ width: '100%' }} />
        </View>
    )
}
export default GameList;
