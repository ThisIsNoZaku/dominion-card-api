const actions = require("../../index");

const cards = {
    cellar: {
        name: "Cellar",
        type: "action",
        set: "basev2",
        cost: 2,
        text: "+1 Action. Discard any number of cards, then draw that many."
    },
    chapel: {
        name: "Chapel",
        type: "action",
        set: "basev2",
        cost: 2,
        text: "Trash up to 4 cards from your hand",
    },
    moat: {
        name: "Moat",
        type: "action",
        set: "basev2",
        subtype: "reaction",
        cost: 2,
        text: "+2 card. When another player plays an Attack card, you may first reveal this from your hand, to be unaffected by it",
    },
    harbinger: {
        name: "Harbinger",
        type: "action",
        set: "basev2",
        cost: 3,
        text: "+1 Card. +1 Action. Look through your discard pile. You may put a card from it onto your deck",
    },
    merchant: {
        name: "Merchant",
        type: "action",
        set: "basev2",
        cost: 3,
        text: "+1 Card. +1 Action. The first time you play a Silver this turn, +1$",
    },
    vassal: {
        name: "Vassal",
        type: "action",
        set: "basev2",
        cost: 3,
        text: "Discard the top card of your deck. If it's an Action card, you may play it",
    },
    village: {
        name: "Village",
        type: "action",
        set: "basev2",
        cost: 3,
        text: "+1 Card. +2 Actions.",
    },
    workshop: {
        name: "Workshop",
        type: "action",
        set: "basev2",
        cost: 3,
        text: "Gain a card costing up to $4."
    },
    bureaucrat: {
        name: "Bureaucrat",
        type: "action",
        set: "basev2",
        subtype: "attack",
        cost: 4,
        text: "Gain a silver card; put it on top of your deck. Each other player reveals a Victory card from his hand and puts it on his deck (or reveals a hand with no Victory cards).",
    },
    bureaucrat: {
        name: "Bureaucrat",
        type: "action",
        set: "basev2",
        subtype: "attack",
        cost: 4,
        text: "Gain a silver card; put it on top of your deck. Each other player reveals a Victory card from his hand and puts it on his deck (or reveals a hand with no Victory cards).",
    },
    gardens: {
        name: "Gardens",
        type: "victory",
        set: "basev2",
        subtype: "attack",
        cost: 4,
        text: "Worth 1 Victory for every 10 card in your deck (rounded down)",
    },
    militia: {
        name: "Militia",
        type: "action",
        set: "basev2",
        subtype: "attack",
        cost: 4,
        text: "+$2. Each other player dicsrds down to 3 cards in their hand."
    },
    moneylender: {
        name: "Moneylender",
        type: "action",
        set: "basev2",
        cost: 4,
        text: "You may trash a Copper from your hand. If you do, +$3."
    },
    poacher: {
        name: "Poacher",
        type: "action",
        set: "basev2",
        cost: 4,
        text: "+1 Card. +1 Action. +$1. Discard a card per empty Supply pile."
    },
    poacher: {
        name: "Poacher",
        type: "action",
        set: "basev2",
        cost: 4,
        text: "+1 Card. +1 Action. +$1. Discard a card per empty Supply pile."
    },
    remodel: {
        name: "Remodel",
        type: "action",
        set: "basev2",
        cost: 4,
        text: "Trash a card from your hand. Gains a card costing up to $2 more than the trashed card."
    },
    smithy: {
        name: "Smithy",
        type: "action",
        set: "basev2",
        cost: 4,
        text: "+3 Cards."
    },
    throneroom: {
        name: "Throne Room",
        type: "action",
        set: "basev2",
        cost: 4,
        text: "You may plan an Action card from your hand twice."
    },
    bandit: {
        name: "Bandit",
        type: "action",
        set: "basev2",
        subtype: "attack",
        cost: 4,
        text: "Gain a Gold. Each other player reveals the top two cards of their deck, trashes a revealed Trasure other than Copper, and discards the rest."
    },
    councilroom: {
        name: "Council Room",
        type: "action",
        set: "basev2",
        cost: 5,
        text: "+4 Cards. +1 Buy. Each other player draws a card."
    },
    festival: {
        name: "Festival",
        type: "action",
        set: "basev2",
        cost: 5,
        text: "+2 Actions. +1 Buy. +$2."
    },
    laboratoy: {
        name: "Laboratory",
        type: "action",
        set: "basev2",
        cost: 5,
        text: "+2 Cards. +1 Action."
    },
    library: {
        name: "Library",
        type: "action",
        set: "basev2",
        cost: 5,
        text: "+2 Actions. +1 Buy. +$2."
    },
    market: {
        name: "Market",
        type: "action",
        set: "basev2",
        cost: 5,
        text: "+1 Card. +1 Action. +1 Buy. +$1."
    },
    mine: {
        name: "Mine",
        type: "action",
        set: "basev2",
        cost: 5,
        text: "You may trash a Treasure from your hand. Gain a Treasure to your hand costing up to $3 more than it."
    },
    sentry: {
        name: "Sentry",
        type: "action",
        set: "basev2",
        cost: 5,
        text: "+1 Card. +1 Action. Look at the top 2 cards of your deck. Trash and/or discard any number of them. Put the rest back on top in any order."
    },
    witch: {
        name: "Library",
        type: "action",
        subtype: "attack",
        set: "basev2",
        cost: 5,
        text: "+2 Cards. Each other player gains a Curse card."
    },
    artisan: {
        name: "Artisan",
        type: "action",
        set: "basev2",
        cost: 6,
        text: "Gain a card to your hand costing up to $5. Put a card from your hand onto your deck."
    },
}

describe("the get action", () => {
    it("returns all cards by default", async () => {
        expect(actions.getCards.execSync()).toEqual(cards);
    });
});