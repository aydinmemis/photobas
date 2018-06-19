import mobx, { observable, action } from 'mobx';
import { getCategoriesFromServer } from '../services/getCategories';

const index = 0;
class CategoriesStore {
  @observable categoriesList = [];
  //veri var mı
  @observable veriVarmi: undefined;

  // async isCategoriesControl() {
  //   await getAsyncStorageCategories().then(res => {
  //     if (res === true) this.veriVarmi = true;
  //     else this.veriVarmi = false;
  //   });
  // }
}
export default new CategoriesStore();
