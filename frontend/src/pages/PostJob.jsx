import SideMenu from "../components/Sidebar";
import { BreadCrumb } from "../components/BreadCrumb";
import JobForm from "../components/JobForm";

export default function PostJob() {

    return (


        <div className="flex gap-2 h-full  ">

            <div className="bg-slate-50 flex-auto w-[10%] pt-12 ">
                <SideMenu />
            </div>
            <div className=" bg-slate-50 flex-auto w-[80%]">
                <div className="  w-9/10 bg-gray-200 ">
                    <div className="pt-16 pl-5 ">
                        <h2 class="mb-4 text-3xl font-extrabold leading-none tracking-tight text-gray-900 md:text-4xl dark:text-white">Post a New Job</h2>
                        <BreadCrumb name="Post a Job" />
                    </div>

                    <div className=" pb-10 flex justify-center mt-5">

                        <div className=" w-2/3 h-4/5 rounded-md bg-slate-50 ">

                            <div className="h-12 w-full bg-slate-900 text-white rounded-t-lg pl-10 flex items-center font-bold">
                                    Job Details
                            </div>
                            <JobForm/>
                        </div>
                    </div>


                </div>
            </div>

                
        </div>


    )


}