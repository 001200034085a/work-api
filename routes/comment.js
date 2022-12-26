const express = require("express");
const { PostComment, GetAllComment, DeleteComment, PutComment, GetCommentProject } = require("../controller/commentControler");
const { protect, checkProject } = require("../midleware/authMidleware");
const router = express.Router();

router.post("/", protect, PostComment);

router.get("/", GetAllComment);

router.get("/project/:id", GetCommentProject)

router.delete("/:id", protect,  DeleteComment);

router.put("/:id", protect, PutComment);

module.exports = router;
