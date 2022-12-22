const express = require("express");
const { PostProject, GetProject, DeleteProject, PutProject} = require("../controller/projectControler");
const { protect, isAdmin4, isAdmin1, checkProject, isAdmin5, isAdmin7 } = require("../midleware/authMidleware");

const router = express.Router();



router.post("/", PostProject);

router.get("/", GetProject);

router.delete("/:id", protect, isAdmin7, checkProject, DeleteProject);

router.put("/:id",  protect, isAdmin4, checkProject, PutProject);

module.exports = router;