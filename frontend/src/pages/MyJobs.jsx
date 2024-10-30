

import SideMenu from "../components/Sidebar";
import { BreadCrumb } from "../components/BreadCrumb";
import { Table } from "flowbite-react";
import { Button } from "flowbite-react";

import { Pagination } from "flowbite-react";
import { useState } from "react";
import { Link } from "react-router-dom";



export default function MyJob() {





    const jobs = [
        {
            title: "Lorem ipsum, dolor sit amet consectetur adipiscing elit.",
            category: "Technical Consultant",
            postedOn: "January 18, 2024 02:51 PM",
            location: "Jaipur",
            salary: "10L-15L",
            status: "Pending",
        },
        {
            title: "Lorem ipsum, dolor sit amet consectetur adipiscing elit.",
            category: "Technical fhsdjfhalksdf",
            postedOn: "January 18, 2024 02:51 PM",
            location: "Jaipur",
            salary: "10L-15L",
            status: "Pending",
        },
        {
            title: "Lorem ipsum, dolor sit amet consectetur adipiscing elit.",
            category: "Technical Consultant",
            postedOn: "January 18, 2024 02:51 PM",
            location: "fsdjafhdlskjhf",
            salary: "10L-15L",
            status: "Pending",
        },
        {
            title: "Lorem ipsum, dolor sit amet consectetur adipiscing elit.",
            category: "Technical Consultant",
            postedOn: "January 18, 2024 02:51 PM",
            location: "Jaipur",
            salary: "10L-15L",
            status: "Pending",
        },
        {
            title: "Lorem ipsum, dolor sit amet consectetur adipiscing elit.",
            category: "Technical Consultant",
            postedOn: "January 18, 2024 02:51 PM",
            location: "Jaipur",
            salary: "10L-15L",
            status: "Pending",
        },
        {
            title: "Lorem ipsum, dolor sit amet consectetur adipiscing elit.",
            category: "Technical Consultant",
            postedOn: "January 18, 2024 02:51 PM",
            location: "Jaipur",
            salary: "10L-jdhfjdsf",
            status: "Pending",
        },
        {
            title: "Lorem ipsum, dolor sit amet consectetur adipiscing elit.",
            category: "Technical Consultant",
            postedOn: "January 18, 2024 02:51 PM",
            location: "Jaipur",
            salary: "10L-dfhjheuifu",
            status: "Pending",
        },
        {
            title: "Lorem ipsum, dolor sit amet consectetur adipiscing elit.",
            category: "Technical Consultant",
            postedOn: "January 18, 2024 02:51 PM",
            location: "hsdkjfhdf",
            salary: "10L-15L",
            status: "Pending",
        },
        {
            title: "Lorem ipsum, dolor sit amet consectetur adipiscing elit.",
            category: "Technical Consultant",
            postedOn: "January 18, 2024 02:51 PM",
            location: "Jaipur",
            salary: "10L-15L",
            status: "Pending",
        }, {
            title: "Lorem ipsum, dolor sit amet consectetur adipiscing elit.",
            category: "Technical Consultant",
            postedOn: "January 18, 2024 02:51 PM",
            location: "Jaipur",
            salary: "10L-15L",
            status: "Pending",
        }, {
            title: "Lorem ipsum, dolor sit amet consectetur adipiscing elit.",
            category: "Technical Consultant",
            postedOn: "January 18, 2024 02:51 PM",
            location: "Jaipur",
            salary: "10L-15L",
            status: "Pending",
        }, {
            title: "Lorem ipsum, dolor sit amet consectetur adipiscing elit.",
            category: "Technical Consultant",
            postedOn: "January 18, 2024 02:51 PM",
            location: "Jaipur",
            salary: "10L-15L",
            status: "Pending",
        }, {
            title: "Lorem ipsum, dolor sit amet consectetur adipiscing elit.",
            category: "Technical Consultant",
            postedOn: "January 18, 2024 02:51 PM",
            location: "Jaipur",
            salary: "10L-15L",
            status: "Pending",
        }, {
            title: "Lorem ipsum, dolor sit amet consectetur adipiscing elit.",
            category: "Technical Consultant",
            postedOn: "January 18, 2024 02:51 PM",
            location: "hfkjhdfd",
            salary: "10L-15L",
            status: "Pending",
        }, {
            title: "Lorem ipsum, dolor sit amet consectetur adipiscing elit.",
            category: "kieujbdkej",
            postedOn: "January 18, 2024 02:51 PM",
            location: "Jaipur",
            salary: "10L-15L",
            status: "Pending",
        }
    ];

    const [currentPage, setCurrentPage] = useState(1);

    const jobsPerPage = 5; // Number of jobs per page

    const onPageChange = (page) => setCurrentPage(page);

    // Calculate the start and end indices of jobs for the current page
    const startIndex = (currentPage - 1) * jobsPerPage;
    const endIndex = startIndex + jobsPerPage;
    const paginatedJobs = jobs.slice(startIndex, endIndex);

    return (

        <div className="flex gap-2 h-full">

            <div className="bg-slate-50 flex-auto w-[10%] pt-10 ">
                <SideMenu />
            </div>

            <div className=" bg-gray-200  flex-auto w-[80%] pt-10 mt-6 px-4">
                <div className="w-full pl-4 mb-2">
                <div className="flex justify-between items-center mb-1  ">
                    <h2 className="mb-4 text-3xl font-extrabold leading-none tracking-tight text-gray-900 md:text-4xl dark:text-white">My Jobs</h2>
                    <Link to="/postjob">
                    <div  className="bg-slate-800 hover:bg-blue-500 text-white px-4 py-2 rounded">Post a New Job</div>
                    </Link>

                </div>

                <div className="mb-5">
                    <BreadCrumb name="My Jobs" />
                </div>

                <div className="flex space-x-3 mb-8 mt-7">

                    <button className="bg-white hover:bg-blue-400 px-5 py-1 rounded-full size-sm ">All ({jobs.length})</button>
                    <button className="bg-white  hover:bg-blue-400  px-5 py-1 rounded-full size-sm">Active</button>
                    <button className="bg-white hover:bg-blue-400  px-5 py-1 rounded-full size-sm">Pending</button>
                    <button className="bg-white  hover:bg-blue-400  px-5 py-1 rounded-full size-sm">Expired</button>
                </div>


                <div className="overflow-x-auto ">
                    <div className="overflow-x-auto rounded-lg ">
                        <table className="min-w-full table-auto border-collapse ">
                            <thead>
                                <tr className=" bg-slate-800 text-white text-md ">
                                    <th className="py-3 px-6 text-left">Job Title</th>
                                    <th className="py-3 px-6 text-left">Category</th>
                                    <th className="py-3 px-6 text-left">Posted on</th>
                                    <th className="py-3 px-6 text-left">Location</th>
                                    <th className="py-3 px-6 text-left">Salary</th>
                                    <th className="py-3 px-6 text-left">Status</th>
                                    <th className="py-3 px-6 text-left">Action</th>
                                </tr>
                            </thead>
                            <tbody className="bg-white text-sm">
                                {paginatedJobs.map((job, index) => (
                                    <tr key={index} className="border-b">
                                        <td className="py-3 px-6">{job.title}</td>
                                        <td className="py-3 px-6">{job.category}</td>
                                        <td className="py-3 px-6">{job.postedOn}</td>
                                        <td className="py-3 px-6">{job.location}</td>
                                        <td className="py-3 px-6">{job.salary}</td>
                                        <td className="py-3 px-6">
                                            <span
                                                className={`px-3 py-1 rounded-full text-sm ${job.status === "Pending" ? "bg-yellow-100 text-yellow-700" : "bg-green-200 text-green-700"
                                                    }`}
                                            >
                                                {job.status}
                                            </span>
                                        </td>
                                        <td className="py-3 px-6">
                                            <button className="text-blue-500 hover:underline">View</button>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>




                <div className="flex overflow-x-auto sm:justify-end mt-3">
                    <div className="mb-4">
                        
                    </div>
                    <Pagination
                        currentPage={currentPage}
                        totalPages={Math.ceil(jobs.length / jobsPerPage)}
                        onPageChange={onPageChange}
                    />
                </div>
            </div>
            </div>
        </div>
    );



}