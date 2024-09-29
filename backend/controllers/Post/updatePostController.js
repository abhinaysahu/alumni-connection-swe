const db = require("../../config");

const updatePost = async (req, res) => {
  try {
    const { PostId } = req.params;
    const data = req.body;

    await db.collection("Post").doc(PostId).update(data);

    res.status(200).send("Post Updated Successfully");
  } catch (err) {
    res.status(400).send(err.message);
  }
};

module.exports = updatePost;
