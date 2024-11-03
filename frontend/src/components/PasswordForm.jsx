import React, { useState } from "react";
import { Form } from "react-hook-form";
import { useForm } from "react-hook-form";
import { BiSolidHide, BiSolidShow } from "react-icons/bi";
import {
  Button,
  Checkbox,
  Label,
  TextInput,
  Select,
  Textarea,
  FileInput,
} from "flowbite-react";
import axios from "axios";
import { useUser } from "../UserContext";
import {toast} from "sonner";

export default function PasswordForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset
  } = useForm();

  const [error, setError] = useState(null);
  const [showCurrPassword, setShowCurrPassword] = useState(false);
  const [showNewPassword,setShowNewPassword] = useState(false);
  const {user} = useUser();
 
  if(!user){
    return null;
  }
  return (
    <form
      className="grid grid-cols-2 gap-1 m-2 pb-2"
      onSubmit={handleSubmit( async (data) => {
          setError(null);
          const toastId = toast.loading("Updating password", { duration: Infinity});

        if (data.newPassword !== data.confirmPassword) {
          setError("New passwords do not match.");
          return;
        }
        try {
          const response = await axios.post("http://localhost:8080/users/verifyPassword", {
            userId: user.userId,
            currentPassword: data.currPassword,
            newPassword: data.newPassword,
          });
    
          if (response.data.success) {
            toast.success("Password updated successfully", { id: toastId});
            reset();  // Clears the form fields after successful submission
          } else {
            console.log(response);
            toast.error(response.data.message || "An error occurred.", { id: toastId})
            // setError(response.data.message || "An error occurred.");
          }
            setTimeout(() => toast.dismiss(toastId), 3000);
        } catch (err) {
            toast.error(response.data.message || "An error occurred.", { id: toastId})
          console.error("Error updating password:", err);
            setTimeout(() => toast.dismiss(toastId), 3000);
          // setError("An error occurred.");
        }

      })}
    >
      {/* Current Password */}
      <div className="col-start-1 col-end-3 row-start-1 row-end-2">
        <div className="mb-2 block ">
          <Label htmlFor="currPassword" value="Current Password" />
        </div>
        <div className="relative">
          <TextInput
            id="currPassword"
            type={showCurrPassword ? "text" : "password"}
            color={errors.currPassword ? "failure" : "none"}
            {...register("currPassword", {
              required: "this is required",
              pattern: {
                value: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
                message:
                  "Password must be at least 8 characters, include an uppercase, a lowercase, a number, and a special character",
              },
            })}
           // Adds padding to make space for the icon
          />
          <div
            onClick={() => setShowCurrPassword(!showCurrPassword)}
            className="absolute inset-y-0 right-2 flex items-center cursor-pointer text-xl"
          >
            {showCurrPassword ? <BiSolidHide /> : <BiSolidShow />}
          </div>
        </div>
      </div>
         {/* {errors.currPassword && <p>{errors.currPassword.message}</p>} */}
        {/* <div className={errors.firstName?"text-sm text-red-600" : "text-sm text-green-400"}>{errors.firstName?.message}</div> */}
      {/* New Password*/}
      <div className="col-start-1 col-end-3 row-start-2 row-end-3">
        <div className="mb-2 block ">
          <Label htmlFor="newPassword" value="New Password" />
        </div>
        <div className=" relative">
        <TextInput
          id="newPassword"
          type= {showNewPassword? "text" : "password"}
          placeholder=""
          color={errors.newPassword?"failure" : "none"}
          {...register("newPassword", {
            required: "this is required",
            pattern: {
              value: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
              message: "Password must be at least 8 characters, include an uppercase, a lowercase, a number, and a special character"
            }
          })}
        />
        <div className="flex items-center inset-y-0 right-2 absolute cursor-pointer text-xl" onClick={()=>{
          setShowNewPassword(!showNewPassword)
        }}>
          {showNewPassword?<BiSolidHide></BiSolidHide>: <BiSolidShow></BiSolidShow>}
        </div>
</div>
        </div>

        {/* confirm password */}

        <div className="col-start-1 col-end-3 row-start-3 row-end-4">
        <div className="mb-2 block ">
          <Label htmlFor="confirmPassword" value="Confirm Password" />
        </div>
        <TextInput
          id="confirmPassword"
          type="password"
          placeholder=""
          color={errors.confirmPassword?"failure" : "none"}
          {...register("confirmPassword", {
            required: "this is required",
            pattern: {
              value: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
              message: "Password must be at least 8 characters, include an uppercase, a lowercase, a number, and a special character"
            }
          })}
        />
        {/*{error && <p className="text-red-500 mt-2">{error}</p>}*/}
        </div>

        
        <div className="col-start-1 col-end-3 row-start-4 row-end-5 mt-4 flex justify-center pb-2">
        <Button type="submit" color={"blue"} className="w-1/3">Update</Button>
      </div>
        {/* <div  className={errors.lastName?"text-sm text-red-600" : "text-sm text-green-400"}>{errors.lastName?.message}</div> */}
    </form>
  );

}
