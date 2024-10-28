import { useState,useEffect } from "react";
import Header from "../components/Header";
import axios from "axios";

export default function Alumni(){
//   const [users, setUsers] = useState([]);
//   useEffect( () => {
//     try{
//         const fetchData = async () => {
//             const response = await axios.get('http://localhost:8080/users/getAllUsers');
//             setUsers(response.data);
//         console.log("hello");
//         }
//         fetchData();

//     }catch (e) {

//     }
// })
const users = [];

  return (
    <>
    <Header name={"Alumni"}></Header>
    <div className="mx-[2rem] lg:mx-[8rem] mt-10 flex-grow md:mx-[3rem]">
    <div className={"font-semibold text-4xl"}>Know Your Alumni</div>
    <div className={"flex justify-around m-10 flex-nowrap"}>
            {users.map((request) => (
                <UserCard userId={request.userId} name={request.name}  batch={request.passoutYear} company={request.currPos} contact={request.contactNo} email={request.email} jobTitle={request.currentCompany} linkedin={request.linkedinUrl} onDelete={handleDelete}></UserCard>
            ))}
        </div>
    </div>

    </>
  )
}