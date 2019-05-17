var express = require("express");
var path = require("path");

var PORT = process.env.PORT || 8000;
var app = express();
app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get("/survey", function(req, res) {
  res.sendFile(path.join(__dirname, "public/survey.html"));
});

app.listen(PORT, function() {
  console.log("app is listening");
});
