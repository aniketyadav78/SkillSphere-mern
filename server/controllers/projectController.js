const Project = require("../models/Project");

// ================= ADD PROJECT =================

const addProject = async (req, res) => {
  try {
    const {
      title,
      description,
      skills,
      github,
      liveDemo,
      image,
    } = req.body;

    // Validation
    if (!title || !description) {
      return res.status(400).json({
        success: false,
        message: "Title and Description are required",
      });
    }

    const project = await Project.create({
      title,
      description,
      skills,
      github,
      liveDemo,
      image,
      owner: req.user.id,
    });

    res.status(201).json({
      success: true,
      message: "Project Added Successfully",
      project,
    });

  } catch (error) {
    console.error(error);

    res.status(500).json({
      success: false,
      message: "Server Error",
    });
  }
};

// ================= GET MY PROJECTS =================

const getMyProjects = async (req, res) => {
  try {
    const projects = await Project.find({
      owner: req.user.id,
    }).sort({ createdAt: -1 });

    res.status(200).json({
      success: true,
      count: projects.length,
      projects,
    });

  } catch (error) {
    console.error(error);

    res.status(500).json({
      success: false,
      message: "Server Error",
    });
  }
};

// ================= UPDATE PROJECT =================

const updateProject = async (req, res) => {
  try {
    const project = await Project.findOne({
      _id: req.params.id,
      owner: req.user.id,
    });

    if (!project) {
      return res.status(404).json({
        success: false,
        message: "Project not found",
      });
    }

    Object.assign(project, req.body);

    await project.save();

    res.status(200).json({
      success: true,
      message: "Project Updated Successfully",
      project,
    });

  } catch (error) {
    console.error(error);

    res.status(500).json({
      success: false,
      message: "Server Error",
    });
  }
};

// ================= DELETE PROJECT =================

const deleteProject = async (req, res) => {
  try {
    const project = await Project.findOneAndDelete({
      _id: req.params.id,
      owner: req.user.id,
    });

    if (!project) {
      return res.status(404).json({
        success: false,
        message: "Project not found",
      });
    }

    res.status(200).json({
      success: true,
      message: "Project Deleted Successfully",
    });

  } catch (error) {
    console.error(error);

    res.status(500).json({
      success: false,
      message: "Server Error",
    });
  }
};

module.exports = {
  addProject,
  getMyProjects,
  updateProject,
  deleteProject,
};