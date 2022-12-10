import { callMe, MyException } from "../src/exception";
test("exception", () => {
  expect(() => callMe("Ridho")).toThrow();
  expect(() => callMe("Ridho")).toThrow(MyException);
  expect(() => callMe("Ridho")).toThrow("Ups my exception happends");
});
