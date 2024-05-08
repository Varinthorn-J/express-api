const express = require('express');
const router = express.Router();
const Product = require('../models/Product');
const validateProductId = require('../middlewares/validateProductId');

router.get('/:id',validateProductId, async (req, res, next) => {
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