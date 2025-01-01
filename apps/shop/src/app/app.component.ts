import { Component, inject } from '@angular/core';
import { RouterLinkActive, RouterModule } from '@angular/router';
import { CartService } from '@eshop/cart-service';

@Component({
  imports: [RouterModule, RouterLinkActive],
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  readonly #cartService = inject(CartService);
  title = 'eshop';
  public cartCount = this.#cartService.getProductCount();
}
