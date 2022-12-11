const express = require("express");
const { PostProject, GetProject, DeleteProject, PutProject} = require("../controller/projectControler");
const { memberProtect } = require("../midleware/memberMidleware");

const router = express.Router();



router.post("/",memberProtect, PostProject);

router.get("/", GetProject);

router.delete("/:id", DeleteProject);

router.put("/:id",   PutProject);

module.exports = router;