
export type Cart<T> = {
  items: CartItem<T>[];
  totalPrice?: number;
}

export type CartItem<T> = T & {
  quantity: number;
}
