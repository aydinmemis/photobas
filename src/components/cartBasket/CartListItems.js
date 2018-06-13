import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';
import CartItem from './CartItem';

class CartListItems extends Component {
  render() {
    return (
      <View style={styles.container}>
        <CartItem />
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    marginTop: 15,
    flex: 3,
  },
});

export default CartListItems;
