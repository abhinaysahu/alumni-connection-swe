import React, { useState, useEffect } from "react";
import { WithContext as ReactTags } from 'react-tag-input';
import { Button, Checkbox, Label, TextInput, Select, Textarea, FileInput, Badge } from "flowbite-react";
import { useForm } from "react-hook-form";
import { FaIndianRupeeSign } from "react-icons/fa6";
import axios from "axios";
import {useNavigate} from "react-router-dom";
import { Link } from "react-router-dom";
import {toast} from "sonner";

export default function JobEdit(jobID) {
    

    const [userId, setUserId] = useState(null);
    const [showAlert, setShowAlert] = useState(false);
    const navigate = useNavigate();
    const [skills, setSkills] = useState([]);
    const [inputValue, setInputValue] = useState('');
    const handleDeleteSkill = (index) => {
        setSkills(skills.filter((_, i) => i !== index));
    };

   

    const handleAddSkill = (e) => {
        e.preventDefault();
        if (inputValue.trim() && !skills.includes(inputValue.trim())) {
            setSkills([...skills, inputValue.trim()]);
            setInputValue('');
        }
    };

    const getFormattedDate = () => {
        const date = new Date();
        const day = String(date.getDate()).padStart(2, '0'); // Get day and pad with leading zero if necessary
        const month = String(date.getMonth() + 1).padStart(2, '0'); // Months are zero-indexed, so add 1
        const year = date.getFullYear(); // Get full year

        return `${day}-${month}-${year}`;
    };

    useEffect(() => {
        const getUser = async () => {
            try{
                const response = await axios.get('http://localhost:8080/users/me', {withCredentials: true});
                const id = response.data.id;
                // console.log(id);
                if(id !== null){
                    setUserId(id);
                }else{
                    navigate('/signin')
                }

            }catch (e) {
                console.log(e);
            }
        }

        getUser();
    }, []);
    const[job, setJob] = useState({});
    // console.log("job id");
    // console.log(id);

    const { register, handleSubmit, formState: { errors } , reset} = useForm({
      defaultValues: job || {},
    });

 useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:8080/jobs/getjob/'+ jobID.jobID, {
          withCredentials: true,
        });
        setJob(response.data);
        reset(response.data);  // Reset form values with fetched job data
      } catch (e) {
        console.log(e);
      }
    };

    fetchData();
  }, [jobID, reset]);
  // console.log("job data");
  // console.log(job);
  useEffect(() => {
    if (job?.skills) {
      setSkills(job.skills);  // Set default skills from job data
    }
  }, [job]);

    return (
        <form className=" pb-2 w-9/10 grid grid-cols-2   gap-1 m-2" onSubmit={handleSubmit(async (data) => {
            const toastId = toast.loading("Updating", { duration: Infinity})
            const formData = { ...data, skills };
            console.log(formData);
            try{
                const response = await axios.put('http://localhost:8080/jobs/updatejob/'+ jobID.jobID, {
                    title: formData.title,
                    type: formData.type,
                    description: formData.description,    
                    yoe: formData.yoe,
                    salary: formData.salary,
                    skills: formData.skills,
                    postedOn: getFormattedDate(),
                    applyLink: formData.applyLink,
                    companyName: formData.companyName,
                    jobExp: formData.jobExp,
                    location: formData.location,
                    userId: userId,
                    
                }, {withCredentials: true});

                console.log("done");
                
                setSkills([]);
                setShowAlert(true);
                toast.success("Updation Successful", { id : toastId});
                setTimeout(() => toast.dismiss(toastId), 3000);

            }catch (e) {
                console.log(e);
                toast.error("Some error occurred, please try again", { id : toastId});
                setTimeout(() => toast.dismiss(toastId), 3000);
            }
        })}
        >

            {/*{showAlert && (*/}
            {/*    <div style={{color: "green", marginTop: "10px"}}>*/}
            {/*        Form submitted successfully!*/}
            {/*    </div>*/}
            {/*)}*/}

            {/* company Name */}
            <div className="col-start-1 col-end-2 row-start-1 row-end-2">
                <div className="mb-2 block ">
                    <Label htmlFor="company Name" value="Company " />
                </div>
                <TextInput id="companyName" type="text" placeholder="Company Name"
                    color={errors.companyName?"failure" : "none"}
                    {...register("companyName", {
                        required: "this is required"
                    })} />
                {/* <p>{errors.companyName?.message}</p> */}
            </div>

            {/* Job Title*/}
            <div className="col-start-2 col-end-3 row-start-1 row-end-2">
                <div className="mb-2 block ">
                    <Label htmlFor="title" value="Job Title " />
                </div>
                <TextInput id="title" type="text" placeholder="Job Title here "
                    color={errors.title?"failure" : "none"}
                    {...register("title", {
                        required: "this is required"
                    })} />
                {/* <p>{errors.title?.message}</p> */}
            </div>
            {/* Job Type*/}
            <div className="col-start-1 col-end-2 row-start-2 row-end-3">
                <div className="mb-2 block ">
                    <Label htmlFor="type" value="Job type" />
                </div>
                <Select id="type" className="border-gray-600" {...register("type", {
                    required: "this is required"
                })
                }>
                    <option>Internship</option>
                    <option>FTE</option>
                </Select>
            </div>

            {/* Salary verify input type later */}
            <div className="col-start-2 col-end-3 row-start-2 row-end-3">
                <div className="mb-2 block">
                    <Label htmlFor="salary" value="Salary" />
                </div>
                <TextInput id="salary" type="text" icon={FaIndianRupeeSign}
                    color={errors.salary?"failure" : "none"}
                    {...register("salary", {
                        required: "this is required"
                    })
                    } />
                {/* <p>{errors.salary?.message}</p> */}
            </div>
            {/* Expire Date */}
            <div className="col-start-1 col-end-2 row-start-3 row-end-4">
                <div className="mb-2 block">
                    <Label htmlFor="jobExp" value="Expiry Date " />
                </div>
                <TextInput id="jobExp" type="date" placeholder=""
                    color={errors.jobExp?"failure" : "none"}
                    {...register("jobExp", {
                        required: "this is  required",
                    })} />
                {/* <p>{errors.jobExp?.message}</p> */}
            </div>


            {/* Description */}
            <div className="col-start-1 col-end-3 row-start-4 row-end-6">
                <div className="mb-2 block">
                    <Label htmlFor="description" value="Description" />
                </div>
                <Textarea id="description" placeholder="" rows={4}  className="border-gray-700"
                    {...register("description", {
                    required: "this is required",
                })} />
            </div>

            {/* yoe */}

            <div className="row-start-3 row-end-4 col-start-2 col-end-3">
                <div className="mb-2 block ">
                    <Label htmlFor="yoe" value="Years of Experience" />
                </div>
                <Select
                    id="yoe"
                    color={errors.yoe?"failure" : "none"}
                    {...register("yoe", {
                        required: "this is required",
                    })}
                >
                    <option value="">Select Year</option>
                    <option value="0">0</option>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                    <option value="6">6</option>
                    <option value="7">7</option>
                    <option value="8">8</option>
                    <option value="9">9</option>
                    <option value="10">10</option>
                    <option value="11">Other</option>
                </Select>
            </div>

                  {/* location */}
            <div className="col-start-2 col-end-3 row-start-6 row-end-7">
                <div className="mb-2 block ">
                    <Label htmlFor="location" value="Location" />
                </div>
                <TextInput id="location" type="text" placeholder=""
                    color={errors.location?"failure" : "none"}
                    {...register("location", {
                        required: "this is required"
                    })} />
                {/* <p>{errors.companyName?.message}</p> */}
            </div>


            {/* skills */}
            <div className="row-start-7 row-end-8 col-start-1 col-end-3">
                <div className="mb-2 block">
                    <Label value="Skills" />
                </div>
                <div className="flex space-x-2 mb-2">
                    <TextInput
                        type="text"
                        placeholder="Add a skill and press enter"
                        value={inputValue}
                        onChange={(e) => setInputValue(e.target.value)}
                        onKeyDown={(e) => e.key === 'Enter' && handleAddSkill(e)}
                        className="w-full border-gray-700 border-1"
                    />
                </div>
                <div className="flex flex-wrap gap-2  items-start">
                    {skills.map((skill, index) => (
                        <Badge
                            key={index}
                            size="sm"
                            className="inline-flex items-center space-x-1 bg-blue-600 text-white"
                        >
                            {skill}
                            <button
                                type="button"
                                onClick={() => handleDeleteSkill(index)}
                                className="text-white ml-2 hover:text-gray-200"
                            >
                                ×
                            </button>
                        </Badge>
                    ))}
                </div>
            </div>


            {/* applyLink */}
            <div className="col-start-1 col-end-2 row-start-6 row-end-7">
                <div className="mb-2 block">
                    <Label htmlFor="applyLink" value="Apply Link" />
                </div>
                <TextInput id="applyLink" type="text" placeholder={"https://www.example.com/applyforjob/123"}
                     color={errors.applyLink?"failure" : "none"}
                    {...register("applyLink", {
                        required: "this is required"
                    })
                    } />
                {/* <p>{errors.applyLink?.message}</p> */}
            </div>


            <div className="col-start-1 col-end-3 row-start-8 row-end-9 mt-3 flex justify-center">
                <Button type="submit" color={"blue"} className="w-1/3 ">
                    Update
                     </Button>
            </div>
        </form>

    );
}

