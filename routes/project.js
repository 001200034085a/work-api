const express = require("express");
const { PostProject, GetProject, DeleteProject, PutProject, putUserById } = require("../controller/projectControler");
const router = express.Router();
const { protect, isAdmin5, isAdmin1, isAdmin3, isAdmin7, isAdmin4 } = require('../midleware/authMidleware');


router.post("/", protect, isAdmin3, PostProject);

router.get("/", GetProject);

router.delete("/:id", protect, isAdmin7, DeleteProject);

router.put("/user/:id", protect, isAdmin5, putUserById);

router.put("/:id", protect, isAdmin4, PutProject);

module.exports = router;