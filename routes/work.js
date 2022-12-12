const express = require("express");
const { PostWork, GetAllWork, putWorkById, DeleteWork, putUserById, putInformation, getById} = require("../controller/workControler");
const { protect, isAdmin } = require("../midleware/authMidleware");
const router = express.Router();

router.post("/",  PostWork);

router.get("/", GetAllWork);

router.get("/:id", getById);

router.put("/:id", protect,  putWorkById);

router.put("/status/:id", protect,  putUserById);

router.put("/information/:id", protect,  putInformation);

router.delete("/:id", protect,  DeleteWork);

module.exports = router;