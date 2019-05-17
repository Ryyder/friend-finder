var express = require("express");
var path = require("path");

var PORT = process.env.PORT || 3000;
var app = express();
app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get("/survey", function(req, res) {
  res.sendFile(path.join(__dirname, "public/survey.html"));
});

app.post("/api/survey", function(req, res){
  console.log("survey was received");
  console.log(req.body);
  res.send("Server heard you");
});

app.listen(PORT, function() {
  console.log("app is listening");
});

