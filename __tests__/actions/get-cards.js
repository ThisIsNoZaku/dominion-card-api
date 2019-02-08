/* global expect */
const actions = require("../../index");

const cards = [{
		"name" : "Copper",
		"types" : ["treasure"],
		"set": "basic",
		"cost": 0,
		"text" : "+$1"
	},
	{
		"name" : "Silver",
		"types" : ["treasure"],
		"set": "basic",
		"cost": 3,
		"text" : "+$2"
	},
	{
		"name" : "Gold",
		"types" : ["treasure"],
		"set": "basic",
		"cost": 6,
		"text" : "+$3"
	},
	{
		"name" : "Estate",
		"types" : ["victory"],
		"set": "basic",
		"cost": 2,
		"text" : "+1 Victory."
	},
	{
		"name" : "Duchy",
		"types" : ["victory"],
		"set": "basic",
		"cost": 5,
		"text" : "+2 Victory."
	},
	{
		"name" : "Curse",
		"types" : ["treasure"],
		"set": "basic",
		"cost": 0,
		"text" : "-1 Victory."
	},
	{
		"name" : "Province",
		"types" : ["victory"],
		"set": "basic",
		"cost": 8,
		"text" : "+3 Victory."
	},
	{
        name: "Cellar",
        "types" : ["action"],
        set: "base",
        cost: 2,
        text: "+1 Action. Discard any number of cards, then draw that many."
    },
    {
        name: "Chapel",
        "types" : ["action"],
        set: "base",
        cost: 2,
        text: "Trash up to 4 cards from your hand",
    },
    {
        name: "Moat",
        types: ["action", "reaction"],
        set: "base",
        cost: 2,
        text: "+2 card. When another player plays an Attack card, you may first reveal this from your hand, to be unaffected by it",
    },
    {
        name: "Harbinger",
        "types" : ["action"],
        set: "base",
        cost: 3,
        text: "+1 Card. +1 Action. Look through your discard pile. You may put a card from it onto your deck",
    },
    {
        name: "Merchant",
        "types" : ["action"],
        set: "base",
        cost: 3,
        text: "+1 Card. +1 Action. The first time you play a Silver this turn, +1$",
    },
    {
        name: "Vassal",
        "types" : ["action"],
        set: "base",
        cost: 3,
        text: "Discard the top card of your deck. If it's an Action card, you may play it",
    },
    {
        name: "Village",
        "types" : ["action"],
        set: "base",
        cost: 3,
        text: "+1 Card. +2 Actions.",
    },
    {
        name: "Workshop",
        "types" : ["action"],
        set: "base",
        cost: 3,
        text: "Gain a card costing up to $4."
    },
    {
        name: "Bureaucrat",
        types: ["action", "attack"],
        set: "base",
        cost: 4,
        text: "Gain a silver card; put it on top of your deck. Each other player reveals a Victory card from his hand and puts it on his deck (or reveals a hand with no Victory cards).",
    },
    {
        name: "Gardens",
        "types" : ["victory"],
        set: "base",
        cost: 4,
        text: "Worth 1 Victory for every 10 card in your deck (rounded down)",
    },
    {
        name: "Militia",
        types: ["action", "attack"],
        set: "base",
        cost: 4,
        text: "+$2. Each other player dicsrds down to 3 cards in their hand."
    },
    {
        name: "Moneylender",
        "types" : ["action"],
        set: "base",
        cost: 4,
        text: "You may trash a Copper from your hand. If you do, +$3."
    },
    {
        name: "Poacher",
        "types" : ["action"],
        set: "base",
        cost: 4,
        text: "+1 Card. +1 Action. +$1. Discard a card per empty Supply pile."
    },
    {
        name: "Remodel",
        "types" : ["action"],
        set: "base",
        cost: 4,
        text: "Trash a card from your hand. Gains a card costing up to $2 more than the trashed card."
    },
    {
        name: "Smithy",
        "types" : ["action"],
        set: "base",
        cost: 4,
        text: "+3 Cards."
    },
    {
        name: "Throne Room",
        "types" : ["action"],
        set: "base",
        cost: 4,
        text: "You may plan an Action card from your hand twice."
    },
    {
        name: "Bandit",
        types: ["action", "attack"],
        set: "base",
        cost: 4,
        text: "Gain a Gold. Each other player reveals the top two cards of their deck, trashes a revealed Trasure other than Copper, and discards the rest."
    },
    {
        name: "Council Room",
        "types" : ["action"],
        set: "base",
        cost: 5,
        text: "+4 Cards. +1 Buy. Each other player draws a card."
    },
    {
        name: "Festival",
        "types" : ["action"],
        set: "base",
        cost: 5,
        text: "+2 Actions. +1 Buy. +$2."
    },
    {
        name: "Laboratory",
        "types" : ["action"],
        set: "base",
        cost: 5,
        text: "+2 Cards. +1 Action."
    },
    {
        name: "Library",
        "types" : ["action"],
        set: "base",
        cost: 5,
        text: "+2 Actions. +1 Buy. +$2."
    },
    {
        name: "Market",
        "types" : ["action"],
        set: "base",
        cost: 5,
        text: "+1 Card. +1 Action. +1 Buy. +$1."
    },
    {
        name: "Mine",
        "types" : ["action"],
        set: "base",
        cost: 5,
        text: "You may trash a Treasure from your hand. Gain a Treasure to your hand costing up to $3 more than it."
    },
    {
        name: "Sentry",
        "types" : ["action"],
        set: "base",
        cost: 5,
        text: "+1 Card. +1 Action. Look at the top 2 cards of your deck. Trash and/or discard any number of them. Put the rest back on top in any order."
    },
    {
        name: "Library",
        "types" : ["action"],
        set: "base",
        cost: 5,
        text: "+2 Cards. Each other player gains a Curse card."
    },
    {
        name: "Artisan",
        "types" : ["action"],
        set: "base",
        cost: 6,
        text: "Gain a card to your hand costing up to $5. Put a card from your hand onto your deck."
    },
    {
		"name": "Chancellor",
		"types" : ["action"],
		"set": "basev1",
		"cost": 3,
		"text": "+$2. You may immediately put your deck into your discard pile."
	},
	{
		"name": "Woodcutter",
		"types" : ["action"],
		"set": "basev1",
		"cost": 3,
		"text": "+1 Buy. +$2."
	},
	{
		"name": "Feast",
		"types" : ["action"],
		"set": "basev1",
		"cost": 4,
		"text": "Trash this card. Gain a card costing up to $5."
	},
	{
		"name": "Spy",
		"types" : ["action", "attack"],
		"set": "basev1",
		"cost": 4,
		"text": "+1 Card. +1 Action. Each player (including you) reveals the top card of his deck and either discards it or puts it back, your choice."
	},
	{
		"name": "Thief",
		"types" : ["action", "attack"],
		"set": "basev1",
		"cost": 4,
		"text": "Each other player reveals the top 2 cards of his deck. If they revealed any Treasure cards, they trash one of them that you choose. You may gain any or all of these trashed cards. They discard the other revealed cards."
	},
	{
		"name": "Adventurer",
		"types" : ["action"],
		"set": "basev1",
		"cost": 6,
		"text": "+1 Card. +1 Action. Reveal the top 4 cards of your deck. Put the revealed Coppers and Potions into your hand. Put the other cards back on top in any order."
	},
    {
        name: "Courtyard",
        "types" : ["action"],
        set: "intrigue",
        cost: 2,
        text: "+3 Cards. Put a card from your hand onto your deck."
    },
    {
        name: "Lurker",
        "types" : ["action"],
        set: "intrigue",
        cost: 2,
        text: "+1 Action. Choose one: Trash an Action card from the supply; or gain an Action card from the trash."
    },
    {
        name: "Pawn",
        "types" : ["action"],
        set: "intrigue",
        cost: 2,
        text: "Choose two: +1 Card; +1 Action; +1 Buy; +$1. The choices must be different."
    },
    {
        name: "Masuqerade",
        "types" : ["action"],
        set: "intrigue",
        cost: 3,
        text: "+2 Cards. Each player with any cards in hand passes one to the next such player to their left, at once. Then you may trash a card from your hand."
    },
    {
        name: "Shanty Town",
        "types" : ["action"],
        set: "intrigue",
        cost: 3,
        text: "+2 Actions. Reveal your hand. If you have no Action cards in hand, +2 Cards"
    },
    {
        name: "Steward",
        "types" : ["action"],
        set: "intrigue",
        cost: 3,
        text: "Choose one: +2 Cards; or +$2; or trash 2 cards from your hand."
    },
    {
        name: "Swindler",
        types: ["action", "attack"],
        set: "intrigue",
        cost: 3,
        text: "+$2. Each other player trashes the top card of their deck and gains a card with the same cost that you choose."
    },
    {
        name: "Wishing Well",
        "types" : ["action"],
        set: "intrigue",
        cost: 3,
        text: "+1 Card; +1 Action. Name a card, then reveal the top card of your deck. If you name it, put it in your hand."
    },
    {
        name: "Baron",
        "types" : ["action"],
        set: "intrigue",
        cost: 4,
        text: "+1 Buy. You may discard an Estate for +$4. If you don't gain an Estate."
    },
    {
        name: "Bridge",
        "types" : ["action"],
        set: "intrigue",
        cost: 4,
        text: "+1 Buy. +$1. This turn, cards (everywhere) cost $1 less, but not less than $0."
    },
    {
        name: "Conspirator",
        "types" : ["action"],
        set: "intrigue",
        cost: 4,
        text: "+$2. If you've played 3 or more Actions this turn (counting this), +1 Card and +1 Action/"
    },
    {
        name: "Diplomat",
        types: ["action", "reaction"],
        set: "intrigue",
        cost: 4,
        text: "+2 Cards. If you have 5 or fewer cards in hand (after drawing), +2 Actions. When another player plays an Attack card, you may reveal this from a hand of 5 or more cards, to draw 2 cards then discard 3"
    },
    {
        name: "Ironworks",
        "types" : ["action"],
        set: "intrigue",
        cost: 4,
        text: "Gain a card costing up to $4. If the gained card is an... Action card, +1 Action. Treasure card, +$1. Victory card, +1 Card."
    },
    {
        name: "Mill",
        types: ["action", "victory"],
        set: "intrigue",
        cost: 4,
        text: "+1 Card. +1 Action. You may discard 2 card, for +$2. 1 VP"
    },
    {
        name: "Mining Village",
        "types" : ["action"],
        set: "intrigue",
        cost: 4,
        text: "+1 Card. +2 Actions.You may trash this for +$2."
    },
    {
        name: "Secret Passage",
        "types" : ["action"],
        set: "intrigue",
        cost: 4,
        text: "+2 Cards. +1 Action. Take a card from your hand and put it anywhere in your deck."
    },
    {
        name: "Courtier",
        "types" : ["action"],
        set: "intrigue",
        cost: 5,
        text: "Reveal a card from your hand. For each type it has (Action, Attack, etc.), choose one: +1 Action; or +1 Buy; or +$3; or gains a Gold. The choices must be different"
    },
];

