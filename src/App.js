import React from 'react'

import { BrowserRouter, Route, Routes,  } from 'react-router-dom'
import Home from './pages/home'
import About from './pages/about'
import Alumini from './pages/alumini'
import Contact from './pages/contact'
const App = () => {
  return (

    
    <BrowserRouter className=''>

      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/alumini/:id' element={<Alumini />} />
        <Route path='/about' element={<About />} />
        <Route path='/contact' element={<Contact />} />


      </Routes>



    </BrowserRouter>
  )
}

export default App