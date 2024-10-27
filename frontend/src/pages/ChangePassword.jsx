import SideMenu from "../components/Sidebar";
import { BreadCrumb } from "../components/BreadCrumb";
import PasswordForm from "../components/PasswordForm";

export default function ChangePassword() {
  return (
    <div className="flex gap-2 h-full  ">
      <div className="bg-slate-50 flex-auto w-[10%] pt-12 ">
        <SideMenu />
      </div>
      <div className="bg-slate-50 flex-auto w-9/12 h-screen">
        <div className="w-9/10 bg-gray-200 ">
          <div className="pt-16 pl-5 ">
            <h2 class="mb-4 text-3xl font-extrabold leading-none tracking-tight text-gray-900 md:text-4xl dark:text-white">
              Change Password
            </h2>
            <BreadCrumb name="Change Password" />
          </div>

          <div className="flex  h-[82vh] justify-center mt-5">
            <div className=" w-3/12 h-[55%] rounded-md bg-slate-50 ">
              <div className="h-12 w-full bg-slate-900 text-white rounded-t-lg pl-10 flex items-center font-bold">
                Update your Password
              </div>
              <PasswordForm />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
