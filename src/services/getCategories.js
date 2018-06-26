
import constants from '../config/constants';
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
