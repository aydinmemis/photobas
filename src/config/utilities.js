
import { AsyncStorage } from 'react-native';
import constants from '../config/constants';
import _ from 'lodash';
import iller from './il_ilce.json';

const utilities = {

  async getAsyncStorageCategories() {

    try {

      let value = await AsyncStorage.getItem(constants.asyncStorageKeys.DATA_LOAD).then(res => { return res; });
      console.log(value);
      if (value != null) {
        let item = JSON.parse(value);
        console.log(item);

        return item;
      } else {
        console.log("DATA_LOAD'DA VERI YOK");
      }
    }
    catch (error) {
      console.log(error);
    }

  },
  async getAsyncCategories() {
    try {
      let values = await AsyncStorage.getItem(constants.asyncStorageKeys.CATEGORIES)
      console.log(values);
      if (values != null) {
        let items = JSON.parse(values);
        console.log(items);
        return items;
      } else {
        console.log("cartegories'de veri yok");
      }
    }
    catch (error) {
      console.log(error);
    }

  },

  async setAsyncStorageCategories(categories, status) {
    try {

      await AsyncStorage.setItem(constants.asyncStorageKeys.DATA_LOAD, JSON.stringify(status));
      await AsyncStorage.setItem(constants.asyncStorageKeys.CATEGORIES, JSON.stringify(categories));

    }
    catch (error) {
      console.log(error)
    }
  },
  async getIl() {
    try {
      let _illers = await iller.map(i => { return { "il": i.il, "plaka": i.plaka } });
      let _iller = _.uniqWith(_illers, _.isEqual); //json içinde tekrar eden kayıtları almaz
      return _iller;
    } catch (error) {
      console.log(error);
    }
  },
  async getIlce(city) {
    try {

      let _ilcelers = await iller.filter(i => i.il == city).map((i) => {

        return { "Id": i.id, "ilce": i.ilce }

      });
      // let _ilceler = _.uniqWith(_ilcelers, _.isEqual); //json içinde tekrar eden kayıtları almaz

      return _ilcelers;
    } catch (error) {
      console.log(error);
    }
  }

}





module.exports = utilities;
// export { getAsyncStorageCategories, setAsyncStorageCategories };
