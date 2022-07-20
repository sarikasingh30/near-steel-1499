import React from 'react'
import Footer from '../Components/Footer'
import Navbar from '../Components/Navbar'
import CasualSlippers from './Categories/CasualSlippers'

const HomePage = () => {
  return (
    <div>
      Home
      <Navbar/>
      <CasualSlippers/>
      <Footer/>
    </div>
  )
}

export default HomePage
