const mongoose = require('mongoose');

const ProductSchema = new mongoose.Schema({

    product_name: { type: String, required: true },
    product_desc: { type: String, required: true },
    product_price: { type: Number, required: true },
    created_at: { type: Date, default: Date.now },  
    
})

module.exports = mongoose.model('Product', ProductSchema)