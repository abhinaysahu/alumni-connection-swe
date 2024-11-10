import SideMenu from "../components/Sidebar";
import { BreadCrumb } from "../components/BreadCrumb";
import { Button, Card } from "flowbite-react";
import { UsersIcon, BriefcaseIcon, CalendarIcon, NewspaperIcon } from "@heroicons/react/outline"; 
import { Link } from "react-router-dom";

import { IoSettingsOutline } from "react-icons/io5";
import { HiTable } from "react-icons/hi";
import { IoIosBriefcase } from "react-icons/io";
import { FaUser } from "react-icons/fa";





export default function Dashboard() {
  return (
    <div className="flex gap-2 h-full flex-grow">
      {/* Sidebar */}
      <div className="bg-slate-50 flex-auto w-[10%] pt-10">
        <SideMenu />
      </div>

      {/* Main Content */}
      <div className="bg-gray-200 flex-auto w-[80%] pt-10 mt-6 px-4 ">
        <div className="w-full pl-4 mb-2">
          {/* Page Header */}
          <div className="flex justify-between items-center mb-1  ">
                    <h2 className="mb-4 text-3xl font-extrabold leading-none tracking-tight text-gray-900 md:text-4xl dark:text-white">Dashboard</h2>
                    <Link to="/postjob">
                    <div  className="bg-slate-800 hover:bg-blue-500 text-white px-4 py-2 rounded">Post a New Job</div>
                    </Link>

                </div>

         
          {/* Cards Section */}
          <div className="flex justify-center mt-12 gap-16">
              <Link to="/jobs">
              <Card className="w-64 h-40 flex flex-col items-center justify-center  rounded-2xl bg-white hover:bg-blue-400 hover:scale-105 transition-transform duration-300 hover:text-slate-50 text-blue-500 ">
                <div className="flex justify-center items-center">
              <IoIosBriefcase className="h-8 w-8 " />
              </div>
              <div className="text-center text-lg font mt-2">All Jobs</div>
              </Card>
              </Link>
              <Link to = "/alumni">
              <Card className="w-64 h-40 flex flex-col items-center justify-center  rounded-2xl bg-white  hover:bg-blue-400 hover:scale-105 transition-transform duration-300 hover:text-slate-50 text-blue-500 ">
              <div className="flex justify-center items-center">
              <UsersIcon className="h-8 w-8 " />
              </div>
              <div className="text-center text-lg font mt-2">Alumni</div>
              </Card>
              </Link>
              <Link to="/myprofile">
              <Card className="w-64 h-40 flex flex-col items-center justify-center  rounded-2xl bg-white  hover:bg-blue-400 hover:scale-105 transition-transform duration-300 hover:text-slate-50 text-blue-500 ">
              <div className="flex justify-center items-center">
              <FaUser className="h-8 w-8 " />
              </div>
              <div className="text-center text-lg font mt-2">My profile</div>
              </Card>
              </Link>
              <Link to="/changepassword">
              <Card className="w-64 h-40 flex flex-col items-center justify-center  rounded-2xl bg-white  hover:bg-blue-400 hover:scale-105 transition-transform duration-300 hover:text-slate-50 text-blue-500 ">
              <div className="flex justify-center items-center">
              <HiTable className="h-8 w-8 " />
              </div>
              <div className="text-center text-lg font mt-2">Change Password</div>
              </Card>
              </Link>
            </div>

        </div>
      </div>
      </div>
  );
}