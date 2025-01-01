import { Injectable } from '@angular/core';
import { Product } from '@eshop/products-model';
import { map, Observable, of, reduce } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {



  getProduct(slug: string): Observable<Product> {
    return this.getProducts().pipe(
      map((products) => {
        const product = products.find((product) => product.slug === slug);
        if (!product) {
          throw new Error(`Product with slug ${slug} not found`);
        }
        return product;
      })
    );
  }


  getProducts(): Observable<Product[]> {

    return of(
      [
        {
          "id": 1,
          "name": "iPhone 13",
          "description": "Latest model with A15 Bionic chip",
          "price": 999,
          "manufacturer": "Apple",
          "image": "iphone-13-275343.webp",
          "slug": "iphone-13"
        },
        {
          "id": 2,
          "name": "Samsung Galaxy S21",
          "description": "Flagship model with Exynos 2100",
          "price": 799,
          "manufacturer": "Samsung",
          "image": "galaxy-s21-phantom-purple.jpg",
          "slug": "samsung-galaxy-s21"
        },
        {
          "id": 3,
          "name": "Google Pixel 6",
          "description": "Latest model with Google Tensor chip",
          "price": 599,
          "manufacturer": "Google",
          "image": "Pre-Owned-Google-Pixel-6-Pro-128GB-Stormy-Black-T-Mobile-Like-New-Refurbished-Good_9ed68989-24b3-4ba6-80bd-247a625f8727.1cd77346199e128234002f1631d8e499.webp",
          "slug": "google-pixel-6"
        },
        {
          "id": 4,
          "name": "OnePlus 9",
          "description": "Flagship model with Snapdragon 888",
          "price": 729,
          "manufacturer": "OnePlus",
          "image": "oneplus9.webp",
          "slug": "oneplus-9"
        },
      ]
    )
  }
}
