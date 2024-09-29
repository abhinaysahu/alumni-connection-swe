const express = require("express");
const addJob = require("../../controllers/Job/addJobController");
const deleteJob = require("../../controllers/Job/deleteJobController");
const {
  getAllJobs,
  getJobsByType,
  getJobById,
} = require("../../controllers/Job/getJobController");
const updateJob = require("../../controllers/Job/updateJobController");

const router = express.Router();

router.post("/add", addJob);
router.delete("/delete/:jobId", deleteJob);
router.get("/getJob/:jobId", getJobById);
router.get("/getAllJobs", getAllJobs);
router.get("/getJobsByType/:type", getJobsByType);
router.put("/updateJob/:jobId", updateJob);
module.exports = router;
