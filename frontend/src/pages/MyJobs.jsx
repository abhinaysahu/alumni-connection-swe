

import SideMenu from "../components/Sidebar";
import { BreadCrumb } from "../components/BreadCrumb";
import { Table } from "flowbite-react";
// import { Button } from "flowbite-react";

import { Pagination } from "flowbite-react";
import {useEffect, useState} from "react";
import { Link } from "react-router-dom";

import { Button, Modal } from "flowbite-react";
import axios from "axios";





export default function MyJob() {


    const [openModal, setOpenModal] = useState(false);


    const jobs1 = [
        {
            title: "Software Engineer",
            category: "Technical Consultant",
            postedOn: "January 18, 2024 02:51 PM",
            location: "Jaipur",
            salary: "10L-15L",
            status: "Active",
        },
        {
            title: "Lorem ipsum, dolor sit amet consectetur adipiscing elit.",
            category: "Technical fhsdjfhalksdf",
            postedOn: "January 18, 2024 02:51 PM",
            location: "Jaipur",
            salary: "10L-15L",
            status: "Active",
        },
        {
            title: "Lorem ipsum, dolor sit amet consectetur adipiscing elit.",
            category: "Technical Consultant",
            postedOn: "January 18, 2024 02:51 PM",
            location: "fsdjafhdlskjhf",
            salary: "10L-15L",
            status: "Active",
        },
        {
            title: "Lorem ipsum, dolor sit amet consectetur adipiscing elit.",
            category: "Technical Consultant",
            postedOn: "January 18, 2024 02:51 PM",
            location: "Jaipur",
            salary: "10L-15L",
            status: "Active",
        },
        {
            title: "Lorem ipsum, dolor sit amet consectetur adipiscing elit.",
            category: "Technical Consultant",
            postedOn: "January 18, 2024 02:51 PM",
            location: "Jaipur",
            salary: "10L-15L",
            status: "Expired",
        },
        {
            title: "Lorem ipsum, dolor sit amet consectetur adipiscing elit.",
            category: "Technical Consultant",
            postedOn: "January 18, 2024 02:51 PM",
            location: "Jaipur",
            salary: "10L-jdhfjdsf",
            status: "Active",
        },
        {
            title: "Lorem ipsum, dolor sit amet consectetur adipiscing elit.",
            category: "Technical Consultant",
            postedOn: "January 18, 2024 02:51 PM",
            location: "Jaipur",
            salary: "10L-dfhjheuifu",
            status: "Expired",
        },
        {
            title: "Lorem ipsum, dolor sit amet consectetur adipiscing elit.",
            category: "Technical Consultant",
            postedOn: "January 18, 2024 02:51 PM",
            location: "hsdkjfhdf",
            salary: "10L-15L",
            status: "Expired",
        },
        {
            title: "Lorem ipsum, dolor sit amet consectetur adipiscing elit.",
            category: "Technical Consultant",
            postedOn: "January 18, 2024 02:51 PM",
            location: "Jaipur",
            salary: "10L-15L",
            status: "Active",
        }, {
            title: "Lorem ipsum, dolor sit amet consectetur adipiscing elit.",
            category: "Technical Consultant",
            postedOn: "January 18, 2024 02:51 PM",
            location: "Jaipur",
            salary: "10L-15L",
            status: "Active",
        }, {
            title: "Lorem ipsum, dolor sit amet consectetur adipiscing elit.",
            category: "Technical Consultant",
            postedOn: "January 18, 2024 02:51 PM",
            location: "Jaipur",
            salary: "10L-15L",
            status: "Active",
        }, {
            title: "Lorem ipsum, dolor sit amet consectetur adipiscing elit.",
            category: "Technical Consultant",
            postedOn: "January 18, 2024 02:51 PM",
            location: "Jaipur",
            salary: "10L-15L",
            status: "Active",
        }, {
            title: "Lorem ipsum, dolor sit amet consectetur adipiscing elit.",
            category: "Technical Consultant",
            postedOn: "January 18, 2024 02:51 PM",
            location: "Jaipur",
            salary: "10L-15L",
            status: "Active",
        }, {
            title: "Lorem ipsum, dolor sit amet consectetur adipiscing elit.",
            category: "Technical Consultant",
            postedOn: "January 18, 2024 02:51 PM",
            location: "hfkjhdfd",
            salary: "10L-15L",
            status: "Expired",
        }, {
            title: "Lorem ipsum, dolor sit amet consectetur adipiscing elit.",
            category: "kieujbdkej",
            postedOn: "January 18, 2024 02:51 PM",
            location: "Jaipur",
            salary: "10L-15L",
            status: "Active",
        }
    ];

    const [jobs, setJobs] = useState([]);
    const [filteredJobs, setFilteredJobs] = useState([]);
    const [selectedRowData, setSelectedRowData] = useState(null);

    const [currentPage, setCurrentPage] = useState(1);
    const jobsPerPage = 5; // Number of jobs per page

    const onPageChange = (page) => setCurrentPage(page);

    // Calculate the start and end indices of jobs for the current page
    const startIndex = (currentPage - 1) * jobsPerPage;
    const endIndex = startIndex + jobsPerPage;
    const paginatedJobs = filteredJobs.slice(startIndex, endIndex);

    const handleViewDetails = (rowData) => {
        setSelectedRowData(rowData); // Set the selected row data
        setOpenModal(true);        // Open the modal
    };

    const handleCloseModal = () => {
        setOpenModal(false);       // Close the modal
        setSelectedRowData(null);    // Clear selected row data
    };

    const handleDelete = async (jobId) => {
        setJobs(jobs.filter((job) => job.jobId !== jobId));
        setFilteredJobs(jobs.filter((job) => job.jobId !== jobId));
        try{
            const response = await axios.delete(`http://localhost:8080/jobs/delete/${jobId}`, {withCredentials: true});
            handleCloseModal();
        }catch (e){
            console.log(e);
        }
    }

    useEffect(() => {
        const fetchJobs = async () => {
            try{
                const response = await axios.get("http://localhost:8080/jobs/postedjobs", {withCredentials: true});
                response.data.forEach(job => {
                    job["status"] = "Active";

                    const postedDate = new Date(job["jobExp"]).getTime();

                    if(postedDate < new Date().getTime()){
                        job["status"] = "Expired";
                    }
                })
                setJobs(response.data);
                console.log(response.data);
                setFilteredJobs(response.data)
            }catch (e) {
                console.log(e);
            }
        }

        fetchJobs();
    }, [])

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

                    <button className="bg-white hover:bg-blue-400 px-5 py-1 rounded-full size-sm " onClick={() => {
                        setFilteredJobs(jobs)
                    }}>All ({jobs.length})</button>
                    <button className="bg-white  hover:bg-blue-400  px-5 py-1 rounded-full size-sm" onClick={() => {
                        setFilteredJobs(jobs.filter((job) => job.status === "Active"))
                    }}>Active</button>
                    <button className="bg-white  hover:bg-blue-400  px-5 py-1 rounded-full size-sm" onClick={() => {
                        setFilteredJobs(jobs.filter((job) => job.status === "Expired"))
                    }}>Expired</button>
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
                                        <td className="py-3 px-6">{job.type}</td>
                                        <td className="py-3 px-6">{job.postedOn}</td>
                                        <td className="py-3 px-6">{job.location}</td>
                                        <td className="py-3 px-6">{job.salary}</td>
                                        <td className="py-3 px-6">
                                            <span
                                                className={`px-3 py-1 rounded-full text-sm ${job.status === "Pending" ? "bg-yellow-100 text-yellow-700" : job.status === "Active" ? "bg-green-200 text-green-700" : "bg-red-200 text-red-700"
                                                    }`}
                                            >
                                                {job.status}
                                            </span>
                                        </td>
                                        <td className="py-3 px-6">


                                            <Button className="bg-blue-700  hover:bg-blue-400" size="sm" onClick={() => handleViewDetails(job)}>View</Button>
                                            {selectedRowData && <Modal show={openModal} onClose={() => handleCloseModal()}>
                                                <Modal.Header>Event Details</Modal.Header>
                                                <Modal.Body>
                                                    <div className="space-y-20 ">

                                                        <div
                                                            className="p-6 bg-white shadow-md  w-90 relative rounded-xl">


                                                            <div className="mb-4">
                                                                <h3 className="text-2xl font-semibold">{selectedRowData.title}</h3>
                                                                <p className="text-xl">{selectedRowData.companyName}</p>

                                                            </div>


                                                            <div className="space-y-4">

                                                                <div className="border-t pt-2 mb-4">
                                                                    <p className="text-md font-bold">Description</p>
                                                                    <p className="text-sm">{selectedRowData.description}</p>
                                                                </div>
                                                            </div>


                                                            <div className="space-y-4">
                                                                <div className="flex justify-between border-t pt-2">
                                                                    <span className="text-gray-600">Deadline</span>
                                                                    <span className="text-black">{selectedRowData.jobExp}</span>
                                                                </div>
                                                                <div className="flex justify-between border-t pt-2">
                                                                    <span className="text-gray-600">Location</span>
                                                                    <span
                                                                        className="text-black">{selectedRowData.location}</span>
                                                                </div>
                                                                <div className="flex justify-between border-t pt-2">
                                                                    <span className="text-gray-600">Salary</span>
                                                                    <span className="text-black">{selectedRowData.salary}</span>
                                                                </div>
                                                            </div>
                                                        </div>

                                                    </div>
                                                </Modal.Body>
                                                <Modal.Footer>
                                                    <Button className="bg-blue-700  hover:bg-blue-400"
                                                            onClick={() => setOpenModal(false)}>Edit</Button>
                                                    <Button className="bg-red-700  hover:bg-red-400"
                                                            onClick={() => {handleDelete(selectedRowData.jobId)}}>
                                                        Delete
                                                    </Button>
                                                </Modal.Footer>
                                            </Modal>}
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