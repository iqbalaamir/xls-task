const mongoose = require('mongoose');

const accountSchema = new mongoose.Schema({
  account_name: { type: String, required: true },
  email: { type: String },
  account_type: { type: String },
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
});

module.exports = mongoose.model('Account', accountSchema);
