import { useState, useEffect } from "react";
import axios from "axios";
import UserCard from "../components/UserCard.jsx";

export default function NewUserRequests() {
    const [requests, setRequests] = useState([]);

    const handleDelete = async (itemId) => {
        try {


            // Update local state
            setRequests(currentItems =>
                currentItems.filter(item => item.userId !== itemId)
            );

        } catch (err) {
            console.error('Error deleting item:', err);
            // Optionally show error message to user
        }
    };

    useEffect( () => {
        try{
            const fetchData = async () => {
                const response = await axios.post('http://localhost:8080/users/userRequests');
                setRequests(response.data);
            // console.log("hello");
            }
            fetchData();

        }catch (e) {

        }
    })

    return <>
        <div id={"heading"} className={"text-5xl font-bold m-10"}>Pending Requests</div>
        <div className={"flex justify-around m-10"}>
            {requests.map((request) => (
                <UserCard userId={request.userId} name={request.name}  batch={request.passoutYear} company={request.currPos} contact={request.contactNo} email={"amansheo@gmail.com"} jobTitle={request.currentCompany} linkedin={request.linkedinUrl} onDelete={handleDelete}></UserCard>
            ))}
        </div>
    </>
}