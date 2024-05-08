const express = require('express');
const router = express.Router();
const Product = require('../models/Product');
const { validationResult } = require('express-validator');
const validateProductData = require('../middlewares/validateProductData');

router.post('/', validateProductData, async (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }

    try {
        const product = await Product.create(req.body);
        res.status(201).json(product);
    } catch (err) {
        next(err);
    }
});

module.exports = router;