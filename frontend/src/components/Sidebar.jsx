import { Sidebar } from "flowbite-react";
import { BiBuoy } from "react-icons/bi";
import { FaHome } from "react-icons/fa";
import { MdPostAdd } from "react-icons/md";
import { FaSuitcase } from "react-icons/fa6";
import { MdCreateNewFolder } from "react-icons/md";
import { MdEventNote } from "react-icons/md";
import { IoMdSettings } from "react-icons/io";
import { LuLogOut } from "react-icons/lu";


import { HiArrowSmRight, HiChartPie, HiInbox, HiShoppingBag, HiTable, HiUser, HiViewBoards } from "react-icons/hi";
export default function SideMenu(){

 return(

   <>
     <Sidebar aria-label="Sidebar with content separator example">
      <Sidebar.Items>
      <Sidebar.ItemGroup>
          <Sidebar.Item href="#" icon={FaHome}>
            Dashboard
          </Sidebar.Item>
          <Sidebar.Item href="/postjob" icon= {MdPostAdd }>
            Post a Job
          </Sidebar.Item>
          <Sidebar.Item href="#" icon={FaSuitcase }>
            My Jobs
          </Sidebar.Item>
          <Sidebar.Item href="#" icon={MdCreateNewFolder}>
            Create an event
          </Sidebar.Item>
          <Sidebar.Item href="#" icon={MdEventNote }>
            My Events
          </Sidebar.Item>
          <Sidebar.Item href="#" icon={IoMdSettings}>
            Profile Settings
          </Sidebar.Item>
          <Sidebar.Item href="#" icon={HiTable}>
            Change Password
          </Sidebar.Item>
        
      
          <Sidebar.Item href="#" icon={LuLogOut}>
            Log out
          </Sidebar.Item>
          
        </Sidebar.ItemGroup>
      </Sidebar.Items>
    </Sidebar>
   
   </>

 );


}