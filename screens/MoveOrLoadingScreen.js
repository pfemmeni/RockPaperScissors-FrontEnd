import React, {useState, useEffect, useContext, createContext} from 'react';
import {View, StyleSheet, Image, Dimensions, Text} from 'react-native';
import BodyText from '../components/BodyText';
import {FontAwesome} from '@expo/vector-icons';
import {NavigationContainer} from '@react-navigation/native';

import TitleText from '../components/TitleText';
import {TokenContext} from '../context/TokenContext';
import {GameContext} from '../context/GameContext';
import Colors from '../constants/colors';
import Scissors from '../components/Scissors';
import Paper from '../components/Paper';
import Rock from '../components/Rock';
import MainButton from '../components/MainButton';
import LoadingPage from './LoadingPage';
import MakeMoveScreen from './MakeMoveScreen';
import * as Fetch from "../fetch/Fetch";

const MoveOrLoadingScreen = () => {
    const token = useContext(TokenContext);
    const [game, setGame] = useContext(GameContext);

    if (!game) {
        return null;
    }

    return (
        <View>
            {game.game === "OPEN" && <LoadingPage/>}
            {game.game === "ACTIVE" && <MakeMoveScreen/>}
        </View>
    );
};


export default MoveOrLoadingScreen;
