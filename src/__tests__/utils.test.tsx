import { formatNumber } from "../utils/misc";

test("formatNumber", () => {
  //with number
  expect(formatNumber(1234)).toBe("1,234");
  expect(formatNumber(1_000_000)).toBe("1,000,000");

  //with string
  expect(formatNumber("1234")).toBe("1,234");
  expect(formatNumber("1000000")).toBe("1,000,000");
});
