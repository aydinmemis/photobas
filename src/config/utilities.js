import { AsyncStorage } from 'react-native';

import constants from '../config/constants';

export async function getAsyncStorageCategories() {
  try {
    const value = await AsyncStorage.getItem(constants.asyncStorageKeys.DATA_LOAD);
    // asyncStorage de veri varsa true döndürür yoksa null döndürür
    console.log(value);
    if (value != null) return true;
    return false;
  } catch (error) {
    console.error(`Hata oluştu : ${error}`);
  }
}
export async function setAsyncStorageCategories(categories, status) {
  AsyncStorage.setItem(constants.asyncStorageKeys.CATEGORIES, categories);
  AsyncStorage.setItem(constants.asyncStorageKeys.DATA_LOAD, status);
}

// export { getAsyncStorageCategories, setAsyncStorageCategories };
