/*  
 *   MongoDB CRUD Operations
 *   MongoDB provides rich semantics for reading and manipulating data. 
 *   CRUD stands for create, read, update, and delete.
 *   These terms are the foundation for all interactions with the database.
 */

//  Step 1: Create 
//  Methods: client.open(), client.createCollection()
//  Establish a connection to "COG-01" database and create a Collection named "Addresses" .

var Db = require("mongodb").Db,
    Server = require("mongodb").Server;
    // On your own Linux-Server you do not need "process.env.IP" this is Cloud9 specific, 
    // instead you would use an IP-Address like ("127.0.0.1").*
    // In general: new Server("IP", Port,{})**
    // Sample: new Server("127.0.0.1", 27017,{})
var client = new Db('COG-01', new Server(process.env.IP, 27017,{}), {w: 1});
client.open(function (err, client) {
    if (err) throw err;
    client.createCollection('Addresses', function (err, collection) {
        if (err) throw err;
    // Step 1.a
        // console.log(collection);
        
    // Collection shows us
    // dbName: 'COG-01',
    // namespace: 'COG-01.Addresses',
    // name: 'Addresses',
    
    
    // close DB after connection was established 
        client.close();
    });
});



// *  Why Is the Localhost IP 127.0.0.1?
// http://www.howtogeek.com/126304/why-is-the-localhost-ip-127.0.0.1/
// ** If you start mongod (the MongoDB Deamon) than you will get the Port number!
// $ mongod
// MongoDB starting : pid=18683 port=27017 dbpath=/data/db 64-bit
