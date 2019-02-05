const cards = JSON.parse(require("fs").readFileSync(require("path").resolve(__dirname, "../cards.json")));

module.exports = {


  friendlyName: 'Get cards',


  description: 'Get cards with optional filters',


  sync: true,


  inputs: {

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
    return exits.success(cards);
  },



};