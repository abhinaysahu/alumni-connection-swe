class Job {
  constructor(
    jobId,
    userId,
    title,
    type,
    description,
    salary,
    yoe,
    skills,
    postedOn,
    applyLink,
    companyName,
    jobExp,
    location,
  ) {
    this.jobId = jobId;
    this.userId = userId;
    this.title = title;
    this.description = description;
    this.type = type;
    this.salary = salary;
    this.yoe = yoe;
    this.skills = skills;
    this.postedOn = postedOn;
    this.applyLink = applyLink;
    this.jobExp = jobExp;
    this.companyName = companyName;
    this.location = location;
  }
}
module.exports = Job;
