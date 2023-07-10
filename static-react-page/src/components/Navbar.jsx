// import React from 'react'
import ReactLogo from '../assets/ReactLogo.svg'
import "../App.css"
export default function Navbar() {
  return (
    <nav className='nav-bar'>
      <div className='logo'>
         <img src={ReactLogo} className='logo-img' alt=""/>
         <h3 className='logo-title'>ReactFacts</h3>
      </div>
      <h4 className='extra-title'>React Course - Project 1</h4>
      
    </nav>
  )
}
