const express = require('express');
const router = express.Router();
const {
  createCarrier,
  getCarriers,
  getCarrier,
  updateCarrier,
  deleteCarrier
} = require('../controllers/carrierController');

/**
 * @swagger
 * tags:
 *   name: Carriers
 *   description: Carrier management endpoints
 */

/**
 * @swagger
 * /carriers:
 *   post:
 *     summary: Create a new carrier
 *     tags: [Carriers]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/definitions/Carrier'
 *     responses:
 *       201:
 *         description: Carrier created successfully
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/definitions/Carrier'
 *       500:
 *         description: Server error
 */
router.post('/', createCarrier);

/**
 * @swagger
 * /carriers:
 *   get:
 *     summary: Get all carriers
 *     tags: [Carriers]
 *     responses:
 *       200:
 *         description: List of carriers
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/definitions/Carrier'
 *       500:
 *         description: Server error
 */
router.get('/', getCarriers);

/**
 * @swagger
 * /carriers/{id}:
 *   get:
 *     summary: Get a carrier by ID
 *     tags: [Carriers]
 *     parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Carrier details
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/definitions/Carrier'
 *       404:
 *         description: Carrier not found
 *       500:
 *         description: Server error
 */
router.get('/:id', getCarrier);

/**
 * @swagger
 * /carriers/{id}:
 *   put:
 *     summary: Update a carrier by ID
 *     tags: [Carriers]
 *     parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         schema:
 *           type: string
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/definitions/Carrier'
 *     responses:
 *       200:
 *         description: Carrier updated successfully
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/definitions/Carrier'
 *       404:
 *         description: Carrier not found
 *       500:
 *         description: Server error
 */
router.put('/:id', updateCarrier);

/**
 * @swagger
 * /carriers/{id}:
 *   delete:
 *     summary: Delete a carrier by ID
 *     tags: [Carriers]
 *     parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Carrier deleted successfully
 *       404:
 *         description: Carrier not found
 *       500:
 *         description: Server error
 */
router.delete('/:id', deleteCarrier);

module.exports = router;
