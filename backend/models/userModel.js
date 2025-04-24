const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  username: { type: String, required: true, unique: true },
  email: { type: String, required: true, unique: true },
  dateOfBirth: { type: Date, required: true },
  role: { type: String, enum: ['Admin', 'Explorer'], required: true },
  location: { type: String },
  password: { type: String, required: true },
});

const usermodel = mongoose.model("user" , userSchema);

module.exports = usermodel