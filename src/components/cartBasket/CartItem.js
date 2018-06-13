import React, { Component } from 'react';
import { Alert, View, Text, Image, StyleSheet, TouchableOpacity, ScrollView, Dimensions } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

import { inject, observer, Observer } from 'mobx-react/native';

const { height, width } = Dimensions.get('window');

@inject('nav', 'cartStore')
@observer
class CartItem extends Component {
  _increment(item) {
    const { cartStore } = this.props;

    cartStore.CartListItemQuantityIncrement(item);
    //this.setState({ refresh: !this.state.refresh });
  }
  _decrement(item) {
    const { cartStore } = this.props;
    cartStore.CartListItemQuantityDecrement(item);
  }
  _deleteItem(index) {
    const { cartStore } = this.props;
    Alert.alert(
      'Dikkat',
      'Ürünü silmek istediğinize emin misiniz ?',
      [{ text: 'Vazgeç', onPress: () => console.log('Cancel Pressed'), style: 'cancel' }, { text: 'Evet', onPress: () => cartStore.removeListItem(index) }],
      { cancelable: false },
    );
    // this.setState({ refresh: !this.state.refresh });
  }

  render() {
    const { cartStore } = this.props;
    const { containerStyle, lastItemStyle, imageView, viewStyle, cartImages, imageStyle, imageStyleView, textStyle, counterStyle, priceStyle, deleteStyle } = styles;

    // return <FlatList data={_cartListData} renderItem={({ item }) => <Observer>{() => <Cart listCart={item} />}</Observer>} keyExtractor={(item, index) => index.toString()} />;
    return (
      <ScrollView>
        {!cartStore.cartList.length ? <NoCart /> : null}

        <View style={styles.cartView}>
          {cartStore.cartList.map((item, i) => {
            return (
              <View key={i} style={viewStyle}>
                <View style={containerStyle}>
                  <View style={imageView}>
                    <Image source={{ uri: item.productImage }} style={imageStyle} />
                  </View>
                  <View style={textStyle}>
                    <Text style={{ color: '#2e2f30' }}>{item.productName}</Text>
                    <View style={priceStyle}>
                      <Text style={{ color: '#2e2f30', fontSize: 14 }}>{item.total} TL</Text>
                    </View>
                  </View>
                  <View style={lastItemStyle}>
                    <View style={{ flexDirection: 'row', alignItems: 'center', flex: 1, marginRight: 15 }}>
                      <TouchableOpacity onPress={() => this._decrement(item)}>
                        <View>
                          <Icon name="minus-square" size={25} color="#ccc" />
                        </View>
                      </TouchableOpacity>
                      <View style={{ backgroundColor: '#fff', width: 25, height: 25, borderRadius: 5, justifyContent: 'center', alignItems: 'center' }}>
                        <Text style={{ color: '#262626' }}>{item.quantity}</Text>
                      </View>
                      <TouchableOpacity onPress={() => this._increment(item)}>
                        <View>
                          <Icon name="plus-square" size={25} color="#ccc" backgroundColor="#fff" />
                        </View>
                      </TouchableOpacity>
                    </View>
                    <View style={{ paddingLeft: 10, paddingRight: 25, marginTop: 15 }}>
                      <TouchableOpacity onPress={() => this._deleteItem(item.index)}>
                        <Icon name="trash" size={25} color="#262626" />
                      </TouchableOpacity>
                    </View>
                  </View>
                </View>
                <View style={lastItemStyle}>
                  <Text> {item.images.length - 1} adet resim eklendi</Text>
                  {/* alltaki kod seçilen resimleri gösterir ama çok resimde programıkapatıyor onun için kullanmadım*/}
                  {/* <ScrollView horizontal>
                    {item.images.map((item, index) => (
                      <TouchableOpacity key={index}>
                        <View key={index}>
                          <Image key={index} source={{ uri: item }} style={cartImages} />
                        </View>
                      </TouchableOpacity>
                    ))}
                  </ScrollView> */}
                </View>
              </View>
            );
          })}
        </View>
      </ScrollView>
    );
  }
}

const NoCart = () => (
  <View style={styles.noCart}>
    <Text style={styles.noCartText}>Sepetiniz Boş</Text>
  </View>
);

const styles = StyleSheet.create({
  cartView: {
    backgroundColor: '#F7F7F7',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    //marginBottom: 15,
    // margin: 40,
    marginVertical: 10,
    elevation: 5,
    overflow: 'hidden',
    //borderRadius: 10,
    // borderWidth: 1,
    //borderColor: '#4dc187',
  },
  viewStyle: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'flex-start',
    // marginLeft: 15,
    // margin: 40,
    //marginVertical: 3,
    //marginRight:5 ,
    borderColor: '#e2e2e2',
    //backgroundColor: '#fff',
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
    // backgroundColor: '#fff',
    marginLeft: 15,
    paddingBottom: 10,
  },
  lastItemStyle: {
    flexDirection: 'column',
    alignItems: 'center',
    flex: 1,
    marginLeft: 15,
  },
  imageView: {
    flex: 1,
    justifyContent: 'center',
  },
  imageStyle: {
    width: 50,
    height: 50,
    //marginRight: 20,
    alignItems: 'center',
    borderRadius: 5,
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
    //backgroundColor: '#4dc187',
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
  noCart: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: height / 2.5,
  },
  noCartText: {
    fontSize: 22,
    color: '#156e9a',
  },
});
export default CartItem;
