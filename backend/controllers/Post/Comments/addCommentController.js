const db = require("../../../config");
const Post = require("../../../models/postModel");
const { generateUniqueId } = require("../../../utills/generateId");
const addComment = async (req, res) => {
  try {
    const { PostId } = req.params;
    console.log(PostId);
    const comment = req.body;
    const postRef = db.collection("Post").doc(PostId);
    const postDoc = await postRef.get();
    comment.id = generateUniqueId();
    await postRef.update({
      comments: [...postDoc.data().comments, comment],
    });
    res.status(201).json({ message: "Comment added successfully" });
  } catch (err) {
    res.status(400).send(err.message);
  }
};

module.exports = addComment;
