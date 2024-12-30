import { Injectable } from '@angular/core';
import { Order } from '@eshop/orders-model';
import { delay, Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class OrdersService {

  getOrders(): Observable<Order[]> {
    return of([
      { id: 1, name: 'Order 1', description: 'Description 1' , price: 100, quantity: 1},
      { id: 2, name: 'Order 2', description: 'Description 2', price: 200, quantity: 2 },
      { id: 3, name: 'Order 3', description: 'Description 3', price: 300, quantity: 3 },
    ]).pipe(delay(200));
  }
}
