import React from 'react'
import './App.css'
import { BrowserRouter , Routes, Route } from 'react-router-dom'
import Home from './components/home'
import About from './components/about'
import Navbar from './components/navbar'
import Contact from './components/contact'
import NoteState from './context/notes/noteState'
import Login from './components/login'
import Signup from './components/signup'


const App = () => {
  return (
    <>
    <NoteState>
      <BrowserRouter>
      <Navbar />
        <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/about' element={<About />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/login' element={<Login />} />
        <Route path='/signup' element={<Signup />} />
        </Routes>
      </BrowserRouter>
      </NoteState>
    </>
  )
}

export default App
