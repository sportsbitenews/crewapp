var Database = require ('/database/config.js');

module.exports = function(app){
  // Add new user account to database
  app.post('/addnewuser', function(req, res){
    Database.Users.create ({
      name: req.body.username
    })
  });

  // Add new message to database
  app.post('/addnewmessage', function(req, res){
    Database.Messages.create ({
      message: req.body.message,
      // timestamp
      // userid?
    })
  })
}
