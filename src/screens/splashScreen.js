import React, { Component } from 'react';
import { View, Text, StyleSheet, YellowBox, Modal, NetInfo, Alert } from 'react-native';
import Loader from '../config/loader';



import { inject, observer } from 'mobx-react/native';


@inject('nav', 'cartStore', 'CategoriesStore')
@observer
export default class SplashScreen extends Component {
    constructor(props) {
        super(props)
        this.state = {
            loading: true,
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
        await CategoriesStore.fetchCategories();
        const durum = CategoriesStore.state;

        if (durum != "error") {
            this.setState({ loading: false });
            this.goHome();
        }

    }


    internetControl = new Promise((resolve, reject) => {
        NetInfo.isConnected.fetch().then(isConnected => {
            if (isConnected) {
                resolve(isConnected);
            } else {
                reject(isConnected);
            }
        });
    })

    componentWillMount() {

        this.internetControl.then((res) => {
            this.setState({ isConnected: res });
            this.isCategoryControl();

        }).catch(err => {
            Alert.alert("Uyarı", "internet bağlantınızı kontrol ediniz");
        })



    }



    render() {
        const { title, container, subTitle, titleWrapper, loading } = styles;

        return (
            <View style={container}>

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
        flex: 1.5,
        justifyContent: 'center',

    },
    loading: {
        flex: 0.5,
        justifyContent: 'center'
    }, netAlert: {
        width: '100%',
        maxHeight: '56%',

        backgroundColor: '#cc3232',
        alignSelf: 'center'
    },
    netAlertContent: {
        padding: 10,
        marginTop: 20
    },
    netAlertTitle: {
        fontFamily: 'Roboto-Bold',
        fontSize: 19,
        color: '#fff'
    },
    netAlertDesc: {
        fontFamily: 'Roboto-Light',
        fontSize: 15,
        color: '#fff'
    }


});