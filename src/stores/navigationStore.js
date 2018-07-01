import mobx, { observable, action } from 'mobx';

class NavRoute {
  @observable route = undefined;
  @observable propsData = undefined;

  @action('route  değiştiriyoruz')
  handleChangeRoute(val) {
    this.route = val;
  }
  handleChangeRoutePropsData(val, propsData) {
    this.route = val;
    this.propsData = propsData;
  }
  appInitialized() {
    //  this.route = 'splashScreen';
    this.route = 'cartBasketScreen';
  }
}
export default new NavRoute();
