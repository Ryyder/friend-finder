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
      newUser.scores[i] = parseInt(newUser.scores[i]);
    }
    
  //set currentBest value
  var currentBest = 100;
  //set default friend as first friend, however the best match will be the minimum difference of the scores added together
  var bestie = 0;
  //outer for-loop, loops through the friends array
  for(var i = 0; i < friends.length; i++) {
    var total = 0;
    //inner for-loop loops through scores array
    for(var j = 0; j < friends[i].scores.length; j++) {
      //take the absolute difference of the newUsers score - friends score
      var minDiff = Math.abs(newUser.scores[j] - friends[i].scores[j]);
      //increment total by the minDiff
      total += minDiff; 
    }
  }

  //compare total value to currentBest, if total is less than current best, bestie holds that ith friend and sets total to currentBest
  if (total < currentBest) {
    bestie = i;
    currentBest = total;
  }

  //push newUser after finding match
  friends.push(newUser);
  //sends this best match back to the client
  res.json(friends[bestie]);

  });


};