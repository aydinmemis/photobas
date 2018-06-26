import React, { Component } from 'react';
import { View, Text, StyleSheet, YellowBox, Modal, NetInfo } from 'react-native';
import Loader from '../config/loader';




import { inject, observer } from 'mobx-react/native';


@inject('nav', 'cartStore', 'CategoriesStore')
@observer
export default class SplashScreen extends Component {
    constructor(props) {
        super(props)
        this.state = {
            loading: true,

            isConnected: true,
            netAlert: false,
        }

        YellowBox.ignoreWarnings([
            'Warning: componentWillMount is deprecated',
            'Warning: componentWillReceiveProps is deprecated',
        ]);

        NetInfo.isConnected.addEventListener('connectionChange', this.handleConnectivityChange);

    }
    handleConnectivityChange = isConnected => {

        if (isConnected) {
            this.setState({ isConnected });
        } else {
            this.setState({ isConnected });
        }
    };


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
        this.setState({ loading: false });
        //this.goHome();


    }



    async componentWillMount() {

        if (this.state.isConnected) {
            await this.isCategoryControl();

        }
    }
    render() {
        const { title, container, subTitle, titleWrapper, loading } = styles;
        return (
            <View style={container}>
                <Modal
                    animationType='slide'
                    transparent={true}
                    visible={!this.state.isConnected}
                    onRequestClose={() => {
                        alert('Modal has been closed.');
                    }}>


                    <View style={{ backgroundColor: '#000', width: '100%', height: '100%', opacity: 0.4, position: 'absolute' }} />

                    <View style={styles.netAlert}>
                        <View style={styles.netAlertContent}>
                            <Text style={styles.netAlertTitle}>İnternet Bağlantısı Yok</Text>
                            <Text style={styles.netAlertDesc}>Ağ Bağlantısı bulunamadı. Lütfen internet erişiminizi kontrol ediniz..</Text>
                        </View>
                    </View>
                </Modal>
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