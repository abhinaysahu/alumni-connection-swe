import SideMenu from "../components/Sidebar";
import { BreadCrumb } from "../components/BreadCrumb";
import PasswordForm from "../components/PasswordForm";
import { useUser } from "../UserContext";

export default function ChangePassword() {
  
  const {user} = useUser();
  console.log(user);

  if(!user){
    return null;
  }
  return (
    <div className="flex gap-2 h-full flex-grow  ">
    <div className="bg-slate-50 flex-auto w-[10%] pt-10 ">
      <SideMenu />
    </div>
    <div className="bg-gray-200 flex-auto w-[80%] pl-4 ">
      <div className="w-9/10 bg-gray-200 ">
        <div className="pt-16 pl-5 ">
          <h2 class="mb-4 text-3xl font-extrabold leading-none tracking-tight text-gray-900 md:text-4xl dark:text-white">Change Password</h2>
          <BreadCrumb name="Update your  password" />
        </div>

          <div className="flex   justify-center  mt-5  ">
            <div className=" w-4/12 h-[55%] rounded-md bg-slate-50 ">
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
