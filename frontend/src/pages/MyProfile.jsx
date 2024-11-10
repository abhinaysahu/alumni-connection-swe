import React, { useEffect, useState } from 'react';
import { Link, useLocation, useParams } from 'react-router-dom';
import Header from '../components/Header';
import axios from 'axios';
import AlumCard from '../components/AlumCard';
import { useUser } from '../UserContext';



export default function MyProfile(){

  const {user} = useUser();
  return <>
     <Header name={"Alumni Details"}></Header>
     <div className='flex items-center justify-between flex-grow h-1/3'>
          <div className='w-1/3  p-4  ' >
              <AlumCard name={user.name} batch={user.passoutYear} jobTitle={user.currPos} contact={user.contactNo} company={user.currentCompany} email={user.email} linkedin={user.linkedinUrl} userId={user.userId} photo={user.profilePhotoUrl} status={user.currentWorkingStatus} />
              {/* name={user.name}  batch={user.passoutYear} jobTitle={ user.currPos} contact={user.contactNo} company={user.currentCompany}  email={user.email}  linkedin={user.linkedinUrl} userId={user.userId} photo = {user.profilePhotoUrl} */}
            </div>
            <div className='flex-1 bg-slate-200 p-4 mr-4 rounded-md '>
              <div className='font-semibold text-2xl mb-4'>About me</div>
              <div className='tex-sm mb-4'>{user.bio}</div>
              <div className="border-t border-gray-600 mb-4 "></div>
                <div className='flex flex-col'>
                    <div className='flex justify-between mb-1'>
                      <div className='text-gray-500 font-semibold'>Contact:</div>
                      <div>{user.contactNo}</div>
                    </div>
                    <div className='flex justify-between mb-1'>
                      <div className='text-gray-500 font-semibold'>Linkedin :</div>
                      <Link to={user.linkedinUrl  } className="hover:text-blue-400 ">{user.linkedinUrl}</Link>
                    </div>
                    <div className='flex justify-between mb-1'>
                      <div className='text-gray-500 font-semibold'>Status:</div>
                      <div>{user.currentWorkingStatus}</div>
                    </div>

                    {user.currentWorkingStatus==="Student"?null: ( <><div className='flex justify-between mb-1'>
                      <div className='text-gray-500 font-semibold'>Position:</div>
                      <div>{user.currPos}</div>
                    </div>
                  </>
                  )}
                   <div className='flex justify-between mb-1'>
                    <div className='text-gray-500 font-semibold'>Batch of:</div>
                    <div>{user.passoutYear}</div>
                  </div>
                    
                    {/* <div className='flex justify-between mb-1'>
                      <div className='text-gray-500 font-semibold'>Contact:</div>
                      <div>{user.contactNo}</div>
                    </div>
                    <div className='flex justify-between mb-1'>
                      <div className='text-gray-500 font-semibold'>Contact:</div>
                      <div>{user.contactNo}</div>
                    </div> */}
                </div>
            </div>
     </div>
  </>
}