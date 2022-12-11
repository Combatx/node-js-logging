import { getBalance } from "../src/async";

test("mock async function", async () => {
  const from = jest.fn().mockResolvedValueOnce(10000);
  await expect(getBalance("Ridho", from)).resolves.toEqual({
    name: "Ridho",
    balance: 10000,
  });

  await expect(from.mock.calls.length).toBe(1);
  await expect(from.mock.results[0].value).resolves.toBe(10000);
});

test.failing("mock async function rejected", async () => {
  const from = jest.fn();
  from.mockRejectedValueOnce(new Error("ups error"));

  await getBalance("Ridho", from);
});

test("mock async function error macther", async () => {
  const from = jest.fn();
  from.mockRejectedValueOnce("Rejected");

  await expect(getBalance("Ridho", from)).rejects.toBe("Rejected");
});
