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
import {Link, useNavigate} from "react-router-dom";
import axios from 'axios';
import {toast} from "sonner";

export default function SignupForm() {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const [error, setError] = useState("");
  const navigate = useNavigate();
    const [profilePhoto, setProfilePhoto] = useState(null);

    const handlePhotoChange = (event) => {
        setProfilePhoto(event.target.files[0]);
    };


    const startYear = 1988;
  const endYear = 2027;
  const years = Array.from({ length: endYear - startYear + 1 }, (v, i) => startYear + i);

  return (
      <>
          <form className=" max-w-md  grid grid-row-11 grid-cols-2 gap-2 " onSubmit={handleSubmit(async (data) => {
              const formData = new FormData();
              formData.append("profilePhoto", profilePhoto);
              formData.append("email", data.email);
              formData.append("password", data.password);
              formData.append("name", data.name);
              formData.append("contactNo", data.contactNo);
              formData.append("bio", data.bio);
              formData.append("linkedinUrl", data.linkedinUrl);
              formData.append("currentCompany", data.currentCompany);
              formData.append("passoutYear", data.passoutYear);
              formData.append("currPos", data.currPos);
              formData.append("currentWorkingStatus", data.currentWorkingStatus);

              const toastId = toast.loading("In Progress", { duration: Infinity})


              // console.log(formData);
              try{
                  const response = await axios.post('http://localhost:8080/users/addUser', formData)

                  setError("");
                  toast.success("Request sent to admin. Your status will be informed via e-mail.", { id: toastId})
                  setTimeout(() => toast.dismiss(toastId), 3000);
                  navigate('/signin');

              }catch (e) {
                  toast.error("Something went wrong.", { id: toastId });
                  setTimeout(() => toast.dismiss(toastId), 3000);
                  // setError(e);
              }
          })}
          >
              {/* name */}
              <div row-start-1 row-end-2 col-start-1 col-end-2>
                  <div className="block">
                      <Label htmlFor="name" value="  Name"/>
                  </div>
                  <TextInput id="name" type="text" color={errors.name? "failure" : "none"}
                             {...register("name", {
                                 required: "This is required"
                             })} />
              </div>

              {/* phone  validate number to only have integers */}
              <div className="row-start-1 row-end-2 col-start-2 col-end-3">
                  <div className=" block">
                      <Label htmlFor="phone" value="Phone number"/>
                  </div>
                  <TextInput id="contactNo" type="tel" color={errors.contactNo?"failure" : "none"}
                             {...register("contactNo", {
                                 required: "This is  required",
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
              </div>
              {/* email */}
              <div className="row-start-2 row-end-3 col-start-1 col-end-2">
                  <div className=" block">
                      <Label htmlFor="email1" value="Email"/>
                  </div>
                  <TextInput id="email" type="email" placeholder="name@google.com"
                        color={errors.email?"failure" : "none"}
                             {...register("email", {
                                 required: "This is required",
                                 pattern: {
                                     value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                                     message: "Enter a valid email address"
                                 }
                             })} />
                  <div className={errors.email? "text-red-600 text-sm" : "text-green-400 text-sm"} >{errors.email?.message}</div >
              </div>
              {/* password */}
              <div className="row-start-2 row-end-3 col-start-2 col-end-3">
                  <div className=" block">
                      <Label htmlFor="password" value="Password"/>
                  </div>
                  <TextInput id="password" type="password" required color={errors.password?"failure" : "none" }
                             {...register("password", {
                                 required: "This is required",
                                 pattern: {
                                     value: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
                                     message: "Password must be at least 8 characters, include an uppercase, a lowercase, a number, and a special character"
                                 }
                             })} />
                  <div className= {errors.password? "text-sm text-red-600" : "text-sm text-green-400"}>{errors.password?.message}</div >
              </div>


              {/* Bio */}
              <div className="row-start-3 row-end-4 col-start-1 col-end-3">
                  <div className="block">
                      <Label htmlFor="bio" value="Bio"/>
                  </div>
                  <Textarea id="bio" placeholder="" rows={2} {...register("bio")} />
              </div>


              {/* Status */}

              <div className="row-start-4 row-end-5 col-start-1 col-end-2">
                  <div className=" block ">
                      <Label htmlFor="status" value="Status"/>
                  </div>
                  <Select
                      id="currentWorkingStatus"
                      required
                      {...register("currentWorkingStatus", {
                          required: "This is required",
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
                      <Label htmlFor="company" value="Company"/>
                  </div>
                  <TextInput id="currentCompany" type="text"  color={errors.currentCompany?"failure" : "none"}
                             {...register("currentCompany" ,{
                                required: "This is required",
                            })} />
                  {/* <div className= {errors.currentCompany? "text-sm text-red-600" : "text-sm text-green-400"} >{errors.currentCompany?.message}</div > */}
              </div>
              {/* current Position */}
              <div className="row-start-5 row-end-6 col-start-1 col-end-2">
                  <div className="block">
                      <Label htmlFor="name" value="Position"/>
                  </div>
                  <TextInput id="currPos" type="text"  color={errors.currPos?"failure" : "none"}
                             {...register("currPos",{required: "This is required"})} />
                    {/* <div className= {errors.currPos? "text-sm text-red-600" : "text-sm text-green-400"} >{errors.currPos?.message}</div > */}
              </div>

              {/* batch */}
              <div className="row-start-5 row-end-6 col-start-2 col-end-3">
                  <div className=" block ">
                      <Label htmlFor="passoutYear" value="Batch of"/>
                  </div>
                  <Select 
                      id="passoutYear"
                      {...register("passoutYear", {
                          required: "This is required",
                      })}
                  >
                      <option value="">Select year</option>
                      {/* Placeholder */}
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
                      <Label htmlFor="linkedinUrl" value="LinkedIn Url"/>
                  </div>
                  <TextInput id="linkedinUrl" type="text"
                             {...register("linkedinUrl")} />
              </div>

              {/* profile photo url */}
              <div className="row-start-6 row-end-7 col-start-2 col-end-3">
                  <div>
                      <Label htmlFor="profilePhoto" value="Upload Photo"/>
                  </div>
                  <FileInput id="profilePhotoUrl" 
                             helperText="SVG, PNG, JPG or GIF (MAX. 10MB)." {...register("profilePhotoUrl")} onChange={handlePhotoChange}/>
              </div>
              <div className="mt-3">
              </div>
              <Button className="row-start-7 row-end-8 col-start-1 col-end-3" type="submit" color="blue">Sign up</Button>
          </form>
          <div id="sign-in" className="text-center w-full max-w-md text-gray-500 text-md mt-4">
              Already have an account? <Link to="/signin" className="text-blue-600 underline cursor-pointer">Sign
              In</Link>
          </div>

      </>
  );
}


// {
//     email : data.email,
//         password : data.password,
//     name: data.name,
//     contactNo: data.contactNo,
//     bio: data.bio,
//     linkedinUrl: data.linkedinUrl,
//     passoutYear: data.passoutYear,
//     currentCompany: data.currentCompany,
//     profilePhotoUrl: "testurl",
//     currPos: data.currPos,
//     currentWorkingStatus: data.currentWorkingStatus,
// }