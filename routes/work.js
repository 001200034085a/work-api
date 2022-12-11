const express = require("express");
const { PostWork, GetAllWork, putWorkById, DeleteWork, putUserById, putInformation} = require("../controller/workControler");
const { protect, isAdmin } = require("../midleware/authMidleware");
const router = express.Router();

router.post("/",protect,  PostWork);

router.get("/", GetAllWork);

router.put("/:id", protect,  putWorkById);

router.put("/status/:id", protect,  putUserById);

router.put("/information/:id", protect,  putInformation);

router.delete("/:id", protect,  DeleteWork);

module.exports = router;