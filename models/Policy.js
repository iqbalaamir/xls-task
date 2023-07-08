const mongoose = require('mongoose');

const policySchema = new mongoose.Schema({
  policy_mode: { type: String },
  policy_number: { type: String },
  premium_amount_written: { type: Number },
  premium_amount: { type: Number },
  policy_type: { type: String },
  company_name: { type: String },
  category_name: { type: String },
  policy_start_date: { type: Date },
  policy_end_date: { type: Date },
  csr: { type: String },
  account: { type: mongoose.Schema.Types.ObjectId, ref: 'Account' },
  lob: { type: mongoose.Schema.Types.ObjectId, ref: 'LOB' },
  carrier: { type: mongoose.Schema.Types.ObjectId, ref: 'Carrier' },
});

module.exports = mongoose.model('Policy', policySchema);
