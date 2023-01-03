const express = require("express");
const { PostWork, GetAllWork, putWorkById, DeleteWork, putUserById, putInformation, getById} = require("../controller/workControler");
const { protect, isAdmin3, isAdmin4, isAdmin5, isAdmin7, isAdmin, checkWork} = require("../midleware/authMidleware");

const router = express.Router();

router.post("/", protect, PostWork);

router.get("/", GetAllWork);

router.get("/:id", getById);

router.put("/:id", protect, checkWork, isAdmin4,  putWorkById);

router.put("/status/:id", protect, checkWork, isAdmin5, putUserById);

router.put("/information/:id", protect, checkWork, isAdmin4,  putInformation);

router.delete("/:id", protect, isAdmin,  DeleteWork);

module.exports = router;