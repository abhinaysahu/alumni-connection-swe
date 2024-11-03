import {DataTable} from "primereact/datatable";
import {Column} from "primereact/column";
import FullTime from "./FullTime.jsx";
import InternshipPill from "./InternshipPill.jsx";
import {Button, Modal, TextInput} from "flowbite-react";
import {IconField} from "primereact/iconfield";
import {InputText} from "primereact/inputtext";
import {InputIcon} from "primereact/inputicon";
import searchIcon from "@heroicons/react/solid/esm/SearchIcon.js";
import {useEffect, useState} from "react";
import {FilterMatchMode} from "primereact/api";
import JobListModal from "./JobListModal.jsx";
import axios from "axios";
import {useNavigate} from "react-router-dom";

export default function JobTable() {

    const [openModal, setOpenModal] = useState(false);
    const [selectedRowData, setSelectedRowData] = useState(null); // Store selected row data for modal
    const [data, setData] = useState([]);
    const [userMap, setUserMap] = useState({});
    const navigate = useNavigate();

    useEffect(() => {
        const fetchJobs = async () => {
            try{
                const response = await axios.get("http://localhost:8080/jobs/getAllJobs", {withCredentials: true});
                console.log(response.data);
                setData(response.data)
            }catch (e){
                console.log(e);
            }
        }
        fetchJobs();
    }, [])

    const fetchUser = async (userID) => {
        if (!userID) return "";
        try {
            const response = await axios.get(`http://localhost:8080/users/getUser/${userID}`, { withCredentials: true });
            return response.data.name; // Assuming 'name' is a property in the response
        } catch (e) {
            console.log(e);
            return "";
        }
    };

    useEffect(() => {
        const fetchAllUsers = async () => {
            const userIds = [...new Set(data.map(item => item.userId))]; // Get unique userIds from data
            const userPromises = userIds.map(id => fetchUser(id)); // Fetch all users
            const userNames = await Promise.all(userPromises); // Wait for all fetches to resolve

            const newUserMap = {};
            userIds.forEach((id, index) => {
                newUserMap[id] = userNames[index]; // Map user IDs to names
            });

            setUserMap(newUserMap); // Update state with user mapping
        };

        fetchAllUsers(); // Fetch users on mount or when data changes
    }, [data]); // Run effect when data changes

    const handleViewDetails = (rowData, user) => {
        navigate('/jobdetails', { state: { selectedRowData: rowData, user: user } })
    };


    const [filters, setFilters] = useState({
        global: {
            value: null,
            matchMode: FilterMatchMode.CONTAINS
        }

    });

    const categoryBodyTemplate = (rowData) => {
        return rowData.type === "FTE" ? <FullTime /> : rowData.type === "Internship" ? <InternshipPill /> : rowData.category;
    };

    const ViewDetails = ({rowData, user}) => {
        return <>
            <Button gradientDuoTone="greenToBlue" onClick={() => handleViewDetails(rowData, user)}>View Details</Button>

        </>;
    }

    const TableHeader = ()=>{
        return <div className={"flex justify-end"}>
            <TextInput id="base" type="text" sizing="md" placeholder={"Keyword"} icon={searchIcon} onChange={(e)=>{
                setFilters({
                    global: {value: e.target.value, matchMode: FilterMatchMode.CONTAINS}
                })
            }}/>
        </div>
    }


    return <>
        <DataTable value={data} stripedRows dataKey={"id"} tableStyle={{ minWidth: '50rem' }} filters={filters} header={TableHeader} paginator rows={5}>
            <Column field={"companyName"} header={"Company"}/>
            <Column field={"title"} header={"Designation"}/>
            <Column field={"type"} header={"Category"} body={categoryBodyTemplate}/>
            <Column field={"location"} header={"Location"} body={(rowData) => rowData.location}/>
            <Column field={"salary"} header={"Salary"}/>
            <Column field={"posted by"} header={"Posted By"} body={(rowData) => userMap[rowData.userId] || "Loading..."}/>
            <Column header={""} body={(rowData) => <ViewDetails rowData={rowData} user ={userMap[rowData.userId]}/> }/>
        </DataTable>
    </>
}