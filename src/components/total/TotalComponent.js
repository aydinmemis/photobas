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
          <Text style={{ color: '#2f3640', fontFamily: 'Roboto-Light', fontSize: 14, paddingLeft: 5 }}>Ara Toplam </Text>
          <Text style={{ color: '#4A4A4A', fontFamily: 'Roboto-Light', fontSize: 14, paddingRight: 5 }}>{cartStore.cartTotal} TL </Text>
        </View>

        <View style={goodsStyle}>
          <Text style={{ color: '#2f3640', fontFamily: 'Roboto-Light', fontSize: 14, paddingLeft: 5 }}>Kargo  </Text>
          <Text style={{ color: '#4A4A4A', fontFamily: 'Roboto-Light', fontSize: 14, paddingRight: 5 }}>-- TL </Text>
        </View>


        <View style={goodsStyle}>
          <Text style={{ color: '#2f3640', fontFamily: 'Roboto-Light', fontSize: 14, paddingLeft: 5 }}>Toplam   </Text>
          <Text style={{ color: '#262626', fontFamily: 'Roboto-Light', fontSize: 14, paddingRight: 5 }}>{cartStore.cartTotal} TL </Text>
        </View>

      </View>
    );
  }
}

const styles = {
  containerStyle: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'flex-start',
    //alignItems: 'center',
    marginLeft: 5,
    marginRight: 5,

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
