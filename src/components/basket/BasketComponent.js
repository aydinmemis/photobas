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
    flex: 1,
    flexDirection: 'row',
    // justifyContent: 'center',
    // alignItems: 'center',
    // borderColor: '#e2e2e2',
    backgroundColor: '#262626',
    marginTop: 10,
  },
  bagsTextStyle: {
    fontSize: 12,
  },
  priceTextStyle: {
    fontSize: 12,
  },
};

export default BasketComponent;
