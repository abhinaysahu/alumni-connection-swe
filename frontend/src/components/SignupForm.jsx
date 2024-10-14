import React ,{ useState } from "react";
import { Button, Checkbox, Label, TextInput } from "flowbite-react";
import {useForm} from "react-hook-form";
export default function SignupForm(){
  const {register,handleSubmit,formState:{errors} }  = useForm();
return (
  <form className="flex max-w-md flex-col gap-4" onSubmit={handleSubmit((data)=>{
      console.log(data);
  })}
  >
    {/* first name */}
    <div>
      <div className="mb-2 block">
        <Label htmlFor="firstName" value=" First name" />
      </div>
      <TextInput id="firstName" type="text"  
          {...register("firstName", {
            required: "this is required"
          })}  />
          <p>{errors.firstName?.message}</p>
    </div>
    {/* last name */}
    <div>
      <div className="mb-2 block">
        <Label htmlFor="lastName"  value="Last name"   />
      </div>
      <TextInput id="lastName" type="text" 
          {...register("lastName",{
            required: "this is required"
          })} />
          <p>{errors.lastName?.message}</p>
    </div>
    {/* phone */}
    <div>
      <div className="mb-2 block">
        <Label htmlFor="phone" value="Phone number" />
      </div>
      <TextInput id="phone" type="tel"  
        {...register("phone",{
          required: "this is  required",
          minLength: {
              value : 10,
              message : "phone number should be of 10 digits"
          },
          maxLength:{
            value: 10,
            message: "phone number should be of 10 digits"
          }
        })} />
        <p>{errors.phone?.message}</p>
    </div>
    {/* batch */}
    <div>
      <div className="mb-2 block">
        <Label htmlFor="batch" value="Graduation year"  />
      </div>
      <TextInput id="batch" type="text" 
          {...register("batch",{
            required: "this is required",
            min: {
              value: 1988,
              message: "Batch year cannot be earlier than 1988"
            },
            max: {
              value: 2024,
              message: "Batch year cannot be later than 2024"
            },
            pattern: {
              value: /^\d{4}$/, // ensures the input is a 4-digit number
              message: "Please enter a valid 4-digit year"
            }
          })
          } />
          <p>{errors.batch?.message}</p>
    </div>
    {/* roll number */}
    <div>
      <div className="mb-2 block">
        <Label htmlFor="roll number"  value="Roll number " />
      </div>
      <TextInput id="rollNo" type="text" placeholder="234CA001"
         {...register("rollNo",{
          required:"this is  required",
          pattern: {
            value: /^\d{3}CA\d{3}$/,
            message: "Enter a valid roll number"
          }
         })} />
         <p>{errors.rollNo?.message}</p>
    </div>
    {/* email */}
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
    <Button type="submit">Sign up</Button>
  </form>
);
}



// {/* <div className="mb-4">
//   <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="firstName">
//     First Name
//   </label>
//   <input
//     type="text"
//     name="firstName"
//     value={formData.firstName}
//     onChange={handleChange}
//     className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
//     placeholder="Enter your first name"
//   /> */}