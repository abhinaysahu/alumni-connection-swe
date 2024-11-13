import React, {useContext, useState} from "react";
import { Button, Checkbox, Label, TextInput } from "flowbite-react";
import {useForm} from "react-hook-form";
import {Link, useNavigate} from "react-router-dom";
import axios from "axios";
import {useAuth} from "../auth.jsx";
import { useUser } from "../UserContext.jsx";
import {toast, Toaster} from "sonner";


export default function SinginForm(){
  const { setUser } = useUser();
  const {register,handleSubmit,formState:{errors} }  = useForm();
  const navigate = useNavigate();
  const [loginError, setLoginError] = useState('');
  const [loginMessage, setLoginMessage] = useState('');
  const {isAuthenticated, setIsAuthenticated} = useAuth();
  // const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

  return (
      <>
        <form className="flex max-w-md flex-col gap-4" onSubmit={handleSubmit(async (data) => {
          const loadingToastId = toast.loading('Logging in...', {
            duration: Infinity // Make it stay until manually dismissed
          });
        try {
          setLoginMessage('Please wait....');
          await new Promise(resolve => setTimeout(resolve, 500));
          const response = await axios.post('http://localhost:8080/users/login', {
            email: data.email,
            password: data.password
          }, {withCredentials: true});  // This is important

          // console.log("Before delay")
          // await delay(1000);
          // console.log("After delay")
          // If login is successful, redirect to dashboard
          setLoginError('');  //clear any existing errors

          setIsAuthenticated(true);
          if(response.data.msg === "Admin"){
            navigate("/admin")
            toast.success("You're Logged in as admin", { id: loadingToastId, duration: 2000 });
          }else {
            navigate("/");
            toast.success("You're Logged in", { id: loadingToastId });
            setTimeout(() =>{
              toast.dismiss(loadingToastId)
            },3000)
          }

          //  for User Context
          if (response.data.success) {
            setUser(response.data.user); // Store user data
            // Redirect to home or dashboard page
        }
        } catch (error) {
          console.error('Login failed:', error);
          if (error.response?.status === 401) {
            // setLoginError(error.response.data.msg);
            // setLoginMessage('');
            toast.error(error.response.data.msg, { id: loadingToastId,  duration: 3000 });
          } else{
            toast.error(`Login failed, please try again later`, { id: loadingToastId,  duration: 3000 });
          }

          setTimeout(() =>{
            toast.dismiss(loadingToastId)
          },3000)
          // Set error message based on the response
          // if (error.response?.status === 401) {
          //   setLoginError(error.response.data.msg);
          //   setLoginMessage('');
          // } else {
          //   setLoginError('An error occurred. Please try again later.');
          //   setLoginMessage('');
          // }
          // Handle login error (show error message to user)
        }
        // console.log(data);
      })}
      > {/* email */}
        {/*{loginError && <div style={{color: 'red', marginBottom: '10px'}}>{loginError}</div>}*/}
        {/*  {loginMessage && <div style={{color: 'green', marginBottom: '10px'}}>{loginMessage}</div>}*/}
        <div>
          <div className="mb-2 block">
            <Label htmlFor="email1" value="Email" />
          </div>
          <TextInput id="email1" type="email" placeholder="name@google.com" color={errors.email?"failure" : "none"}
                     {...register("email", {
                       required: "This is required",
                       pattern: {
                         value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                         message: "Enter a valid email address"
                       }
                     })} />
          <div className={errors.email?"text-red-600":"text-green-400"}>{errors.email?.message}</div>
        </div>
        {/* password */}
        <div>
          <div className="mb-2 block">
            <Label htmlFor="password" value="Password"/>
          </div>
          <TextInput id="password" type="password" required color={errors.password?"failure":"none"}
                     {...register("password", {
                       required: "This is required",
                       pattern: {
                         value: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
                         message: "Password must be at least 8 characters, include an uppercase, a lowercase, a number, and a special character"
                       }
                     })} />
          <div className={errors.password?"text-red-600" : "text-green-400"}>{errors.password?.message}</div>
        </div>
        <Button type="submit" color="blue">Sign in</Button></form>
  <div id="register" className="text-right w-full max-w-md text-gray-500 text-sm mt-1">
    Are you new? <Link to="/signup" className="text-blue-600 underline cursor-pointer">Create an account</Link>
  </div>
      </>

  )
}