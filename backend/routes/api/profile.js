const express = require("express");
const router = express.Router();
const multer = require("multer");
const profileController = require("../../controllers/profileController");

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "uploads/");
  },
  filename: (req, file, cb) => {
    const timestamp = Date.now();
    cb(null, `${timestamp}-${file.originalname}`);
  },
});

const fileFilter = (req, file, cb) => {
  // Accept only image files
  if (file.mimetype.startsWith("image/")) {
    cb(null, true);
  } else {
    cb(new Error("Invalid file type. Only images are allowed."), false);
  }
};

const upload = multer({ storage, fileFilter });

router
  .route("/")
  .get(profileController.getProfileDetails)
  .post(upload.single("profileImage"), profileController.addProfileDetails);

// Route to handle profile links
router.get("/:profileLink", profileController.getProfileByLink);

module.exports = router;
