import React, {useState, useEffect} from 'react';
import {StyleSheet} from 'react-native';
import * as Font from 'expo-font';
import AppLoading from 'expo-app-loading';
import {} from 'react-native-gesture-handler';
import {NavigationContainer} from '@react-navigation/native';
import NavigationRPS from './navigation/NavigationRPS';
import {TokenContext} from './context/TokenContext';
import {GameContext} from './context/GameContext';
import * as Fetch from "./fetch/Fetch";


const fetchFonts = () => {
    return Font.loadAsync({
        'open-sans': require('./assets/fonts/OpenSans-Regular.ttf'),
        'open-sans-bold': require('./assets/fonts/OpenSans-Bold.ttf'),
    });
};

export default function App() {
    const [dataLoaded, setDataLoaded] = useState(false);
    const [token, setToken] = useState('');
    const [game, setGame] = useState(null);

    useEffect(() => {
        Fetch.getNewTokenFromServer(setToken)
    }, []);

    useEffect(() => {
        setInterval(() => {
            console.log("useEffect setInterval", token, game)
            if (game) {
                Fetch.getGameStatusFromServer(token, game => {
                    if (game.error) {
                        setGame(null)
                        return
                    }
                    setGame(game)
                }, error => {
                    setGame(null)
                })
            }
        }, 10000)

    }, [token, game, setGame])


    if (!dataLoaded) {
        return (
            <AppLoading
                startAsync={fetchFonts}
                onFinish={() => setDataLoaded(true)}
                onError={err => console.log(err)}
            />
        );
    }

    return (
        <TokenContext.Provider value={token}>
            <GameContext.Provider value={[game, setGame]}>
                <NavigationContainer>
                    <NavigationRPS/>
                </NavigationContainer>
            </GameContext.Provider>
        </TokenContext.Provider>
    );
}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
    },
});

//const startGameHandler = () => {};
//<GameContext.Provider value={game}>
//</GameContext.Provider>

//let content = <HomeScreen></HomeScreen>;
//   // <LandingScreen onStartGame={startGameHandler} />;

//  // if (startGameHandler) {
//     //content =<MakeMoveScreen></MakeMoveScreen>
//     //content =
//   }

/*   const allValues = {
    token,
    setToken,
    playerName,
    setPlayerName,
    playerMove,
    setPlayerMove,
    opponentName,
    setOpponentName,
    opponentMove,
    setOpponentMove,
<AppContext value={allValues}></AppContext>
  }


  initialRouteName="Landing"*/
