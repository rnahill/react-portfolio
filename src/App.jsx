import { useState } from 'react'
import { Outlet } from 'react-router-dom';
import './App.css'
import Navigation from "./components/Navigation";
import Footer from "./components/Footer";
import ConstructionPage from "./pages/ConstructionPage"





import './index.css'


function App() {
  
  return (
    <>
      <main>
      {/* <Navigation />
      <Outlet />
      <Footer /> */}
      <ConstructionPage />
      </main>
    </>
  )
};

export default App;
