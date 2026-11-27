import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import About from './pages/About'
import Product from './pages/Product'
import Allproduct from './pages/Allproduct'
import Men from './pages/Men'
import Women from './pages/Women'
import Footer from './pages/Footer'

const App = () => {
  return (
    <div>
      <Navbar/> 

      <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/about' element={<About/>}/>
      <Route path='/product' element={<Product/>}>
        <Route path='/product' element={<Allproduct/>}/>
        <Route path='/product/Men' element={<Men/>}/>
        <Route path='/product/Women' element={<Women/>}/>
      </Route>
      </Routes>

    <Footer/>
    </div>
  )
}

export default App