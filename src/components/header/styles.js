import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  header: {
    height: 60,
    paddingTop: 30,
    marginLeft: 20,
    marginRight: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    // borderBottomWidth: 1,
    // borderBottomColor: '#262626',

    // elevation: 0.5,
    // shadowOpacity: 0.75,
    // shadowRadius: 5,
    // shadowColor: 'red',
    // shadowOffset: { height: 5, width: 0 },
  },
  headerText: {
    color: '#262626',
    fontSize: 35,
    // fontWeight: '400',

    // marginLeft: 15,
    fontFamily: 'Roboto-Bold',

    // marginBottom: 10,
  },
  headerDescription: {
    color: '#ccc',
    paddingTop: 10,
    fontSize: 20,
    // fontWeight: '400',

    marginLeft: 20,
    fontFamily: 'Roboto-Light',

    // marginBottom: 10,
  },
  backgroundImage: {
    width: null,
    height: 90,
  },
});
export default styles;
