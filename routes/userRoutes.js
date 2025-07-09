const express = require("express");
const router = express.Router();
const controller = require("../controllers/userController");

// Route to fetch all usernames (with optional search query)
router.get("/", controller.getUsernames);

// Route to render HTML form for adding a username
router.get("/new", controller.createUsernameGet);

// Route to handle form submission and save username
router.post("/new", controller.createUsernamePost);

// Route to delete all usernames
router.get("/delete", controller.deleteUsernames);

module.exports = router;
