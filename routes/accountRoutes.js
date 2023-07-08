const express = require('express');
const router = express.Router();
const {
  createAccount,
  getAccounts,
  getAccount,
  updateAccount,
  deleteAccount
} = require('../controllers/accountController');

/**
 * @swagger
 * tags:
 *   name: Accounts
 *   description: Account management endpoints
 */

/**
 * @swagger
 * /accounts:
 *   post:
 *     summary: Create a new account
 *     tags: [Accounts]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/definitions/Account'
 *     responses:
 *       200:
 *         description: Account created successfully
 *       500:
 *         description: Server error
 */
router.post('/', createAccount);

/**
 * @swagger
 * /accounts:
 *   get:
 *     summary: Get all accounts
 *     tags: [Accounts]
 *     responses:
 *       200:
 *         description: List of accounts
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/definitions/Account'
 *       500:
 *         description: Server error
 */
router.get('/', getAccounts);

/**
 * @swagger
 * /accounts/{id}:
 *   get:
 *     summary: Get an account by ID
 *     tags: [Accounts]
 *     parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Account details
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/definitions/Account'
 *       404:
 *         description: Account not found
 *       500:
 *         description: Server error
 */
router.get('/:id', getAccount);

/**
 * @swagger
 * /accounts/{id}:
 *   put:
 *     summary: Update an account by ID
 *     tags: [Accounts]
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
 *             $ref: '#/definitions/Account'
 *     responses:
 *       200:
 *         description: Account updated successfully
 *       404:
 *         description: Account not found
 *       500:
 *         description: Server error
 */
router.put('/:id', updateAccount);

/**
 * @swagger
 * /accounts/{id}:
 *   delete:
 *     summary: Delete an account by ID
 *     tags: [Accounts]
 *     parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Account deleted successfully
 *       404:
 *         description: Account not found
 *       500:
 *         description: Server error
 */
router.delete('/:id', deleteAccount);

module.exports = router;
