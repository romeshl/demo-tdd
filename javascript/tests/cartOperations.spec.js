const {
  addToCart,
  showCart,
  removeFromCart,
  getTotalPrice,
  clearCart,
} = require("../cartOperations");

describe("Tests for shopping cart operations", () => {
  beforeEach(() => {
    clearCart();
  });

  test("Show the cart value", () => {
    expect(showCart()).toHaveLength(0);
  });

  test("Add an item to cart", () => {
    addToCart("Shoes");
    expect(showCart()).toStrictEqual(["Shoes"]);
  });
});
