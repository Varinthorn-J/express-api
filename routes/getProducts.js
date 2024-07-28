const express = require('express');
const router = express.Router();
const Product = require('../models/Product');
const handleApiKeyValidation = require('../middlewares/handleApiKeyValidation');
const setRequestId = require('../middlewares/setRequestId');

router.get('/', setRequestId, handleApiKeyValidation, async (req, res, next) => {
    try {
        const products = await Product.find();
        if (products == []) {
            return res.status(404).json({ message: 'Products not found' });
        }
        res.json(products);
    } catch (err) {
        next(err);
    }
});

module.exports = router;