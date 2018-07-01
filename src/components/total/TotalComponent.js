import React, { Component } from 'react';
import { View, Text } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import mobx, { inject, actions, observer } from 'mobx-react/native';
/**
 *TODO:
 *   kargo fiyat bilgisi service'den gelecek
 * @export
 * @class TotalComponent
 * @extends {Component}
 */
@inject('cartStore')
@observer
export default class TotalComponent extends Component {
  state = {};

  componentWillMount() { }

  render() {
    const { containerStyle, goodsStyle, totalStyle } = styles;
    const { cartStore } = this.props;
    return (
      <View style={containerStyle}>

        <View style={goodsStyle}>
          <Text style={{ color: '#fff', fontFamily: 'Roboto-Bold', fontSize: 14, paddingLeft: 15 }}>Sipariş Ücreti : </Text>
          <Text style={{ color: '#fff', fontFamily: 'Roboto-Bold', fontSize: 14, paddingRight: 15 }}>{cartStore.cartTotal} TL </Text>
        </View>

        <View style={goodsStyle}>
          <Text style={{ color: '#fff', fontFamily: 'Roboto-Bold', fontSize: 14, paddingLeft: 15 }}>Kargo Ücreti   : </Text>
          <Text style={{ color: '#fff', fontFamily: 'Roboto-Bold', fontSize: 14, paddingRight: 15 }}>-- TL </Text>
        </View>


        <View style={goodsStyle}>
          <Text style={{ color: '#fff', fontFamily: 'Roboto-Bold', fontSize: 14, paddingLeft: 15 }}>Toplam (KDV Dahil) : </Text>
          <Text style={{ color: '#fff', fontFamily: 'Roboto-Bold', fontSize: 14, paddingRight: 15 }}>{cartStore.cartTotal} TL </Text>
        </View>

      </View >
    );
  }
}

const styles = {
  containerStyle: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-around',
    //alignItems: 'center',
    marginLeft: 15,
    marginRight: 15,

    //flexWrap: 'nowrap',
    // backgroundColor: 'cyan',
  },
  goodsStyle: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',

  },
  totalStyle: {
    //flexDirection: 'row',
  },
};
