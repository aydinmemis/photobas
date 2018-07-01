import { Navigation } from 'react-native-navigation';
import HomeScreen from './screens/home';
import ProductScreen from './screens/product';
import ProductDetailScreen from './screens/productDetailScreen';
import CartBasketScreen from './screens/cartBasket';
import SplashScreen from './screens/splashScreen';
import CartItemImagesView from './components/cartBasket/CartItemImagesView';

import Store from './stores';
import Provider from './Provider';

export function registerScreens() {
  Navigation.registerComponent('photo.SplashScreen', () => SplashScreen, Store, Provider);
  Navigation.registerComponent('photo.HomeScreen', () => HomeScreen, Store, Provider);
  Navigation.registerComponent('photo.ProductScreen', () => ProductScreen, Store, Provider);
  Navigation.registerComponent('photo.ProductDetailScreen', () => ProductDetailScreen, Store, Provider);
  Navigation.registerComponent('photo.CartBasketScreen', () => CartBasketScreen, Store, Provider);
  Navigation.registerComponent('photo.CartItemImagesView', () => CartItemImagesView, Store, Provider);


}
