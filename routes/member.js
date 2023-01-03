const express = require("express");
const {  PostMember, GetMember, PutMember, DeleteMember, ChangeStatusMember, GetAllMember } = require("../controller/memberControler");
const { protect, isAdmin, isAdmin2, isAdmin8 } = require("../midleware/authMidleware");
const router = express.Router();

router.post("/",  PostMember);

router.post("/changeStatusMember/:memberId", ChangeStatusMember );

router.get("/member/:id", GetMember);

router.get("/", GetAllMember);

router.put("/:id", protect, isAdmin8,  PutMember);

router.put("/isAdmin/:id", protect, isAdmin, PutMember);

router.delete("/:id", protect, isAdmin, DeleteMember);

module.exports = router;