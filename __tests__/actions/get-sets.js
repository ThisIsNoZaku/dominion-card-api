/* global expect */
const actions = require("../../index");

const sets = ["basic", "base", "intrigue"];

describe("the get action", () => {
    it("returns all sets", async () => {
        expect(actions.getSets().now()).toEqual(sets);
    });
});