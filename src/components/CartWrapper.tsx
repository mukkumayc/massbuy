import { CartCourse } from "../types";

class CartWrapper {
  cart: Map<number, CartCourse>;
  constructor() {
    const tmp = localStorage.getItem("cart");
    this.cart = tmp ? new Map(JSON.parse(tmp)) : new Map();
  }
  save() {
    localStorage.setItem("cart", JSON.stringify([...this.cart]));
  }
  setItem(key: number, value: CartCourse) {
    this.cart.set(key, value);
    this.save();
  }
  getItem(key: number) {
    return this.cart.get(key);
  }
  removeItem(key: number) {
    const res = this.cart.delete(key);
    this.save();
    return res;
  }
  data() {
    return this.cart;
  }
}

export default CartWrapper;
