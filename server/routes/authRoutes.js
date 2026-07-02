const express = require("express");
const router = express.Router();

const upload = require("../middleware/upload");
const verifyToken = require("../middleware/authMiddleware");

const authController = require("../controllers/authController");

// Authentication
router.post("/register", authController.register);
router.post("/login", authController.login);

// Profile
router.get("/profile", verifyToken, authController.getProfile);
router.put("/update-profile", verifyToken, authController.updateProfile);

// Upload Profile Image
router.post(
  "/upload-profile-image",
  verifyToken,
  upload.single("image"),
  authController.uploadProfileImage
);

module.exports = router;