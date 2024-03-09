import { useState } from 'react'
import { Outlet } from 'react-router-dom';
import './App.css'
import Navigation from "./components/Navigation";
import Footer from "./components/Footer";





import './index.css'


function App() {
  
  return (
    <>
      <main>
      <Navigation />
      <Outlet />
      <Footer />
      </main>
    </>
  )
};

export default App;
