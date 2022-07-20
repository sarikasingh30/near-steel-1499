import React from 'react'
import Footer from '../Components/Footer'
import Navbar from '../Components/Navbar'
import Categories from './Categories/Categories'

const HomePage = () => {
  return (
    <div>
      Home
      <Navbar/>
      <Categories/>
      <Footer/>
    </div>
  )
}

export default HomePage
