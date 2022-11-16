import React from "react";
import TestRenderer from "react-test-renderer";
import AddBeverageView from "./AddBeverageView";

// navigation mock
const navigation = {
	navigate: jest.fn(),
};

jest.mock("./components/beverageinput/BeverageUnitInput", () => {
	const mockUnitInput = () => <mock-UnitInput />;
	return mockUnitInput;
});

describe("AddBeverageView", () => {
	describe("When rendered", () => {
		it("has 4 child", () => {
			const tree = TestRenderer.create(
				<AddBeverageView navigation={navigation} />
			).toJSON();
			expect(4).toBe(4);
		});
	});

	describe("Adds beverage to list", () => {

	});

	describe("Bad inputs are not allowed", () => {});

	describe("Fills in from prefab", () => {});
});
