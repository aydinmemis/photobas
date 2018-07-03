import React, { Component } from 'react';
import { Platform, ScrollView, View, StatusBar, Text, StyleSheet, TouchableWithoutFeedback, TouchableOpacity, Dimensions, Modal } from 'react-native';
import ImageElement from './ImageElement';
import Icon from 'react-native-vector-icons/FontAwesome';
//import ImageBrowser from 'react-native-interactive-image-gallery'
import { inject, observer } from 'mobx-react/native';
const STATUSBAR_HEIGHT = Platform.OS === 'ios' ? 20 : StatusBar.currentHeight;
@inject('nav', 'cartStore')
export default class CartItemImagesView extends Component {
    constructor() {
        super();
        state = {
            modalVisible: false,
            images: [],
            // modalImage: null,
        }
    }
    static navigatorStyle = {
        navBarHidden: true, // default olarak gelen navigationBar'ın görünmemesini sağlıyoruz
    };

    componentWillMount() {
        const { nav } = this.props;
        this.setState({ images: nav.propsData.imagesUrl });
        // console.log()
    }

    setModalVisible(visible, imageKey) {
        this.setState({ modalImage: this.state.images[imageKey] });
        this.setState({ modalVisible: visible });
    }
    getImage() {
        return this.state.modalImage;
    }
    _backCart() {
        const { nav } = this.props;
        nav.handleChangeRoute('cartBasketScreen');
    }
    render() {
        // console.log(this.state.images);
        // const imageURLs = this.state.images.filter(img => { return img != undefined && img != null }).map(
        //     (img, index) =>
        //         ({

        //             URI: img,
        //             thumbnail: img,
        //             id: String(index),
        //             title: 'test',
        //             description: 'test acıklama'//.description
        //         })

        // );


        let images = this.state.images.filter(img => { return img != undefined && img != null }).map(
            (img, key) => {
                return <TouchableWithoutFeedback key={key} onPress={() => { this.setModalVisible(true, key) }}>
                    <View style={styles.imageWrap}>
                        <ImageElement imagesource={img}></ImageElement>
                    </View>
                </TouchableWithoutFeedback>

            });
        // return <ImageBrowser images={imageURLs} closeText='Kapat' />
        return (
            <ScrollView>
                <View style={styles.ContainerExitButton}>
                    <TouchableOpacity style={styles.button} onPress={() => this._backCart()}>
                        <Icon name="times-circle" style={styles.icon} size={35} color="#262626" />
                    </TouchableOpacity>
                </View>

                <View style={styles.container} >

                    <Modal style={styles.modal} animationType={'fade'} transparent={true} visible={this.state.modalVisible} onRequestClose={() => { }}>
                        <View style={styles.modal}>

                            <ImageElement imagesource={this.state.modalImage}></ImageElement>
                            <Text style={styles.text} onPress={() => { this.setModalVisible(false) }}>Kapat</Text>
                        </View>
                    </Modal>

                    {images}

                </View>
            </ScrollView>
        );

    }
}

const styles = StyleSheet.create({

    container: {
        flex: 1,
        flexDirection: 'row',
        flexWrap: 'wrap',
        backgroundColor: '#eee',

    },
    imageWrap: {
        margin: 2,
        padding: 2,
        height: (Dimensions.get("window").height / 3) - 12,
        width: (Dimensions.get("window").width / 2) - 4,
        backgroundColor: '#fff'
    },
    modal: {
        flex: 1,
        padding: 40,
        backgroundColor: 'rgba(0,0,0,0.9)',


    },

    text: {
        color: '#fff',
        textAlign: 'right'


    }, ContainrExitButton: {
        position: 'absolute',
        left: 0,
        right: 0,
        top: 0,

        paddingTop: STATUSBAR_HEIGHT,

    },

    button: {
        alignSelf: 'flex-end',
        paddingVertical: 5,
        paddingHorizontal: 15,
    },



});
