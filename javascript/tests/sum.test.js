const sum = require("../sum")

describe("Tests for sum function", () => {
  test("should return the sum of two positive integers", () => {
    expect(sum(5, 10)).toBe(15);
  });
});
