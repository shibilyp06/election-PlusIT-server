const mogoose = require("mongoose");

module.exports = mogoose
  .connect("mongodb://127.0.0.1:27017/ElectionDBS?")
  .then(() => {
    console.log("mongoosed connected");
  });
