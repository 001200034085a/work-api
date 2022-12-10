const express = require("express");
const { PostProject, GetProject, DeleteProject, PutProject} = require("../controller/projectControler");
const router = express.Router();
const { protect, isAdmin5, isAdmin1, isAdmin3, isAdmin7, isAdmin4 } = require('../midleware/authMidleware');


router.post("/", protect, PostProject);

router.get("/", GetProject);

router.delete("/:id", protect, isAdmin7, DeleteProject);

router.put("/:id", protect, isAdmin4, PutProject);

module.exports = router;