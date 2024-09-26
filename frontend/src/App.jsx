import { useState } from 'react'
import './App.css'
import Header from "./components/Header.jsx";
import FAQ from "./pages/FAQ.jsx";
import Navbar from './components/Navbar.jsx';
import Footer from './components/Footer.jsx';
import Contact from "./pages/Contact.jsx";
import {Route, Routes} from "react-router-dom";
import About from './pages/About.jsx';
import {Routes,Route} from "react-router-dom";
import Home from './pages/Home.jsx';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
        <div className="min-h-screen flex flex-col">
        <Navbar></Navbar>
        <Routes>
          <Route path='/' element={<Home/>}></Route>
          <Route path='/about' element={<About/>}></Route>
          <Route path='/faqs' element={<FAQ/>}></Route>
        </Routes>
        <Footer></Footer>
        </div>
    </>
  )
}

export default App
