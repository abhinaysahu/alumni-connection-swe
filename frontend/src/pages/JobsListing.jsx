import JobTable from "../components/JobTable.jsx";
import Header from "../components/Header.jsx";

export default function JobsList() {

    return <>
        <Header name={"Jobs"}></Header>
        <div className={"m-20"}>
            <div className={"text-3xl font-semibold mb-3"}> Find Your Dream Job Here</div>
            <JobTable></JobTable>
        </div>
    </>

}