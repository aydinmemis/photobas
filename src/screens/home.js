import React, { Component } from 'react';
import { View, StyleSheet, StatusBar, FlatList, AsyncStorage, Dimensions, Alert, YellowBox } from 'react-native';

import { Container } from '../components/container';
import { Header } from '../components/header';

import { CategoriesListItems } from '../components/categories';

import allCategories from '../services/categories.json';



const ITEM_WIDTH = Dimensions.get('window').width;
import { inject, observer } from 'mobx-react/native';


@inject('nav', 'cartStore', 'CategoriesStore')
@observer
export default class HomeScreen extends Component {
    constructor(props) {
        super(props);
        //this.goProducts = this.goProducts.bind(this);
        this.state = {
            data: allCategories,
            columns: 1,
            categoryList: [],

        };

        YellowBox.ignoreWarnings([
            'Warning: componentWillMount is deprecated',
            'Warning: componentWillReceiveProps is deprecated',
        ]);

        this.isCategoryControl();

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

    async isCategoryControl() {

        const { CategoriesStore } = this.props;
        const kategoriCekilmisMi = CategoriesStore.state;
        if (kategoriCekilmisMi != "OK") {
            await CategoriesStore.fetchCategories();
            this.setState({ categoryList: CategoriesStore.categoryList.slice() });
            console.log(this.state.categoryList);
        }

    }

    async componentDidMount() {
        const { CategoriesStore } = this.props;
        const kategoriler = await CategoriesStore.getCategoryList();
        if (kategoriler != null) {
            this.setState({ categoryList: kategoriler });

        }
    }
    render() {

        const { data, columns } = this.state;
        const { cartStore, CategoriesStore } = this.props;
        cartStore.resetCounter();

        //const shadowStyle = { shadowOpacity: 0.5, shadowRadius: 20, shadowColor: '#262626' };

        return (

            <Container>

                <StatusBar hidden={true} />


                <Header headerTitle={'fotoğraf baskı'} onPress={this.goBasket} />
                <View style={[styles.container]}>
                    <FlatList
                        numColumns={columns}
                        data={this.state.categoryList}
                        //  data={data}
                        // onRefresh={this.getCategories}
                        refreshing={false}
                        keyExtractor={(item, index) => index.toString()}
                        //ItemSeparatorComponent={() => <View style={[styles.seperator]} />}
                        renderItem={({ item }) => (
                            <CategoriesListItems
                                itemWidth={(ITEM_WIDTH - 40 * columns) / columns}
                                ImageUrl={item.url}
                                category={item.title}
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
