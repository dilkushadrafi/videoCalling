import React from 'react'
import { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './components/Home'
import VideoComp from './components/VideoComp'
import Login from './components/Login'
import Signup from './components/Signup'


function App() {
  const [count, setCount] = useState(0)

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/login' element={<Login />} />
        <Route path='/signup' element={<Signup />} />
        <Route path='/room/:roomID' element={<VideoComp />} />
      </Routes>
    </BrowserRouter>

  )
}

export default App
