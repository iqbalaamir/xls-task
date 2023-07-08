const LOB = require('../models/LOB');

// Create a new LOB
exports.createLOB = async (req, res) => {
  try {
    const lob = new LOB(req.body);
    await lob.save();
    res.status(201).json({ message: 'LOB created successfully', data: lob });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Get all LOBs
exports.getLOBs = async (req, res) => {
  try {
    const lobs = await LOB.find();
    res.status(200).json({ data: lobs });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Get LOB by ID
exports.getLOB = async (req, res) => {
  try {
    const { id } = req.params;
    const lob = await LOB.findById(id);
    if (!lob) return res.status(404).json({ message: 'LOB not found' });
    res.status(200).json({ data: lob });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Update LOB by ID
exports.updateLOB = async (req, res) => {
  try {
    const { id } = req.params;
    const lob = await LOB.findByIdAndUpdate(id, req.body, { new: true });
    if (!lob) return res.status(404).json({ message: 'LOB not found' });
    res.status(200).json({ message: 'LOB updated successfully', data: lob });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Delete LOB by ID
exports.deleteLOB = async (req, res) => {
  try {
    const { id } = req.params;
    const lob = await LOB.findByIdAndDelete(id);
    if (!lob) return res.status(404).json({ message: 'LOB not found' });
    res.status(200).json({ message: 'LOB deleted successfully' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
