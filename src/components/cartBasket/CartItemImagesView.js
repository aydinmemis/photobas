import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import ImageBrowser from 'react-native-interactive-image-gallery'
import { inject, observer } from 'mobx-react/native';

@inject('nav', 'cartStore')
export default class CartItemImagesView extends Component {
    constructor() {
        super();
    }
    static navigatorStyle = {
        navBarHidden: true, // default olarak gelen navigationBar'ın görünmemesini sağlıyoruz
    };


    render() {
        const { nav } = this.props;

        const imageURLs: Array<Object> = nav.propsData.images.map(

            (img: Object, index: number) =>
                //  (img != undefined) ?
                ({

                    URI: img,
                    thumbnail: img,
                    id: String(index),
                    title: 'test',
                    description: 'test acıklama'//.description
                })

        );
        console.log(imageURLs);
        return <ImageBrowser images={imageURLs} />
    }
}
