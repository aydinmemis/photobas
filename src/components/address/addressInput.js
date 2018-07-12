import React, { Component } from 'react';
import { ScrollView, View, Text, TextInput, Button, Picker } from 'react-native';

import { getIl, getIlce } from '../../config/utilities';

import styles from './styles';
export default class AddressInput extends Component {
    constructor(props) {
        super(props);
        this.state = {
            iller: [],
            ilceler: [],
            pickerCityValue: '',
            pickerIlceValue: '',
            adSoyad: '',
            telefon: '',
            eposta: '',
            edres: '',
            il: '',
            ilçe: '',
            kimlikNo: ''
        }
        this.updateCity = this.updateCity.bind(this);

    }



    async updateCity(city) {
        console.log(city);
        let _ilceler = await getIlce(city);
        this.setState({ pickerCityValue: city, ilceler: _ilceler });


    }
    updateIlce(value) {
        console.log(value);
        this.setState({ pickerIlceValue: value });


    }
    async componentWillMount() {
        let _iller = await getIl();
        this.setState({ iller: _iller })
        this.updateCity(1);
        console.log(this.state.iller);

    }

    render() {
        return (

            <ScrollView style={{ backgroundColor: '#eee' }}>

                <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#eee' }}>
                    <View style={{ flex: 1, justifyContent: 'center', backgroundColor: '#fff', marginHorizontal: 15, marginTop: 20, borderBottomWidth: 1, borderColor: '#eee', alignItems: 'center', borderRadius: 5 }}>


                        {/* Ad Soyad */}
                        {/* <Text style={styles.inputLabel}>Ad Soyad</Text> */}



                        <TextInput
                            style={styles.inputBox}
                            underlineColorAndroid='#00BDCD'
                            placeholder='Ad Soyad'
                            placeholderTextColor='#00BDCD'
                            onSubmitEditing={() => this.telefon.focus()}

                        />

                        <TextInput
                            style={styles.inputBox}
                            underlineColorAndroid='#00BDCD'
                            placeholder='Telefon'
                            placeholderTextColor='#00BDCD'
                            ref={(input) => this.telefon = input}
                            onSubmitEditing={() => this.email.focus()}
                        />
                        <TextInput
                            style={styles.inputBox}
                            underlineColorAndroid='#00BDCD'
                            placeholder='Eposta'
                            placeholderTextColor='#00BDCD'
                            keyboardType='email-address'
                            ref={(input) => this.email = input}
                            onSubmitEditing={() => this.address.focus()}
                        />
                        {/*Adres*/}
                        <TextInput
                            style={styles.inputBox}
                            underlineColorAndroid='#00BDCD'
                            placeholder='Adres'
                            placeholderTextColor='#00BDCD'
                            multiline={true}
                            numberOfLines={4}
                            ref={(input) => this.address = input}
                            onSubmitEditing={() => this.il.focus()}
                        />
                        {/*İl picker olacak*/}
                        <Picker
                            selectedValue={this.state.pickerCityValue}
                            style={{ height: 50, width: 200 }}
                            mode='dropdown'
                            itemStyle={styles.inputLabel}
                            onValueChange={(itemValue, itemIndex) => { this.updateCity(itemValue) }}>
                            <Picker.Item label='Şehri Seçiniz' value='Şehri Seçiniz' />
                            {this.state.iller.map((l, k) => {
                                return (
                                    <Picker.Item label={l.il} value={l.il} key={k} />
                                );

                            })}

                        </Picker>

                        <Picker
                            selectedValue={this.state.pickerIlceValue}
                            style={{ height: 50, width: 200, justifyContent: 'flex-start' }}
                            mode='dropdown'

                            itemStyle={{ color: '#262626', fontSize: 12, fontFamily: 'Roboto-Light' }}
                            onValueChange={(itemValue, itemIndex) => { this.updateIlce(itemValue) }}>
                            <Picker.Item label='İlçeyi Seçiniz' value='İlçeyi Seçiniz' />
                            <Picker.Item label='MERKEZ' value='MERKEZ' />
                            {this.state.ilceler.map((l, i) => {
                                return (
                                    <Picker.Item label={l.ilce} value={l.ilce} key={i} />
                                );

                            })}

                        </Picker>



                        {/* <TextInput
                            style={styles.inputBox}
                            underlineColorAndroid='#00BDCD'
                            placeholder='İl'
                            placeholderTextColor='#00BDCD'
                            ref={(input) => this.il = input}
                            onSubmitEditing={() => this.ilce.focus()}
                        /> */}
                        {/*İlçe*/}
                        {/* <TextInput
                            style={styles.inputBox}
                            underlineColorAndroid='#00BDCD'
                            placeholder='İlçe'
                            placeholderTextColor='#00BDCD'
                            ref={(input) => this.ilce = input}
                            onSubmitEditing={() => this.kimlikNo.focus()}
                        /> */}
                        {/*Adres Başlığı*/}
                        <TextInput
                            style={styles.inputBox}
                            underlineColorAndroid='#00BDCD'
                            placeholder='Kimlik No'
                            placeholderTextColor='#00BDCD'
                            ref={(input) => this.kimlikNo = input}
                        />




                    </View>
                    <View style={{ marginTop: 15 }}>
                        <Button


                            onPress={() => { null }}
                            title="Kaydet"
                            color="#00BDCD"
                        //accessibilityLabel="Learn more about this purple button"
                        />
                    </View>

                </View>

            </ScrollView >

        );
    }
}
