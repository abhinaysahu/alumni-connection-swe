import SideMenu from "../components/Sidebar";
import { BreadCrumb } from "../components/BreadCrumb";
import { Button, Card } from "flowbite-react";
import { UsersIcon, BriefcaseIcon, CalendarIcon, NewspaperIcon } from "@heroicons/react/outline"; 

export default function Dashboard() {
  return (
    <div className="flex gap-2 h-full bg-gray-100">
      {/* Sidebar */}
      <div className="bg-gray-100 flex-auto w-[10%] pt-12">
        <SideMenu />
      </div>

      {/* Main Content */}
      <div className="p-10 bg-gray-100 flex-auto w-9/12 h-screen">
        <div className="p-5">
          {/* Page Header */}
          <div className="flex justify-between items-center">
            <div>
              <h2 className="mb-4 text-3xl font-extrabold leading-none tracking-tight text-gray-900 md:text-4xl">
                Dashboard
              </h2>
              <BreadCrumb name="Dashboard" />
            </div>
            {/* Post a Job Button using Flowbite */}
            <Button>
              Post a Job
            </Button>
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
  );
}
