const { body, validationResult } = require('express-validator');

const validateProductData = [
    body('product_name').notEmpty().withMessage('Product name is required'),
    body('product_desc').notEmpty().withMessage('Product description is required'),
    body('product_price').notEmpty().withMessage('Product price is required').isNumeric().withMessage('Product price must be a number')
];

const handleValidationErrors = (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        const formattedErrors = errors.array().map(error => {
            return {
                code: 400,
                type: 'Schema Invalid',
                description: error.msg,
                detail: error.param,
                traceId: req.headers['x-request-id']
            };
        });
        return res.status(400).json({ errors: formattedErrors });
    }
    next();
};

module.exports = { validateProductData, handleValidationErrors };
