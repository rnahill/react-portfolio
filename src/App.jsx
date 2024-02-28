import { useState } from 'react'
import './App.css'
import PortfolioContainer from "./components/PortfolioContainer";
import Navigation from "./components/Navigation";
import Footer from "./components/Footer";
import './index.css'


function App() {
  
  return (
    <>
      <Navigation />
      <PortfolioContainer />
      <Footer />
    </>
  )
};

export default App;
