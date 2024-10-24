import { Sidebar } from "flowbite-react";
import { BiBuoy } from "react-icons/bi";
import { FaHome } from "react-icons/fa";
import { MdPostAdd } from "react-icons/md";
import { FaSuitcase } from "react-icons/fa6";
import { MdCreateNewFolder } from "react-icons/md";
import { MdEventNote } from "react-icons/md";
import { IoMdSettings } from "react-icons/io";
import { LuLogOut } from "react-icons/lu";
import { useLocation } from "react-router-dom";

import {
  HiArrowSmRight,
  HiChartPie,
  HiInbox,
  HiShoppingBag,
  HiTable,
  HiUser,
  HiViewBoards,
} from "react-icons/hi";
export default function SideMenu() {
    const location = useLocation();

    const isActive = (path) => location.pathname === path;
  return (
    <>
      <Sidebar  className=" fixed left-0"aria-label="Sidebar with content separator example">
        <Sidebar.Items>
          <Sidebar.ItemGroup>
            <Sidebar.Item  className={isActive("/dashboard") ? "text-white bg-blue-700 hover:bg-blue-700" : "text-gray-900 hover:bg-blue-400"}
                   href="/" icon={() => (
                    <FaHome
                      className={(isActive("/dashboard") ? "text-white" : "") + "w-5 h-5"}
                    />
                  )}>
              Dashboard
            </Sidebar.Item>
            <Sidebar.Item  className={isActive("/postjob") ? "text-white bg-blue-700 hover:bg-blue-700" : "text-gray-900 hover:bg-blue-400"} href="/postjob" icon={() => (
                    <MdPostAdd
                      className={(isActive("/postjob") ? "text-white" : "") + "w-5 h-5"}
                    />
                  )}>
              Post a Job
            </Sidebar.Item>
            <Sidebar.Item  className={isActive("/myjobs") ? "text-white bg-blue-700 hover:bg-blue-700" : "text-gray-900 hover:bg-blue-400"} href="/myjobs" icon={()=>(<FaSuitcase className={(isActive("/myjobs")? "text-white":"") + "w-5 h-4" }/>)}>
              My Jobs
            </Sidebar.Item>
            <Sidebar.Item  className={isActive("/createevent") ? "text-white bg-blue-700 hover:bg-blue-700" : "text-gray-900 hover:bg-blue-400"} href="createevent"  icon={() => (
                    <MdCreateNewFolder
                      className={(isActive("/createevent") ? "text-white" : "") + "w-5 h-5"}
                    />
                  )}>
              Create an event
            </Sidebar.Item>
            <Sidebar.Item  className={isActive("/myevents") ? "text-white bg-blue-700 hover:bg-blue-700" : "text-gray-900 hover:bg-blue-400"} href="#"  icon={() => (
                    <MdEventNote
                      className={(isActive("/myevents") ? "text-white" : "") + "w-5 h-5"}
                    />
                  )}>
              My Events
            </Sidebar.Item>
            <Sidebar.Item  className={isActive("/profilesettings") ? "text-white bg-blue-700 hover:bg-blue-700" : "text-gray-900 hover:bg-blue-400"} href="/profilesettings"  icon={() => (
                    <IoMdSettings
                      className={(isActive("/profilesettings") ? "text-white" : "") + "w-5 h-5"}
                    />
                  )}>
              Profile Settings
            </Sidebar.Item>
            <Sidebar.Item  className={isActive("/changepassword") ? "text-white bg-blue-700 hover:bg-blue-700" : "text-gray-900 hover:bg-blue-400"} href="#" icon={() => (
                    <HiTable
                      className={(isActive("/changepassword") ? "text-white" : "") + "w-5 h-5"}
                    />
                  )}>
              Change Password
            </Sidebar.Item>

            <Sidebar.Item className={isActive("/") ? "text-white bg-blue-700 hover:bg-blue-700" : "text-gray-900 hover:bg-blue-400"} href="/" icon={() => (
                    <LuLogOut
                      className={(isActive("/") ? "text-white" : "") + "w-5 h-5"}
                    />
                  )}>
              Log out
            </Sidebar.Item>
          </Sidebar.ItemGroup>
        </Sidebar.Items>
      </Sidebar>
    </>
  );
}
