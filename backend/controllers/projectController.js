const Project = require('../models/Project');

exports.createProject = async (req, res) => {
    try {
        const project = new Project(req.body);
        await project.save();
        res.status(201).json(project);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
};

exports.getAllProjects = async (req, res) => {
    try {
        const projects = await Project.find().populate('customer_id');
        res.json(projects);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};