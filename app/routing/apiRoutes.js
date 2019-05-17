var friends = require("../data/friends");

app.get("/api/friends", function(req, res) {
  return res.json(friends);
});

app.post("/api/friends", function(req, res) {
  // req.body hosts is equal to the JSON post sent from the user
  // This works because of our body parsing middleware

  /* if (reservedTables.length < 5) {
    var newTable = req.body;
    reservedTables.push(newTable);
    console.log("Your table is ready");
  }
  else {
    var newTable = req.body;
    waitlist.push(newTable);
    console.log("You have been added to the waitlist");
  }

  console.log(newTable);
  res.json(newTable); */
});