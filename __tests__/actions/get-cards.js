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
    {
        "name": "Secret Chamber",
        "types" : ["action", "reaction"],
        "set": "intriguev1",
        "cost": 2,
        "text": "Discard any number of cards. +$1 per card discarded. When another player plays an Attack card, you may reveal this from your hand. If you do, +2 cards, then put 2 cards from your hand on top of your deck."
    },
    {
        "name": "Great Hall",
        "types" : ["action", "victory"],
        "set": "intriguev1",
        "cost": 3,
        "text": "1 Victory Point. +1 Card. +1 Action."
    },
    {
        "name": "Coppersmith",
        "types" : ["action"],
        "set": "intriguev1",
        "cost": 4,
        "text": "Copper produces an extry $1 this turn."
    },
    {
        "name": "Scout",
        "types" : ["action"],
        "set": "intriguev1",
        "cost": 4,
        "text": "+1 Action. Reveal the top 4 cards of your deck. Put the revealed Victory cards into your hand. Put the other cards on top of your deck in any order."
    },
    {
        "name": "Saboteur",
        "types" : ["action", "attack"],
        "set": "intriguev1",
        "cost": 5,
        "text": "Each other player reveals cards from the top of his deck until revealing one costing $3 or more. He trashes that card and may gain a card costing at most $2 less than it. He discards the other revealed cards."
    },
    {
        "name": "Tribute",
        "types" : ["action"],
        "set": "intriguev1",
        "cost": 5,
        "text": "The player to your left reveals then discards the top 2 cards of his deck. For each differently named card revealed, if it is an... Action Card, +2 Actions. Treasure Card, +$2. Victory Card, +2 Cards."
    },
    {
        "name": "Embargo",
        "types" : ["action"],
        "set": "seaside",
        "cost": 2,
        "text": "+$2. Trash this. Add an Embargo token to a Supply pile. (For the rest of the game, when a player buys a card from that pile, they gain a Curse."
    },
    {
        "name": "Haven",
        "types" : ["action", "duration"],
        "set": "seaside",
        "cost": 2,
        "text": "+1 Card. +1 Action. Set asize a card from your hand face down (under this). At the start of your next turn, put it into your hand.."
    },
    {
        "name": "Lighthouse",
        "types" : ["action", "duration"],
        "set": "seaside",
        "cost": 2,
        "text": "+1 Action. Now and as the start of your next turn: +$1. While this is in play, when another player plays an Attack card, it doesn't affect you."
    },
    {
        "name": "Native Village",
        "types" : ["action"],
        "set": "seaside",
        "cost": 2,
        "text": "+2 Actions. Choose one: Put the top card of your deck face down on your Native Village mat (you may look at those cards at any time); or put all the cards from your mat into your hand."
    },
    {
        "name": "Pearl Diver",
        "types" : ["action"],
        "set": "seaside",
        "cost": 2,
        "text": "+1 Card. +1 Action. Look at the bottom card of your deck. You may put it on top."
    },
    {
        "name": "Ambassador",
        "types" : ["action", "attack"],
        "set": "seaside",
        "cost": 3,
        "text": "Reveal a card from your hand. Return up to 2 copied of it from your hand to the Supply. Then each other player gains a copy of it."
    },
    {
        "name": "Fishing Village",
        "types" : ["action", "duration"],
        "set": "seaside",
        "cost": 2,
        "text": "+2 Actions. +$1. At the start of your next turn: +1 Action and +$1."
    },
    {
        "name": "Lookout",
        "types" : ["action"],
        "set": "seaside",
        "cost": 3,
        "text": "+1 Action. Look at the top 4 cards of your deck. Trash one of them. Discard one of them. Put the other one back on to your deck"
    },
    {
        "name": "Smugglers",
        "types" : ["action"],
        "set": "seaside",
        "cost": 3,
        "text": "Gain a copy of a card costing up to $6 that the player to your right gained on their last turn."
    },
    {
        "name": "Warehouse",
        "types" : ["action"],
        "set": "seaside",
        "cost": 3,
        "text": "+3 Cards. +1 Action. Discard 3 cards."
    },
    {
        "name": "Caravan",
        "types" : ["action", "duration"],
        "set": "seaside",
        "cost": 4,
        "text": "+1 Card. +1 Action. At the start of your next turn, +1 Card."
    },
    {
        "name": "Cutpurse",
        "types" : ["action", "attack"],
        "set": "seaside",
        "cost": 4,
        "text": "+$2. Each other player discards a Copper (or reveals a hand with no Copper)."
    },
    {
        "name": "Island",
        "types" : ["action", "victory"],
        "set": "seaside",
        "cost": 4,
        "text": "Put this ans a card from your hand onto your Island mat. 2 Victory Points."
    },
    {
        "name": "Pirate Ship",
        "types" : ["action", "attack"],
        "set": "seaside",
        "cost": 4,
        "text": "Choose one: +$1 per Coin token on your Pirate Ship mat; or each other player reveals the top 2 cards of their deck, trashes one of those Treasures that you choose, and discard the rest, and then if anyone trashed a Treasure you add a Coin token to your Pirate Ship mat."
    },
    {
        "name": "Salvager",
        "types" : ["action"],
        "set": "seaside",
        "cost": 4,
        "text": "+1 Buy. Trash a card from your hand. +$1 per $1 it costs."
    },
    {
        "name": "Sea Hag",
        "types" : ["action", "attack"],
        "set": "seaside",
        "cost": 4,
        "text": "Each other player discards the top card of their deck, then gains a Curse onto their deck."
    },
    {
        "name": "Treasure Map",
        "types" : ["action"],
        "set": "seaside",
        "cost": 4,
        "text": "Trash this an a Trasure Map from your hand. If you rashed two Treasure <aps, gain 4 Golds onto your deck."
    },
    {
        "name": "Bazaar",
        "types" : ["action"],
        "set": "seaside",
        "cost": 5,
        "text": "+1 Card. +2 Actions. +$1."
    },
    {
        "name": "Explorer",
        "types" : ["action"],
        "set": "seaside",
        "cost": 5,
        "text": "You may reveal a Provine from your hand. If you do, gain a Gold to your hand. If you don't, gain a Silver to your hand."
    },
    {
        "name": "Ghost Ship",
        "types" : ["action", "attack"],
        "set": "seaside",
        "cost": 5,
        "text": "+2 Cards. Each other player with 4 or more cards in hand puts cards from their hand onto their deck until they have 3 cards in hand."
    },
    {
        "name": "Merchant Ship",
        "types" : ["action", "duration"],
        "set": "seaside",
        "cost": 5,
        "text": "Now and at the start of your next turn: +$2."
    },
    {
        "name": " Outpost",
        "types" : ["action", "duration"],
        "set": "seaside",
        "cost": 5,
        "text": "If this is the first time you played an Outpost this turn, and the previous turn wasn't yours, then take an extra turn after this one, and you only draw 3 cards for your next hand."
    },
    {
        "name": "Tactician",
        "types" : ["action", "duration"],
        "set": "seaside",
        "cost": 5,
        "text": "If you have at least one card in hand, discard your hand, and at the start of your next turn, +5 Cards, +1 Action and +1 Buy."
    },
    {
        "name": "Treasury",
        "types" : ["action"],
        "set": "seaside",
        "cost": 5,
        "text": "+1 Card. +1 Action. +$1. When you discard this from play, if you didn't buy a Victory card this turn, you may put this onto your deck."
    }
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
    });
    it("returns only cards in the 'cards' query parameter", () => {
        const cardsToGet = ["Cellar", "Market", "Militia", "Adventurer", "Moat", "Bank", "Bureaucrat", "Village", "Chancellor", "Contraband"];
        expect(actions.getCards({
            cards: cardsToGet,
        }).now()).toEqual(cards.filter(c => cardsToGet.includes(c.name)));
    })
});