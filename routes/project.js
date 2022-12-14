const express = require("express");
const { PostProject, GetProject, DeleteProject, PutProject} = require("../controller/projectControler");
const { protect } = require("../midleware/authMidleware");
const { protectMember, isAdmin4, isAdmin1, checkProject, isAdmin5, isAdmin7 } = require("../midleware/memberMidleware");



const router = express.Router();



router.post("/", PostProject);

router.get("/", GetProject);

router.delete("/:id",protectMember, isAdmin1, checkProject, DeleteProject);

router.put("/:id", protectMember, isAdmin7, checkProject, PutProject);

module.exports = router;