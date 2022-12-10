import { sum } from "../src/sum";

beforeAll(async () => {
  console.log("Before All");
});

afterAll(async () => {
  console.log("After All");
});

beforeEach(() => {
  console.info("Before Each");
});

afterEach(() => {
  console.info("After Each");
});

test("first test", () => {
  expect(sum(10, 10)).toBe(20);
  console.info("first test");
});

test("second test", () => {
  expect(sum(10, 10)).toBe(20);
  console.info("second test");
});
