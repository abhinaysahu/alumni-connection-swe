import React from "react";
import { BreadCrumb } from "../components/BreadCrumb";
import Navbar from "../components/Navbar";
import Header from "../components/Header";
import { useLocation } from "react-router-dom";


const JobDetails = () => {
  const location = useLocation();
  const job = location.state.selectedRowData;
  const postedBy = location.state.user;
  console.log(job);

  const daysElapsed = (dateString) => {
    const [day, month, year] = dateString.split('-').map(Number);
    const pastDate = new Date(year, month - 1, day); // month is zero-indexed in Date

    // Get the current date
    const currentDate = new Date();

    // Calculate the difference in milliseconds
    const diffInMs = currentDate - pastDate;

    // Convert milliseconds to days
    const daysElapsed = Math.floor(diffInMs / (1000 * 60 * 60 * 24));

    return daysElapsed;
  }
  return (
    <div>
        <Header name={"Job Details"}></Header>
    
    <div className=" flex-grow mt-10 ">
        
      {/* Container for header and breadcrumb */}
     

      {/* Main content */}
      <div className=" mx-auto px-4 py-6 grid lg:grid-cols-3 gap-8 ">
        {/* Job details main section */}
        <div className="bg-white p-6 rounded-lg shadow-md lg:col-span-2">
          <div className="flex justify-between items-center mb-20 mt-2">
            <div>
              <p className="text-sm text-gray-500 flex items-center">
                <span className="mr-1 mb-1"></span> Job type: {job.type === "FTE" ? "Full Time" : "Internship"}
              </p>
              <h2 className="text-2xl font-bold text-gray-800">{job.title}</h2>
              <p className="text-gray-600 ">{job.companyName}</p>
              <div className="flex items-center gap-2 text-sm text-gray-500 mt-4">
                <span className="bg-green-100 text-green-600 px-2 py-1 rounded-full">{daysElapsed(job.postedOn) + " days ago"}</span>
                <span className="bg-gray-200 text-gray-600 px-2 py-1 rounded-full">{job.location}</span>
              </div>
            </div>
            <div className="text-right">
              <a href={job.applyLink}><button className="bg-blue-700  hover:bg-blue-500 text-white py-2 px-4 rounded-full">Apply Now</button></a>
              <p className="text-xl font-semibold text-gray-800 mt-5">&#8377;{" " + job.salary}</p>
            </div>
          </div>

          {/* Job Description */}
          <h3 className="text-xl font-semibold text-gray-800 mt-6">Job Description</h3>
          <p className="text-gray-700 mt-4 leading-relaxed">
            {job.description}
          </p>
        </div>

        {/* Sidebar with company details */}
        <div className="bg-white p-6 rounded-lg shadow-md">
          <div className="flex items-center mb-6">
            <div className="w-12 h-12 bg-gray-300 rounded-full mr-4">
                {/* add company image here */}
  
            </div>
            <div className="mt-2">
              <p className="font-bold text-2xl text-gray-800">{job.companyName}</p>
              <p className="text-gray-500 text-md ">{job.location}</p>
            </div>
          </div>

          <div className="space-y-4 text-gray-700">
            <div className="flex justify-between">
              <span className="text-gray-600 ">Posted By</span>
              <span className=" text-gray-800">{postedBy}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-600">Category</span>
              <span className=" text-gray-800">{job.type}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-600">Posted On</span>
              <span className=" text-gray-800">{job.postedOn}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-600">Apply Before</span>
              <span className=" text-gray-800">{job.jobExp}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-600">Skills</span>
              {/*{job.skills.map((skill) => <span className=" text-gray-800">{skill}</span> )}*/}
              <span className="">{job.skills.map((skill) => <span className={"bg-gray-300 ml-2 text-gray-600 rounded-lg p-2"}>{skill + " "}</span>)}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-600">Experience Required</span>
              <span className=" text-gray-800">{job.yoe + " year(s)"}</span>
            </div>
            
          </div>
        </div>
      </div>
    </div>
    </div>
   
  );
};

export default JobDetails;