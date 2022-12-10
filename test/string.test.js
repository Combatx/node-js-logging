test("string", () => {
  const name = "Ridho";

  expect(name).toBe("Ridho");
  expect(name).toEqual("Ridho");
  expect(name).toMatch(/dho/);
});
