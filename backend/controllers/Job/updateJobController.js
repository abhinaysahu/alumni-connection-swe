const db = require("../../config");

const updateJob = async (req, res) => {
  try {
    const { jobId } = req.params;
    const { newJobData } = req.body;

    await db.collection("Job").doc(jobId).update(newJobData);

    res.status(200).send("Job Updated Successfully");
  } catch (err) {
    res.status(400).send(err.message);
  }
};

module.exports = updateJob;
