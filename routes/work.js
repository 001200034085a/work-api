const express = require("express");
const { PostWork, GetAllWork, putWorkById, DeleteWork, putUserById, putInformation, getById} = require("../controller/workControler");
const { protectMember, isAdmin3, isAdmin4, isAdmin5, isAdmin7 } = require("../midleware/memberMidleware");

const router = express.Router();

router.post("/", protectMember, isAdmin3, PostWork);

router.get("/", GetAllWork);

router.get("/:id", getById);

router.put("/:id", protectMember,  isAdmin4,  putWorkById);

router.put("/status/:id", protectMember, isAdmin5,  putUserById);

router.put("/information/:id", protectMember, isAdmin4,  putInformation);

router.delete("/:id", protectMember, isAdmin7,  DeleteWork);

module.exports = router;