
export type Cart<T> = {
  items: CartItem<T>[];
}

export type CartItem<T> = T & {
  quantity: number;
}
