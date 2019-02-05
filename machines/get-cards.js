const cards = JSON.parse(require("fs").readFileSync(require("path").resolve(__dirname, "../cards.json")));

module.exports = {


  friendlyName: 'Get cards',


  description: 'Get cards with optional filters',


  sync: true,


  inputs: {
    sets: {
      type: ["ref"],
      description: "The sets to return cards for",
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
    console.log(inputs.sets);
    return exits.success(cards.filter(card => inputs.sets === undefined || inputs.sets.includes(card.set)));
  },



};