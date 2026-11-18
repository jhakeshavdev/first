import React from 'react'
import Navbar from './components/navbar'
import Section from './components/section'
import Sec from './components/sec'
import Nav from './components/nav'


const App = () => {
  return (
    <div className="parent h-full w-full pt-10 pl-7 pr-7 overflow-hidden bg-[url('https://images.unsplash.com/photo-1793605304220-9d0d1fff00f3?q=80&w=987&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D')] bg-center bg-cover">
      <Nav />
      <div className="child1 bg-white h-full w-full p-5">
        <Navbar />
        <Section />
        <Sec />

      </div>
    </div>
  )
}

export default App