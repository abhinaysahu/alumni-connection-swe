const db = require("../../config");
const { Post } = require("../../models/postModel");

const getAllPost = async (req, res) => {
  try {
    const postRef = db.collection("Post");
    const snapshot = await postRef.get();
    const posts = [];

    snapshot.forEach((doc) => {
      const data = doc.data();

      const post = new Post(
        doc.id,
        data.userId,
        data.title,
        data.description,
        data.postedOn,
        data.tags,
        data.userType,
        data.comments
      );

      posts.push(post);
    });
    posts.pop();
    res.status(200).send(posts);
  } catch (err) {
    res.status(400).send(err.message);
  }
};

module.exports = getAllPost;
