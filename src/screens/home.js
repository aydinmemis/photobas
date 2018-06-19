import React, { Component } from 'react';
import { View, Text, StyleSheet, StatusBar, FlatList, AsyncStorage, TouchableOpacity, Image, Dimensions, Alert } from 'react-native';

import { Container } from '../components/container';
import { Header } from '../components/header';
//import CategoryListItem from '../components/categories/CategoryListItem';
import { CategoriesListItems } from '../components/categories';

import allCategories from '../services/categories.json';

import { getCategoriesFromServer } from '../services/getCategories';
import constants from '../config/constants';

const ITEM_WIDTH = Dimensions.get('window').width;
import { inject, observer } from 'mobx-react/native';
//import categoriesStore from '../stores/categoriesStore';
@inject('nav', 'cartStore', 'CategoriesStore')
@observer
export default class HomeScreen extends Component {
  constructor() {
    super();
    //this.goProducts = this.goProducts.bind(this);
    this.state = {
      data: allCategories,
      columns: 1,
      categoryList: [],
    };
  }

  static navigatorStyle = {
    navBarHidden: true, // default olarak gelen navigationBar'ın görünmemesini sağlıyoruz
  };

  goBasket = () => {
    const { nav, cartStore } = this.props;

    let sepetDolumu = cartStore.cartList.length ? 1 : null;
    if (sepetDolumu == null) {
      Alert.alert('Bilgi', 'Sepetiniz Boş');
    } else {
      nav.handleChangeRoute('cartBasketScreen');
    }
  };
  goCategory = item => {
    // this.props.navigator.push({
    //   screen: 'photo.ProductScreen',
    //   passProps: { item: item },
    //   animated: true, // does the push have transition animation or does it happen immediately (optional)
    //   animationType: 'slide-horizontal', // 'fade' (for both) / 'slide-horizontal' (for android) does the push have different transition animation (optional)
    //   backButtonTitle: undefined, // override the back button title (optional)
    //   backButtonHidden: false, // hide the back button altogether (optional)
    //   navigatorStyle: { navBarHidden: true },
    // });
    const { nav } = this.props;
    nav.handleChangeRoutePropsData('productScreen', item);
  };

  componentDidMount() {
    // if (CategoriesStore.veriVarmi !== true) {
    //   //   //storage bak ve categori listesi çekilip çekilmediğine bak
    //   //   // true  değil ise veriyi çek
    //   this.getCategories();
    // }
    //this.setState({ data: allCategories });
    //console.log(this.state.data);
  }
  getCategories = () => {
    getCategoriesFromServer()
      .then(categories => {
        this.setState({ categoryList: categories });
        console.log(this.state.categoryList);
      })
      .catch(err => {
        this.setState({ categoryList: [] });
        console.error(err);
      });
    // this.setState({ data: allCategories });
  };
  render() {
    const { data, columns } = this.state;
    const { cartStore } = this.props;
    cartStore.resetCounter();
    //const shadowStyle = { shadowOpacity: 0.5, shadowRadius: 20, shadowColor: '#262626' };

    return (
      <Container>
        <StatusBar hidden={true} />
        <Header headerTitle={'fotoğraf baskı'} onPress={this.goBasket} />

        <View style={[styles.container]}>
          <FlatList
            numColumns={columns}
            data={data}
            onRefresh={this.getCategories}
            refreshing={false}
            keyExtractor={(item, index) => index.toString()}
            //ItemSeparatorComponent={() => <View style={[styles.seperator]} />}
            renderItem={({ item }) => (
              <CategoriesListItems
                itemWidth={(ITEM_WIDTH - 10 * columns) / columns}
                ImageUrl={item.categoriyImageSrc}
                category={item.categoryName}
                onPress={() => this.goCategory(item)}
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
    backgroundColor: '#fff',
    //marginVertical: 10,
    //marginHorizontal: 15,
  },

  seperator: {
    height: 15,
  },
});
