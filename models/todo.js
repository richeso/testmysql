var connection = require('../connection');

function Todo() {
  this.get = function(res) {
    connection.acquire(function(err, con) {
      con.query('select * from todo_list', function(err, result) {
        con.release();
        res.send(result);
      });
    });
  };

  this.create = function(req, res) {
	var todo = req.body;
    var todostr = JSON.stringify(todo); 
    console.log("creating todo item: "+todostr);  
    connection.acquire(function(err, con) {
    	con.query('insert into todo_list set ?', todo, function(err, result) {
        con.release();
        if (err) {
          res.send({status: 1, message: 'TODO creation failed ' + err + result});
        } else {
          res.send({status: 0, message: 'TODO created successfully'});
        }
      });
    });
  };
  
  this.update = function(req, res) {
    var todo = req.body;
	var todostr = JSON.stringify(todo); 
	console.log("Updating todo item: "+todostr);
    connection.acquire(function(err, con) {
      con.query('update todo_list set ? where id = ?', [todo, todo.id], function(err, result) {
        con.release();
        if (err) {
          res.send({status: 1, message: 'TODO update failed'+err+result});
        } else {
          res.send({status: 0, message: 'TODO updated successfully'});
        }
      });
    });
  };

  this.delete = function(req, res) {
	var id = req.params.id;
	console.log("deleting item: "+id);
    connection.acquire(function(err, con) {
      con.query('delete from todo_list where id = ?', [id], function(err, result) {
        con.release();
        if (err) {
          res.send({status: 1, message: 'Failed to delete '+id + err + result});
        } else {
          res.send({status: 0, message: 'Deleted successfully'});
        }
      });
    });
  };
}

module.exports = new Todo();
