//  Step 3: Find
//  Method: collection.find()
//  Read the Documents of the Collection 
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
// Only changed code below this line.
        collection.find().toArray(function (err, docs) {
            if (err) throw err;
            console.log(docs);
// the following two lines was moved from collection.insert() into collection.find(), 
    //  close DB after connection was established 
            client.close();
        })
// Only changed code above this line.
        
    });
});


/* Expected result and respond of mongoDB after execusion.
{ result: { ok: 1, n: 1 },
  ops: 
   [ { street: 'Broadway 1',
       place: 'New York',
       country: 'United States of Amerika',
       _id: 56a93fda2a762015586b634e } ],
  insertedCount: 1,
  insertedIds: [ 56a93fda2a762015586b634e ] }
[ { _id: 56a8db5f91c583435286eb91,
    street: 'Broadway 1',
    place: 'New York',
    country: 'United States of Amerika' }]
*/