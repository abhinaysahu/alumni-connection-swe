import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from "./components/Header.jsx";
import FAQ from "./pages/FAQ.jsx";

function App() {
  const [count, setCount] = useState(0)

  return (
    <>

       <FAQ> </FAQ>
    </>
  )
}

export default App
