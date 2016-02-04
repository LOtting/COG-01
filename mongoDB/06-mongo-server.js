// Step 6: Store Array into MongoDB
// We use the extracted Array of the RDD tutorial.
var Db = require("mongodb").Db,
    Server = require("mongodb").Server;
    
var client = new Db('COG-01', new Server(process.env.IP, 27017,{}), {w: 1});
client.open(function (err, client) {
     if (err) throw err;
    client.createCollection('Movies', function (err, collection) {
        if (err) throw err;
// Only changed code below this line.
        var movie = [{"title":"title","year":"year","director":"director","genres":"genres"},{"title":"The Artist","year":"2009","director":"Hazanavicius","genres":"Comedy,Drama"}];
        collection.insert(movie, {safe: true}, function (err, res) {
            if (err) throw err;
            console.log(res);
    // the following two lines was moved from client.createCollection() into collection.insert(), 
    //  close DB after connection was established 
            client.close();
        });
// Only changed code above this line.
        
    });
});