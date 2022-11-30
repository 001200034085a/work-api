const express = require("express");
const { PostWork, GetAllWork, putWorkById, DeleteWork, putUserById} = require("../controller/workControler");
const { protect, isAdmin } = require("../midleware/authMidleware");
const router = express.Router();

router.post("/",protect, isAdmin, PostWork);

router.get("/", GetAllWork);

router.put("/:id", protect, isAdmin, putWorkById);

router.put("/user/:id", protect, putUserById);

router.delete("/:id", protect, isAdmin, DeleteWork);

module.exports = router;