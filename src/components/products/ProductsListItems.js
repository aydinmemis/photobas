import React from 'react';
import PropTypes from 'prop-types';
import { View, TouchableOpacity, Text, ImageBackground, StyleSheet } from 'react-native';

import styles from './styles';

const ProductListItems = ({
  onPress, productName, ImageUrl, description, price, categoryId, productId, itemWidth,
}) => (
  <TouchableOpacity delayPressIn={70} activeOpacity={0.8} onPress={onPress}>
    <View style={styles.container}>
      <View style={styles.imageWrapper}>
        <ImageBackground imageStyle={{ resizeMode: 'cover' }} style={[{ width: itemWidth }, styles.productImage]} source={{ uri: ImageUrl }}>
          <View style={[{ width: itemWidth }, styles.productWrapper]}>
            <Text style={styles.productName}>{productName}</Text>
            <Text style={styles.description}>{description}</Text>
            <Text style={[{ width: itemWidth }, styles.price]}>{`${price} TL`}</Text>
          </View>
        </ImageBackground>
      </View>
    </View>
  </TouchableOpacity>
);

ProductListItems.propTypes = {
  onPress: PropTypes.func,
  productName: PropTypes.string,
  ImageUrl: PropTypes.string,
  description: PropTypes.string,
  price: PropTypes.number,
  categoryId: PropTypes.number,
  productId: PropTypes.number,
  itemWidth: PropTypes.number,
};

export default ProductListItems;
