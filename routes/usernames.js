const express = require("express");
const router = express.Router();
const usernameController = require("../controllers/usernameController");

router.get("/", usernameController.getUsernames);
router.get("/new", usernameController.getNewUsernameForm);
router.post("/new", usernameController.postNewUsername);

module.exports = router;