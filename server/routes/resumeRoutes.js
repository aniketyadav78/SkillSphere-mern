const express = require("express");
const router = express.Router();

const verifyToken = require("../middleware/authMiddleware");
const uploadResume = require("../middleware/uploadResume");
const resumeController = require("../controllers/resumeController");

console.log("verifyToken:", typeof verifyToken);
console.log("uploadResume:", typeof uploadResume);
console.log("uploadResume.single:", typeof uploadResume.single);
console.log("resumeController:", resumeController);
console.log(
  "resumeController.uploadResume:",
  typeof resumeController.uploadResume
);

router.post(
  "/upload",
  verifyToken,
  uploadResume.single("resume"),
  resumeController.uploadResume
);

router.get("/", verifyToken, resumeController.getResume);
router.delete("/", verifyToken, resumeController.deleteResume);

module.exports = router;