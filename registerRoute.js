const express = require("express");
const router = express.Router();
const registerController = require("./registerController");

//POST request to /students to register as a new student
router.post("/register", registerController.createStudent);

router.get('/', (req, res)=>{
    res.status(200).json({message: 'welcome'})
})
module.exports = router;