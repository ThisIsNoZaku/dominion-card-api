/* global expect */
const actions = require("../../index");

const sets = ["basic", "basev2", "intriguev2"];

describe("the get action", () => {
    it("returns all sets", async () => {
        expect(actions.getSets().now()).toEqual(sets);
    });
});