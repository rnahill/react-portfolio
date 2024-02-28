import { useState } from 'react'
import './App.css'
import PortfolioContainer from "./components/PortfolioContainer";
import Header from "./components/Header";
import Footer from "./components/Footer";


function App() {
  
  return (
    <>
      <Header />
      <PortfolioContainer />
      <Footer />
    </>
  )
};

export default App;
