const express = require("express");
const { PostProject, GetProject, DeleteProject, PutProject, findOneProject} = require("../controller/projectControler");
const { protect, isAdmin4, isAdmin1, checkProject, isAdmin, isAdmin7, isAdmin8 } = require("../midleware/authMidleware");

const router = express.Router();



router.post("/", PostProject);

router.get("/", GetProject);

router.get("/findOneProject", findOneProject);

router.delete("/:id", protect,  isAdmin, DeleteProject);

router.put("/:id",  protect, checkProject, isAdmin1, PutProject);

module.exports = router;