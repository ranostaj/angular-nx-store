import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { RouterLinkActive, RouterModule } from '@angular/router';
import { CartStore } from '@eshop/cart/store';

@Component({
  imports: [RouterModule, RouterLinkActive, CommonModule],
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  readonly cartStore = inject(CartStore);
  title = 'eshop';
}
