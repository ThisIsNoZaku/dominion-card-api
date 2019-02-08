const _ = require("lodash");

module.exports = {


  friendlyName: 'Get sets',


  description: 'Get all available sets',


  sync: true,


  inputs: {},


  exits: {

    success: {
      variableName: 'result',
      description: 'Done.',
    },

  },


  fn: function(inputs, exits
    /*``*/
  ) {
    return exits.success(sets);
  },



};