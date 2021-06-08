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
import {GameListContext} from "./context/GameListContext";
import {GameOverContext} from "./context/GameOverContext";


const fetchFonts = () => {
    return Font.loadAsync({
        'open-sans': require('./assets/fonts/OpenSans-Regular.ttf'),
        'open-sans-bold': require('./assets/fonts/OpenSans-Bold.ttf'),
    });
};

export default function App() {
    const [dataLoaded, setDataLoaded] = useState(false);
    let [token, setToken] = useState('');
    let [game, setGame] = useState(null);
    const [gameList, setGameList] = useState([]);
    const [gameOver, setGameOver] = useState(false);


    useEffect(() => {
        Fetch.getNewTokenFromServer(setToken)

    }, []);

    useEffect(() => {
        const timer = setInterval (() => {
            console.log("useEffect setInterval---------------", token, game, gameOver)
            if (game) {
                if (gameOver) {
                    setGame(null)
                    setGameOver(false)
                    return
                }
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
        return ()=> {
            clearInterval(timer)
        }
    }, [token, game, gameOver])

    useEffect(() => {
        setInterval(() => {
            Fetch.getJoinableGamesFromServer(token, setGameList);
        }, 10000)
    }, []);


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
                <GameListContext.Provider value={[gameList, setGameList]}>
                    <GameOverContext.Provider value={[gameOver, setGameOver]}>
                        <NavigationContainer>
                            <NavigationRPS/>
                        </NavigationContainer>
                    </GameOverContext.Provider>
                </GameListContext.Provider>
            </GameContext.Provider>
        </TokenContext.Provider>
    );
}

const styles = StyleSheet.create(
    {
        screen: {
            flex: 1,
        }
        ,
    }
);

