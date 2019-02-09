/* global expect */
const actions = require("../../index");

const sets = ["basic", "base", "intrigue", "basev1", "intriguev2", "seaside"];

describe("the get action", () => {
    it("returns all sets", async () => {
        const returned = actions.getSets().now();
        sets.forEach(set => {
            expect(sets).toContain(set);
        })
        expect(sets.length).toEqual(returned.length);
    });
});