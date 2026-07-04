const express = require("express");
const router = express.Router();

const verifyToken = require("../middleware/authMiddleware");

const {
  addProject,
  getMyProjects,
  updateProject,
  deleteProject,
} = require("../controllers/projectController");

router.post("/", verifyToken, addProject);

router.get("/", verifyToken, getMyProjects);

router.put("/:id", verifyToken, updateProject);

router.delete("/:id", verifyToken, deleteProject);

module.exports = router;