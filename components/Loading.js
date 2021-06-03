import React from 'react';
import { View, StyleSheet, } from 'react-native';
import BodyText from './text/BodyText';
import { FontAwesome } from '@expo/vector-icons';

const Loading = props => {
    return (
        <View style={styles.iconContainer}>

                <View style={{ alignItems: 'center' }}>
                    <FontAwesome
                        name="spinner"
                        size={150}
                        color="black"
                        style={styles.icon}
                    />
                    <BodyText>LOADING</BodyText>
                </View>

        </View>
    );
};

const styles = StyleSheet.create({
    iconContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    icon: {
        padding: 4,
    },
});

export default Loading;
