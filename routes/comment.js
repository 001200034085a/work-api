const express = require("express");
const { PostComment, GetAllComment, DeleteComment, PutComment, GetCommentProject } = require("../controller/commentControler");
const { protect, checkProject, checkWork } = require("../midleware/authMidleware");
const router = express.Router();

router.post("/:id", protect, checkWork, PostComment);

router.get("/", GetAllComment);

router.get("/work/:id", GetCommentProject)

router.delete("/:id", protect,  DeleteComment);

router.put("/:id", protect,  PutComment);

module.exports = router;
