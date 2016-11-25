var todo = require('./models/todo');

module.exports = {
  configure: function(app) {
    app.get('/todo/', function(req, res) {
      todo.get(res);
    });

    app.post('/todo/', function(req, res) {
      todo.create(req, res);
    });
    
    app.put('/todo/', function(req, res) {
      todo.update(req, res);
    });

    app.delete('/todo/:id/', function(req, res) {
      todo.delete(req, res);
    });
  }
};
