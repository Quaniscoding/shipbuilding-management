const mongoose = require('mongoose');

const projectSchema = new mongoose.Schema({
    customer_id: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
    project_name: String,
    ship_type: String,
    status: { type: String, enum: ['waiting', 'in_progress', 'completed', 'cancelled'], default: 'waiting' },
    start_date: Date,
    estimated_end_date: Date,
    current_phase: String,
    notes: String,
}, { timestamps: true });

module.exports = mongoose.model('Project', projectSchema);