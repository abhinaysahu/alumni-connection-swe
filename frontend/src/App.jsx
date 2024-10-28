import { useState } from 'react'
import './App.css'
import Header from "./components/Header.jsx";
import FAQ from "./pages/FAQ.jsx";
import Navbar from './components/Navbar.jsx';
import Footer from './components/Footer.jsx';
import Contact from "./pages/Contact.jsx";
import {Route, Routes} from "react-router-dom";
import About from './pages/About.jsx';
import Home from './pages/Home.jsx';
import Signup from './pages/Signup.jsx';
import Signin from './pages/Signin.jsx';
import PostJob from './pages/PostJob.jsx';
import UserCard from "./components/UserCard.jsx";
import NewUserRequests from "./pages/NewUserRequests.jsx";
import ProfileSettings from './pages/ProfileSettings.jsx';
import Alumni from './pages/Alumni.jsx';


function App() {

  return (
    <>
        <div className="min-h-screen  pt-10 pb-20 flex flex-col">
         <Navbar></Navbar>
         {/*   <UserCard name={"Aman Sheoran"} roll={"234CA007"} batch={"2026"} company={"DE Shaw"} contact={"8930460660"} email={"amansheo@gmail.com"} jobTitle={"SDE"} linkedin={"https://www.linkedin.com/in/amansheoran/"}></UserCard>*/}
        <Routes >
          <Route path='/' element={<Home/>}></Route>
          <Route path='/admin' element={<NewUserRequests/>}></Route>
          <Route path='/about' element={<About/>}></Route>
          <Route path='/faqs' element={<FAQ/>}></Route>
          <Route path='/contact' element={<Contact/>}></Route>
          <Route path='/signup' element={<Signup/>}></Route>
          <Route path='/signin' element={<Signin/>}></Route>
          <Route path='/postjob' element={<PostJob/>}></Route>
          <Route path='/profilesettings' element={<ProfileSettings/>}></Route>
          <Route path='/alumni' element={<Alumni/>}></Route>
        </Routes>
         <Footer></Footer>
       
        </div>
    </>
  )
}

export default App;
