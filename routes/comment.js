const express = require("express");
const { PostComment, GetAllComment, DeleteComment, PutComment } = require("../controller/commentControler");
const { protect } = require("../midleware/authMidleware");
const router = express.Router();

router.post("/", protect, PostComment);

router.get("/", GetAllComment);

router.delete("/:id",  DeleteComment);

router.put("/:id", protect, PutComment);

module.exports = router;
