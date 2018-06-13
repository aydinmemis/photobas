import mobx, { observable, action } from 'mobx';

const index = 0;
class CategoriesStore {
  @observable categoriesList = [];
}
export default new CategoriesStore();
