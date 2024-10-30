import {DataTable} from "primereact/datatable";
import {Column} from "primereact/column";
import FullTime from "./FullTime.jsx";
import InternshipPill from "./InternshipPill.jsx";
import {Button, TextInput} from "flowbite-react";
import {IconField} from "primereact/iconfield";
import {InputText} from "primereact/inputtext";
import {InputIcon} from "primereact/inputicon";
import searchIcon from "@heroicons/react/solid/esm/SearchIcon.js";
import {useState} from "react";
import {FilterMatchMode} from "primereact/api";

export default function JobTable() {
    const data = [
        {
            "company": "Walmart",
            "designation": "Software Engineer",
            "category": "Full Time",
            "location": "New York",
            "salary": "15L",
            "posted by": "Aman"
        },
        {
            "company": "Amazon",
            "designation": "Data Scientist",
            "category": "Internship",
            "location": "San Francisco",
            "salary": "20L",
            "posted by": "Priya"
        },
        {
            "company": "Google",
            "designation": "Product Manager",
            "category": "Full Time",
            "location": "Mountain View",
            "salary": "30L",
            "posted by": "Raj"
        },
        {
            "company": "Microsoft",
            "designation": "Cloud Engineer",
            "category": "Full Time",
            "location": "Seattle",
            "salary": "18L",
            "posted by": "Sara"
        },
        {
            "company": "Facebook",
            "designation": "UX Designer",
            "category": "Internship",
            "location": "Austin",
            "salary": "10L",
            "posted by": "John"
        },
        {
            "company": "Apple",
            "designation": "iOS Developer",
            "category": "Full Time",
            "location": "Cupertino",
            "salary": "25L",
            "posted by": "Mike"
        },
        {
            "company": "Tesla",
            "designation": "Embedded Systems Engineer",
            "category": "Full Time",
            "location": "Fremont",
            "salary": "22L",
            "posted by": "Elena"
        },
        {
            "company": "Adobe",
            "designation": "Front End Developer",
            "category": "Internship",
            "location": "San Jose",
            "salary": "12L",
            "posted by": "Arjun"
        },
        {
            "company": "Netflix",
            "designation": "Backend Engineer",
            "category": "Full Time",
            "location": "Los Angeles",
            "salary": "28L",
            "posted by": "Jessica"
        },
        {
            "company": "Spotify",
            "designation": "Data Engineer",
            "category": "Full Time",
            "location": "New York",
            "salary": "18L",
            "posted by": "Daniel"
        }
    ]

    const [filters, setFilters] = useState({
        global: {
            value: null,
            matchMode: FilterMatchMode.CONTAINS
        }

    });

    const categoryBodyTemplate = (rowData) => {
        return rowData.category === "Full Time" ? <FullTime /> : rowData.category === "Internship" ? <InternshipPill /> : rowData.category;
    };

    const ViewDetails = () => {
        return <Button gradientDuoTone="greenToBlue">View Details</Button>;
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
        <DataTable value={data} stripedRows tableStyle={{ minWidth: '50rem' }} filters={filters} header={TableHeader} paginator rows={5}>
            <Column field={"company"} header={"Company"}/>
            <Column field={"designation"} header={"Designation"}/>
            <Column field={"category"} header={"Category"} body={categoryBodyTemplate}/>
            <Column field={"location"} header={"Location"}/>
            <Column field={"salary"} header={"Salary"}/>
            <Column field={"posted by"} header={"Posted By"}/>
            <Column header={""} body={ViewDetails}/>
        </DataTable>
    </>
}