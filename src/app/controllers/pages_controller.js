var locomotive = require('locomotive')
  , Controller = locomotive.Controller;

var DA = require('../DAL/dataaccess');

function logName(name) {
  var db = DA();
  db.open(function(err, db) {
    if(!err) {
      db.collection('greetings', function(err, collection) {
        collection.insert({name:name});
      });
    }
  });	
}

var PagesController = new Controller();

PagesController.main = function() {
  var name = this.param('name') ? this.param('name') : 'World';

  logName(name);
  
  this.message = 'Hello, ' + name + '!';
  this.render();
}

module.exports = PagesController;
