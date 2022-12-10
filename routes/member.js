const express = require("express");
const {  GetAllMember, PutMember, DeleteMember } = require("../controller/memberControler");
const { protect, isAdmin } = require("../midleware/authMidleware");
const { protectMember, isAdmin1, isAdmin5 } = require("../midleware/memberMidleware");
const router = express.Router();

// router.post("/", protect, PostMember);

router.get("/", GetAllMember);

router.put("/:id", protectMember,  isAdmin1, PutMember);

router.put("/isAdmin/:id", protect, isAdmin, PutMember);

router.delete("/:id", DeleteMember);

module.exports = router;