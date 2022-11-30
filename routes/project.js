const express = require("express");
const { PostProject, GetProject, DeleteProject, PutProject } = require("../controller/projectControler");
const router = express.Router();
const { protect, isAdmin } = require('../midleware/authMidleware');


router.post("/", protect, PostProject);

router.get("/", GetProject);

router.delete("/:id", protect, DeleteProject);

router.put("/:id", protect, PutProject);

module.exports = router;