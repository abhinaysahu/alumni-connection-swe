
import { useState } from 'react';
import { Button, ButtonGroup, Card } from "flowbite-react";
import { Modal } from "flowbite-react";
import axios from "axios"
import { Link, useLocation } from 'react-router-dom';
import profilePhoto from "../assets/New_photo_resized.jpg"

export default function AlumCard({ name, batch, jobTitle, contact, company, email, linkedin, userId, photo , currentWorkingStatus }) {
  const location = useLocation();
  const currPath = location.pathname;
  return ( <div className=' hover:bg-gradient-to-r hover:from-cyan-400 hover:to-blue-400 hover:text-slate-50 rounded-lg'>
    <Card class=" shadow-lg p-0 " >
      <div className=" rounded-md flex  flex-col  items-center justify-around gap-4 hover:bg-gradient-to-r hover:from-cyan-500 hover:to-blue-500 hover:text-slate-50 ">
        <div className=' w-40 h-40 pt-1 rounded-full '>
          <img  src={photo}  className='w-full  h-full rounded-full  object-cover border-gray-300 border-2' alt="profile photo"></img>
        </div>
          <div className='bg-gradient-to-r from-gray-600 to-gray-800 w-full text-white p-0 h-1/2 rounded-md'>
            { currentWorkingStatus==='Student' ? ( <div className='flex flex-col items-center gap-1 '>
                <div className='text-3xl font-semibold  '> {name}</div>
                <div className='text-xl font-normal '> Batch of : {batch}</div>
                <div className='text-xl font-normal  overflow-hidden'>  {email}</div>
              </div>):
              (<div className='flex flex-col items-center gap-2 '>
                <div className='text-3xl font-semibold  '> {name}</div>
                <div className='text-xl font-normal '> Company : {company}</div>
                <div className='text-xl font-normal text-ellipsis  overflow-hidden whitespace-nowrap'> {email}</div>
              </div>)
            }
            <div className=" flex  items-center justify-center w-full  py-2">
            <Link to={`/alumni/profile/${userId}`} >
              { currPath.includes("profile")?
                null:
                <Button  color={"blue"}  className='w-full'>Know more</Button>
               }
              
            </Link>
          </div>
          </div>
        </div>
    </Card>
  </div>
  )
}


 {/* <table className={"border-separate border-spacing-4"}>
              <tr>
                  <td className={"font-bold text-left"}>Company: </td>
                  <td>{company}</td>
                </tr>
                <tr>
                  <td className={"font-bold text-left"}>Current Position: </td>
                  <td>{jobTitle}</td>
                </tr>
                <tr>
                  <td className={"font-bold"}>Passout Year: </td>
                  <td>{batch}</td>
                </tr>
              </table> */}