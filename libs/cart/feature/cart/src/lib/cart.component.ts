import { Component, computed, inject} from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { CartStore } from '@eshop/cart/store';
import { CartItem } from '@eshop/cart-models';
import { Product } from '@eshop/products-model';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'lib-cart',
  imports: [CommonModule, RouterModule, FormsModule],
  templateUrl: './cart.component.html',
  styles: [
    ':host {  flex-direction: column; justify-content: center; align-items: center; }',
  ],
})
export class CartComponent {
 readonly cartStore = inject(CartStore);
 public cart = computed(() => this.cartStore.items());

 removeItem(item: CartItem<Product>) {
    this.cartStore.remove(item);
 }

 decreaseQuantity(item: CartItem<Product>) {
   const quantity = item.quantity - 1;
   if(quantity === 0){
      this.removeItem(item);
      return;
    }
   this.cartStore.updateQuantity(item, quantity);
 }

  increaseQuantity(item: CartItem<Product>) {
    const quantity = item.quantity + 1;
    this.cartStore.updateQuantity(item, quantity);
  }

  updateQuantity($event: Event, item: CartItem<Product>) {
    const inputElement = $event.target as HTMLInputElement;
    const quantity = parseInt(inputElement.value, 10);
    if(quantity === 0){
      this.removeItem(item);
      return;
    }
    this.cartStore.updateQuantity(item, quantity);

  }

  quantity($event: Event,item: CartItem<Product>) {
    console.log($event,item);
  }

}
