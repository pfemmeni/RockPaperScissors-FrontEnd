import React, {useContext, useEffect} from 'react';
import {View, StyleSheet, Text} from 'react-native';
import {GameHistoryContext} from "../context/GameHistoryContext";
import * as Fetch from "../fetch/Fetch";
import {TokenContext} from "../context/TokenContext";
import GameHistoryList from "../components/GameHistoryList";

const GameHistoryScreen = () => {
    const [playedGamesHistory, setPlayedGamesHistory] = useContext(GameHistoryContext);
    const token = useContext(TokenContext)

    useEffect(() => {
        Fetch.getGamesHistoryFromServer(token, setPlayedGamesHistory
        );
    }, []);

    const renderGameHistoryList = () => {
        return playedGamesHistory.map((game) => {
            return (
                <GameHistoryList key={game.id}
                          game={game}
                />
            )
        })
    }
    return (
        <View style={styles.screen}>
            <View>
                {playedGamesHistory ? renderGameHistoryList() : <Text>No played games yet...  </Text>}
            </View>
        </View>
    );
};

/*   const renderGameHistoryList = () => {
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
*/
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
