import { useState } from 'react'
import './App.css'
import Header from "./components/Header.jsx";
import FAQ from "./pages/FAQ.jsx";
import Navbar from './components/Navbar.jsx';
import Footer from './components/Footer.jsx';
import Contact from "./pages/Contact.jsx";

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
        <Navbar></Navbar>
        {/*<FAQ> </FAQ>*/}
        <Contact/>
        <Footer></Footer>
    </div>
  )
}

export default App
