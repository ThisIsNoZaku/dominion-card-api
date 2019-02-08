const _ = require("lodash");
global.cards = JSON.parse(require("fs").readFileSync(require("path").resolve(__dirname, "./cards.json")));
global.sets = _.uniqBy(global.cards.map(c => c.set));
// This is a boilerplate file which should not need to be changed.
module.exports = require('machine').pack({
  pkg: require('./package.json'),
  dir: __dirname
});
