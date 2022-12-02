const express = require("express");
const { PostWork, GetAllWork, putWorkById, DeleteWork, putUserById} = require("../controller/workControler");
const { protect, isAdmin, isAdmin1, isAdmin5, isAdmin3, isAdmin7 } = require("../midleware/authMidleware");
const router = express.Router();

router.post("/",protect, isAdmin3, PostWork);

router.get("/", GetAllWork);

router.put("/:id", protect, isAdmin1, putWorkById);

router.put("/user/:id", protect, isAdmin5, putUserById);

router.delete("/:id", protect, isAdmin7, DeleteWork);

module.exports = router;