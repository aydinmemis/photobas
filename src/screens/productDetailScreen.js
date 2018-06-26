import React, { Component } from 'react';
import { View, Text, StyleSheet, StatusBar, TouchableOpacity, ImageBackground, Dimensions, ScrollView, Image } from 'react-native';
import { Container } from '../components/container';
import { Header, ProductDetail } from '../components/products';
import { inject, observer } from 'mobx-react/native';
import Icon from 'react-native-vector-icons/FontAwesome';
import ImagePicker from 'react-native-image-crop-picker';
import RNFetchBlob from 'react-native-fetch-blob';

//import Ionicons from 'react-native-vector-icons/Ionicons';
//import ProductsInCategory from '../services/Products.json';

const ITEM_WIDTH = Dimensions.get('window').width;

@inject('nav', 'cartStore')
@observer
export default class ProductDetailScreen extends Component {
  constructor() {
    super();

    this.state = {
      //  data: ProductsInCategory,
      columns: 2,
      image: null,
      images: null,
      imagesList: [],
      productName: null,
      productImage: null,
      productId: null,
      price: null,
      quantity: null,
      total: null,
    };
  }

  static navigatorStyle = {
    navBarHidden: true, // default olarak gelen navigationBar'ın görünmemesini sağlıyoruz
  };

  imagesToBase64Convert = () => {
    let fs = RNFetchBlob.fs;
    let Blob = RNFetchBlob.polyfill.Blob;
    // console.log('...');
    //this.setState({ imagesList: null });
    this.state.images.map(image => {
      //  console.log(image);
      let imagePath = image.uri;
      let mime = image.mime;
      let uploadBlob = null;
      //let imagesList = Object.assign({}, this.state.imagesList);
      fs
        .readFile(imagePath, 'base64')
        .then(data => {
          //console.log(`data:${mime};base64, ${data}`);
          let _images = `data:${mime};base64,${data}`;
          //base64 olarak çıktı verir
          // suncuya göderilierken state içinde mime type'da gödnermek gerek ki onageöre sunucda convert işlemi yapılsın
          // console.log(data);

          //imagesList.type = mime;
          //imagesList.image = data;
          // alltaki kod imageslist'teki dizine ekleme yapar
          this.setState({ imagesList: [...this.state.imagesList, _images] });

          //  return Blob.build(data, { type: `${mime};BASE64` });
        })
        .then(blob => {
          // console.log(blob);
          // uploadBlob = blob;
          // return imageRef.put(blob, { contentType: mime });
        })
        // .then(() => {
        //   // uploadBlob.close()
        //   // return imageRef.getDownloadURL()
        // })
        // .then(url => {
        //   console.log(url);

        //   // let obj = {};

        //   // obj['dp'] = url;
        //   // this.setState(obj);
        // })
        .catch(error => {
          console.log(error);
        });
    });
  };
  pickMultiple() {
    ImagePicker.openPicker({
      multiple: true,
      waitAnimationEnd: false,
      includeExif: true,
    })
      .then(images => {
        this.setState({
          images: images.map(i => {
            return {
              uri: i.path,
              width: i.width,
              height: i.height,
              mime: i.mime,
            };
          }),
        });
        // console.log(this.state.images);
        this.imagesToBase64Convert();
      })
      .catch(e => alert(e));
  }

  renderImage(image) {
    return <Image style={{ width: 80, height: 80, margin: 10, resizeMode: 'cover', borderRadius: 15 }} source={image} />;
  }

  renderAsset(image) {
    if (image.mime && image.mime.toLowerCase().indexOf('video/') !== -1) {
      return null; // this.renderVideo(image); // böyle bir video işleme yok
    }

    return this.renderImage(image);
  }
  goBasket() {
    console.log('sepete git butonuna tıklandı');
  }
  goBack = () => {
    const { nav } = this.props;
    nav.handleChangeRoute('productScreen');
    console.log('geri tuşuna basıldı');
  };
  componentDidMount() {
    const { nav } = this.props;
    this.setState({
      productName: nav.propsData.productName,
      productId: nav.propsData.id,
      productImage: nav.propsData.productImageUrl,
      price: nav.propsData.fiyat,
      total: 20,
    });
  }
  // componentWillMount() {
  //   this.setState({ image: null, imagesList: null });
  // }


