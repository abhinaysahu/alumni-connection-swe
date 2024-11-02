const db = require("../../config");
const Job = require("../../models/jobModel");

const getJobById = async (req, res) => {
  try {
    const { jobId } = req.params;
    const currJob = await db.collection("Job").doc(jobId).get();
    if (!currJob.exists()) {
      return res.status(400).send("No Job Find");
    }
    return res.status(200).json(new Job(...currJob, jobId));
  } catch (err) {
    res.status(400).send(err.message);
  }
};

const getAllJobs = async (req, res) => {
  try {
    const jobsRef = db.collection("Job");

    const snapshot = await jobsRef.get();

    const jobs = [];

    snapshot.forEach((doc) => {
      const data = doc.data();

      const job = new Job(
        doc.id,
        data.userId,
        data.title,
        data.type,
        data.description,
        data.salary,
        data.yoe,
        data.skills,
        data.postedOn,
        data.applyLink,
        data.companyName,
        data.jobExp,
          data.location,
      );

      jobs.push(job);
    });
    jobs.pop();
    res.status(200).send(jobs);
  } catch (err) {
    res.status(400).send(err.message);
  }
};

const getJobsByType = async (req, res) => {
  console.log("request comes");
  try {
    const { type } = req.params;
    const jobsRef = db.collection("Job");
    const snapshot = await jobsRef.where("type", "==", type).get();

    const jobs = [];
    snapshot.forEach((doc) => {
      const data = doc.data();

      const job = new Job(
        doc.id,
        data.userId,
        data.title,
        data.description,
        data.type,
        data.salary,
        data.yoe,
        data.skills,
        data.postedOn,
        data.applyLink,
        data.companyName,
        data.jobExp
      );

      jobs.push(job);
    });

    res.status(200).send(jobs);
  } catch (err) {
    res.status(400).send(err.message);
  }
};

const getJobsByUser = async (req, res) => {
  try{
    const userId = req.user_id;
    const jobsRef = db.collection("Job");
    const snapshot = await jobsRef.where("userId", "==", userId).get();

    const jobs = [];
    snapshot.forEach((doc) => {
      const data = doc.data();

      const job = new Job(
          doc.id,
          data.userId,
          data.title,
          data.type,
          data.description,
          data.salary,
          data.yoe,
          data.skills,
          data.postedOn,
          data.applyLink,
          data.companyName,
          data.jobExp,
          data.location
      );

      jobs.push(job);
    });

    res.status(200).send(jobs);
  }catch (e) {
    return res.status(500).send(e.message);
  }
}

module.exports = { getAllJobs, getJobById, getJobsByType, getJobsByUser };
