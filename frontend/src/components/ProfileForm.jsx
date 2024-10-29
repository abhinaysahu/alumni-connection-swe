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
export default function ProfileForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  return (
    <form
      className=" w-9/10 grid grid-cols-2 gap-1 m-2"
      onSubmit={handleSubmit((data) => {
        console.log(data);
      })}
    >
      {/* First Name*/}
      <div className="col-start-1 col-end-2 row-start-1 row-end-2">
        <div className="mb-2 block ">
          <Label htmlFor="firstName" value="First Name" />
        </div>
        <TextInput
          id="firstName"
          type="text"
          placeholder="John"
          color={errors.firstName?"failure" : "success"}
          {...register("firstName", {
            required: "this is required",
          })}
        />
        <div className={errors.firstName?"text-sm text-red-600" : "text-sm text-green-400"}>{errors.firstName?.message}</div>
      </div>
      {/* Last Name */}
      <div className="col-start-2 col-end-3 row-start-1 row-end-2">
        <div className="mb-2 block ">
          <Label htmlFor="lastName" value="Last Name" />
        </div>
        <TextInput
          id="lastName"
          type="text"
          placeholder="Doe"
          color={errors.lastName?"failure" : "success"}
          {...register("lastName", {
            required: "this is required",
          })}
        />
        <div  className={errors.lastName?"text-sm text-red-600" : "text-sm text-green-400"}>{errors.lastName?.message}</div>
      </div>
      {/* email  */}
      {/* {loginError && (
        <div style={{ color: "red", marginBottom: "10px" }}>{loginError}</div>
      )} */}
      <div className="col-start-1 col-end-2 row-start-2 row-end-3">
        <div className="mb-2 block">
          <Label htmlFor="email" value="Email" />
        </div>
        <TextInput
          id="email"
          type="email"
          placeholder="name@google.com"
          color={errors.email?"failure" : "success"}
          {...register("email", {
            required: "this is required",
            pattern: {
              value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
              message: "Enter a valid email address",
            },
          })}
        />
        <div className={errors.email?"text-sm text-red-600" : "text-sm text-green-400"}>{errors.email?.message}</div>
      </div>

      {/* Bio */}
      <div className="col-start-1 col-end-3 row-start-3 row-end-4">
        <div className="mb-2 block">
          <Label htmlFor="bio" value="Bio" />
        </div>
        <Textarea id="bio" placeholder="" rows={4} {...register("bio")} />
      </div>

      {/* Status */}
      <div className="col-start-2 col-end-3 row-start-2 row-end-3">
        <div className="mb-2 block ">
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
      <div className="col-start-1 col-end-3 row-start-5 row-end-6 mt-3 flex justify-center pb-2">
        <Button type="submit" color={"blue"} className="w-1/3">Update</Button>
      </div>
    </form>
  );
}

// {/* <div className="mb-4">
//   <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="skills">
//     First Name
//   </label>
//   <input
//     type="text"
//     name="skills"
//     value={formData.skills}
//     onChange={handleChange}
//     className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
//     placeholder="Enter your first name"
//   /> */}



{/* Skills */}

{/* <div className="col-start-2 col-end-3 row-start-4 row-end-5">
<div className="mb-2 block ">
  <Label htmlFor="skills" value="Skills" />
</div>
<TextInput
  id="skills"
  type="text"
  placeholder="John  "
  {...register("skills", {
    required: "this is required",
  })}
/>
<div>{errors.skills?.message}</div>
</div> */}
