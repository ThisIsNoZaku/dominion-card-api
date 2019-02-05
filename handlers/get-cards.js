const machine = require("../index.js");

exports.fn = async function(event, context, callback){
    try {
        const cards = machine.getCards().now();
        callback(null, {
            status: 200,
            body: JSON.stringify(cards)
        });
    } catch(e) {
        callback(e);
    }
};