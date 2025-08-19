import { useState } from 'react'
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Hero from './pages/Hero'
import Navbar from './globals/Navbar'
import Landing from './pages/Landing'

function App() {
  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Landing/>}/>
    </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
