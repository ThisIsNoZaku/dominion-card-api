const cards = JSON.parse(require("fs").readFileSync(require("path").resolve(__dirname, "../cards.json")));

const _ = require("lodash");

module.exports = {


  friendlyName: 'Get cards',


  description: 'Get cards with optional filters',


  sync: true,


  inputs: {
    sets: {
      type: ["string"],
      description: "The sets to return cards for",
    },
    types: {
      type: ["string"],
      description: "The types of cards to return",
    }

  },


  exits: {

    success: {
      variableName: 'result',
      description: 'Done.',
    },

  },


  fn: function(inputs, exits
    /*``*/
  ) {
    const filteredCards = cards
      .filter(card => inputs.sets === undefined || inputs.sets.includes(card.set))
      .filter(card => inputs.types === undefined || (_.intersection(card.types, inputs.types).length));
      cards.filter(c => {
        return _.intersection()
      })
    return exits.success(filteredCards);
  },



};