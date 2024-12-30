import { Component } from '@angular/core';
import { RouterLinkActive, RouterModule } from '@angular/router';

@Component({
  imports: [RouterModule, RouterLinkActive],
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'eshop';
}
