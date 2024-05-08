const express = require('express');
const router = express.Router();
const Product = require('../models/Product');

router.post('/', async (req, res, next) => {
    try {
        const product = await Product.create(req.body);
        res.status(201).json(product);
    } catch (err) {
        next(err);
    }
});

module.exports = router;