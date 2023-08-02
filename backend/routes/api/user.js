const express = require("express");
const router = express.Router();
const usersController = require("../../controllers/usersControllers");
const verifyJWT = require("../../middleware/verifyJWT");

router
  .route("/")
  .get(verifyJWT, usersController.getUser)
  // .get(verifyJWT, usersController.getAllUsers)
  .post(usersController.createNewUser);

// router.get("/:id", verifyJWT, usersController.getUser);
module.exports = router;
