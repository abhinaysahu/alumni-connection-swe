const db = require("../../../config");
const deleteComment = async (req, res) => {
  try {
    const { PostId, commentId, userId } = req.params;
    const postRef = db.collection("Post").doc(PostId);
    const postDoc = await postRef.get();
    const comments = postDoc.data().comments || [];

    const updatedComments = comments.filter(
      (comment) => !(comment.userId === userId && comment.id === commentId)
    );
    await postRef.update({
      comments: [...updatedComments],
    });
    return res.status(200).send("Comment Deleted Successfully");
  } catch (err) {
    res.status(400).send(err.message);
  }
};

module.exports = deleteComment;
