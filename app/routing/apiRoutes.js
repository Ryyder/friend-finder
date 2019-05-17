var express = require("express");
var path = require("path");

var PORT = process.env.PORT || 8000;
var app = express();
app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get("/api/friends", function(req, res) {
  return res.json({reservedTables, waitlist});
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