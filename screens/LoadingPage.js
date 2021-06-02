import React from 'react';
import {View, StyleSheet, Image, Dimensions, Text} from 'react-native';
import BodyText from '../components/BodyText';
import MainButton from '../components/MainButton';
import TitleText from '../components/TitleText';
import MenuButtons from '../components/MenuButtons';
import Colors from '../constants/colors';
import Loading from '../components/Loading';

const LoadingPage = ({navigation}) => {
    return (
        <View style={styles.screen}>
            <TitleText>WAITING FOR AN OPPONENT TO</TitleText>
            <TitleText>JOIN THE GAME</TitleText>
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
