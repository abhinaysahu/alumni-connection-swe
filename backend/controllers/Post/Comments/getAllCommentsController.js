const db = require("../../../config");
const { Post, Comment } = require("../../../models/postModel");
const { generateUniqueId } = require("../../../utills/generateId");
const getComments = async (req, res) => {
  try {
    const { PostId } = req.params;
    const postRef = db.collection("Post").doc(PostId);
    const postDoc = await postRef.get();
    const comments = [];
    postDoc.data().comments.forEach((com) => {
      const comment = new Comment(com.userId, com.comment);
      comments.push(comment);
    });
    res.status(201).send(comments);
  } catch (err) {
    res.status(400).send(err.message);
  }
};

module.exports = getComments;
