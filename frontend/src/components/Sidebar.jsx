import { Sidebar } from "flowbite-react";
import { BiBuoy } from "react-icons/bi";
import { FaHome } from "react-icons/fa";
import { MdPostAdd } from "react-icons/md";
import { FaSuitcase } from "react-icons/fa6";
import { MdCreateNewFolder } from "react-icons/md";
import { MdEventNote } from "react-icons/md";
import { IoMdSettings } from "react-icons/io";
import { LuLogOut } from "react-icons/lu";
import {Link, useLocation, useNavigate} from "react-router-dom";

import {
  HiArrowSmRight,
  HiChartPie,
  HiInbox,
  HiShoppingBag,
  HiTable,
  HiUser,
  HiViewBoards,
} from "react-icons/hi";
import {useContext} from "react";
import axios from "axios";
import {authContext} from "../auth.jsx";
export default function SideMenu() {
    const location = useLocation();
    const navigate = useNavigate();
    const {isAuthenticated, setIsAuthenticated} = useContext(authContext);

    const isActive = (path) => location.pathname === path;

    const logout = async () => {
        try{
           const response = await axios.get("http://localhost:8080/users/logout");
           console.log(response.data);
           setIsAuthenticated(false);
           navigate('/signin');
        }catch (e) {
            console.log(e);
        }
    }
  return (
    <>
      <Sidebar  className=" fixed left-0 z-20"aria-label="Sidebar with content separator example">
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
            <Sidebar.Item  className={isActive("/postjob") ? "text-white bg-blue-700 hover:bg-blue-700" : "text-gray-900 hover:bg-blue-400"} icon={() => (
                    <MdPostAdd
                      className={(isActive("/postjob") ? "text-white" : "") + "w-5 h-5"}
                    />
                  )}>
                <Link to={"/postjob"}>Post a Job</Link>
            </Sidebar.Item>
            <Sidebar.Item  className={isActive("/myjobs") ? "text-white bg-blue-700 hover:bg-blue-700" : "text-gray-900 hover:bg-blue-400"} href="/myjobs" icon={()=>(<FaSuitcase className={(isActive("/myjobs")? "text-white":"") + "w-5 h-4" }/>)}>
              My Jobs
            </Sidebar.Item>
            <Sidebar.Item  className={isActive("/profilesettings") ? "text-white bg-blue-700 hover:bg-blue-700" : "text-gray-900 hover:bg-blue-400"}  icon={() => (
                    <IoMdSettings
                      className={(isActive("/profilesettings") ? "text-white" : "") + "w-5 h-5"}
                    />
                  )}>

                <Link to={"/profilesettings"}>Profile Settings</Link>
            </Sidebar.Item>
            <Sidebar.Item  className={isActive("/changepassword") ? "text-white bg-blue-700 hover:bg-blue-700" : "text-gray-900 hover:bg-blue-400"} icon={() => (
                    <HiTable
                      className={(isActive("/changepassword") ? "text-white" : "") + "w-5 h-5"}
                    />
                  )}>

                <Link to={"/changepassword"}>Change Password</Link>
            </Sidebar.Item>

            <Sidebar.Item onClick={logout} className={isActive("/") ? "text-white bg-blue-700 hover:bg-blue-700 cursor-pointer" : "text-gray-900 hover:bg-blue-400 cursor-pointer"} icon={() => (
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