describe("the get action", () => {
    it("returns all cards by default", async () => {
        expect(actions.getCards().now()).toEqual(cards);
    });
    it("returns all cards, filtered by set", async () => {
        ["base", "intrigue"].forEach(set => {
            expect(actions.getCards({sets: [set]})
            .now()).toEqual(cards.filter(c => c.set === set));
        })
    });
    it("returns all cards, filtered by type", () => {
        expect(actions.getCards({types: ["action"]})
            .now()).toEqual(cards.filter(c => c.types.includes("action")));
        expect(actions.getCards({types: ["victory"]})
            .now()).toEqual(cards.filter(c => c.types.includes("victory")));
        expect(actions.getCards({types: ["treasure"]})
            .now()).toEqual(cards.filter(c => c.types.includes("treasure")));
        expect(actions.getCards({types: ["reaction"]})
            .now()).toEqual(cards.filter(c => c.types.includes("reaction")));
        expect(actions.getCards({types: ["attack"]})
            .now()).toEqual(cards.filter(c => c.types.includes("attack")));
    });
    it("can return a combination of card types", () => {
        const types = ["action", "attack", "victory", "treasure", "reaction"];
        types.forEach(type1 => {
            types.forEach(type2 => {
                expect(actions.getCards({types: [type1, type2]})
            .now()).toEqual(cards.filter(c => c.types.includes(type1) || c.types.includes(type2)));
            });
        });
    })
});