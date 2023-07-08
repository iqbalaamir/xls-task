const mongoose = require('mongoose');

const lobSchema = new mongoose.Schema({
  category_name: { type: String, required: true },
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
});

module.exports = mongoose.model('LOB', lobSchema);
