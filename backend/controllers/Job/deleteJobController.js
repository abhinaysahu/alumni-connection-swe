const db = require("../../config");

const deleteJob = async (req, res) => {
  try {
    const { jobId } = req.params;
    await db.collection("Job").doc(jobId).delete();
    return res.status(200).send("Job Deleted Successfully");
  } catch (err) {
    res.status(400).send(err.message);
  }
};
module.exports = deleteJob;
