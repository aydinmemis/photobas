import { observable, action } from "mobx";
class AdresStore {
    @observable address = [];

    @action('adres ekler')
    addAddress(_phone, _email, _name, _address, _state, _city, _tcNo, _postalCode) {
        this.address.push({
            Phone: _phone,
            Name: _name,
            Address: _address,
            City: _city,
            State: _state,
            Email: _email,
            PostalCode: _postalCode,
            TcNo: _tcNo
        });
        return this.addAddress;
    }
}

export default new AdresStore();
