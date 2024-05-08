const express = require('express');
const router = express.Router();
const Product = require('../models/Product');
const setRequestId = require('../middlewares/setRequestId');
const handleApiKeyValidation = require('../middlewares/handleApiKeyValidation');
const { handleValidationErrors } = require('../middlewares/validateProductData');

router.delete('/:id' ,setRequestId, handleApiKeyValidation, handleValidationErrors, async (req, res, next) => {
    try {
        const product = await Product.findByIdAndDelete(req.params.id);
        res.status(200).json(product);
    } catch (err) {
        next(err);
    }
});

module.exports = router;