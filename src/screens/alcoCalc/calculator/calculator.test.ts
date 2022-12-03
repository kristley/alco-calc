import { getVol, getBAL } from "./calculator";

/*
test("getTimeElapsed returns the correct time differential", () => {
	expect(getTimeElapsed("00:00", "00:00")).toBe("00:00");
	expect(getTimeElapsed("00:00", "00:01")).toBe("00:01");
	expect(getTimeElapsed("00:00", "01:00")).toBe("01:00");
	expect(getTimeElapsed("00:00", "01:01")).toBe("01:01");
	expect(getTimeElapsed("00:00", "23:59")).toBe("23:59");
	expect(getTimeElapsed("05:00", "04:00")).toBe("23:00");
});
*/

test("getTotalVolume returns the correct volume", () => {
	expect(getVol([])).toBe(0);
	expect(
		getVol([
			{
				volume: 0.5,
				unit: "l",
				percentage: 4.5,
			} as Drink,
		])
	).toBe(22); // 0.5 * 1000 * 4.5 / 100 = 22.5 -> 22 if floored
	expect(
		getVol([
			{
				volume: 0.5,
				unit: "l",
				percentage: 4.5,
			} as Drink,
			{
				volume: 0.5,
				unit: "l",
				percentage: 4.5,
			} as Drink,
		])
	).toBe(45); // 0.5 * 1000 * 4.5 / 100 = 22.5 -> 22.5 * 2 = 45 if floored
	expect(
		getVol([
			{
				volume: 5,
				unit: "dl",
				percentage: 4.5,
			} as Drink,
			{
				volume: 500,
				unit: "ml",
				percentage: 4.5,
			} as Drink,
		])
	).toBe(45); // 0.5 * 1000 * 4.5 / 100 = 22.5 -> 22.5 * 2 = 45 if floored
});

test("getBloodAlcohol returns the correct blood alcohol", () => {
    expect(getBAL(0, "00:00")).toBe(0);
    expect(getBAL(45, "00:00")).toBe(0.59); // 45 * 0.789 / (89 * 0.68) = 0.59
    expect(getBAL(45, "01:00")).toBe(0.44); // 45 * 0.789 / (89 * 0.68) - 0.15 = 0.58 - 0.15 = 0.43
    expect(getBAL(0, "01:00")).toBe(0); //
});