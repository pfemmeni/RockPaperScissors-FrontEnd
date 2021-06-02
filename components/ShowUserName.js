import React, {useEffect, createContext, useContext, useState} from 'react';
import {View, StyleSheet, Text} from 'react-native';
import BodyText from './BodyText';

export const ShowUserName = () => {
    const game = useContext(GameContext)
    return (
        <BodyText>{!!game ? game.name : "No Game"}</BodyText>
    )
}
export const ShowOpponentName = () => {
    const game = useContext(GameContext)
    return (
        <BodyText>{!!game ? game.opponentName : "No Game"}</BodyText>
    )
}
