import { Injectable, signal } from '@angular/core';


type Toast = { message: string; duration: number; type: 'success' | 'error' };

@Injectable({
  providedIn: 'root'
})
export class ToastService {

  readonly toasts = signal<Toast[]>([]);

  add(message: string, duration = 3000, type: 'success' | 'error' = 'success') {
    this.toasts.update((currentToasts) => [...currentToasts, { message, duration, type }]);
    setTimeout(() => this.remove(0), duration);
  }

  remove(index: number) {
    this.toasts.update((currentToasts) => currentToasts.filter((_, i) => i !== index));
  }

}

