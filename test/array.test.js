test("array", () => {
  const name = ["Ridho", "Aja"];
  expect(name).toContain("Ridho");
  expect(name).toEqual(["Ridho", "Aja"]);
});

test("array Object", () => {
  const persons = [{ name: "Ridho" }, { name: "Aja" }];
  expect(persons).toContainEqual({ name: "Ridho" });
  expect(persons).toEqual([{ name: "Ridho" }, { name: "Aja" }]);
});
