const express = require("express");
const { PostComment, GetAllComment, DeleteComment, PutComment } = require("../controller/commentControler");
const { protect, checkProject } = require("../midleware/authMidleware");
const router = express.Router();

router.post("/", protect, checkProject, PostComment);

router.get("/", GetAllComment);

router.delete("/:id", protect,  DeleteComment);

router.put("/:id", protect, PutComment);

module.exports = router;
