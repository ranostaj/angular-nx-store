import { animate, state, style, transition, trigger } from '@angular/animations';
import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { ToastService } from '@eshop/shared-services';

@Component({
  selector: 'lib-toast',
  imports: [CommonModule],
  templateUrl: './toast.component.html',
  styleUrl: './toast.component.css',
  standalone: true,
  animations: [
    trigger(
      'toastAnimation',
      [
        transition(
          ':enter',
          [
            style({
              opacity: 0,
            }),
            animate('0.3s ease-out',style({
              opacity: 1,
            }) )
          ]
        ),
        transition(
          ':leave',
          [
            style({
              opacity: 1,
            }),
            animate('0.3s ease-in',style({
              opacity: 0,
            }) )
          ]
        )
      ]
    )
  ]

})
export class ToastComponent {
  readonly toastService = inject(ToastService);
  readonly toasts = this.toastService.toasts;
}
