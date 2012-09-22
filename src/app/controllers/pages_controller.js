var locomotive = require('locomotive')
  , Controller = locomotive.Controller;

var PagesController = new Controller();

PagesController.main = function() {
  var name = this.param('name') ? this.param('name') : 'World';
  this.message = 'Hello, ' + name + '!';
  this.render();
}

module.exports = PagesController;
