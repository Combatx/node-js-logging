import { sayHelloAsync } from "../src/async";

test("test async function", async () => {
  const result = await sayHelloAsync("Ridho");
  expect(result).toBe("Hello Ridho");
});

test("test async matchers", async () => {
  await expect(sayHelloAsync("Ridho")).resolves.toBe("Hello Ridho");
  await expect(sayHelloAsync()).rejects.toBe("Name is empty");
});
