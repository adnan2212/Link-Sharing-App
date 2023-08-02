const express = require("express");
const router = express.Router();
const linkController = require("../../controllers/linkController");

router
  .route("/")
  .get(linkController.getLinksByUserId)
  .post(linkController.createLink);

router.delete("/:linkId", linkController.deleteLink);

module.exports = router;
