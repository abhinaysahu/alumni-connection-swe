


import { Breadcrumb } from "flowbite-react";
import { HiHome } from "react-icons/hi";

export function BreadCrumb({name}) {
  return (
    <Breadcrumb aria-label="Default breadcrumb example">
      <Breadcrumb.Item href="#" icon={HiHome}>
        Dashboard
      </Breadcrumb.Item>
      <Breadcrumb.Item>{name}</Breadcrumb.Item>
     
    </Breadcrumb>
  );
}
