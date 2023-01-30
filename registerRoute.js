const express = require("express");
const router = express.Router();
const registerController = require("./registerController");

//POST request to /students to register as a new student
router.post("/register", registerController.createStudent);

module.exports = router;