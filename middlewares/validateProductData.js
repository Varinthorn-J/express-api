const { body } = require('express-validator');

const validateProductData = [
    body('product_name').notEmpty().withMessage('Product name is required'),
    body('product_desc').notEmpty().withMessage('Product description is required'),
    body('product_price').notEmpty().withMessage('Product price is required').isNumeric().withMessage('Product price must be a number')
];

module.exports = validateProductData;