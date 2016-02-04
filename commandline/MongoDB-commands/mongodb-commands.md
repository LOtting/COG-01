# MongoDB Commands

The mongo shell is an interactive JavaScript interface to MongoDB.
You can use the mongo shell to query and update data as well as perform administrative operations.

## [Setting Up MongoDB at Cloud9](https://docs.c9.io/docs/setting-up-mongodb)

MongoDB is preinstalled in your workspace.

### Setting Up MongoDB
Command                     |   Explanation
----------------------------|   ----------------
$ npm install mongodb       |   In your project folder you need the [MongoDB NPM Package](https://www.npmjs.com/package/mongodb)
$ mkdir data                |   Mongodb "data" will be stored in the folder "data".
$ echo 'mongod --bind_ip=$IP --dbpath=data --nojournal --rest "$@"' > mongod |   To run MongoDB, run this  (passing the correct parameters to it).
$ chmod a+x mongod          | make mongod executable
|||
$ ./mongod                  |   You can start MongoDB by running the "mongod" script on your project root.
|||

### MongoDB interactive Shell
Command                     |   Explanation
----------------------------|   ----------------
$ mongo                     |   In a second terminal run this after ./mongod is executed
> show dbs                  |   List all databases
> use [yourDB]              |   Switch to "yourDB" as a general rule
> use COG-01                |   Answer "switched to db COG-01"
> show collections          |   Answer e.g. "Addresses system.indexes"
> db.createCollection("unicorn")  | Create a collection with the name "unicorn"
|||
> db.[collection].[function]    |   As a general rule
|||
> db.Addresses.insert() |   Add documents(data objects) to "Addresses" collection
> db.unicorns.insert({name: 'Aurora', gender: 'f', weight: 450})    |   Sample
> db.unicorns.insert({name: 'Leto', gender: 'm', weight: 585})    |   Sample
|||
> db.Addresses.find()       |   Read data of "Adresses" collection, returns stored documents
> db.Addresses.find().pretty()  |   Returns stored documents in human readable format
> db.unicorns.find({gender: 'm', weight: {$gt: 300}})   | sample
> db.unicorns.find().sort({weight: -1}) |  Sample, shows heaviest "Unicorns" first
|||
> db.Addresses.update() |   Overwrite existing document with a new document 
> db.unicorns.update({name: 'Aurora'}, {weight: 480})  |   sample
|||
> db.Addresses.remove() |   [Delete(remove) Existing Document](https://docs.mongodb.org/manual/reference/method/db.collection.remove/)
> db.unicorns.remove({})    |   Remove/Reset all documents from a "Unicorns" collection
> db.unicorns.remove({name: 'Aurora'}) |    Delete(remove) "Aurora" document

"It's not my fault the chapters are short, MongoDB is just easy to learn." Karl Seguin

[The Little MongoDB Book](http://openmymind.net/2011/3/28/The-Little-MongoDB-Book/)
and on [GitHub](https://github.com/karlseguin/the-little-mongodb-book) by Karl Seguin

[A Gist of MongoDB Book at "byplayer/study.js"](https://gist.github.com/byplayer/458dfc02a481b521b474)

[MongoDB Reference Cards](https://s3.amazonaws.com/info-mongodb-com/mongodb_qrc_booklet.pdf)

[MongoDB CRUD Introduction](https://docs.mongodb.org/v2.6/core/crud-introduction/)

[The MongoDB 2.6 Manual](https://docs.mongodb.org/v2.6/) 
Version 2.6 is currently preinstalled at Cloud9.
