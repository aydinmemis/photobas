import React from 'react';
import PropTypes from 'prop-types';
import { View, Text, TouchableOpacity, ImageBackground, StyleSheet } from 'react-native';

import LinearGradient from 'react-native-linear-gradient';

import styles from './styles';

const CategoriesListItems = ({
  onPress, category, ImageUrl, itemWidth,
}) => (
  <TouchableOpacity delayPressIn={70} activeOpacity={0.8} onPress={onPress}>
    <View style={styles.viewStyle}>
      <ImageBackground style={[{ width: itemWidth }, styles.image]} source={{ uri: ImageUrl }}>
        <View style={[{ width: itemWidth }, styles.categoryTextWrapper]}>
          <Text style={[{ width: itemWidth }, styles.text]}>{category}</Text>
        </View>
      </ImageBackground>
    </View>
  </TouchableOpacity>
);

CategoriesListItems.propTypes = {
  onPress: PropTypes.func,
  category: PropTypes.string,
  ImageUrl: PropTypes.string,
  itemWidth: PropTypes.number,
};

export default CategoriesListItems;
