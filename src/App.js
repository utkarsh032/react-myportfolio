import React from 'react'
import './App.css'
import Hero from './components/Hero/Hero'
import Navbar from './components/Navbar/Navbar'

function App () {
  return (
    <div className='app'>
      <Navbar />
      <Hero />
    </div>
  )
}

export default App
