const express = require('express');
const router = express.Router();
const Product = require('../models/Product');
const getProducts = require('./getProducts');
const createProduct = require('./createProduct');
const updateProduct = require('./updateProduct');
const deleteProduct = require('./deleteProduct');
const getProductById = require('./getProductById');

router.get('/', getProducts);
router.get('/:id', getProductById, (req, res) => { res.json(req.product);});
router.post('/', createProduct);
router.put('/:id', getProductById, updateProduct);
router.delete('/:id', getProductById, deleteProduct);

module.exports = router;