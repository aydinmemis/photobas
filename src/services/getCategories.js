import React from 'react';
import { AsyncStorage } from 'react-native';

import constants from '../config/constants';
import CategoriesStore from '../stores/categoriesStore';
import { setAsyncStorageCategories } from '../config/utilities';

async function getCategoriesFromServer() {
  try {
    const response = await fetch(constants.categories.API_URL);

    const categoriesJson = await response.json();

    setAsyncStorageCategories(categoriesJson, true);

    return categoriesJson;
  } catch (error) {
    console.error(`Hata Oluştu :${error}`);
  }
}

export { getCategoriesFromServer };
