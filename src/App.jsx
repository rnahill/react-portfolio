import { useState } from 'react'
import { Outlet } from 'react-router-dom';
import './App.css'
import Navigation from "./components/Navigation";


import './index.css'


function App() {
  
  return (
    <>
      <main>
      <Navigation />
      <Outlet />
      </main>
      <footer>
        <p>hello</p>
        </footer>
    </>
  )
};

export default App;
