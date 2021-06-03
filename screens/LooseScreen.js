import React, {useContext} from 'react';
import {View, StyleSheet} from 'react-native';

import MainButton from '../components/MainButton';
import TitleText from '../components/text/TitleText';
import Colors from '../constants/colors';
import {FontAwesome} from "@expo/vector-icons";
import {GameContext} from "../context/GameContext";

const LooseScreen = ({navigation}) => {
    const [game, setGame] = useContext(GameContext);

    const gameOverAndNavigateToHome = () => {
        setGame(null)
        navigation.navigate('Home');
    }

    return (
        <View style={styles.screen}>
            <TitleText>BETTER LUCK NEXT TIME</TitleText>
            <TitleText>YOU LOST!!!</TitleText>
            <FontAwesome
                name="thumbs-o-down"
                size={150}
                color="black"
                style={styles.icon}
            />
            <View style={styles.buttonContainer}>
                <MainButton onPress={gameOverAndNavigateToHome}
                            style={styles.button}
                >
                    PLAY AGAIN
                </MainButton>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    screen: {
        backgroundColor: Colors.background,
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    buttonContainer: {
        alignItems: 'center',
    },
    button: {
        height: 20,
        width: 20,
    },
    icon: {
        marginVertical: 30
    }
});

export default LooseScreen;
