import React from 'react';
import { View, Text } from 'react-native';
import TotalComp from '../total/TotalComponent';

const BasketComponent = () => {
  const { basketContainerStyle, bagsTextStyle, priceTextStyle } = styles;
  return (

    <View style={basketContainerStyle}>

      <TotalComp />
    </View>
  );
};

const styles = {
  basketContainerStyle: {
    flex: 0.5,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: '#cccc',
    backgroundColor: '#fff',
    borderBottomWidth: 0.8,
    borderTopWidth: 0.8,
    padding: 15,

    // marginTop: 10,
  },
  bagsTextStyle: {
    fontSize: 12,
  },
  priceTextStyle: {
    fontSize: 12,
  },
};

export default BasketComponent;
