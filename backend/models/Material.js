const mongoose = require('mongoose');

const materialSchema = new mongoose.Schema({
    name: String,
    unit: String,
    quantity_in_stock: Number,
    reorder_threshold: Number,
    last_updated: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Material', materialSchema);