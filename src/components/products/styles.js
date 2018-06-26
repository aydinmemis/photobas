import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  header: {
    height: 100,
    paddingTop: 15,
    marginLeft: 15,
    marginRight: 15,
    flexDirection: 'column',
    justifyContent: 'space-between',
    marginBottom: 5,
    // elevation: 0.5,
    // shadowOpacity: 0.75,
    // shadowRadius: 5,
    // shadowColor: 'red',
    // shadowOffset: { height: 5, width: 0 },
  },
  headerText: {
    color: '#262626',
    fontSize: 30,

    // fontWeight: '400',

    // marginLeft: 15,
    fontFamily: 'Roboto-Light',
  },
  backgroundImage: {
    width: null,
    height: 90,
  },
  container: {
    position: 'relative',
    justifyContent: 'center',
    margin: 10,
    // elevation: 3,
    backgroundColor: '#fafafa',
    overflow: 'hidden',
    // borderTopLeftRadius: 10,
    // borderTopRightRadius: 10,
    // borderBottomRightRadius: 10,
    // borderBottomLeftRadius: 10,
  },
  imageWrapper: {},
  productImage: {
    height: 200,
  },

  productWrapper: {
    position: 'absolute',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',

    // paddingTop: 100,
    bottom: 0,
    backgroundColor: '#fff',
    //  backgroundColor: 'rgba(0,0,0,0.5)',
  },
  productName: {
    marginLeft: 5,
    color: '#000',
    // color: '#fff',
    fontSize: 14,
    // fontWeight: '700',
    fontFamily: 'Roboto-Light',
  },
  description: {
    marginLeft: 5,
    color: '#000',
    // color: '#fff',
    fontSize: 13,
    // fontWeight: 'bold',
    fontFamily: 'Roboto-Light',
    flexWrap: 'wrap',
  },
  price: {
    alignItems: 'center',
    // backgroundColor: '#fe1b70',

    padding: 5,
    // borderRadius: 100,
    // marginLeft: 5,
    color: '#388de7',
    fontSize: 16,
    // fontWeight: '700',
    fontFamily: 'Roboto-Light',
  },
  backButton: {
    paddingTop: 5,
    justifyContent: 'flex-start',
  },
  headerTitleView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
});
export default styles;
