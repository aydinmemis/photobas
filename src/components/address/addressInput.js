import React, { Component } from 'react';
import { ScrollView, View, Text, TextInput, Button, Picker } from 'react-native';
import { getIl } from '../../config/utilities';

import styles from './styles';
export default class AddressInput extends Component {
    state = {
        iller: [],
        pickerValue: 'Seçiniz',
    }
    async componentWillMount() {
        let _iller = await getIl();
        this.setState({ iller: _iller })
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
                            selectedValue={this.state.pickerValue}
                            style={{ height: 50, width: 200 }}
                            /** TODO: onvaluchange olayında plaka no alınacak   */
                            onValueChange={(itemValue, itemIndex) => { this.setState({ pickerValue: itemValue }); console.log(this.state.pickerValue); }}>
                            {this.state.iller.map((l, k) => {
                                return (
                                    <Picker.Item label={l.il} value={l.plaka} key={k} />
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
                        <TextInput
                            style={styles.inputBox}
                            underlineColorAndroid='#00BDCD'
                            placeholder='İlçe'
                            placeholderTextColor='#00BDCD'
                            ref={(input) => this.ilce = input}
                            onSubmitEditing={() => this.kimlikNo.focus()}
                        />
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

            </ScrollView>

        );
    }
}
