const mongoose = require('mongoose');

const validateProductId = (req, res, next) => {
    const productId = req.params.id;
    if (!mongoose.Types.ObjectId.isValid(productId)) {
        return res.status(400).json({ message: 'Invalid Product ID' });
    }
    next();
};

module.exports = validateProductId;
