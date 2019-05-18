var friends = require("../data/friends");

//module exports lets us use this in other js files
module.exports = function(app) {
  app.get("/api/friends", function(req, res) {
    return res.json(friends);
  });

  app.post("/api/friends", function(req, res) {
    console.log(req.body.scores);

  });
};