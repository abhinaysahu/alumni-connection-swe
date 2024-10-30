
import { useState } from 'react';
import { Button, Card } from "flowbite-react";
import { Modal } from "flowbite-react";
import axios from "axios"
import { Link } from 'react-router-dom';

export default function AlumCard({ name, batch, jobTitle, contact, company, email, linkedin, userId, photo }) {
  return <>
    <Card >
      <div className="font-semibold text-lg text-center">{name}</div>
      <div className="flex justify-around gap-0 ">
        <div className='content-center'>
          <img src='photo' alt="profile photo"></img>
        </div>
        {/* may be add userId to it to get profile  */}
        <div>
          <div>
            <div className="font-normal text-gray-700 dark:text-gray-400">
              <table className={"border-separate border-spacing-4"}>
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
              </table>
            </div>
          </div>
        </div>
        </div>
        <div className=" flex  items-center justify-center w-full ">
            <Link to={`/alumni/profile/${userId}`} >
              <Button >Know more</Button>
            </Link>
          </div>
    </Card>
  </>
}