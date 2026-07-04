const User = require("../models/User");
const cloudinary = require("../config/cloudinary");
const streamifier = require("streamifier");

// ================= UPLOAD RESUME =================

const uploadResume = async (req, res) => {
  try {
    if (!req.file) {
      return res.status(400).json({
        success: false,
        message: "Please select a PDF file",
      });
    }

    const uploadToCloudinary = () => {
      return new Promise((resolve, reject) => {
        const stream = cloudinary.uploader.upload_stream(
          {
            folder: "skillsphere/resumes",
            resource_type: "raw",
          },
          (error, result) => {
            if (error) return reject(error);
            resolve(result);
          }
        );

        streamifier.createReadStream(req.file.buffer).pipe(stream);
      });
    };

    const result = await uploadToCloudinary();

    const user = await User.findById(req.user.id);

    if (!user) {
      return res.status(404).json({
        success: false,
        message: "User not found",
      });
    }

    user.resume = result.secure_url;
    await user.save();

    res.status(200).json({
      success: true,
      message: "Resume Uploaded Successfully",
      resume: user.resume,
    });

  } catch (error) {
    console.error(error);

    res.status(500).json({
      success: false,
      message: error.message || "Server Error",
    });
  }
};

// ================= GET RESUME =================

const getResume = async (req, res) => {
  try {
    const user = await User.findById(req.user.id).select("resume");

    if (!user) {
      return res.status(404).json({
        success: false,
        message: "User not found",
      });
    }

    res.status(200).json({
      success: true,
      resume: user.resume,
    });

  } catch (error) {
    console.error(error);

    res.status(500).json({
      success: false,
      message: error.message || "Server Error",
    });
  }
};

// ================= DELETE RESUME =================

const deleteResume = async (req, res) => {
  try {
    const user = await User.findById(req.user.id);

    if (!user) {
      return res.status(404).json({
        success: false,
        message: "User not found",
      });
    }

    user.resume = "";
    await user.save();

    res.status(200).json({
      success: true,
      message: "Resume Deleted Successfully",
    });

  } catch (error) {
    console.error(error);

    res.status(500).json({
      success: false,
      message: error.message || "Server Error",
    });
  }
};

module.exports = {
  uploadResume,
  getResume,
  deleteResume,
};