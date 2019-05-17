var express = require("express");
var path = require("path");

var PORT = process.env.PORT || 8000;
var app = express();
app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

var friends = [
  {
    name: "Leonardo Di Caprio",
    photo: "",
    scores: [
      4, 
      5,
      2,
      3,
      4,
      2,
      1,
      3,
      5,
      3
    ]
  },
  {
    name: "Brad Pitt",
    photo: "",
    scores: [
      3, 
      4,
      4,
      1,
      2,
      4,
      2,
      5,
      1,
      2
    ]
  },
  {
    name: "Lady Gaga",
    photo: "",
    scores: [
      5, 
      4,
      1,
      4,
      3,
      1,
      2,
      5,
      4,
      1
    ]
  },
  {
    name: "Scarlett Johansson",
    photo: "",
    scores: [
      1, 
      2,
      4,
      5,
      1,
      4,
      2,
      1,
      1,
      1
    ]
  },
  {
    name: "George Clooney",
    photo: "",
    scores: [
      5, 
      2,
      4,
      1,
      2,
      4,
      3,
      2,
      4,
      2
    ]
  },
  {
    name: "Charlize Theron",
    photo: "",
    scores: [
      1, 
      1,
      1,
      4,
      5,
      1,
      1,
      4,
      2,
      1
    ]
  }
];