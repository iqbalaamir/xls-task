const Carrier = require('../models/Carrier');

// Create a new Carrier
exports.createCarrier = async (req, res) => {
  try {
    const carrier = new Carrier(req.body);
    await carrier.save();
    res.status(201).json({ message: 'Carrier created successfully', data: carrier });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Get all Carriers
exports.getCarriers = async (req, res) => {
  try {
    const carriers = await Carrier.find();
    res.status(200).json({ data: carriers });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Get Carrier by ID
exports.getCarrier = async (req, res) => {
  try {
    const { id } = req.params;
    const carrier = await Carrier.findById(id);
    if (!carrier) return res.status(404).json({ message: 'Carrier not found' });
    res.status(200).json({ data: carrier });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Update Carrier by ID
exports.updateCarrier = async (req, res) => {
  try {
    const { id } = req.params;
    const carrier = await Carrier.findByIdAndUpdate(id, req.body, { new: true });
    if (!carrier) return res.status(404).json({ message: 'Carrier not found' });
    res.status(200).json({ message: 'Carrier updated successfully', data: carrier });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Delete Carrier by ID
exports.deleteCarrier = async (req, res) => {
  try {
    const { id } = req.params;
    const carrier = await Carrier.findByIdAndDelete(id);
    if (!carrier) return res.status(404).json({ message: 'Carrier not found' });
    res.status(200).json({ message: 'Carrier deleted successfully' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
