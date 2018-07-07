import React, { Component } from 'react';
import { View, Text, ScrollView, StyleSheet, BackHandler } from 'react-native';
import { inject, observer } from 'mobx-react/native';

@inject('nav', 'addresStore')
export default class AddressInfoScreen extends Component {
    state = {}
    static navigatorStyle = {
        navBarHidden: true, // default olarak gelen navigationBar'ın görünmemesini sağlıyoruz
    };
    componentDidMount() {
        BackHandler.addEventListener('hardwareBackPress', this.handleBackPress);
    }
    componentWillUnmount() {
        BackHandler.removeEventListener('hardwareBackPress', this.handleBackPress);
    }
    handleBackPress = () => {
        const { nav } = this.props;
        nav.handleChangeRoute('cartBasketScreen');
    }
    render() {
        return (
            <ScrollView>
                <View style={styles.container}>
                    <Text>
                        Adres Info Screen
                   </Text>
                </View>
            </ScrollView>

        );
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }


});