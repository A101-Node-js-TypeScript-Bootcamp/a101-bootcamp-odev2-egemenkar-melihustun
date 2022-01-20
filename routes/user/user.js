const express = require("express");
let router = express.Router();
let userController = require("../../controllers/User");

router.post("/login", userController.login);

module.exports = router;