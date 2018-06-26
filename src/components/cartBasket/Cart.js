import React, { Component } from 'react';
import { Alert, View, Text, FlatList, Image, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { inject, observer } from 'mobx-react/native';

@inject('cartStore')
@observer
export default class Cart extends Component {
  state = {};

  _increment(item) {
    const { cartStore } = this.props;

    cartStore.CartListItemQuantityIncrement(item);
  }
  _decrement(item) {
    //console.log(item);
    const { cartStore } = this.props;
    cartStore.CartListItemQuantityDecrement(item);
  }
  _deleteItem(index) {
    const { cartStore } = this.props;
    cartStore.removeListItem(index);
  }
  render() {
    const { productName, productId, price, quantity, total, images, productImage, index } = this.props.listCart;
    const { containerStyle, lastItemStyle, imageView, viewStyle, cartImages, imageStyle, imageStyleView, textStyle, counterStyle, priceStyle, deleteStyle } = styles;
    return (
      <View style={viewStyle}>
        <View style={containerStyle}>
          <View style={imageView}>
            <Image source={{ uri: productImage }} style={imageStyle} />
          </View>
          <View style={textStyle}>
            <Text style={{ color: '#2e2f30' }}>{productName}</Text>
            <View style={priceStyle}>
              <Text style={{ color: '#fff', fontSize: 14 }}>{total} TL</Text>
            </View>
          </View>
          <View style={lastItemStyle}>
            <View style={{ flexDirection: 'row', alignItems: 'center', flex: 1 }}>
              <TouchableOpacity onPress={() => this._decrement(this.props.listCart)}>
                <View>
                  <Icon name="minus-circle" size={25} color="#ccc" />
                </View>
              </TouchableOpacity>

              <Text style={{ padding: 10 }}>{quantity}</Text>

              <TouchableOpacity onPress={() => this._increment(this.props.listCart)}>
                <View>
                  <Icon name="plus-circle" size={25} color="#ccc" backgroundColor="#fff" />
                </View>
              </TouchableOpacity>
            </View>
            <View style={{ paddingLeft: 10, paddingRight: 15 }}>
              <TouchableOpacity onPress={() => this._deleteItem(index)}>
                <Icon name="trash" size={25} color="#FF0000" />
              </TouchableOpacity>
            </View>
          </View>
        </View>
        <View style={lastItemStyle}>
          <ScrollView horizontal>
            {images.map((item, index) => (
              <TouchableOpacity key={index}>
                <View key={index}>
                  <Image key={index} source={{ uri: item }} style={cartImages} />
                </View>
              </TouchableOpacity>
            ))}
          </ScrollView>
        </View>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  viewStyle: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'flex-start',
    marginLeft: 20,
    // margin: 40,
    marginVertical: 3,

    borderColor: '#e2e2e2',
    backgroundColor: '#fff',
    borderBottomWidth: 1,
    paddingBottom: 10,
  },
  containerStyle: {
    marginTop: 10,
    flexDirection: 'row',
    flex: 1,
    //borderBottomWidth: 1,
    borderColor: '#e2e2e2',
    //padding: 10,
    // paddingLeft: 15,
    backgroundColor: '#fff',
    //marginLeft: 20,
    paddingBottom: 10,
  },
  lastItemStyle: {
    flexDirection: 'column',
    alignItems: 'center',
    flex: 1,
  },
  imageView: {
    flex: 1,
    justifyContent: 'center',
  },
  imageStyle: {
    width: 50,
    height: 50,
    marginRight: 20,
    alignItems: 'center',
    // borderRadius: 20,
  },
  cartImages: {
    width: 40,
    height: 40,
    marginRight: 10,
    borderRadius: 100,
    // alignItems: 'flex-start',
  },
  textStyle: {
    flex: 2,
    justifyContent: 'center',
  },
  priceStyle: {
    backgroundColor: '#4dc187',
    width: 80,
    alignItems: 'flex-start',
    marginTop: 3,
    borderRadius: 3,
  },
  counterStyle: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
});
