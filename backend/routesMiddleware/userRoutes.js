const express  = require("express");
const { home, createUser, getUsers, editUser, deleteUser } = require("../controllers/userControllers");
require("../controllers/userControllers")
const router = express.Router();
const mongoose = require("mongoose");

router.get("/", home);
router.post("/createUser", createUser);
router.get("/getUsers", getUsers);
router.put("/editUsers/:_id", editUser);
router.delete("/deleteUsers/:_id", deleteUser);

module.exports = router;