const express = require('express');
const router = express.Router();
const Product = require('../models/Product');

router.delete('/:id', async (req, res, next) => {
    try {
        const product = await Product.findByIdAndDelete(req.params.id);
        res.status(200).json(product);
    } catch (err) {
        next(err);
    }
});

module.exports = router;