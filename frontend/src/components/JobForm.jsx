import React, { useState } from "react";
import { Button, Checkbox, Label, TextInput, Select, Textarea, FileInput } from "flowbite-react";
import { useForm } from "react-hook-form";
export default function JobForm() {
    const { register, handleSubmit, formState: { errors } } = useForm();
    return (
        <form className=" w-9/10 grid grid-cols-2 grid-rows-8 gap-1 m-2" onSubmit={handleSubmit((data) => {
            console.log(data);
        })}
        >
            {/* Job Title*/}
            <div className="col-start-1 col-end-3 row-start-1 row-end-2">
                <div className="mb-2 block ">
                    <Label htmlFor="jobTitle" value="Job Title " />
                </div>
                <TextInput id="jobTitle" type="text" placeholder="Job title here "
                    {...register("jobTitle", {
                        required: "this is required"
                    })} />
                <p>{errors.jobTitle?.message}</p>
            </div>
            {/* Job Type*/}
            <div className="col-start-1 col-end-2 row-start-2 row-end-3">
                <div className="mb-2 block ">
                    <Label htmlFor="jobType" value="Job type" />
                </div>
                <Select id="jobType" required {...register("jobType", {
                        required: "this is required"
                    })
                    }>
                    <option>Internship</option>
                    <option>FTE</option>
                </Select>
            </div>
            {/* Job Category */}
            <div className="col-start-2 col-end-3 row-start-2 row-end-3">
                <div className="mb-2 block">
                    <Label htmlFor="jobCategory" value="Job category" />
                </div>
                <Select id="jobType" required {...register("jobCategory", {
                        required: "this is required"
                    })
                    }>
                    <option>Technical Consultant</option>
                    <option>Software Engineer</option>
                    <option>Memeber of Technical Staff</option>
                    <option>Data Analyst</option>
                    <option>Machine Learning Engineer</option>
                </Select>
            </div>
            {/* Salary verify input type later */}
            <div className="col-start-1 col-end-2 row-start-3 row-end-4">
                <div className="mb-2 block">
                    <Label htmlFor="salary" value="Salary" />
                </div>
                <TextInput id="salary" type="text"
                    {...register("salary", {
                        required: "this is required"
                    })
                    } />
                <p>{errors.salary?.message}</p>
            </div>
            {/* Expire Date */}
            <div className="col-start-2 col-end-3 row-start-3 row-end-4">
                <div className="mb-2 block">
                    <Label htmlFor="expire date" value="Expire date " />
                </div>
                <TextInput id="expireDate" type="date" placeholder=""
                    {...register("expireDate", {
                        required: "this is  required",
                    })} />
                <p>{errors.expireDate?.message}</p>
            </div>
            {/* job location */}
            <div className="col-start-1 col-end-3 row-start-4 row-end-5">
                <div className="mb-2 block">
                    <Label htmlFor="Job location" value="Job location" />
                </div>
                <TextInput id="jobLocation" type="" placeholder="Location ex: Jaipur "
                    {...register("jobLocation", {
                        required: "this is required",
                    })} />
                <p>{errors.email?.message}</p>
            </div>
            {/* Description */}
            <div className="col-start-1 col-end-3 row-start-5 row-end-7">
                <div className="mb-2 block">
                    <Label htmlFor="description" value="Description" />
                </div>
                <Textarea id="comment" placeholder="" rows={6} {...register("description", {
                        required: "this is required",
                    })}  />
            </div>

            {/* job label */}
            <div className="col-start-1 col-end-3 row-start-7 row-end-8">
                <div>
                    <Label htmlFor="jobThumbnail" value="Job Thumbnail" />
                </div>
                <FileInput id="jobThumbnail" helperText="SVG, PNG, JPG or GIF (MAX. 10MB)." {...register("jobThumbnail", {
                        required: "this is required",
                    })}  />
            </div>
                    <div className="col-start-1 col-end-2 row-start-8 row-end-9 mt-3"> 
            <Button  type="submit">Sign up</Button>
            </div>   
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