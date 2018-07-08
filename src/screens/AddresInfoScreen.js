import React, { Component } from 'react';
import { View, Text, ScrollView, StyleSheet, BackHandler, StatusBar } from 'react-native';
import { inject, observer } from 'mobx-react/native';
import { Container } from '../components/container';
import { Header, AddressInput } from '../components/address';

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
            <Container>
                <StatusBar hidden={true} />
                <Header onPressBack={this.handleBackPress} title={'Adres Bilgisi'} />
                <AddressInput />
            </Container>
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