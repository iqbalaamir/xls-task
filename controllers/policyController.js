const Policy = require('../models/Policy');

// Create a new Policy
exports.createPolicy = async (req, res) => {
  try {
    const policy = new Policy(req.body);
    await policy.save();
    res.status(201).json({ message: 'Policy created successfully', data: policy });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Get all Policies
exports.getPolicies = async (req, res) => {
  try {
    const policies = await Policy.find();
    res.status(200).json({ data: policies });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Get Policy by ID
exports.getPolicy = async (req, res) => {
  try {
    const { id } = req.params;
    const policy = await Policy.findById(id);
    if (!policy) {
      return res.status(404).json({ message: 'Policy not found' });
    }
    res.status(200).json({ data: policy });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Update Policy by ID
exports.updatePolicy = async (req, res) => {
  try {
    const { id } = req.params;
    const policy = await Policy.findByIdAndUpdate(id, req.body, { new: true });
    if (!policy) {
      return res.status(404).json({ message: 'Policy not found' });
    }
    res.status(200).json({ message: 'Policy updated successfully', data: policy });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Delete Policy by ID
exports.deletePolicy = async (req, res) => {
  try {
    const { id } = req.params;
    const policy = await Policy.findByIdAndDelete(id);
    if (!policy) {
      return res.status(404).json({ message: 'Policy not found' });
    }
    res.status(200).json({ message: 'Policy deleted successfully' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
