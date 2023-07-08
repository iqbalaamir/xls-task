const express = require('express');
const router = express.Router();
const {
  createPolicy,
  getPolicies,
  getPolicy,
  updatePolicy,
  deletePolicy
} = require('../controllers/policyController');

/**
 * @swagger
 * tags:
 *   name: Policies
 *   description: Policy management endpoints
 */

/**
 * @swagger
 * /policies:
 *   post:
 *     summary: Create a new policy
 *     tags: [Policies]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/definitions/Policy'
 *     responses:
 *       200:
 *         description: Policy created successfully
 *       500:
 *         description: Server error
 */
router.post('/', createPolicy);

/**
 * @swagger
 * /policies:
 *   get:
 *     summary: Get all policies
 *     tags: [Policies]
 *     responses:
 *       200:
 *         description: List of policies
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/definitions/Policy'
 *       500:
 *         description: Server error
 */
router.get('/', getPolicies);

/**
 * @swagger
 * /policies/{id}:
 *   get:
 *     summary: Get a policy by ID
 *     tags: [Policies]
 *     parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Policy details
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/definitions/Policy'
 *       404:
 *         description: Policy not found
 *       500:
 *         description: Server error
 */
router.get('/:id', getPolicy);

/**
 * @swagger
 * /policies/{id}:
 *   put:
 *     summary: Update a policy by ID
 *     tags: [Policies]
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
 *             $ref: '#/definitions/Policy'
 *     responses:
 *       200:
 *         description: Policy updated successfully
 *       404:
 *         description: Policy not found
 *       500:
 *         description: Server error
 */
router.put('/:id', updatePolicy);

/**
 * @swagger
 * /policies/{id}:
 *   delete:
 *     summary: Delete a policy by ID
 *     tags: [Policies]
 *     parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Policy deleted successfully
 *       404:
 *         description: Policy not found
 *       500:
 *         description: Server error
 */
router.delete('/:id', deletePolicy);

module.exports = router;
