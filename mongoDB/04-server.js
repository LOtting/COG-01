// Step 4: Update
// Method: collection.update()
// Update Documents of Collection

var Db = require("mongodb").Db,
    Server = require("mongodb").Server;
    
var client = new Db('COG-01', new Server(process.env.IP, 27017,{}), {w: 1});
client.open(function (err, client) {
     if (err) throw err;
    client.createCollection('Addresses', function (err, collection) {
        if (err) throw err;

        var address = {
            street: 'Broadway 1',
            place: 'New York',
            country: 'United States of Amerika'
        };
        collection.insert(address, {safe: true}, function (err, res) {
            if (err) throw err;
            console.log(res);
        });
        collection.find().toArray(function (err, docs) {
            if (err) throw err;
            console.log(docs);
        });
// Only changed code below this line.
        var newAddress = {street: 'Tower Hill', place: 'London', country: 'United Kingdom'};
        collection.update({street: 'Broadway 1'}, {$set: newAddress}, {safe: true}, function (err) {
            if (err) throw err;
// the following two lines was moved from collection.find() into collection.update(), 
    //  close DB after connection was established 
            client.close();
        });
// Only changed code above this line.
    });
});


/* Expected result and respond of mongoDB after execusion.
{ result: { ok: 1, n: 1 },
  ops: 
   [ { street: 'Broadway 1',
       place: 'New York',
       country: 'United States of Amerika',
       _id: 56a95768499cb9a2607f5fc3 } ],
  insertedCount: 1,
  insertedIds: [ 56a95768499cb9a2607f5fc3 ] }
[ { _id: 56a95768499cb9a2607f5fc3,
    street: 'Broadway 1',
    place: 'New York',
    country: 'United States of Amerika' } ]
*/