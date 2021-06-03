import React, {useState, useContext} from 'react';
import {
    View,
    StyleSheet,
    Image,
    Dimensions,
    TextInput,
    ScrollView,
    KeyboardAvoidingView,
    TouchableWithoutFeedback,
    Keyboard,
} from 'react-native';

import BodyText from '../components/text/BodyText';
import MainButton from '../components/MainButton';
import Colors from '../constants/colors';
import {TokenContext} from '../context/TokenContext';
import * as fetch from '../fetch/Fetch';


const LandingScreen = ({navigation}) => {
    const token = useContext(TokenContext);
    const [playerName, setPlayerName] = useState('');

    const sendPlayerNameToServer = () => {
        if (!playerName) {
            return;
        }
        fetch.storeNameInServer(token, playerName)
    }

    const navigateToHomeScreen = () => {
        sendPlayerNameToServer();
        navigation.navigate("Home");
    }


    return (
        <ScrollView>
            <KeyboardAvoidingView behavior="position" keyboardVerticalOffset={30}>
                <TouchableWithoutFeedback
                    onPress={() => {
                        Keyboard.dismiss();
                    }}
                >
                    <View style={styles.screen}>
                        <View style={styles.imageContainer}>
                            <Image
                                source={require('../assets/RPS.jpg')}
                                style={styles.image}
                            />
                        </View>
                        <View style={styles.text}>
                            <BodyText style={styles.bodyText}>
                                This is the worst game ever with the ugliest design made by
                                Agnes and Caroline.
                            </BodyText>
                            <BodyText></BodyText>
                            <BodyText style={styles.bodyText}>
                                This is a game, and this game may be fun, it's up to you to
                                find that out. When you press "start play" you will find the
                                rules of the game.{' '}
                            </BodyText>
                            <BodyText>And remember to have lots of fun.</BodyText>
                        </View>
                        <TextInput
                            style={styles.textInput}
                            placeholder="Enter your name here"
                            blurOnSubmit
                            autoCapitalize="none"
                            autoCorrect={false}
                            value={playerName}
                            onChangeText={text => setPlayerName(text)}
                        />
                        <MainButton
                            onPress={() => navigateToHomeScreen()}>
                            START PLAY
                        </MainButton>
                    </View>
                </TouchableWithoutFeedback>
            </KeyboardAvoidingView>
        </ScrollView>
    );
};

LandingScreen.navigationOptions = {
    headerTitle: 'Welcome',
};

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        backgroundColor: Colors.background,
        alignItems: 'center',
        justifyContent: 'center',
        //paddingVertical: 10,
    },
    imageContainer: {
        width: Dimensions.get('window').width * 0.6,
        height: Dimensions.get('window').width * 0.6,
        marginVertical: 2,
        alignItems: 'center',
    },
    image: {
        width: '100%',
        height: '100%',
    },
    text: {
        alignItems: 'center',
        justifyContent: 'center',
        marginHorizontal: 30,
        marginVertical: 25,
    },
    bodyText: {textAlign: 'center'},
    inputButtonContainer: {
        alignItems: 'center',
        justifyContent: 'flex-end',
        width: '100%',
    },
    textInput: {
        width: '70%',
        height: 54,
        borderColor: Colors.primary,
        borderWidth: 1,
        padding: 10,
        marginVertical: 10,
    },
});

export default LandingScreen;


/*
      <MainButton
              onPress={() => {
                props.navigation.replace('Home');
              }}
            >
              START PLAY
            </MainButton>
replace för att man inte skall komma tillbaka till den sidan igen, annars navigate

//setPlayerName('Anonym')
//navigation.navigate('Home');
 <MainButton onPress={onStartPlayAndGoToHomeScreenHandler} value={enteredNameValue}>
 <View style={styles.inputButtonContainer}>*/
