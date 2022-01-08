import React, { useState } from 'react'
import './App.css';
import About from './components/About';
import BookingTable from './components/BookingTable';
import CardMenu from './components/CardMenu';
import FoodSection from './components/FoodSection';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import Slider from './components/Slider';

function App() {
  return (
    <>
      <Navbar />
      <div className='main-body'>
        <Slider />
        <FoodSection />
      </div>
      <About />
      <BookingTable />
      <Footer />

    </>
  );
}

export default App;
