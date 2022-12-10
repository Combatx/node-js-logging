test("string.not", () => {
  const name = "Ridho";

  expect(name).not.toBe("Rofi");
  expect(name).not.toEqual("Rofi");
  expect(name).not.toMatch(/rofi/);
});

test("number.not", () => {
  const value = 2 + 2;

  expect(value).not.toBeGreaterThan(6);
  expect(value).not.toBeLessThan(3);
  expect(value).not.toBe(10);
});
