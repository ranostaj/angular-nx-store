import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { CartService } from '@eshop/cart-service';

@Component({
  selector: 'lib-cart',
  imports: [CommonModule, RouterModule],
  templateUrl: './cart.component.html',
})
export class CartComponent {
 readonly #cartService = inject(CartService);
 public cart = this.#cartService.getItems();

}
