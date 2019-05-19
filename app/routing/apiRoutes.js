var friends = require("../data/friends");

//module exports lets us use this in other js files
module.exports = function(app) {
  app.get("/api/friends", function(req, res) {
    return res.json(friends);
  });

  app.post("/api/friends", function(req, res) {
    console.log(req.body.scores);

    var newUser = req.body;

    //convert our score strings to integers
    for(var i = 0; i < newUser.scores.length; i++) {
      newUser.scores[i] = parseInt(user.scores[i]);
    }
    
  var bestMatch;
  var currentBest = 100;
  var maxDiff = [];
  for (i = 0; i < friends.length; i++) {
    var currentFriend = friends[i].scores;
    console.log(currentFriend)
    for (var j = 0; j < currentFriend.length; j++) {
       maxDiff.push(Math.abs(currentFriend[j] - testArr[j]));
       var total =  maxDiff.reduce((a, b) => a + b)
    }
    
    maxDiff = [];
    if(total < currentBest) {
     currentBest = total;
     bestMatch = friends[i];
    }
    
  }

  });
};