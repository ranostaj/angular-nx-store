import { computed } from '@angular/core';
import { CartItem } from '@eshop/cart-models';
import { Product } from '@eshop/products-model';
import {
  patchState,
  signalStore,
  withComputed,
  withMethods,
  withState,
} from '@ngrx/signals';

type CartState<T> = {
  items: CartItem<T>[];
  totalPrice?: number;
};

export const initialState: CartState<Product> = {
  items: [
    {
      id: 1,
      name: 'iPhone 13',
      description: 'Latest model with A15 Bionic chip',
      price: 999,
      manufacturer: 'Apple',
      image: 'iphone-13-275343.webp',
      slug: 'iphone-13',
      quantity: 3,
    },
  ],
  totalPrice: 0,
};
export const CartStore = signalStore(
  { providedIn: 'root' },
  withState(initialState),
  withComputed((state) => ({
    total: computed(() =>
      state.items().reduce((acc, item) => acc + item.price * item.quantity, 0)
    ),
    count: computed(() =>
      state.items().reduce((acc, item) => acc + item.quantity, 0)
    ),
    itemsCount: computed(() => state.items().length),
  })),
  withMethods((state) => ({
    add: (item: Product, quantity: number) => {
      const items = [...state.items()];
      const itemIndex = items.findIndex((i) => i.id === item.id);
      if (itemIndex > -1) {
        items[itemIndex] = {
          ...items[itemIndex],
          quantity: items[itemIndex].quantity + quantity,
        };
      } else {
        items.push({ ...item, quantity });
      }
      patchState(state, { items });
    },
    updateQuantity: (item: Product, quantity: number) => {
      const items = state.items().map((i) =>
        i.id === item.id ? { ...i, quantity } : i
      );
      patchState(state, { items });
    },
    remove: (item: Product) => {
      const items = state.items().filter((i) => i.id !== item.id);
      patchState(state, { items });
    },
  }))
);
