import { useState } from 'react'
import './App.css'
import Header from "./components/Header.jsx";
import FAQ from "./pages/FAQ.jsx";
import Navbar from './components/Navbar.jsx';
import Footer from './components/Footer.jsx';
import Contact from "./pages/Contact.jsx";
import {Route, Routes} from "react-router-dom";

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
        <Navbar></Navbar>
        <Routes>
            <Route path={"/faq"} element={<FAQ/>} />
            <Route path={"/contact"} element={<Contact/>} />
            <Route path={"/about"} element={<FAQ/>} />
        </Routes>
        <Footer></Footer>
    </div>
  )
}

export default App
