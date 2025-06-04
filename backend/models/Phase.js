const mongoose = require('mongoose');

const phaseSchema = new mongoose.Schema({
    project_id: { type: mongoose.Schema.Types.ObjectId, ref: 'Project' },
    name: String,
    status: { type: String, enum: ['not_started', 'in_progress', 'done'], default: 'not_started' },
    start_date: Date,
    end_date: Date,
    assigned_employees: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Employee' }],
    progress_percent: Number
}, { timestamps: true });

module.exports = mongoose.model('Phase', phaseSchema);