import React from "react";
import { BreadCrumb } from "../components/BreadCrumb";
import Navbar from "../components/Navbar";
import Header from "../components/Header";



const JobDetails = () => {
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
                <span className="mr-1 mb-1"></span> Job type: Full time
              </p>
              <h2 className="text-2xl font-bold text-gray-800">AI Engineer</h2>
              <p className="text-gray-600 ">Microsoft</p>
              <div className="flex items-center gap-2 mt-2 text-sm text-gray-500 mt-4">
                <span className="bg-green-100 text-green-600 px-2 py-1 rounded-full">02 Days ago</span>
                <span className="bg-gray-200 text-gray-600 px-2 py-1 rounded-full">Bangalore</span>
              </div>
            </div>
            <div className="text-right">
              <button className="bg-blue-700  hover:bg-blue-500 text-white py-2 px-4 rounded-full">Apply Now</button>
              <p className="text-xl font-semibold text-gray-800 mt-5">₹10L - ₹20L</p>
            </div>
          </div>

          {/* Job Description */}
          <h3 className="text-xl font-semibold text-gray-800 mt-6">Job Description</h3>
          <p className="text-gray-700 mt-4 leading-relaxed">
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium,
            totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.
            Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui
            ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit.
          </p>
        </div>

        {/* Sidebar with company details */}
        <div className="bg-white p-6 rounded-lg shadow-md">
          <div className="flex items-center mb-6">
            <div className="w-12 h-12 bg-gray-300 rounded-full mr-4">
                {/* add company image here */}
  
            </div>
            <div className="mt-2">
              <p className="font-bold text-2xl text-gray-800">Microsoft</p>
              <p className="text-gray-500 text-md ">Bangalore</p>
            </div>
          </div>

          <div className="space-y-4 text-gray-700">
            <div className="flex justify-between">
              <span className="text-gray-600 ">Posted By</span>
              <span className=" text-gray-800">Rohit Sharma</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-600">Category</span>
              <span className=" text-gray-800">Technical Consultant</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-600">Posted On</span>
              <span className=" text-gray-800">20 Jan 2024</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-600">Apply Before</span>
              <span className=" text-gray-800">26 Jan 2024</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-600">Skills</span>
              <span className=" text-gray-800">Angular , Java</span>  
            </div>
            <div className="flex justify-between">
              <span className="text-gray-600">Experience Required</span>
              <span className=" text-gray-800"> 2 years</span>  
            </div>
            
          </div>
        </div>
      </div>
    </div>
    </div>
   
  );
};

export default JobDetails;