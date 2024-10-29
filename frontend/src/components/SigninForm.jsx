import React, {useContext, useState} from "react";
import { Button, Checkbox, Label, TextInput } from "flowbite-react";
import {useForm} from "react-hook-form";
import {Link, useNavigate} from "react-router-dom";
import axios from "axios";
import {authContext} from "../auth.jsx";


export default function SinginForm(){
  const {register,handleSubmit,formState:{errors} }  = useForm();
  const navigate = useNavigate();
  const [loginError, setLoginError] = useState('');
  const [loginMessage, setLoginMessage] = useState('');
  const {isAuthenticated, setIsAuthenticated} = useContext(authContext);
  // const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

  return (
      <>
        <form className="flex max-w-md flex-col gap-4" onSubmit={handleSubmit(async (data) => {
        try {
          setLoginMessage('Please wait....');
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
          navigate("/")
        } catch (error) {
          console.error('Login failed:', error);
          // Set error message based on the response
          if (error.response?.status === 401) {
            setLoginError(error.response.data.msg);
            setLoginMessage('');
          } else {
            setLoginError('An error occurred. Please try again later.');
            setLoginMessage('');
          }
          // Handle login error (show error message to user)
        }
        // console.log(data);
      })}
      > {/* email */}
        {loginError && <div style={{color: 'red', marginBottom: '10px'}}>{loginError}</div>}
          {loginMessage && <div style={{color: 'green', marginBottom: '10px'}}>{loginMessage}</div>}
        <div>
          <div className="mb-2 block">
            <Label htmlFor="email1" value="Email" />
          </div>
          <TextInput id="email1" type="email" placeholder="name@google.com" color={errors.email?"failure" : "success"}
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
          <TextInput id="password" type="password" required color={errors.password ? "failure" : "success"}
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