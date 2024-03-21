import React from 'react'
import "./Navbar.css"
// import Bloghome from "./Bloghome.js"


export function Navbar(){

  document.addEventListener('scroll', () => {
    const Navbar = document.querySelector(".navbar");

    if (window.scrollY > window.innerHeight - 20) {
      Navbar.classList.add("scrolled");
    } else {
      Navbar.classList.remove("scrolled");
    }
  });

  return (
    <>
    <nav className="navbar">
      <a href='#' className='home-link'>
        <img className="navbar-logo" alt="ACM LOGO" src='acm.png'></img>
      </a>

      <ul className='navbar-list'>
        <li><a href="#" className='navbar-links'>Home</a></li>
        <li><a href="#" className='navbar-links'>About</a></li>
        <li><a href="#" className='navbar-links'>Works</a></li>
        <li><a href="#" className='navbar-links'>PowerBI</a></li>
        <li><a href="#" className='navbar-links'>Summary</a></li>
        <li><a href="#" className='navbar-links'>Conclusion</a></li>
        <li><a href="#" className='navbar-links'>About Us</a></li>
      </ul>

    </nav>
    </>
  )
}

