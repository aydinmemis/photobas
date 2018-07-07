import React, { Component } from 'react';
import { View, Text, StyleSheet, StatusBar, TouchableOpacity, Image, Dimensions, FlatList } from 'react-native';
import { Container } from '../components/container';
import { Header, CartListItems } from '../components/cartBasket';
import { inject, observer } from 'mobx-react/native';
import BasketContainer from '../components/basket/BasketComponent';
import Footer from '../components/footer/Footer';

const ITEM_WIDTH = Dimensions.get('window').width;

/**
 *TODO:
 * - listedeki her bir ürüne detay linki verilecek ve basıldığında o ürüne eklenen resimler slayt olarak gösterilecek. silme işlemi yapılmayacak
 *
 * @export
 * @class CartBasketScreen
 * @extends {Component}
 */
@inject('nav', 'cartStore', 'addresStore')
@observer
export default class CartBasketScreen extends Component {
  constructor() {
    super();

    this.state = {
      total: '',
    };
  }

  static navigatorStyle = {
    navBarHidden: true, // default olarak gelen navigationBar'ın görünmemesini sağlıyoruz
  };
  componentWillMount() {
    let _total = 0;
    const { cartStore } = this.props;

    cartStore.cartList.forEach(item => {
      _total += parseFloat(item.total, 10);
    });
    this.setState({ total: _total.toFixed(2) });
  }
  btnSiparisiTamamla = () => {
    const { nav } = this.props;

    nav.handleChangeRoute('addressInfoScreen');
    console.log('siparişi tamamla butonuna basıldı');
  };
  btnYeniUrunEkle = () => {
    const { nav } = this.props;
    // console.log('nav');
    nav.handleChangeRoute('root');
  };
  goHome = () => {
    const { nav } = this.props;
    // console.log(nav);
    nav.handleChangeRoute('root');
    console.log('Ana Sayfa butonuna tıklandı');
  };

  render() {
    console.log(this.state.total);
    const { cartStore } = this.props;
    const _cartCount = cartStore.cartCount;

    return (
      <Container>
        <StatusBar hidden={true} />
        <Header headerTitle={'Sepetim'} cartCount={_cartCount} onPress={this.goHome} />
        <CartListItems />
        <BasketContainer />
        <Footer btnYeniUrunEkle={this.btnYeniUrunEkle} btnSiparisiTamamla={this.btnSiparisiTamamla} />
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  txtHome: {
    fontSize: 30,
    color: 'red',
    backgroundColor: '#fff',
    elevation: 3,
  },

  seperator: {
    height: 10,
  },
});
