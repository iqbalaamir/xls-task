const express = require('express');
const router = express.Router();
const {
  createLOB,
  getLOBs,
  getLOB,
  updateLOB,
  deleteLOB
} = require('../controllers/lobController');

/**
 * @swagger
 * tags:
 *   name: LOBs
 *   description: Line of Business management endpoints
 */

/**
 * @swagger
 * /lobs:
 *   post:
 *     summary: Create a new Line of Business (LOB)
 *     tags: [LOBs]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/definitions/LOB'
 *     responses:
 *       201:
 *         description: LOB created successfully
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/definitions/LOB'
 *       500:
 *         description: Server error
 */
router.post('/', createLOB);

/**
 * @swagger
 * /lobs:
 *   get:
 *     summary: Get all Line of Businesses (LOBs)
 *     tags: [LOBs]
 *     responses:
 *       200:
 *         description: List of LOBs
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/definitions/LOB'
 *       500:
 *         description: Server error
 */
router.get('/', getLOBs);

/**
 * @swagger
 * /lobs/{id}:
 *   get:
 *     summary: Get a Line of Business (LOB) by ID
 *     tags: [LOBs]
 *     parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: LOB details
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/definitions/LOB'
 *       404:
 *         description: LOB not found
 *       500:
 *         description: Server error
 */
router.get('/:id', getLOB);

/**
 * @swagger
 * /lobs/{id}:
 *   put:
 *     summary: Update a Line of Business (LOB) by ID
 *     tags: [LOBs]
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
 *             $ref: '#/definitions/LOB'
 *     responses:
 *       200:
 *         description: LOB updated successfully
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/definitions/LOB'
 *       404:
 *         description: LOB not found
 *       500:
 *         description: Server error
 */
router.put('/:id', updateLOB);

/**
 * @swagger
 * /lobs/{id}:
 *   delete:
 *     summary: Delete a Line of Business (LOB) by ID
 *     tags: [LOBs]
 *     parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: LOB deleted successfully
 *       404:
 *         description: LOB not found
 *       500:
 *         description: Server error
 */
router.delete('/:id', deleteLOB);

module.exports = router;