import { computed, Injectable, signal, WritableSignal } from '@angular/core';
import { Cart } from '@eshop/cart-models';
import { Product } from '@eshop/products-model';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  protected cart: WritableSignal<Cart<Product>> = signal({items: []});
  protected totals = computed(() => {
    const items = this.cart();
    if(!items){
      return 0;
    }
    return items.items.reduce((acc, item) => acc + item.price * item.quantity, 0);
  });

  getItems() {
    return this.cart;
  }

  addItem(product: Product) {
    this.cart.update(({items}) => {
      if(!items){
        return {items: [{...product, quantity: 1}]};
      }
      const item = items.find((item) => item.id === product.id);
      if(item){
        item.quantity++;
      } else {
        items.push({...product, quantity: 1});
      }
      return {items};
    });
  }

  getTotal() {
    return this.totals;
  }

  getProductCount() {
    return computed(() => {
      const items = this.cart();
      if(!items){
        return 0;
      }
      return items.items.reduce((acc, item) => acc + item.quantity, 0);
    })
  }
}
