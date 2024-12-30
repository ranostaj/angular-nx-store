import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'lib-cart',
  imports: [CommonModule, RouterModule],
  templateUrl: './cart.component.html',
})
export class CartComponent {}
