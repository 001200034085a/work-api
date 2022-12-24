const express = require("express");
const { PostWork, GetAllWork, putWorkById, DeleteWork, putUserById, putInformation, getById} = require("../controller/workControler");
const { protect, isAdmin3, isAdmin4, isAdmin5, isAdmin7 } = require("../midleware/authMidleware");

const router = express.Router();

router.post("/", protect, isAdmin3, PostWork);

router.get("/", GetAllWork);

router.get("/:id", getById);

router.put("/:id", protect,  isAdmin4,  putWorkById);

router.put("/status/:id", protect, isAdmin5, putUserById);

router.put("/information/:id", protect, isAdmin4,  putInformation);

router.delete("/:id", protect, isAdmin7,  DeleteWork);

module.exports = router;