const express = require("express");
const {  PostMember, GetMember, PutMember, DeleteMember, ChangeStatusMember, GetAllMember } = require("../controller/memberControler");
const { protect, isAdmin } = require("../midleware/authMidleware");
const router = express.Router();

router.post("/",  PostMember);

router.post("/changeStatusMember/:memberId", ChangeStatusMember )

router.get("/project/:id", GetMember);

router.get("/", GetAllMember);

router.put("/:id",  PutMember);

router.put("/isAdmin/:id", protect, isAdmin, PutMember);

router.delete("/:id", DeleteMember);

module.exports = router;