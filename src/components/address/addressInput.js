import React, { Component } from 'react';
import { ScrollView, View, Text, TextInput, Button } from 'react-native';
import styles from './styles';
export default class AddressInput extends Component {
    state = {}
    render() {
        return (
            <ScrollView>
                <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#eee' }}>
                    <View style={{ flex: 1, justifyContent: 'center', backgroundColor: '#fff', marginHorizontal: 20, marginTop: 20, borderBottomWidth: 1, borderColor: '#eee', alignItems: 'center' }}>


                        {/* Ad Soyad */}
                        <Text style={styles.inputLabel}>Ad Soyad</Text>
                        <TextInput
                            style={styles.inputBox}
                            underlineColorAndroid='rgba(0,0,0,0)'
                        //placeholder='Ad Soyad'
                        // placeholderTextColor='#ffff'
                        />

                        {/*Telefon*/}
                        <Text style={styles.inputLabel}>Telefon</Text>
                        <TextInput
                            style={styles.inputBox}
                            underlineColorAndroid='rgba(0,0,0,0)'
                        //placeholder='Telefon'
                        //placeholderTextColor='#ffff'
                        />
                        {/*Eposta*/}
                        <TextInput
                            style={styles.inputBox}
                            underlineColorAndroid='rgba(0,0,0,0)'
                            placeholder='Eposta'
                            placeholderTextColor='#ffff'
                        />
                        {/*Adres*/}
                        <TextInput
                            style={styles.inputBox}
                            underlineColorAndroid='rgba(0,0,0,0)'
                            placeholder='Adres'
                            placeholderTextColor='#ffff'
                            multiline={true}
                            numberOfLines={4}
                        />
                        {/*İl picker olacak*/}
                        <TextInput
                            style={styles.inputBox}
                            underlineColorAndroid='rgba(0,0,0,0)'
                            placeholder='İl'
                            placeholderTextColor='#ffff'
                        />
                        {/*İlçe*/}
                        <TextInput
                            style={styles.inputBox}
                            underlineColorAndroid='rgba(0,0,0,0)'
                            placeholder='İlçe'
                            placeholderTextColor='#ffff'
                        />
                        {/*Adres Başlığı*/}
                        <TextInput
                            style={styles.inputBox}
                            underlineColorAndroid='rgba(0,0,0,0)'
                            placeholder='Adres Başlığı'
                            placeholderTextColor='#ffff'
                        />
                        <Button
                            onPress={() => { null }}
                            title="Learn More"
                            color="#841584"
                            accessibilityLabel="Learn more about this purple button"
                        />



                    </View>
                </View>
            </ScrollView>

        );
    }
}
