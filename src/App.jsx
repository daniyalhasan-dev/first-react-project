// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import React from 'react'
import './App.css'
import Header from './components/header/header'
import Footer from './components/footer/footer'
import Hero from './components/hero/hero'
import Pricing from './components/pricing/pricing'
import Blog from './components/blogs/blogs'

function App() {

  return (
    <React.Fragment>
      <div className='min-h-screen '>
    <Header/>
    <Hero/>
    <Pricing/>
    <Blog/>
    <Footer/>
    </div>
    </React.Fragment>
  )
  
}

export default App
