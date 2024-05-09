const express = require('express');
const router = express.Router();
const Product = require('../models/Product');
const validateProductId = require('../middlewares/validateProductId');
const handleApiKeyValidation = require('../middlewares/handleApiKeyValidation');
const setRequestId = require('../middlewares/setRequestId');

router.get('/:id', setRequestId, handleApiKeyValidation, validateProductId, async (req, res, next) => {
    try {
        const product = await Product.findById(req.params.id);
        if (!product) {
            return res.status(404).json({ message: 'Product not found' });
        }
        res.json(product);
    } catch (err) {
        next(err);
    }
});

module.exports = router;