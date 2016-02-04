//  Step 2: Insert
//  Method: collection.insert()
//  Insert Document(address Object) into the Collection "Addresses" at COG-01 MongoDB Database

var Db = require("mongodb").Db,
    Server = require("mongodb").Server;
    
var client = new Db('COG-01', new Server(process.env.IP, 27017,{}), {w: 1});
client.open(function (err, client) {
     if (err) throw err;
    client.createCollection('Addresses', function (err, collection) {
        if (err) throw err;
// Only changed code below this line.
        var address = {
            street: 'Broadway 1',
            place: 'New York',
            country: 'United States of Amerika'
        };
        collection.insert(address, {safe: true}, function (err, res) {
            if (err) throw err;
            console.log(res);
    // the following two lines was moved from client.createCollection() into collection.insert(), 
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
       _id: 56a8db5f91c583435286eb91 } ],
  insertedCount: 1,
  insertedIds: [ 56a8db5f91c583435286eb91 ] }
*/