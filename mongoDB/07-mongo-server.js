// Step 7: Store JSON into MongoDB
// We use the extracted Array of 
// run this  ~/workspace/mongoDB (master) $ ./mongod  and in a second commandline $ node 07-mongo-server.js 

var Db = require("mongodb").Db,
    Server = require("mongodb").Server,
    jsony = require('./jsony'),
    movie;
    
var client = new Db('COG-01', new Server(process.env.IP, 27017,{}), {w: 1});


jsony.load('./movies.csv', function(e, raw) {
	jsony.convert(e, raw, function(e, result) {
	//console.log(result);
	movie = result;
	});
});

client.open(function (err, client) {
     if (err) throw err;
    client.createCollection('Movies', function (err, collection) {
        if (err) throw err;
      //  var movie = [{"title":"title","year":"year","director":"director","genres":"genres"},{"title":"The Artist","year":"2009","director":"Hazanavicius","genres":"Comedy,Drama"}];
        collection.insert(movie, {safe: true}, function (err, res) {
            if (err) throw err;
            console.log(res);
            client.close();
        });
    });
});