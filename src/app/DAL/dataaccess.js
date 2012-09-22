var mongo = require('mongodb'),
  Server = mongo.Server,
  Db = mongo.Db;

module.exports = function() {
  // todo: consider move these params to config
  var server = new Server('localhost', 27017, {auto_reconnect: true});
  var db = new Db('e-gmfy', server);
  return db;
}