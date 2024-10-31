


import { Breadcrumb } from "flowbite-react";
import { HiHome } from "react-icons/hi";
import { Link } from "react-router-dom";

export function BreadCrumb({name}) {
  return (
    <Breadcrumb aria-label="Default breadcrumb example">
      <Breadcrumb.Item icon={HiHome}>
      <Link to="/dashboard">
        Dashboard
        </Link>
      </Breadcrumb.Item>
      <Breadcrumb.Item>{name}</Breadcrumb.Item>
     
    </Breadcrumb>
  );
}
