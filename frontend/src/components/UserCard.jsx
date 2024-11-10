import {useState} from 'react';
import { Button, Card } from "flowbite-react";
import { Modal } from "flowbite-react";
import axios from "axios";

export default function UserCard({userId, name, batch, roll, jobTitle, contact, company, email, linkedin, onDelete}){
    const [openModal, setOpenModal] = useState(false);


    const handleAccept = async () => {
        setOpenModal(false);
        try{
            const response  = await axios.put(`http://localhost:8080/users/accept/${userId}`);
            onDelete(userId);
        }catch (e) {
            console.log(e);
        }

    }

    const handleDecline = async () => {
        setOpenModal(false);
        try{
            const response  = await axios.put(`http://localhost:8080/users/decline/${userId}`);
            onDelete(userId);
        }catch (e) {
            console.log(e);
        }

    }


    return <>
        <Card className="w-80">
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

            <Button onClick={() => setOpenModal(true)}>
                More Details
            </Button>
            <Modal dismissible show={openModal} onClose={() => setOpenModal(false)}>
                <Modal.Header>New User Request</Modal.Header>
                <Modal.Body>
                    <table className={"border-separate border-spacing-4"}>
                        <tr>
                            <td className={"font-bold"}>Name:</td>
                            <td>{name}</td>
                        </tr>
                        <tr>
                            <td className={"font-bold"}>Job Title:</td>
                            <td>{jobTitle}</td>
                        </tr>
                        <tr>
                            <td className={"font-bold"}>Passout Year:</td>
                            <td>{batch}</td>
                        </tr>
                        <tr>
                            <td className={"font-bold"}>Linkedin URL:</td>
                            <td><a href={linkedin} target={"_blank"} className={"text-blue-500"}>{name}</a></td>
                        </tr>
                        <tr>
                            <td className={"font-bold"}>Company:</td>
                            <td>{company}</td>
                        </tr>
                        <tr>
                            <td className={"font-bold"}>Contact No:</td>
                            <td>{contact}</td>
                        </tr><tr>
                            <td className={"font-bold"}>Email:</td>
                            <td>{email}</td>
                        </tr>

                    </table>
                </Modal.Body>
                <Modal.Footer>
                    <Button onClick={handleAccept}>Accept</Button>
                    <Button color="gray" onClick={handleDecline}>
                        Decline
                    </Button>
                </Modal.Footer>
            </Modal>
        </Card>
    </>
}