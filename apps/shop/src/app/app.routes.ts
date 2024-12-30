import { Route } from '@angular/router';
import { CartComponent } from '@eshop/cart-cart';
import { ProductsListComponent } from '@eshop/products-list';
import { HomeComponent } from './home/home.component';
import { ProductsDetailComponent } from '@eshop/products-detail';

export const appRoutes: Route[] = [
  {path: '', pathMatch: 'full', component: HomeComponent},
  {path: 'products', component: ProductsListComponent},
  {path: 'product/:id', component: ProductsDetailComponent},
  {path: 'cart', component: CartComponent}
];
