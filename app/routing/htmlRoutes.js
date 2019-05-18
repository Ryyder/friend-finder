//variable used for path package
var path = require("path");

module.exports = function(app) {

  //routes to our survey page
  app.get("/survey", function(req, res) {
    res.sendFile(path.join(__dirname, "/../public/survey.html"));
  });
  //routes to our home page
  app.use(function(req, res) {
    res.sendFile(path.join(__dirname, "/../public/index.html"));
  });

};