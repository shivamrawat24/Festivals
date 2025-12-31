import React, {  useRef, useState } from 'react'
import './Navbar.css';

const Navbar = () => {
    const [home,setHome]=useState(true);
    const homeRef=useRef();
    const [fest,setFest]=useState(true);
    const festRef=useRef();
    const [tools,setTools]=useState(true);
    const toolsRef=useRef();
    const [tips,setTips]=useState(true);
    const tipsRef=useRef();

    const handleHome=()=>{
        setHome(!home);
        if(!home){
            homeRef.current.style.color="red";
        }
        else{
            homeRef.current.style.color="blue";
        }
    }
    const handleFest=()=>{
        setFest(!fest);
        if(!fest){
            festRef.current.style.color="green";
        }
        else{
            festRef.current.style.color='blue';
        }
    }
    const handleTools=()=>{
        setTools(!tools);
        if(!tools){
            toolsRef.current.style.color="yellow";
        }
        else{
            toolsRef.current.style.color='blue';
        }
    }
    const handleTips=()=>{
        setTips(!tips);
        if(!tips){
            tipsRef.current.style.color="black";
        }
        else{
            tipsRef.current.style.color='blue';
        }
    }

  return (
    <div className='feature'>
        <ul>
            <li onClick={handleHome} ref={homeRef}>Home</li>
            <li onClick={handleFest} ref={festRef}> Fest-Types</li>
            <li onClick={handleTools} ref={toolsRef}>Accesories</li>
            <li onClick={handleTips} ref={tipsRef}>Tips</li>
        </ul>
    </div>
  )
};

export default Navbar;
