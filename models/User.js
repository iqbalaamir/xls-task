const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  email: { type: String, required: true },
  gender: { type: String },
  firstname: { type: String },
  city: { type: String },
  account_type: { type: String },
  phone: { type: String },
  address: { type: String },
  state: { type: String },
  zip: { type: String },
  dob: { type: Date },
  primary: { type: String },
  agent: { type: mongoose.Schema.Types.ObjectId, ref: 'Agent' },
});

module.exports = mongoose.model('User', userSchema);
