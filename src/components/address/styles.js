import { StyleSheet, Dimensions } from 'react-native';
const styles = StyleSheet.create({
    header: {
        height: 60,
        paddingTop: 10,
        marginLeft: 20,
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center',
    },
    headerTitle: {
        marginLeft: 20,
        color: '#262626',
        fontSize: 30,
        fontFamily: 'Roboto-Light'

    },
    inputBox: {
        marginVertical: 5,
        marginHorizontal: 10,
        marginBottom: 10,
        width: 250,
        // height: 30,
        // backgroundColor: 'red',
        // borderRadius: 2,
        // paddingHorizontal: 10,
        fontSize: 14,
        color: '#262626',
        // marginHorizontal: 5,
    },
    inputLabel: {
        color: '#262626',
        fontSize: 12,
        fontFamily: 'Roboto-Light',

    }


});

export default styles;