const express = require('express');
const router = express.Router();
const Product = require('../models/Product');
const { validateProductData, handleValidationErrors } = require('../middlewares/validateProductData');
const handleApiKeyValidation = require('../middlewares/handleApiKeyValidation');
const setRequestId = require('../middlewares/setRequestId');

router.put('/:id', setRequestId, handleApiKeyValidation, validateProductData, handleValidationErrors, async (req, res, next) => {
    try {
        const product = await Product.findByIdAndUpdate(req.params.id, req.body);
        res.status(200).json(product);
    } catch (err) {
        next(err);
    }
});

module.exports = router;