import { CommonModule } from '@angular/common';
import { Component, inject, input, OnInit, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { CartStore } from '@eshop/cart/store';
import { Product } from '@eshop/products-model';
import { ProductService } from '@eshop/products-service';
import { Observable } from 'rxjs';

@Component({
  selector: 'lib-products-detail',
  imports: [CommonModule, RouterModule, FormsModule],
  templateUrl: './products-detail.component.html',
  styleUrl: './products-detail.component.css',
})
export class ProductsDetailComponent implements OnInit {

  readonly cartStore = inject(CartStore);
  readonly #productService = inject(ProductService);
  public slug = input('');
  public product$!: Observable<Product>;
  public quantity = signal(1);

  ngOnInit() {
    this.product$ = this.#productService.getProduct(this.slug());
  }

  addToCart(product: Product) {
    this.cartStore.add(product, this.quantity());
  }


}


