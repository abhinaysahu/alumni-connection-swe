const db = require("../../config");

const updateJob = async (req, res) => {
  try {
    const  jobId  = req.params.jobId;
    const newJobData  = req.body;
    // console.log(newJobData);

    await db.collection("Job").doc(jobId).update(newJobData);

    res.status(200).send("Job Updated Successfully");
  } catch (err) {
    res.status(400).send(err.message);
  }
};

module.exports = updateJob;
