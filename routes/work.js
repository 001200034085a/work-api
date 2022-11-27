const express = require("express");
const { PostWork, GetAllWork, putWorkById, DeleteWork } = require("../controller/workControler");
const { protect, isAdmin } = require("../midleware/authMidleware");
const router = express.Router();

router.post("/",protect, isAdmin, PostWork);

router.get("/", GetAllWork);

router.put("/:id", protect, putWorkById);

router.delete("/:id", protect, isAdmin, DeleteWork);

module.exports = router;