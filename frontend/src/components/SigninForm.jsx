import React ,{ useState } from "react";
import { Button, Checkbox, Label, TextInput } from "flowbite-react";
import {useForm} from "react-hook-form";
import { useNavigate } from "react-router-dom";
import axios from "axios";


export default function SinginForm(){
  const {register,handleSubmit,formState:{errors} }  = useForm();
  const navigate = useNavigate();
  const [loginError, setLoginError] = useState('');

  return (
    <form className="flex max-w-md flex-col gap-4" onSubmit={handleSubmit(async (data)=>{
      try {
        const response = await axios.post('http://localhost:8080/users/login', {
          email: data.email,
          password: data.password
        }, { withCredentials: true });  // This is important

        // If login is successful, redirect to dashboard
        setLoginError('');  //clear any existing errors
        navigate("/about")
      } catch (error) {
        console.error('Login failed:', error);
        // Set error message based on the response
        if (error.response?.status === 401) {
          setLoginError('Invalid username or password');
        } else {
          setLoginError('An error occurred. Please try again later.');
        }
        // Handle login error (show error message to user)
      }
      // console.log(data);
  })}
  > {/* email */}
      {loginError && <div style={{ color: 'red', marginBottom: '10px' }}>{loginError}</div>}
  <div>
    <div className="mb-2 block">
      <Label htmlFor="email1" value="Email"  />
    </div>
    <TextInput id="email1" type="email" placeholder="name@google.com" 
       {...register("email",{
        required: "this is required",
        pattern: {
          value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
          message: "Enter a valid email address"
        }
       })} />
       <p>{errors.email?.message}</p>
  </div>
  {/* password */}
  <div>
    <div className="mb-2 block">
      <Label htmlFor="password" value="Password"  />
    </div>
    <TextInput id="password" type="password" required
      {...register("password",{
        required: "this is required",
        pattern: {
          value: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
          message: "Password must be at least 8 characters, include an uppercase, a lowercase, a number, and a special character"
        }
      } )} />
      <p>{errors.password?.message}</p>
  </div>
  <Button type="submit">Sign in</Button></form>
  )
}