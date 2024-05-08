const express = require('express');
const router = express.Router();
const Product = require('../models/Product');

router.put('/:id', async (req, res, next) => {
    try {
        const product = await Product.findByIdAndUpdate(req.params.id, req.body);
        res.status(200).json(product);
    } catch (err) {
        next(err);
    }
});

module.exports = router;