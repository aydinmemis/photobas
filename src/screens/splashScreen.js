import React, { Component } from 'react';
import { View, Text, StyleSheet, YellowBox } from 'react-native';
import Loader from '../config/loader';
import NetworkControl from '../config/networkControl';



import { inject, observer } from 'mobx-react/native';


@inject('nav', 'cartStore', 'CategoriesStore')
@observer
export default class SplashScreen extends Component {
    constructor(props) {
        super(props)
        this.state = {
            loading: false,
            netControl: false,
        }

        YellowBox.ignoreWarnings([
            'Warning: componentWillMount is deprecated',
            'Warning: componentWillReceiveProps is deprecated',
        ]);



    }

    static navigatorStyle = {
        navBarHidden: true, // default olarak gelen navigationBar'ın görünmemesini sağlıyoruz
    };

    goHome = () => {
        const { nav } = this.props;
        nav.handleChangeRoute('root');
    };



    async isCategoryControl() {
        const { CategoriesStore } = this.props;
        const kategoriCekilmisMi = CategoriesStore.state;
        if (kategoriCekilmisMi != "OK") {
            await CategoriesStore.fetchCategories();
            this.setState({ loading: true });

        }

    }
    async componentWillMount() {
        await this.isCategoryControl();
        if (this.state.loading) {
            this.goHome();
        }
    }
    render() {
        const { title, container, subTitle, titleWrapper, loading } = styles;
        return (

            <View style={container}>
                <NetworkControl />
                <View style={loading}>
                    <Loader loading={this.state.loading} />
                </View>
                <View style={titleWrapper}>
                    <Text style={title}>fotobas</Text>
                </View>
                <View>
                    <Text style={subTitle}>Merve Birinci Photography</Text>
                </View>

            </View>
        );
    }
}

const styles = StyleSheet.create({

    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#604CC7'

    },
    title: {
        fontSize: 45,
        color: '#fff',
        fontFamily: 'Roboto-Light',
        fontWeight: 'bold'

    },
    subTitle: {
        color: '#fff',
        fontWeight: '200',
    },
    titleWrapper: {
        flex: 2,
        justifyContent: 'center',

    },
    loading: {
        flex: 0.5,
        justifyContent: 'center'
    }


});