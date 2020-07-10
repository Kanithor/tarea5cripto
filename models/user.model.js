const mongoose = require("mongoose");

const User = mongoose.model(
  "User",
  new mongoose.Schema({
    username: { type: String },
    email: String,
    password: String,
  })
);

module.exports = User;
