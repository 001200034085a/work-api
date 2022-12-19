const express = require("express");
const {  PostMember, GetMember, PutMember, DeleteMember, ChangeStatusMember, GetAllMember } = require("../controller/memberControler");
const { protect, isAdmin } = require("../midleware/authMidleware");
const { isAdmin2, isAdmin8, protectMember } = require("../midleware/memberMidleware");
const router = express.Router();

router.post("/",   PostMember);

router.post("/changeStatusMember/:memberId", ChangeStatusMember );

router.get("/member/:id", GetMember);

router.get("/", GetAllMember);

router.put("/:id", protectMember, isAdmin8,  PutMember);

router.put("/isAdmin/:id", protect, isAdmin, PutMember);

router.delete("/:id", protectMember, isAdmin2, DeleteMember);

module.exports = router;