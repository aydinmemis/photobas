import { Navigation } from 'react-native-navigation';
import { observer } from 'mobx-react/native';
import { reaction } from 'mobx';
import { registerScreens } from './registerScreens';

import Store from './stores';

registerScreens();

export default class App {
  constructor() {
    reaction(() => Store.nav.route, () => this.startApp(Store.nav.route, Store.nav.propsData));
    Store.nav.appInitialized();
  }

  startApp(root, data) {
    switch (root) {
      case 'root':
        Navigation.startSingleScreenApp({
          screen: {
            screen: 'photo.HomeScreen',
          },
          header: null,
          passProps: {},
        });
        return;
      case 'productScreen':
        Navigation.startSingleScreenApp({
          screen: {
            screen: 'photo.ProductScreen',
            title: 'Kategori Adı',
          },
          header: null,
        });
        return;
      case 'productDetailScreen':
        Navigation.startSingleScreenApp({
          screen: {
            screen: 'photo.ProductDetailScreen',
            title: 'Ürün Adı',
          },
          header: null,
        });
        return;
      case 'cartBasketScreen':
        Navigation.startSingleScreenApp({
          screen: {
            screen: 'photo.CartBasketScreen',
            title: 'Sepetim',
          },
          header: null,
        });
    }
  }
}
