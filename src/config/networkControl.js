import React, { Component } from 'react';
import { View, Text, NetInfo, Dimensions, StyleSheet, Modal } from 'react-native';

const { width } = Dimensions.get('window');

function MiniOfflineSign() {
    return (
        <Modal
            animationType='slide'
            transparent={true}
            visible={this.state.isConnected}
        >
            <View style={{ backgroundColor: '#000', width: '100%', height: '100%', opacity: 0.4, position: 'absolute' }} />

            <View style={styles.netAlert}>
                <View style={styles.offlineContainer}>
                    <Text style={styles.offlineText}>İnternet Bağlantısı Yok</Text>
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
    offlineContainer: {
        backgroundColor: '#b52424',
        height: 30,
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
        width,
        position: 'absolute',
        top: 30
    },
    offlineText: { color: '#fff' }
});

export default NetworkControl;