import { Breadcrumb } from "flowbite-react";
import { HiHome } from "react-icons/hi";

export default function Header({name}) {
    return <>
        <div className="min-h-[12vw] bg-gray-300 w-screen flex items-center">
            <div className={"flex flex-col items-smart ml-[10%] p-3"}>
                <div id={"title"} className={"text-5xl font-semibold mb-2"}>{name}</div>
                <Breadcrumb aria-label="Default breadcrumb example" className={"text-5xl"}>
                    <Breadcrumb.Item href="#" icon={HiHome}>
                        Home
                    </Breadcrumb.Item>
                    <Breadcrumb.Item className="text-5xl">{name}</Breadcrumb.Item>
                </Breadcrumb>
            </div>
        </div>
    </>
}