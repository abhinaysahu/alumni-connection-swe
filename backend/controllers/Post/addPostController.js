const db = require("../../config");
const post = require("../../models/postModel");
const { generateUniqueId } = require("../../utills/generateId");

const addPost = async (req, res) => {
  try {
    const data = req.body;
    const collectionRef = db.collection("Post");
    const collectionSnapshot = await collectionRef.get();
    if (collectionSnapshot.empty) {
      await collectionRef.doc("PostId").set({}); // Add a placeholder document
    }
    const PostId = generateUniqueId();
    await db.collection("Post").doc(PostId).set(data);

    res.status(200).send("Post added successfully");
  } catch (err) {
    res.status(400).send(err.message);
  }
};

module.exports = addPost;
