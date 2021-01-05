//jshint esversion:6
"use strict";

const express = require("express");
const bodyParser = require("body-parser");

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", function (req, res) {
  res.sendFile(__dirname + "/index.html");
});

app.post("/", function (req, res) {
  let height = Number(req.body.height);
  let weight = Number(req.body.weight);

  let bmi = weight / height ** 2;
  bmi = bmi.toFixed(2);

  res.send(`Your BMI is ${bmi}`);
});

app.listen(3000);
