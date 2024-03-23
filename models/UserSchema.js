const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  phoneNumber: {
    type: Number,
    required: true,
  },
  dateOfBirth: {
    type: Date,
    required: true,
  },
  assembly: {
    type: String,
    required: true,
  },
  constituency: {
    type: String,
    required: true,
  },
  district: {
    type: String,
    required: true,
  },
  panchayath: {
    type: String,
  },
  municipality: {
    type: String,
  },
  corporation: {
    type: String,
  },
});

const UserModel = new mongoose.model("User", userSchema);

module.exports = UserModel;
