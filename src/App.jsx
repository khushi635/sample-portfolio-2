import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
// import './App.css'
import Navbar from "./components/navbar/Navbar.jsx";
import Hero from "./components/hero-sec/Hero.jsx"

import Projects from "./components/projects/Projects.jsx"
import GetData from "./components/GetData.js"
import About from "./components/about/About.jsx"
import Review from "./components/review/Review.jsx"
import Contact from "./components/contact/Contact.jsx"
import Footer from "./components/footer/Footer.jsx"

function App() {
  

  return (
    <>
     <Navbar/>
     <Hero/>
     <About/>
   
     <Projects/>
     <Review/>

     <Contact/>
     <Footer/>
    </>
  )
}

export default App
