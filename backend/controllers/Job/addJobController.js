const db = require("../../config");
const Job = require("../../models/jobModel");
const { generateUniqueId } = require("../../utills/generateId");

const addJob = async (req, res) => {
  try {
    const data = req.body;
    const collectionRef = db.collection("Job");
    const collectionSnapshot = await collectionRef.get();
    if (collectionSnapshot.empty) {
      await collectionRef.doc("JobId").set({}); // Add a placeholder document
    }

    const jobId = generateUniqueId();
    await db.collection("Job").doc(jobId).set(data);

    res.status(200).send("Job created successfully");
  } catch (err) {
    res.status(400).send(err.message);
  }
};

module.exports = addJob;
