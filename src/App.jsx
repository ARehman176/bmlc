import { useState } from 'react'


import './App.css'
import Navbar from './Components/Navbar.jsx'
import Home from './Components/Home.jsx'
import Support from './Components/Support.jsx'
import Coaches from './Components/Coaches.jsx'
import TopBar from './Components/TopBar.jsx'
import Work from './Components/Work.jsx'
import Arrow from './Components/Arrow.jsx'
import Way from './Components/Way.jsx'
import Need from './Components/Need.jsx'
import Life from './Components/Life.jsx'
import About from './Components/About.jsx'
import Book from './Components/Book.jsx'
import Download from './Components/Download.jsx'
import Group from './Components/Group.jsx'
import Footer from './Components/Footer.jsx'
import ScrollToTop from './Components/Scroll.jsx'



function App() {
 
  return (
    <div>
      {/* <TopBar /> */}
      <ScrollToTop />
      {/* <Navbar /> */}
      <Home />
      <Support />
      <Coaches />
      <Work />
      <Arrow />
      <Way />
      <Arrow />
      <Need />
      <Life />
      <About />
      <Book />
      <Download />
      <Group />
      {/* <Footer /> */}
      
    </div>
  )
}

export default App
