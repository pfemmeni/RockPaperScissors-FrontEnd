import React, {useContext} from 'react';
import {View, StyleSheet, Image, Dimensions, Text} from 'react-native';
import BodyText from '../components/BodyText';
import MainButton from '../components/MainButton';
import TitleText from '../components/TitleText';
import MenuButtons from '../components/MenuButtons';
import Colors from '../constants/colors';
import Loading from '../components/Loading';
import {TokenContext} from "../context/TokenContext";
import {GameContext} from "../context/GameContext";
import * as Fetch from "../fetch/Fetch";

const LoadingPage = ({navigation}) => {
  const token = useContext(TokenContext);
  /*  const game = useContext(GameContext);

   Fetch.getGameStatus(token, game);*/

    return (
        <View style={styles.screen}>
            <TitleText>HI THERE {token.name}</TitleText>
            <TitleText>WAITING FOR AN OPPONENT TO</TitleText>
            <TitleText>JOIN THE GAME</TitleText>
            {/*<MainButton onPress={Fetch.getGameStatus}>getGameStatus</MainButton>*/}
            <Loading />
        </View>
    );
};
const styles = StyleSheet.create({
    screen: {
        flex: 1,
        backgroundColor: Colors.background,
        paddingVertical: 10,
        alignItems: 'center',
        justifyContent: 'center',
    },
});


export default LoadingPage;
