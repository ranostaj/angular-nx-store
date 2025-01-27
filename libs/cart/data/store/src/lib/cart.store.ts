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

/**
 * Represents the state of the shopping cart
 * @template T - The type of items in the cart
 */
export interface CartState<T> {
  items: CartItem<T>[];
  totalPrice?: number;
}

/**
 * Initial state for the cart store
 */
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

/**
 * Computes the total price of all items in the cart
 */
function computeTotal(items: CartItem<Product>[]): number {
  return items.reduce((acc, item) => acc + item.price * item.quantity, 0);
}

/**
 * Computes the total quantity of all items in the cart
 */
function computeCount(items: CartItem<Product>[]): number {
  return items.reduce((acc, item) => acc + item.quantity, 0);
}

/**
 * Computes the number of unique items in the cart
 */
function computeItemsCount(items: CartItem<Product>[]): number {
  return items.length;
}

export const CartStore = signalStore(
  { providedIn: 'root' },
  withState(initialState),
  withComputed((state) => ({
    total: computed(() => computeTotal(state.items())),
    count: computed(() => computeCount(state.items())),
    itemsCount: computed(() => computeItemsCount(state.items())),
  })),
  withMethods((state) => ({
    /**
     * Adds an item to the cart or updates its quantity if it already exists
     * @param item - The product to add
     * @param quantity - The quantity to add (must be positive)
     */
    add(item: Product, quantity: number) {
      if (quantity <= 0) {
        throw new Error('Quantity must be greater than 0');
      }

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

    /**
     * Updates the quantity of an item in the cart
     * @param item - The product to update
     * @param quantity - The new quantity (must be positive)
     */
    updateQuantity(item: Product, quantity: number) {
      if (quantity <= 0) {
        throw new Error('Quantity must be greater than 0');
      }

      const items = state.items().map((i) =>
        i.id === item.id ? { ...i, quantity } : i
      );
      patchState(state, { items });
    },

    /**
     * Removes an item from the cart
     * @param item - The product to remove
     */
    remove(item: Product) {
      const items = state.items().filter((i) => i.id !== item.id);
      patchState(state, { items });
    },

    /**
     * Clears all items from the cart
     */
    clear() {
      patchState(state, { items: [] });
    }
  }))
);
