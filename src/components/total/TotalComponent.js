import React, { Component } from 'react';
import { View, Text } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import mobx, { inject, actions, observer } from 'mobx-react/native';

@inject('cartStore')
@observer
export default class TotalComponent extends Component {
  state = {};

  componentWillMount() {}

  render() {
    const { containerStyle, goodsStyle, totalStyle } = styles;
    const { cartStore } = this.props;
    return (
      <View style={containerStyle}>
        <View style={goodsStyle}>
          <Text style={{ color: '#fff', fontFamily: 'Roboto-Bold', fontSize: 20 }}>Toplam : </Text>
        </View>

        <View style={totalStyle}>
          <Text style={{ color: '#fff', fontFamily: 'Roboto-Bold', fontSize: 20 }}>{cartStore.cartTotal} TL </Text>
        </View>
      </View>
    );
  }
}

const styles = {
  containerStyle: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginLeft: 15,
    marginRight: 15,

    //flexWrap: 'nowrap',
    // backgroundColor: 'cyan',
  },
  goodsStyle: {
    //flexDirection: 'row',
  },
  totalStyle: {
    //flexDirection: 'row',
  },
};
