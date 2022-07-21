import React from 'react'
import Categories from './Categories/Categories'
import Footer from '../Components/Footer'
import Navbar from '../Components/Navbar'

const HomePage = () => {
  return (
    <div>
      Home
      <Navbar/>
      <Categories/>
      <Footer/>
    </div>
  );
};

export default HomePage;
