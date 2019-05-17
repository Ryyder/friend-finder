//variable used for path package
var path = require("path");
//routes to our home page
app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());


//routes to our survey page
app.get("/survey", function(req, res) {
  res.sendFile(path.join(__dirname, "/../public/survey.html"));
});