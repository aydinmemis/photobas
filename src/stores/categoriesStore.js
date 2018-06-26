import mobx, { observable, action } from 'mobx';
import { getCategoriesFromServer } from '../services/getCategories';

const index = 0;

class CategoriesStore {

  @observable categoryList = [];
  @observable state = "pending";


  isCategoriesControl() {
    return this.state;
  }

  @action
  async fetchCategories() {

    this.categoryList = [];
    this.state = "askida";
    try {
      await getCategoriesFromServer().then(
        categories => {
          this.categoryList = categories;
          this.state = "OK";
          // console.log(this.categoryList.slice());
        }).catch(err => {
          console.error(err);
        });
    }
    catch (error) {
      console.error(error);
    }
  }

  @action
  async getCategoryList() {
    return await this.categoryList.slice();
  }

}

export default new CategoriesStore();
