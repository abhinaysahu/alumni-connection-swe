import Sign_Right from "../components/Sign_Right";
import SinginForm from "../components/SigninForm";

export default function (){
  return   <div className="flex grow">
  {/* Left half */}
  <div className="w-1/2 ">
    {/* Content for the left half */}
    <div className="w-full max-w-lg mx-auto p-4 bg-gray-100" >
    <div className={"font-semibold text-3xl mt-8 "}>Sign In</div>
    <div className={"mt-4 text-gray-500 "}>Welcome to Alumni Portal</div>
    </div>
    <div className=" w-full max-w-lg  mx-auto p-4">
    <SinginForm></SinginForm>
    </div>
  </div>

  {/* Right half */}
  <div className="w-1/2 ">
    <Sign_Right />
  {/* Add background image with blend mode */} 
  </div>
</div>
}