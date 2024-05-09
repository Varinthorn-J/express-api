const express = require('express');
const router = express.Router();
const Product = require('../models/Product');
const { validateProductData, handleValidationErrors } = require('../middlewares/validateProductData');
const setRequestId = require('../middlewares/setRequestId');
const handleApiKeyValidation = require('../middlewares/handleApiKeyValidation');

router.post('/', setRequestId, handleApiKeyValidation, validateProductData, handleValidationErrors, async (req, res, next) => {
    try {
        const product = await Product.create(req.body);
        res.status(201).json(product);
    } catch (err) {
        next(err);
    }
});

module.exports = router;