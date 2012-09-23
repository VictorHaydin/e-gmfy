var locomotive = require('locomotive')
  , Controller = locomotive.Controller;

var DA = require('../DAL/dataaccess');

function logName(name) {
  var da = DA();
  da.saveGreeting(name);
}

function getGreetings(callback) {
  var da = DA();
  da.getGreetings(callback);
}

var PagesController = new Controller();

PagesController.main = function() {
  var name = this.param('name') ? this.param('name') : 'World';

  logName(name);
  
  this.message = 'Hello, ' + name + '!';

  var self = this;
  getGreetings(function(greetings) {
    this.greetings = greetings;
    self.render();
  });
}

module.exports = PagesController;
