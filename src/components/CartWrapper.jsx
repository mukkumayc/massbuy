function CartWrapper() {
  let tmp = localStorage.getItem("cart");
  this.cart = tmp ? new Map(JSON.parse(tmp)) : new Map();
}

CartWrapper.prototype.save = function () {
  localStorage.setItem("cart", JSON.stringify([...this.cart]));
};

CartWrapper.prototype.setItem = function (key, value) {
  this.cart.set(key, value);
  this.save();
};

CartWrapper.prototype.getItem = function (key) {
  return this.cart.get(key);
};

CartWrapper.prototype.removeItem = function (key) {
  let res = this.cart.delete(key);
  this.save();
  return res;
};

CartWrapper.prototype.data = function () {
  return this.cart;
};

export default CartWrapper;
