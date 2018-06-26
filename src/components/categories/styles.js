import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  text: {
    textAlign: 'center',
    flexWrap: 'wrap',
    color: '#fff',
    fontSize: 30,
    fontWeight: 'bold',
    fontFamily: 'Roboto-Bold',
  },
  image: {
    height: 150,
  },
  viewStyle: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    //marginHorizontal: 20,
    // margin: 40,
    marginVertical: 10,
    elevation: 5,
    overflow: 'hidden',
    borderRadius: 10,
    borderWidth: 2,
    borderColor: 'lightgray',
  },
  categoryTextWrapper: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgba(0,0,0,0.5)',
  },
});
