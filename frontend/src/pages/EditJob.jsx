import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import SideMenu from "../components/Sidebar";
import { BreadCrumb } from "../components/BreadCrumb";
import ProfileForm from "../components/ProfileForm";
import JobEdit from "../components/JobEdit";


export default function EditJob(){
  const { jobId } = useParams();
  return <>
    <div className="flex gap-2 h-full  ">
      <div className="bg-slate-50 flex-auto w-[10%] pt-10 ">
        <SideMenu />
      </div>
      <div className="bg-gray-200 flex-auto w-[80%] pl-4 ">
        <div className="w-9/10 bg-gray-200 ">
          <div className="pt-16 pl-5 ">
            <h2 class="mb-4 text-3xl font-extrabold leading-none tracking-tight text-gray-900 md:text-4xl dark:text-white">Edit Job Details</h2>
            <BreadCrumb name="Edit Job" />
          </div>

          <div className="flex pb-10 justify-center mt-5">
            <div className=" w-2/3 h-4/5 rounded-md bg-slate-50 ">
              <div className="h-12 w-full bg-slate-900 text-white rounded-t-lg pl-10 flex items-center font-bold">
                Job Details
              </div>
              <JobEdit jobID={jobId}/>
            </div>
          </div>
        </div>
      </div>
    </div>
  </>
}