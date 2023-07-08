const express = require('express');
const router = express.Router();
const multer = require('multer');
const uploadController = require('../controllers/uploadController');

const storage = multer.diskStorage({
    destination: function(req, file, cb) {
        cb(null, 'uploads/');
    },
    filename: function(req, file, cb) {
        cb(null, Date.now() + '-' + file.originalname);
    }
});

const upload = multer({ storage: storage });

/**
 * @swagger
 * tags:
 *   name: Upload
 *   description: File upload endpoints
 */
/**
 * @swagger
 * /upload:
 *   post:
 *     summary: Upload a CSV file
 *     tags: [Upload]
 *     requestBody:
 *       required: true
 *       content:
 *         multipart/form-data:
 *           schema:
 *             type: object
 *             properties:
 *               file:
 *                 type: string
 *                 format: binary
 *     responses:
 *       200:
 *         description: File uploaded successfully
 *       500:
 *         description: Server error
 */
router.post('/', upload.single('file'), uploadController.uploadCSV);


module.exports = router;
