import {DataTable} from "primereact/datatable";
import {Column} from "primereact/column";

export default function JobTable() {
    const data = [
        {
            "id": 1,
            "name": "Alice Johnson",
            "place": "New York",
            "occupation": "Software Engineer"
        },
        {
            "id": 2,
            "name": "Bob Smith",
            "place": "Los Angeles",
            "occupation": "Graphic Designer"
        },
        {
            "id": 3,
            "name": "Carol Williams",
            "place": "Chicago",
            "occupation": "Teacher"
        },
        {
            "id": 4,
            "name": "David Brown",
            "place": "Houston",
            "occupation": "Doctor"
        },
        {
            "id": 5,
            "name": "Emma Davis",
            "place": "Phoenix",
            "occupation": "Marketing Specialist"
        },
        {
            "id": 6,
            "name": "Frank Miller",
            "place": "Philadelphia",
            "occupation": "Accountant"
        },
        {
            "id": 7,
            "name": "Grace Wilson",
            "place": "San Antonio",
            "occupation": "Data Analyst"
        },
        {
            "id": 8,
            "name": "Henry Moore",
            "place": "San Diego",
            "occupation": "Photographer"
        },
        {
            "id": 9,
            "name": "Ivy Taylor",
            "place": "Dallas",
            "occupation": "Chef"
        },
        {
            "id": 10,
            "name": "Jack Anderson",
            "place": "San Jose",
            "occupation": "Architect"
        }
    ]

    return <>
        <DataTable value={data} stripedRows tableStyle={{ minWidth: '50rem' }}>
            <Column field={"id"} header={"ID"}/>
            <Column field={"name"} header={"Name"}/>
            <Column field={"place"} header={"Place"}/>
            <Column field={"occupation"} header={"Occupation"}/>
        </DataTable>
    </>
}