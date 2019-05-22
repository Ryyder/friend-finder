var friends = require("../data/friends");

//module exports lets us use this in other js files
module.exports = function(app) {
  app.get("/api/friends", function(req, res) {
    return res.json(friends);
  });

  //handles post from client
  app.post("/api/friends", function(req, res) {
    console.log(req.body.scores);

    var newUser = req.body;

    //convert our score strings to integers
    for(var i = 0; i < newUser.scores.length; i++) {
      newUser.scores[i] = parseInt(newUser.scores[i]);
    }
    

    var bestMatch;
    var currentBest = 100;
    var maxDiff = [];
    //we need to loop through our friend array
    for (i = 0; i < friends.length; i++) {
      var currentFriend = friends[i].scores;
      console.log(currentFriend)
      //nested loop will loop through the scores array within our friend array
      for (var j = 0; j < currentFriend.length; j++) {
        //our total difference
        maxDiff.push(Math.abs(currentFriend[j] - newUser.scores[j]));
        //add our total difference values and store in total
        var total =  maxDiff.reduce((a, b) => a + b)
      }
      //clear out our array
      maxDiff = [];
      //if our total is less than currentBest, set our current best to total, and set our best match to that ith friend (friend[i])
      if(total < currentBest) {
       currentBest = total;
       bestMatch = friends[i];
      }
      
    }

  //push newUser after finding match
  friends.push(newUser);

  console.log(bestMatch);
  //sends this best match back to the client
  res.json(bestMatch);

  });


};