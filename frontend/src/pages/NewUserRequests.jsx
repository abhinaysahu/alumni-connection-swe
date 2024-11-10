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
    }, [])

    return <>
        <div id={"heading"} className={"text-5xl font-bold m-10"}>Pending Requests</div>
        <div className={"grid w-full grid-cols-4 gap-y-4 px-4 box-border"}>
            {requests.map((request) => (
                <UserCard userId={request.userId} name={request.name}  batch={request.passoutYear} company={request.currentCompany} contact={request.contactNo} email={request.email} jobTitle={request.currPos} linkedin={request.linkedinUrl} onDelete={handleDelete}></UserCard>
            ))}
        </div>
    </>
}