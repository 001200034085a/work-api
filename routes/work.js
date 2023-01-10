const express = require("express");
const { PostWork, GetAllWork, putWorkById, DeleteWork, putUserById, putInformation, getById} = require("../controller/workControler");
const { protect, isAdmin3, isAdmin4, isAdmin5, isAdmin7, isAdmin} = require("../midleware/authMidleware");

const router = express.Router();

router.post("/", protect, PostWork);

router.get("/", GetAllWork);

router.get("/:id", getById);

router.put("/:id", protect,  isAdmin,  putWorkById);

router.put("/status/:id", protect, putUserById);

router.put("/information/:id", protect, putInformation);

router.delete("/:id", protect, isAdmin,  DeleteWork);

module.exports = router;