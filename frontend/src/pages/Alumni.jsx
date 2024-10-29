import { useState,useEffect } from "react";
import Header from "../components/Header";
import axios from "axios";
import UserCard from "../components/UserCard";
import AlumCard from "../components/AlumCard";
import { Pagination } from "flowbite-react";

export default function Alumni(){
  const [users, setUsers] = useState([]);
  useEffect( () => {
    try{
        const fetchData = async () => {
            const response = await axios.get('http://localhost:8080/users/getAllUsers');
            setUsers(response.data);
        console.log("hello");
        }
        fetchData();

    }catch (e) {

    }
},[])

const [currentPage, setCurrentPage] = useState(1);
const alumPerPage = 6; // Number of users per page

const onPageChange = (page) => setCurrentPage(page);

// Calculate the start and end indices of jobs for the current page
const startIndex = (currentPage - 1) * alumPerPage;
const endIndex = startIndex + alumPerPage;
const paginatedUsers = users.slice(startIndex, endIndex);
console.log(paginatedUsers);
  return (
    <>
    <Header name={"Alumni"}></Header>
    <div className="mx-[2rem] lg:mx-[8rem] mt-10 flex-grow md:mx-[3rem]">
    <div className={"font-bold text-4xl flex justify-center items-center "}>Know Your Alumni</div>
    <div className="grid grid-cols-2 mt-8 w-full gap-4">
            {paginatedUsers.map((request) => (
                <AlumCard  name={request.name}  batch={request.passoutYear} jobTitle={ request.currPos} contact={request.contactNo} company={request.currentCompany}  email={request.email}  linkedin={request.linkedinUrl} userId={request.userId} photo = {request.profilePhotoUrl}></AlumCard>
            ))}
        </div>

        <div className="flex overflow-x-auto sm:justify-end mt-3">
                    <div className="mb-4">
                        
                    </div>
                    <Pagination
                        currentPage={currentPage}
                        totalPages={Math.ceil(users.length / alumPerPage)}
                        onPageChange={onPageChange}
                    />
                </div>
    </div>

    </>
  )
}