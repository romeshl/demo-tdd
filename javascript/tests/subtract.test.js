const subtract = require("../subtract");

describe("Tests for subtract function", () => {
  test("10 - 5 should be 5", () => {
    expect(subtract(10, 5)).toBe(5);
  });
  test("-5 - 5 should be -10", () => {
    expect(subtract(-5, 5)).toBe(-10);
  });
});
