const mongoose = require("mongoose");
const Schema = mongoose.Schema;

//Create Schema
const UserSChema = new Schema({
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  },
  avatar: {
    type: String
  },
  date: {
    type: Date,
    deafult: Date.now
  }
});

module.exports = User = mongoose.model("users", UserSChema);
