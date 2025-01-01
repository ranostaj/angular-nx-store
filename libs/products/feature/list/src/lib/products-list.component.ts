import { Component, inject, OnInit, Signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ProductService } from '@eshop/products-service';
import { toSignal } from '@angular/core/rxjs-interop';
import { Product } from '@eshop/products-model';

@Component({
  selector: 'lib-products-list',
  imports: [CommonModule, RouterModule],
standalone: true,
  templateUrl: './products-list.component.html',
  styleUrl: './products-list.component.css',
})
export class ProductsListComponent implements OnInit {

  readonly productService = inject(ProductService);
  public products: Signal<Product[]> = toSignal(this.productService.getProducts(), {initialValue: []});

  ngOnInit() {
  }
}
