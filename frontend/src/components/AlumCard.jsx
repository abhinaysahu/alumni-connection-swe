
import {useState} from 'react';
import { Button, Card } from "flowbite-react";
import { Modal } from "flowbite-react";
import axios from "axios";

export default function AlumCard(){
return <>
  <Card className="max-w-sm">
            <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                {name}
            </h5>
            <div className="font-normal text-gray-700 dark:text-gray-400">
                <table className={"border-separate border-spacing-4"}>
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
            </Card>
</>
}