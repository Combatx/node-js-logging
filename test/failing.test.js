import { sayHello } from "../src/sayHello";

test("sayHello succes", () => {
  expect(sayHello("Ridho")).toBe("Hello Ridho");
});

test.failing("sayHello error", () => {
  sayHello(null);
});

test("sayHello error", () => {
  expect(() => sayHello(null)).toThrow();
});
