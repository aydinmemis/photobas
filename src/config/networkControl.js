import React, { Component } from 'react';
import { View, Text, NetInfo, Dimensions, StyleSheet, Modal } from 'react-native';

const { width } = Dimensions.get('window');

function MiniOfflineSign() {
    return (
        <Modal
            animationType='slide'
            transparent={true}
            visible={this.state.isConnected}
            onRequestClose={() => {
                alert('Modal has been closed.');
            }}>
            >
            <View style={{ backgroundColor: '#000', width: '100%', height: '100%', opacity: 0.4, position: 'absolute' }} />

            <View style={styles.netAlert}>
                <View style={styles.netAlertContent}>
                    <Text style={styles.netAlertTitle}>İnternet Bağlantısı Yok</Text>
                    <Text style={styles.netAlertDesc}>Ağ Bağlantısı bulunamadı. Lütfen internet erişiminizi kontrol ediniz..</Text>
                </View>
            </View>
        </Modal>
    );
}

class NetworkControl extends Component {
    state = {
        isConnected: true
    };

    componentDidMount() {
        NetInfo.isConnected.addEventListener('connectionChange', this.handleConnectivityChange);
    }

    componentWillUnmount() {

        NetInfo.isConnected.removeEventListener('connectionChange', this.handleConnectivityChange);
        console.log(this.state.isConnected);
    }

    handleConnectivityChange = isConnected => {

        if (isConnected) {
            this.setState({ isConnected });
        } else {
            this.setState({ isConnected });
        }
    };

    render() {

        if (!this.state.isConnected) {
            return <MiniOfflineSign />;
        }
        return null;
    }
}

const styles = StyleSheet.create({
    netAlert: {
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

export default NetworkControl;