  getCategories() { }
  // goProduct = item => {
  //   // this.setState({ data: allCategories });
  //   const { nav } = this.props;
  //   console.log(this.props);
  //   console.log('go product butonuna tıklandı');
  // };
  addCartListItem() {
    const { cartStore, nav } = this.props;
    cartStore.addCartListItem(this.state.productName, this.state.productImage, this.state.productId, this.state.price, cartStore.counter, this.state.total);
    let _lastIndex = cartStore.cartLastIndex;
    let _lastItem = cartStore.cartList.slice(_lastIndex);

    cartStore.addImagesItem(_lastItem, this.state.imagesList);

    nav.handleChangeRoute('cartBasketScreen');
    //    cartStore.resetCounter();
    /**
     * TODO:
     * sepete gidilecek
     * counter'i 2sn sonra sıfırlar
     */
    // setTimeout(() => {
    //   cartStore.resetCounter();
    // }, 2000);
  }
  render() {
    const { columns } = this.state;

    const { nav, cartStore } = this.props;

    //const { cartList } = this.props.store;

    //console.log(cartStore.counter);
    //console.log(data);
    //const shadowStyle = { shadowOpacity: 0.5, shadowRadius: 20, shadowColor: '#262626' };
    const imageUrl = 'https://guzelresimler.info/content/photos/5970/bi/profil-resimleri_35_20120519061929.jpg';
    return (
      <Container>
        <StatusBar hidden={true} />
        {/* <Header onPressCart={this.goBasket} onPressBack={this.goBack} title={nav.propsData.productName} />
       */}
        <View style={[styles.container]}>
          <ProductDetail
            itemWidth={ITEM_WIDTH}
            ImageUrl={nav.propsData.productImageUrl}
            productName={nav.propsData.productName}
            description={nav.propsData.description}
            price={nav.propsData.fiyat}
            categoryId={nav.propsData.categoryId}
            productId={nav.propsData.productId}
            onPressBack={this.goBack}
          //adet={2}
          />
        </View>
        <View
          style={{
            backgroundColor: '#fff',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <ScrollView horizontal={true}>
            {/* {this.state.image ? this.renderAsset(this.state.image) : null} */}
            {this.state.images ? this.state.images.map(i => <View key={i.uri}>{this.renderAsset(i)}</View>) : null}
          </ScrollView>
        </View>

        <TouchableOpacity
          onPress={this.pickMultiple.bind(this)}
          style={{
            // width: 200,
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: '#ffa500',
            // borderRadius: 45,
            //borderWidth: 1,
            //borderColor: '#fff',
            // marginHorizontal: 10,
            // marginTop: 5,
            //elevation: 3,
            // marginBottom: 5,
          }}
        >
          {/* <Icon name="image" size={30} color="#262626" style={{ marginLeft: 10 }} /> */}
          <Text
            style={{
              color: '#262626',
              fontSize: 25,
              fontFamily: 'Roboto-Bold',
              //fontWeight: '400',
              textAlign: 'center',
              padding: 10,
            }}
          >
            Resim Seç
          </Text>
        </TouchableOpacity>
        {this.state.images ? (
          <View>
            <View style={styles.adetWiew}>
              {/* <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
                <Text style={{ color: 'white' }}> Adet</Text>
              </View> */}
              <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                <TouchableOpacity onPress={() => cartStore.decrement()}>
                  <Icon name="minus" size={25} color="#262626" style={{ marginLeft: 50 }} />
                </TouchableOpacity>
                <Text style={styles.increment}>{cartStore.counter}</Text>
                <TouchableOpacity onPress={() => cartStore.increment()}>
                  <Icon name="plus" size={25} color="#262626" style={{ marginRight: 50 }} />
                </TouchableOpacity>
              </View>
            </View>

            <TouchableOpacity
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'center',
                backgroundColor: '#00BCD1',
                // borderRadius: 45,
                // borderWidth: 1,
                // borderColor: '#fe1b70',
                // marginHorizontal: 10,
                elevation: 3,
                marginBottom: 15,
              }}
              onPress={this.addCartListItem.bind(this)}
            >
              <Text
                style={{
                  color: '#fff',
                  fontSize: 25,
                  fontFamily: 'Roboto-Bold',
                  // fontWeight: '700',
                  textAlign: 'center',
                  padding: 10,
                }}
              >
                Sepete Ekle
              </Text>
            </TouchableOpacity>
          </View>
        ) : null}
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    //backgroundColor: 'cyan',
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
  button: {
    backgroundColor: 'blue',
    marginBottom: 10,
  },
  text: {
    color: 'white',
    fontSize: 20,
    textAlign: 'center',
  },
  increment: {
    color: '#262626',
    backgroundColor: '#fff',
    fontSize: 40,
    fontFamily: 'RobotoCondensed-Regular',
    fontWeight: '700',
    textAlign: 'center',

    paddingRight: 20,
    paddingLeft: 20,
    //    borderRadius: 1,
  },
  adetWiew: {
    flexDirection: 'column',
    // justifyContent: 'center',
    //backgroundColor: 'lightgray',
    // alignItems: 'center',
    margin: 10,
    //height: 50,
  },
});
