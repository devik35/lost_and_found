import React from 'react'
import Navbar from './components/Navbar';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
import About from './pages/About';
import Contact from './pages/Contact';
import MainPage from './pages/MainPage';
import Footer from './components/Footer';
import Item from './pages/Item';
import Found from './pages/Found'; 

function App() {
  return (
    <Router>
      <Navbar/>
      <Routes>
      <Route path="/m" element={<MainPage/>}/>
      <Route path="/c" element={<Contact/>}/>
      <Route path="/a" element={<About/>}/>
      <Route path="/i" element={<Item/>}/>
      <Route path="/f" element={<Found/>}/>
      <Route/>
      </Routes>
      <Footer/>
    </Router>
  )
}

export default App;