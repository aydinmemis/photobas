import mobx, { observable, action, computed } from 'mobx';

const index = 0;

class CartStore {
  @observable cartList = [];
  @observable counter = 1;
  @observable cartLastIndex = 0;
  @observable cartCount = 0;
  @observable cartTotal = 0;

  addCartListItem(_productName, _productImage, _productId, _price, _quantity, _total) {
    const _lastIndex =
      this.cartList.push({
        productName: _productName,
        productId: _productId,
        price: _price,
        quantity: _quantity,
        images: [],
        imagesUrl: [],
        productImage: _productImage,
        total: (_price * _quantity).toFixed(2),
        index,
      }) - 1;
    this.cartLastIndex = _lastIndex;
    this.cartCounter();

    index++;
  }

  removeListItem(index) {
    this.cartList = this.cartList.filter(l => {
      return l.index !== index;
    });
    this.cartCounter();

    //this.cartList.replace(filteredList);
  }

  addImagesItem(item, _images, _imagesUrl) {
    console.log(item);
    this.cartList.forEach(l => {
      if (l.index === item[0].index) {
        for (let i = 0; i <= _images.length; i++) {
          l.images.push(_images[i]);
          l.imagesUrl.push(_imagesUrl[i]);
        }
      }
    });
  }

  increment() {
    this.counter++;
  }

  decrement() {
    if (this.counter > 1) {
      this.counter--;
    }
  }
  resetCounter() {
    this.counter = 1;
  }
  /**
   *
   * @param {*} quantity
   */
  CartListItemQuantityIncrement(item) {
    //let index = item[item];

    // console.log(item.quantity);
    this.cartList.filter(l => {
      if (l == item) {
        l.quantity += 1;
        l.total = (l.quantity * l.price).toFixed(2);
      }
      this.cartCounter();
      return l;
    });
  }
  CartListItemQuantityDecrement(item) {
    //console.log(item.quantity);
    this.cartList.filter(l => {
      if (l == item && l.quantity > 1) {
        l.quantity -= 1;
        l.total = (l.quantity * l.price).toFixed(2);
      }
      this.cartCounter();
      return l;
    });
    //console.log(index);
    //console.log(this.cartList[index].quantity);
    //if this.cartList[index].quantity > 1  {
    //this.cartList[index].quantity -= 1;
    // this.cartList[item.index].quantity = item.quantity;
    //}
  }
  cartCounter() {
    this.cartCount = this.cartList.slice().length;
    this.getCartTotal();
  }

  getCartTotal() {
    let _total = 0;
    this.cartList.forEach(item => {
      _total += parseFloat(item.total, 10);
    });
    this.cartTotal = _total.toFixed(2);
  }
}

export default new CartStore();
