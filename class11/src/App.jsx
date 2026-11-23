import React from 'react'
import Home from './pages/home'
import About from './pages/about'
import { Route, Routes } from 'react-router-dom'
import Navbar from './components/Navbar'
import Product from './pages/Product'
import Men from './pages/men'
import Women from './pages/women'
import Courses from './pages/Courses'
import Randomabout from './pages/Randomabout'
import Anycourses from './pages/Anycourses'
import Detail from './pages/Detail'
import Notfound from './pages/Notfound'

const App = () => {
  return (
    <div>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/product' element={<Product/>}/>
        <Route path='/courses' element={<Courses/>}/>

        {/*  Dynamic Routes */}
        <Route path='/about/:id' element={<Randomabout/>}/>
        <Route path='/courses/:courseid' element={<Anycourses/>}/>

        {/* nested Routes */}
        <Route path='/product/Men' element={<Men/>}/>
        <Route path='/product/Women' element={<Women/>}/>
        
        {/* nested Dynamic Routes */}
        <Route path='/courses/:courseid/detail' element={<Detail/>}/>

        {/* Not Found Page */}
        <Route path='*' element={<Notfound/>}/>
      </Routes>
    </div>
  )
}

export default App

// Routing :- it means ek page se dusra page par jana
// React Router Dom :- it is a library which is used to perform routing in react
// npm i react-router-dom
