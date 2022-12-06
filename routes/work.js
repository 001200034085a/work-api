const express = require("express");
const { PostWork, GetAllWork, putWorkById, DeleteWork, putUserById, putInformation} = require("../controller/workControler");
const { protect, isAdmin, isAdmin1, isAdmin5, isAdmin3, isAdmin7, isAdmin4 } = require("../midleware/authMidleware");
const router = express.Router();

router.post("/",protect, isAdmin3, PostWork);

router.get("/", GetAllWork);

router.put("/:id", protect, isAdmin1, putWorkById);

router.put("/status/:id", protect, isAdmin5, putUserById);

router.put("/information/:id", protect, isAdmin4, putInformation);

router.delete("/:id", protect, isAdmin7, DeleteWork);

module.exports = router;