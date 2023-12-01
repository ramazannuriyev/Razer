import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './page/Home'
import Community from './page/Community'
import Console from './page/Console'
import Lifestyle from './page/Lifestyle'
import Mobile from './page/Mobile'
import PC from './page/PC'
import Services from './page/Services'
import Store from './page/Store'
import Support from './page/Support'
import Navbar from './components/Navbar'
import Footer from './components/Footer'

const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/community' element={<Community />} />
        <Route path='/console' element={<Console />} />
        <Route path='/lifestyle' element={<Lifestyle />} />
        <Route path='/mobile' element={<Mobile />} />
        <Route path='/pc' element={<PC />} />
        <Route path='/services' element={<Services />} />
        <Route path='/store' element={<Store />} />
        <Route path='/support' element={<Support />} />
      </Routes>
      <Footer/>
    </BrowserRouter>
  )
}

export default App