import { sumAll } from "../src/sum";

const table = [
  { number: [], expected: 0 },
  { number: [10], expected: 10 },
  { number: [10, 10, 10], expected: 30 },
  { number: [10, 10, 10, 10, 10], expected: 50 },
  { number: [10, 10, 10, 10, 10, 10, 10], expected: 70 },
];

test.each(table)(
  "test sumAll(%number) should result %expected",
  ({ number, expected }) => {
    expect(sumAll(number)).toBe(expected);
  }
);
