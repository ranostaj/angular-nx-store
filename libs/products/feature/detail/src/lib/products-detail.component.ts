import { Component, inject, Input, input,  model,  OnDestroy,  OnInit, signal, Signal } from '@angular/core';
import { toSignal } from  '@angular/core/rxjs-interop';
import { CommonModule } from '@angular/common';
import { CartService } from '@eshop/cart-service';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { ProductService } from '@eshop/products-service';
import { Product } from '@eshop/products-model';
import { Observable } from 'rxjs';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'lib-products-detail',
  imports: [CommonModule, RouterModule, FormsModule],
  templateUrl: './products-detail.component.html',
  styleUrl: './products-detail.component.css',
})
export class ProductsDetailComponent implements OnInit {

  readonly #cartService = inject(CartService);
  readonly #productService = inject(ProductService);
  private readonly router = inject(ActivatedRoute);
  public slug = input('');
  public product$!: Observable<Product>;
  public cart = this.#cartService.getItems();
  public cartCount = this.#cartService.getProductCount();
  public quantity = signal(1);

  ngOnInit() {
    this.product$ = this.#productService.getProduct(this.slug());
  }

  addToCart(product: Product) {
    this.#cartService.addItem(product, this.quantity());
  }


}


