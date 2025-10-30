import React from 'react'
import './App.css'
import { BrowserRouter , Routes, Route } from 'react-router-dom'
import Home from './components/home'
import About from './components/about'
import Navbar from './components/navbar'
import Contact from './components/contact'


const App = () => {
  return (
    <>
      <BrowserRouter>
      <Navbar />
        <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/contact' element={<Contact />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
