import SideMenu from "../components/Sidebar";
import { BreadCrumb } from "../components/BreadCrumb";
import { Button, Card } from "flowbite-react";
import { UsersIcon, BriefcaseIcon, CalendarIcon, NewspaperIcon } from "@heroicons/react/outline"; 
import { Link } from "react-router-dom";

export default function Dashboard() {
  return (
    <div className=" h-screen">
    <div className="flex gap-2 h-full ">
      {/* Sidebar */}
      <div className="bg-slate-50 flex-auto w-[10%] pt-10">
        <SideMenu />
      </div>

      {/* Main Content */}
      <div className="bg-gray-200 flex-auto w-[80%] pt-10 mt-6 px-4 h-full">
        <div className="w-full pl-4 mb-2">
          {/* Page Header */}
          <div className="flex justify-between items-center mb-1  ">
                    <h2 className="mb-4 text-3xl font-extrabold leading-none tracking-tight text-gray-900 md:text-4xl dark:text-white">Dashboard</h2>
                    <Link to="/postjob">
                    <div  className="bg-slate-800 hover:bg-blue-500 text-white px-4 py-2 rounded">Post a New Job</div>
                    </Link>

                </div>

          {/* Cards Section */}
          <div className="flex justify-center mt-8 gap-4">
            <Card className="w-48 h-32 flex items-center justify-center border rounded-lg bg-white">
              <div className="flex flex-col items-center justify-center">
                <UsersIcon className="h-8 w-8 text-indigo-500" />
                <p className="text-center text-lg font mt-2">View Connections</p>
              </div>
            </Card>
            <Card className="w-48 h-32 flex items-center justify-center border rounded-lg bg-white">
              <div className="flex flex-col items-center justify-center">
                <BriefcaseIcon className="h-8 w-8 text-indigo-500" />
                <p className="text-center text-lg font mt-2">All Jobs</p>
              </div>
            </Card>
            <Card className="w-48 h-32 flex items-center justify-center border rounded-lg bg-white">
              <div className="flex flex-col items-center justify-center">
                <CalendarIcon className="h-8 w-8 text-indigo-500" />
                <p className="text-center text-lg font mt-2">All Events</p>
              </div>
            </Card>
            <Card className="w-48 h-32 flex items-center justify-center border rounded-lg bg-white">
              <div className="flex flex-col items-center justify-center">
                <NewspaperIcon className="h-8 w-8 text-indigo-500" />
                <p className="text-center text-lg font mt-2">Post Feeds</p>
              </div>
            </Card>
          </div>
        </div>
      </div>
      </div>
      </div>
  );
}
