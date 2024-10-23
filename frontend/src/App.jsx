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
import PostJob from './pages/postJob.jsx';
import UserCard from "./components/UserCard.jsx";
import NewUserRequests from "./pages/NewUserRequests.jsx";


function App() {

  return (
    <>
        <div className="min-h-screen flex flex-col">
         {/*<Navbar></Navbar>*/}
            <NewUserRequests></NewUserRequests>
         {/*   <UserCard name={"Aman Sheoran"} roll={"234CA007"} batch={"2026"} company={"DE Shaw"} contact={"8930460660"} email={"amansheo@gmail.com"} jobTitle={"SDE"} linkedin={"https://www.linkedin.com/in/amansheoran/"}></UserCard>*/}
        <Routes>
          <Route path='/' element={<Home/>}></Route>
          <Route path='/about' element={<About/>}></Route>
          <Route path='/faqs' element={<FAQ/>}></Route>
          <Route path='/contact' element={<Contact/>}></Route>
          <Route path='/signup' element={<Signup/>}></Route>
          <Route path='/signin' element={<Signin/>}></Route>
          <Route path='/postjob' element={<PostJob/>}></Route>
        </Routes>
         <Footer></Footer>
       
        </div>
    </>
  )
}

export default App;
