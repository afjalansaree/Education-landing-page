const mongoose = require("mongoose");
const express = require("express");
const fs = require("fs");
const path = require("path");

const app = express();
const port = 3000;
app.use(express.urlencoded({ extended: true }));
const User = require("./model/user");

const webpath = path.join(__dirname, "/public");

mongoose
  .connect("mongodb://localhost:27017/Education")
  .then(() => {
    console.log("DataBase Connected");
  })
  .catch((e) => {
    console.log(e);
    console.log("DataBase Con't Connected");
  });

app.use("/", express.static(webpath));

app.post("/", async (req, res) => {
  const userData = new User(req.body);
  await userData.save();
  // const data = fs.readFileSync('/success.html');
  res.redirect('http://localhost:3000/success.html')
});

app.listen(port, () => {
  console.log("App Running", port);
});
