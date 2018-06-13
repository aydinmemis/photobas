import React from 'react';
import PropTypes from 'prop-types';
import { View, TouchableOpacity, Text, ImageBackground, StyleSheet } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Icon from 'react-native-vector-icons/FontAwesome';
// import Icon from 'react-native-vector-icons/FontAwesome';

const styles = StyleSheet.create({
  box: {
    flex: 1,
    position: 'relative',
    // width: '100%',
    // height: 200,
    // overflow: 'hidden',
    // flexDirection: 'column',
    // borderRadius: 10,
    // backgroundColor: '#262626',
    // elevation: 3,
  },
  imgBox: {
    flex: 1,
  },
  productImage: {
    ...StyleSheet.absoluteFillObject,
  },
  content: {
    // flex: 1,
    // position: 'absolute',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#262626',
    bottom: 0,
    left: 0,
    padding: 20,
  },
  h1: {
    fontSize: 25,
    fontFamily: 'RobotoCondensed-Regular',
    fontWeight: '700',
    color: '#fff',
  },
  p: {
    fontSize: 18,
    fontFamily: 'RobotoCondensed-Regular',
    fontWeight: '400',
    color: '#fff',
  },
  price: {
    // width: 200,
    // alignItems: 'center',
    // padding: 10,
    // borderRadius: 20,
    // backgroundColor: '#F8C83B',
    color: '#F8C83B',
    fontSize: 35,
    fontFamily: 'RobotoCondensed-Regular',
    fontWeight: '700',
  },
  backButton: {
    paddingTop: 20,
    marginHorizontal: 15,
    justifyContent: 'flex-start',
  },
});

const ProductDetail = ({
  productName, ImageUrl, description, price, categoryId, productId, itemWidth, onPressBack,
}) => (
  <View style={{ flex: 1 }}>
    <View style={{ flex: 1 }}>
      <View style={styles.box}>
        <View style={styles.imgBox}>
          <ImageBackground imageStyle={{ resizeMode: 'cover' }} style={styles.productImage} source={{ uri: ImageUrl }}>
            {/* <View
            style={{
              flex: 1,
              flexDirection: 'column',
              alignItems: 'flex-start',
              justifyContent: 'space-between',
              // alignContent: 'center',
              backgroundColor: 'rgba(0,0,0,0.5)',
            }}
          > */}
            <View style={styles.backButton}>
              <TouchableOpacity onPress={onPressBack}>
                <Icon name="long-arrow-left" size={25} color="#fff" />
              </TouchableOpacity>
            </View>
            {/* </View> */}
          </ImageBackground>
        </View>
      </View>
    </View>

    <View style={styles.content}>
      <Text style={styles.h1}>{productName}</Text>
      <Text style={styles.p}>{description}</Text>
      <Text style={styles.price}>{`${price} TL`} </Text>
    </View>
  </View>
);

ProductDetail.propTypes = {
  // onPress: PropTypes.func,
  productName: PropTypes.string,
  ImageUrl: PropTypes.string,
  description: PropTypes.string,
  price: PropTypes.number,
  categoryId: PropTypes.number,
  productId: PropTypes.number,
  itemWidth: PropTypes.number,

  // adet: PropTypes.number,
  onPressBack: PropTypes.func,
};

export default ProductDetail;
