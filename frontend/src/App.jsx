import {useState, useContext, useEffect} from 'react'
import './App.css'
import FAQ from "./pages/FAQ.jsx";
import Navbar from "./components/Navbar.jsx";
import Footer from "./components/Footer.jsx";
import Contact from "./pages/Contact.jsx";
import { Route, Routes } from "react-router-dom";
import About from "./pages/About.jsx";
import Home from "./pages/Home.jsx";
import Signup from "./pages/Signup.jsx";
import Signin from "./pages/Signin.jsx";
import PostJob from "./pages/postJob.jsx";
import NewUserRequests from "./pages/NewUserRequests.jsx";
import ProfileSettings from './pages/ProfileSettings.jsx';
import Alumni from './pages/Alumni.jsx';
import {useAuth} from "./auth.jsx";
import ProtectedRoute from "./components/ProtectedRoute.jsx";
import axios from "axios";
import MyJob from "./pages/MyJobs.jsx";
import Dashboard from './pages/Dashboard.jsx';
import 'primereact/resources/themes/lara-light-indigo/theme.css';   // Theme
import 'primereact/resources/primereact.min.css';
import JobsList from "./pages/JobsListing.jsx";           // Core CSS
import UserDetails from './pages/UserDetails.jsx';

import {useUser} from "./UserContext.jsx";
import ChangePassword from './pages/ChangePassword.jsx';

function App(){
    const {isAuthenticated, setIsAuthenticated} = useAuth();
    const {user, setUser} = useUser();


  return (
    <>
            <div className="min-h-screen  pt-10 pb-20 flex flex-col">
                {isAuthenticated ? <Navbar></Navbar> : null}
            <Routes >
                <Route path='/' element={<ProtectedRoute><Home/></ProtectedRoute>}></Route>
                <Route path='/jobs' element={<ProtectedRoute><JobsList/></ProtectedRoute>}></Route>
              <Route path='/admin' element={<NewUserRequests/>}></Route>
              <Route path='/about' element={<ProtectedRoute><About/></ProtectedRoute>}></Route>
              <Route path='/faqs' element={<ProtectedRoute><FAQ/></ProtectedRoute>}></Route>
              <Route path='/contact' element={ <ProtectedRoute><Contact/></ProtectedRoute>}></Route>
              <Route path='/signup' element={<Signup/>}></Route>
              <Route path='/signin' element={<Signin/>}></Route>
              <Route path='/postjob' element={<ProtectedRoute><PostJob/></ProtectedRoute>}></Route>
               <Route path='/myjobs' element={<ProtectedRoute><MyJob/></ProtectedRoute>}></Route>
              <Route path='/profilesettings' element={<ProtectedRoute><ProfileSettings/></ProtectedRoute>}></Route>
              <Route path='/dashboard' element={<ProtectedRoute><Dashboard/></ProtectedRoute>}></Route>
              <Route path = '/alumni' element={<ProtectedRoute><Alumni/></ProtectedRoute>}></Route>
              <Route path = '/alumni/profile/:userId' element = {<ProtectedRoute><UserDetails/></ProtectedRoute>}></Route>
              <Route path ='/changepassword' element= {<ProtectedRoute><ChangePassword /> </ProtectedRoute>}></Route>
            </Routes>
             <Footer></Footer>

            </div>
    </>
  );
}

export default App;
