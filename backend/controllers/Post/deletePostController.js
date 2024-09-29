const db = require("../../config");

const deletePost = async (req, res) => {
  try {
    const { PostId } = req.params;
    await db.collection("Post").doc(PostId).delete();
    return res.status(200).send("Post Deleted Successfully");
  } catch (err) {
    res.status(400).send(err.message);
  }
};
module.exports = deletePost;
