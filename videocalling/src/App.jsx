import React from 'react'
import { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './components/Home'
import VideoComp from './components/VideoComp'
import Login from './components/Login'
import Signup from './components/Signup'
import Documentation from './components/Documentation'
import HelpCenter from './components/HelpCenter'
import Community from './components/Community'
import Pricing from './components/Pricing'


function App() {
  const [count, setCount] = useState(0)

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/login' element={<Login />} />
        <Route path='/signup' element={<Signup />} />
        <Route path='/room/:roomID' element={<VideoComp />} />
        <Route path='/docs' element={<Documentation />} />
        <Route path='/help' element={<HelpCenter />} />
        <Route path='/community' element={<Community />} />
        <Route path='/pricing' element={<Pricing />} />
      </Routes>
    </BrowserRouter>

  )
}

export default App
