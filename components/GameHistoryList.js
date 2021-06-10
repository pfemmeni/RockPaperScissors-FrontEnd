import React from "react";
import {Text,  View, StyleSheet} from "react-native";



const GameHistoryList = ({game}) => {
    return (
                <View style={styles.listContainer} >
                    <View style={styles.textContainer}>
                        <Text style={styles.text}>PLAYED AGAINST:</Text>
                        <Text style={styles.text}>{!game.opponentName ? "Anonymous" : game.opponentName}</Text>
                        <Text style={styles.text}>{game.game}</Text>
                    </View>
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
        justifyContent: 'space-around',
        alignItems: 'center',
    },
    textContainer: {
        flexDirection: 'row',
    },
    text: {
        marginRight: 5,
        fontFamily: 'open-sans',
    },
    button: {
        marginRight: 10,
        fontFamily: 'open-sans',
    },
});
export default GameHistoryList;

