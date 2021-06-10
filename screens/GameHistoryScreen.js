import React, {useContext} from 'react';
import {View, StyleSheet, Text} from 'react-native';
import {GameHistoryContext} from "../context/GameHistoryContext";

const GameHistoryScreen = () => {
    const [playedGamesHistory, setPlayedGamesHistory] = useContext(GameHistoryContext);


    const renderGameHistoryList = () => {
        return playedGamesHistory.map((game) => {
            return (
                <View styles={styles.listContainer} key={game.id}>
                    <Text>YOU PLAYED AGAINST: {game.opponentName}</Text>
                    <Text>RESULT: {game.game}</Text>
                </View>
            )
        });
    }
    return (
        <View style={styles.screen}>
            <View styles={styles.listContainer}>
                {playedGamesHistory.length>0 && renderGameHistoryList()}
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    listContainer: {
        flex: 1,
        flexDirection: 'row',
        borderColor: 'black',
        borderWidth: 1,
        margin: 15,
        padding: 20,
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center',
    },
    textContainer: {
        flexDirection: 'row',
    },
});

export default GameHistoryScreen;
