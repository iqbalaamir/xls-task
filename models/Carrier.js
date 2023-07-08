const mongoose = require('mongoose');

const carrierSchema = new mongoose.Schema({
  company_name: { type: String, required: true },
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
});

module.exports = mongoose.model('Carrier', carrierSchema);
