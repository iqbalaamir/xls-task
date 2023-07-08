const express = require('express');
const router = express.Router();

// Import routes
const userRoutes = require('./userRoutes');
const accountRoutes = require('./accountRoutes');
const lobRoutes = require('./lobRoutes');
const carrierRoutes = require('./carrierRoutes');
const policyRoutes = require('./policyRoutes');
const uploadRoutes = require('./uploadRoutes');

// Mount routes
router.use('/users', userRoutes);
router.use('/accounts', accountRoutes);
router.use('/lobs', lobRoutes);
router.use('/carriers', carrierRoutes);
router.use('/policies', policyRoutes);
router.use('/upload', uploadRoutes);

module.exports = router;
