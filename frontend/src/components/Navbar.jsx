import {Link, NavLink} from "react-router-dom";
import nitklogo from "../assets/nitk.svg";
import {useAuth} from "../auth.jsx";
import { Avatar, Dropdown } from "flowbite-react";
import axios from "axios";
import {useNavigate} from "react-router-dom";
import {useUser} from "../UserContext.jsx";

export default function Navbar() {
  const {isAuthenticated, setIsAuthenticated} = useAuth();
  const navigate = useNavigate();
  const {user} = useUser();
  const logout = async () => {
    try{
      const response = await axios.get("http://localhost:8080/users/logout", { withCredentials: true });
      console.log(response.data);
      setIsAuthenticated(false);
      navigate('/signin');
    }catch (e) {
      console.log(e);
    }
  }
  return (
    <>
      <nav className="   bg-white dark:bg-gray-900 fixed w-screen z-20 top-0 start-0 border-b border-gray-200 dark:border-gray-600  mb-100">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-2">
          {/* Logo */}
          <img src={nitklogo} className="h-16" alt="nitk logo" />

          {/* Right-side buttons and menu toggle */}
          <div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
            <Dropdown
                label={<Avatar alt="User settings" img={user.profilePhotoUrl} rounded />}
                arrowIcon={false}
                inline
            >
              <Dropdown.Header>
                <span className="block text-sm">{user.name}</span>
                <span className="block truncate text-sm font-medium">{user.currentWorkingStatus === "Student" ? "Student" : "Alumni"}</span>
                <span className="block truncate text-sm font-medium">{user.email}</span>
              </Dropdown.Header>
              <Link to={"/dashboard"}><Dropdown.Item>Dashboard</Dropdown.Item></Link>
              <Dropdown.Divider />
              <Dropdown.Item onClick={logout}>Log Out</Dropdown.Item>
            </Dropdown>

            {/*<button*/}
            {/*  type="button"*/}
            {/*  className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"*/}
            {/*>*/}
            {/*  {isAuthenticated ? <Link to={"/postjob"}>Dashboard</Link> : <Link to={"/signin"}>Login</Link>}*/}
            {/*  /!*<Link to={"/postjob"}>Dashboard</Link>*!/*/}
            {/*</button>*/}
            <button
              data-collapse-toggle="navbar-sticky"
              type="button"
              className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
              aria-controls="navbar-sticky"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              <svg
                className="w-5 h-5"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 17 14"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M1 1h15M1 7h15M1 13h15"
                />
              </svg>
            </button>
          </div>

          {/* Navbar links */}
          <div className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1" id="navbar-sticky">
            <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
              <li>
                <NavLink
                  to="/"
                  className={({ isActive }) =>
                    isActive
                      ? "block py-2 px-3 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 md:dark:text-blue-500"
                      : "block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                  }
                >
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/jobs"
                  className={({ isActive }) =>
                    isActive
                      ? "block py-2 px-3 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 md:dark:text-blue-500"
                      : "block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                  }
                >
                  Jobs
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/alumni"
                  className={({ isActive }) =>
                    isActive
                      ? "block py-2 px-3 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 md:dark:text-blue-500"
                      : "block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                  }
                >
                  Alumni
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/about"
                  className={({ isActive }) =>
                    isActive
                      ? "block py-2 px-3 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 md:dark:text-blue-500"
                      : "block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                  }
                >
                  About
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/faqs"
                  className={({ isActive }) =>
                    isActive
                      ? "block py-2 px-3 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 md:dark:text-blue-500"
                      : "block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                  }
                >
                  FAQs
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/contact"
                  className={({ isActive }) =>
                    isActive
                      ? "block py-2 px-3 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 md:dark:text-blue-500"
                      : "block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                  }
                >
                  Contact
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}
