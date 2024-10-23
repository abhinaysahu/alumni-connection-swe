import React, { useState } from "react";
import {
  Button,
  Checkbox,
  Label,
  TextInput,
  Select,
  Textarea,
  FileInput,
} from "flowbite-react";
import { useForm } from "react-hook-form";

export default function SignupForm() {
  const { register, handleSubmit, formState: { errors } } = useForm();

  const startYear = 1988;
  const endYear = 2027;
  const years = Array.from({ length: endYear - startYear + 1 }, (v, i) => startYear + i);

  return (
    <form className=" max-w-md  grid grid-row-11 grid-cols-2 gap-2 " onSubmit={handleSubmit((data) => {
      console.log(data);
    })}
    >
      {/* name */}
      <div row-start-1 row-end-2 col-start-1 col-end-2>
        <div className="block">
          <Label htmlFor="name" value="  Name" />
        </div>
        <TextInput id="name" type="text"
          {...register("name", {
            required: "this is required"
          })} />
        <p>{errors.firstName?.message}</p>
      </div>

      {/* phone  validate number to only have integers */}
      <div className="row-start-1 row-end-2 col-start-2 col-end-3">
        <div className=" block">
          <Label htmlFor="phone" value="Phone number" />
        </div>
        <TextInput id="contactNo" type="tel"
          {...register("contactNo", {
            required: "this is  required",
            minLength: {
              value: 10,
              message: "phone number should be of 10 digits"
            },
            maxLength: {
              value: 10,
              message: "phone number should be of 10 digits"
            },
            pattern: {
              value: /^[0-9]{10}$/,  // Regex to allow only 10 digits
              message: "Phone number must contain only numbers",
            }
          })} />
        <p>{errors.phone?.message}</p>
      </div>
          {/* email */}
      <div className="row-start-2 row-end-3 col-start-1 col-end-2">
        <div className=" block">
          <Label htmlFor="email1" value="Email" />
        </div>
        <TextInput id="email" type="email" placeholder="name@google.com"
          {...register("email", {
            required: "this is required",
            pattern: {
              value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
              message: "Enter a valid email address"
            }
          })} />
        <p>{errors.email?.message}</p>
      </div>
 {/* password */}
 <div  className="row-start-2 row-end-3 col-start-2 col-end-3">
<div className=" block">
  <Label htmlFor="password" value="Password" />
</div>
<TextInput id="password" type="password" required
  {...register("password", {
    required: "this is required",
    pattern: {
      value: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
      message: "Password must be at least 8 characters, include an uppercase, a lowercase, a number, and a special character"
    }
  })} />
<p>{errors.password?.message}</p>
</div>



            {/* Bio */}
      <div className="row-start-3 row-end-4 col-start-1 col-end-3">
        <div className="block">
          <Label htmlFor="bio" value="Bio" />
        </div>
        <Textarea id="bio" placeholder="" rows={2} {...register("bio")} />
      </div>


      {/* Status */}

      <div className="row-start-4 row-end-5 col-start-1 col-end-2">
        <div className=" block ">
          <Label htmlFor="status" value="Status" />
        </div>
        <Select
          id="currentWorkingStatus"
          required
          {...register("currentWorkingStatus", {
            required: "this is required",
          })}
        >
          <option>Student</option>
          <option>Working</option>
          <option>Not working</option>
        </Select>
      </div>

           {/* current Company */}
      <div className="row-start-4 row-end-5 col-start-2 col-end-3">
        <div className="block">
          <Label htmlFor="company" value="Company" />
        </div>
        <TextInput id="currentCompany" type="text"
          {...register("currentCompany")} />
        <p>{errors.currentCompany?.message}</p>
      </div>
          {/* current Position */}
          <div className="row-start-5 row-end-6 col-start-1 col-end-2">
        <div className="block">
          <Label htmlFor="name" value="Position" />
        </div>
        <TextInput id="currPos" type="text"
          {...register("currPos")} />
        <p>{errors.currPos?.message}</p>
      </div>

      {/* batch */}
      <div className="row-start-5 row-end-6 col-start-2 col-end-3">
        <div className=" block ">
          <Label htmlFor="passoutYear" value="Batch of" />
        </div>
        <Select
          id="passoutYear"
          required
          {...register("passoutYear", {
            required: "this is required",
          })}
        >
         <option value="">Select year</option> {/* Placeholder */}
         {years.map((year) => (
          <option key={year} value={year}>
            {year}
          </option>
        ))}
        </Select>
      </div>

      {/* linkedin Url */}
      <div className="row-start-6 row-end-7 col-start-1 col-end-2">
        <div className="block">
          <Label htmlFor="linkedinUrl" value="LinkedIn Url" />
        </div>
        <TextInput id="linkedinUrl" type="text"
          {...register("linkedinUrl")} />
      </div>

        {/* profile photo url */}
        <div className="row-start-6 row-end-7 col-start-2 col-end-3">
                <div>
                    <Label htmlFor="profilePhoto" value="Upload Photo" />
                </div>
                <FileInput id="profilePhotoUrl" helperText="SVG, PNG, JPG or GIF (MAX. 10MB)." {...register("profilePhotoUrl", {
                        required: "this is required",
                    })}  />
            </div>
                    <div className="mt-3"> 
            </div>   
      <Button className="row-start-7 row-end-8 col-start-1 col-end-3" type="submit">Sign up</Button>
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


//   {/* roll number */}
//   <div>
//   <div className=" block">
//     <Label htmlFor="roll number" value="Roll number " />
//   </div>
//   <TextInput id="rollNo" type="text" placeholder="234CA001"
//     {...register("rollNo", {
//       required: "this is  required",
//       pattern: {
//         value: /^\d{3}CA\d{3}$/,
//         message: "Enter a valid roll number"
//       }
//     })} />
//   <p>{errors.rollNo?.message}</p>
// </div>