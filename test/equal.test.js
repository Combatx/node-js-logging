test("test ToBe", () => {
  const name = "Ridho";
  const hello = `Hello ${name}`;

  expect(hello).toBe("Hello Ridho");
});

test("test toEqual", () => {
  let person = { id: "ridho" };
  Object.assign(person, { name: "Ridho" });

  expect(person).toEqual({ id: "ridho", name: "Ridho" });
});
