import React from 'react';
import {
    View,
    Text,
    StyleSheet,
    TouchableOpacity,
    TouchableNativeFeedback,
    Platform,
} from 'react-native';
import Colors from '../constants/colors';

const MainButton = props => {
    let ButtonComponent = TouchableOpacity;

    if (Platform.OS === 'android' && Platform.Version >= 21) {
        ButtonComponent = TouchableNativeFeedback;
    }
    return (
        <View style={styles.buttonContainer}>
            <ButtonComponent activeOpacity={0.6} onPress={props.onPress}>
                <View style={styles.button}>
                    <Text style={styles.buttonText}>HOME</Text>
                </View>
            </ButtonComponent>
            <ButtonComponent activeOpacity={0.6} onPress={props.onPress}>
                <View style={styles.button}>
                    <Text style={styles.buttonText}>GAME</Text>
                </View>
            </ButtonComponent>
            <ButtonComponent activeOpacity={0.6} onPress={props.onPress}>
                <View style={styles.button}>
                    <Text style={styles.buttonText}>GAMES</Text>
                </View>
            </ButtonComponent>
        </View>
    );
};

const styles = StyleSheet.create({
    buttonContainer: {
        flexDirection: 'row',
        backgroundColor: Colors.backgroundColor,
        //overflow: 'hidden',
        marginHorizontal: 10,
        position: 'absolute',
        bottom: 0,
        left: 2,
        right: 2,
        justifyContent: 'center'
    },
    button: {
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: Colors.accent,
        //borderColor: Colors.primary,
        //borderWidth: 1,
        marginHorizontal: 4,
        paddingVertical: 14,
        //paddingHorizontal: 20,
        borderRadius: 20, //25 blir som vår design
        width: '33%',
        height: 50, //80 blir det som vår design, men känns stort?
    },
    buttonText: {
        color: Colors.primary,
        fontFamily: 'open-sans',
        fontSize: 18,
        fontWeight: '600',
        textAlign: 'center',
    },
});

export default MainButton;
