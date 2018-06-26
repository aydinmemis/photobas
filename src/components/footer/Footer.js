import React from 'react';
import PropTypes from 'prop-types';
import { View, Text, TouchableOpacity } from 'react-native';

const Footer = ({ btnYeniUrunEkle, btnSiparisiTamamla }) => {
  const {
    containerStyle, buttonContainerStyle, closeButtonStyle, checkoutButtonStyle,
  } = styles;

  return (
    <View style={containerStyle}>
      <View style={buttonContainerStyle}>
        <TouchableOpacity onPress={btnYeniUrunEkle}>
          <View style={closeButtonStyle}>
            <Text
              style={{
                color: '#fff',
                fontSize: 14,
                fontWeight: 'bold',
                fontFamily: 'Roboto-Bold',
              }}
            >
              Yeni Ürün Ekle
            </Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={btnSiparisiTamamla}>
          <View style={checkoutButtonStyle}>
            <Text
              style={{
                color: '#fff',
                fontSize: 14,
                fontWeight: 'bold',
                fontFamily: 'Roboto-Bold',
              }}
            >
              Siparişi Tamamla
            </Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = {
  containerStyle: {
    flex: 1,
    paddingRight: 15,
    paddingLeft: 15,
    borderTopWidth: 1,
    // borderColor: '#e2e2e2',
  },
  buttonContainerStyle: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingTop: 15,
  },
  closeButtonStyle: {
    backgroundColor: '#ffa500',
    padding: 10,

    paddingRight: 10,
    paddingLeft: 10,
    // borderRadius: 100,
  },
  checkoutButtonStyle: {
    backgroundColor: '#00BCD1', // #1BDDCD //#00BCD1
    padding: 10,

    paddingRight: 50,
    paddingLeft: 50,
    // borderRadius: 100,
  },
};

Footer.propTypes = {
  btnYeniUrunEkle: PropTypes.func,
  btnSiparisiTamamla: PropTypes.func,
};
export default Footer;
