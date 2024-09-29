const express = require("express");
const addPost = require("../../controllers/Post/addPostController");
const deletePost = require("../../controllers/Post/deletePostController");
const getAllPost = require("../../controllers/Post/getPostController");
const updatePost = require("../../controllers/Post/updatePostController");
const addComment = require("../../controllers/Post/Comments/addCommentController");
const getComment = require("../../controllers/Post/Comments/getAllCommentsController");
const deleteComment = require("../../controllers/Post/Comments/deleteCommentController");

const router = express.Router();

router.post("/add", addPost);
router.delete("/delete/:PostId", deletePost);
router.get("/getAllPost", getAllPost);
router.put("/updatePost/:PostId", updatePost);
router.put("/:PostId/addComment", addComment);
router.get("/:PostId/getComment", getComment);
router.delete("/:PostId/deleteComment/:commentId/:userId", deleteComment);

module.exports = router;
