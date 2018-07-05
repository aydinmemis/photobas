import React, { Component } from 'react';
import { View, Text, StyleSheet, StatusBar, TouchableOpacity, Image, Dimensions, FlatList } from 'react-native';
import { Container } from '../components/container';
import { Header, ProductListItems } from '../components/products';
import { inject, observer } from 'mobx-react/native';

import ProductsInCategory from '../services/Products.json';

const ITEM_WIDTH = Dimensions.get('window').width;


/**
 *TODO:
 * - kategori sayfasından gelen item'in ürün listesi çekilip sayfaya basılacak
 * - sayfa header'inda  kategori başlığı çok uzunsa daha az gösterilecek.. 
 * - sepete ekle butonu'na action verilecek. home sayfasındaki gibi
 * - service'de n ürüne kaç adet resim ekleneceği maksimum adet verilecek o aded miktarınca fotograf eklenecek
 *
 * @export
 * @class ProductScren
 * @extends {Component}
 */
@inject('nav', 'cartStore')
export default class ProductScren extends Component {
  constructor() {
    super();

    this.state = {
      data: ProductsInCategory,
      columns: 2,
    };
  }

  static navigatorStyle = {
    navBarHidden: true, // default olarak gelen navigationBar'ın görünmemesini sağlıyoruz
  };

  goBasket() {
    console.log('sepete git butonuna tıklandı');
  }
  goBack = () => {
    const { nav } = this.props;
    nav.handleChangeRoute('root');
  };

  getProductInCategories() {
    console.log('category çağırılıdı');
  }
  goProductDetail = item => {
    // this.setState({ data: allCategories });
    const { nav } = this.props;
    console.log(this.props);
    nav.handleChangeRoutePropsData('productDetailScreen', item);
  };
  // componentWillMount() {
  //   //const { nav } = this.props;
  //   //getProductInCategories(nav.propsData.categoryId);
  // }
  render() {
    const { data, columns } = this.state;
    const { nav } = this.props;
    //console.log(this.props);
    //console.log(data);
    //const shadowStyle = { shadowOpacity: 0.5, shadowRadius: 20, shadowColor: '#262626' };

    return (
      <Container>
        <StatusBar hidden={true} />
        <Header onPressCart={this.goBasket} onPressBack={this.goBack} title={`${nav.propsData.title} kategorisi`} />
        <View style={[styles.container]}>
          <FlatList
            numColumns={columns}
            data={data}
            onRefresh={this.getProducts}
            refreshing={false}
            keyExtractor={(item, index) => index.toString()}
            renderItem={({ item }) => (
              //home dan gelen bilgilerle değişecek
              <ProductListItems
                itemWidth={(ITEM_WIDTH - 25 * columns) / columns}
                ImageUrl={item.productImageUrl}
                productName={item.productName}
                description={item.description}
                price={item.fiyat}
                categoryId={item.categoryId}
                productId={item.productId}
                onPress={() => this.goProductDetail(item)}
              />
            )}
          />
        </View>
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#eee'
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
