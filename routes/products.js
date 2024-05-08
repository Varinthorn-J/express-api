const express = require('express');
const router = express.Router();
const Product = require('../models/Product');
const mongoose = require('mongoose');

router.get('/', (req, res, next) => {
    Product.find().then(products => {
        res.json(products);
    }).catch(err => {
        next(err);
    });
});

router.get('/:id', (req, res, next) => {
    Product.findById(req.params.id).then(products => {
        res.json(products);
    }).catch(err => {
        next(err);
    });
});

router.post('/', async (req, res, next) => {
    try {
        const product = await Product.create(req.body);
        res.status(201).json(product);
    } catch (err) {
        next(err);
    }
});

router.put('/:id', async (req, res, next) => {
    try {
        const product = await Product.findByIdAndUpdate(req.params.id, req.body);
        res.status(200).json(product);
    } catch (err) {
        next(err);
    }
});

router.delete('/:id', async (req, res, next) => {
    try {
        const product = await Product.findByIdAndDelete(req.params.id);
        res.status(200).json(product);
    } catch (err) {
        next(err);
    }
});

module.exports = router;