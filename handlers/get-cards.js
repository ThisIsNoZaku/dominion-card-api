const machine = require("../index.js");

exports.fn = async function(event, context, callback){
    try {
        const cards = machine.getCards({
            sets: event.queryStringParameters.sets ? 
                event.queryStringParameters.sets.split(",") : undefined,
            types: event.queryStringParameters.types ? 
                event.queryStringParameters.types.split(",") : undefined
        }).now();
        console.log(event);
        callback(null, {
            status: 200,
            body: JSON.stringify({cards})
        });
    } catch(e) {
        callback(e);
    }
};