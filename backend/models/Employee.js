const mongoose = require('mongoose');

const employeeSchema = new mongoose.Schema({
    full_name: String,
    position: String,
    assigned_projects: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Project' }],
    phone: String,
    email: String
});

module.exports = mongoose.model('Employee', employeeSchema);