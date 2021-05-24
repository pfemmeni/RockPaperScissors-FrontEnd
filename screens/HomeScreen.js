import React from 'react';
import {View, StyleSheet, Image, Dimensions, Text} from 'react-native';
import BodyText from '../components/BodyText';
import MainButton from '../components/MainButton';
import TitleText from '../components/TitleText';
import MenuButtons from '../components/MenuButtons';
import Colors from '../constants/colors';

const HomeScreen = props => {
    return (
        <View style={styles.screen}>
            <TitleText>GAME RULES</TitleText>
            <View style={styles.textContainer}>
                <BodyText style={styles.bodyText}>Lorem Text Bajs ang regler
                    rngioenghgnr ang regler å blaha,flrt ang regler å blahaaa
                    hduifdbgvgv your name rgu ang regler å blablabla</BodyText>
                <BodyText/>
                <BodyText style={styles.bodyText}>
                    Text Bajs ang regler å blahaaa hnerhg rjghnoergrt jrehgirng
                    rngioenghgnr ang regler å blaha bajsg,flrt ang regler å blahaaa
                    hduifdbgvgv your name rgu ang regler å blablabla
                </BodyText>
                <BodyText/>
                <BodyText style={styles.bodyText}>GOOD LUCK!</BodyText>
            </View>
            <MainButton style={styles.buttons}>START NEW GAME</MainButton>
            <Text style={styles.buttons}>---------------------- OR ----------------------</Text>
            {/*<View style={styles.line}></View>*/}
            <MainButton style={styles.buttons}>JOIN OPEN GAME</MainButton>
            <MenuButtons></MenuButtons>
        </View>
    );
}
const styles = StyleSheet.create({
    screen: {
        flex: 1,
        backgroundColor: Colors.background,
        paddingVertical: 10,
        alignItems: 'center',
        justifyContent: 'center',
    },
    container: {},

    textContainer: {
        alignItems: 'center',
        justifyContent: 'center',
        marginHorizontal: 50,
        marginVertical: 35,
    },
    bodyText: {textAlign: 'center'},
    buttons: {
        marginVertical: 20
    },
    line: {
        borderColor: Colors.primary,
        marginVertical: 20,

    },
    menuButtons: {
        alignItems: 'flex-end',
    },
});

export default HomeScreen;
