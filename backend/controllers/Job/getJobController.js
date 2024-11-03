const db = require("../../config");
const Job = require("../../models/jobModel");

const getJobById = async (req, res) => {
  try {
    const jobId = req.params.jobId;
    console.log("Job ID received:", jobId); // Log the jobId to ensure it’s being passed correctly
    
    // Fetch job details from Firestore
    const collectionRef = db.collection("Job");
    const detailsObj = await collectionRef.doc(jobId).get();
    
    if (!detailsObj.exists) {
      console.error("Job not found for ID:", jobId);
      return res.status(404).json({ error: "No Job Found" }); // Use 404 for better clarity
    }
    
    const details = detailsObj.data();

    // Respond with JSON-formatted data
    return res.status(200).json({
      userID: details.userId,
      title: details.title,
      type: details.type,
      description: details.description,
      salary: details.salary,
      yoe: details.yoe,
      skills: details.skills,
      postedOn: details.postedOn,
      applyLink: details.applyLink,
      companyName: details.companyName,
      jobExp: details.jobExp,
      location: details.location,
    });
  } catch (err) {
    console.error("Error fetching job by ID:", err); // Log error for troubleshooting
    res.status(500).json({ error: "Server Error" }); // Use 500 status for server error
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
