import {useState, useContext, useEffect} from 'react'
import './App.css'
import Header from "./components/Header.jsx";
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
import UserCard from "./components/UserCard.jsx";
import NewUserRequests from "./pages/NewUserRequests.jsx";
import ProfileSettings from './pages/ProfileSettings.jsx';
import {authContext} from "./auth.jsx";
import ProtectedRoute from "./components/ProtectedRoute.jsx";
import axios from "axios";
import Dashboard from './pages/Dashboard.jsx';


function App(){
    const [isAuthenticated, setIsAuthenticated] = useState(false);

    useEffect(() => {
        const checkAuth = async () => {
            try{
                const response = await axios.get("http://localhost:8080/users/auth/check",{ withCredentials: true });
                setIsAuthenticated(response.data.authenticated);
            }catch (e) {
                setIsAuthenticated(false);
            }
        }

        checkAuth().then(()=>{
            console.log(isAuthenticated);
        });
    }, []);

  return (
    <>
        <authContext.Provider value={{isAuthenticated, setIsAuthenticated}}>
            <div className="min-h-screen  pt-10 pb-20 flex flex-col">
             <Navbar></Navbar>
             {/*   <UserCard name={"Aman Sheoran"} roll={"234CA007"} batch={"2026"} company={"DE Shaw"} contact={"8930460660"} email={"amansheo@gmail.com"} jobTitle={"SDE"} linkedin={"https://www.linkedin.com/in/amansheoran/"}></UserCard>*/}
            <Routes >
                <Route path='/' element={<ProtectedRoute><Home/></ProtectedRoute>}></Route>
              <Route path='/admin' element={<NewUserRequests/>}></Route>
              <Route path='/about' element={<ProtectedRoute><About/></ProtectedRoute>}></Route>
              <Route path='/faqs' element={<ProtectedRoute><FAQ/></ProtectedRoute>}></Route>
              <Route path='/contact' element={ <ProtectedRoute><Contact/></ProtectedRoute>}></Route>
              <Route path='/signup' element={<Signup/>}></Route>
              <Route path='/signin' element={<Signin/>}></Route>
              <Route path='/postjob' element={<ProtectedRoute><PostJob/></ProtectedRoute>}></Route>
              <Route path='/profilesettings' element={<ProtectedRoute><ProfileSettings/></ProtectedRoute>}></Route>
              <Route path='/dashboard' element={<Dashboard/>}></Route>
            </Routes>
             <Footer></Footer>

            </div>
        </authContext.Provider>
    </>
  );
}

export default App;
