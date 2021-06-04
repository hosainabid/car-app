import React from 'react';
import {View, Text, ImageBackground} from 'react-native';
import StyledButton from "../StyledButton";
import styles from './styles';

const CarItem = (props) => {

  // const { name, tagline, taglineCTA, image } = props.car;

  return (
    <View style={styles.carContainer}>
      <ImageBackground
        source={require('../../assets/images/ModelX.jpeg')}
        style={styles.image}
      />

      <View style={styles.titles}>
        <Text style={styles.title}>model s</Text>
        <Text style={styles.subtitle}>
          xx
          {' '}
          <Text style={styles.subtitleCTA}>
            xx
          </Text>
        </Text>
      </View>
    </View>
  );
};

export default CarItem;
