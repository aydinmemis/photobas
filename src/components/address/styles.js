import { StyleSheet } from 'react-native';
const styles = StyleSheet.create({
    header: {
        height: 60,
        padding: 10,
        marginHorizontal: 20,
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
        width: 300,
        backgroundColor: '#eee',
        // borderRadius: 2,
        // paddingHorizontal: 10,
        fontSize: 12,
        color: '#262626',
        marginHorizontal: 5,
    },
    inputLabel: {
        color: '#262626',
        fontSize: 12,
        fontFamily: 'Roboto-Light',

    }


});

export default styles;