import React from 'react';
import { View, StyleSheet, Image, Dimensions } from 'react-native';

const ImageRPS = props => {
  return (
    <View style={{ ...styles.imageContainer, ...props.style }}>
      <Image
        source={require('../assets/RPS.jpg')}
        style={{ ...styles.image, ...props.style }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  imageContainer: {
    width: Dimensions.get('window').width * 0.7,
    height: Dimensions.get('window').width * 0.7,
  },
  image: {
    width: '100%',
    height: '100%',
  },
});

export default ImageRPS;
