import React from 'react'
import { BrowserRouter ,Routes, Route } from "react-router-dom";
import './App.css'
import Navbar from './Creation/Heads/Navbar'
// import Phase1 from './Creation/Bodys/Phase1'
// import Phase2 from './Creation/Bodys/Phase2'
import Footer from './Creation/Foots/Footer'
import Home from './Creation/Bodys/Home';
import Fest from './Creation/Parts/FestTypes/Fest';
import Access from './Creation/Parts/Accessories/Access';
import Tips from './Creation/Parts/Tips/Tips';

function App() {
  

  return (
    <>
      <div>
        <Navbar/>
        <Routes>
          <Route path='/' element ={<Home/>}></Route> 
          <Route path='/festtype' element ={<Fest/>}></Route>
          <Route path='/accessories' element ={<Access/>}></Route>
          <Route path='/tips' element ={<Tips/>}></Route>
        </Routes>
        {/* <Phase1/>
        <Phase2/> */}
        <Footer/>
      </div>
    </>
  )
}

export default App
