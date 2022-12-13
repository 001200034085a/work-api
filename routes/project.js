const express = require("express");
const { PostProject, GetProject, DeleteProject, PutProject} = require("../controller/projectControler");
const { protect } = require("../midleware/authMidleware");
const { protectMember, isAdmin4, isAdmin1 } = require("../midleware/memberMidleware");



const router = express.Router();



router.post("/", protectMember, isAdmin4, PostProject);

router.get("/", GetProject);

router.delete("/:id", DeleteProject);

router.put("/:id", protectMember, isAdmin1,  PutProject);

module.exports = router;