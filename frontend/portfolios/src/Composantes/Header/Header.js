
import React from 'react';
import './Header.css';
import { Outlet, Link } from "react-router-dom";
const Header = () => {
  return (
    <nav class="navbar navbar-expand-md bg-dark navbar-dark pl-5">
 
 <Link to="/" class="nav-link" href="#">M-FOLIO</Link>
  
  
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#collapsibleNavbar">
      <span class="navbar-toggler-icon"></span>
    </button>
  
    <div class="collapse navbar-collapse" id="collapsibleNavbar">
      <ul class="navbar-nav">
        <li class="nav-item">
        <Link to="/" class="nav-link" href="#">Home</Link>
        </li>
        <li class="nav-item">
        <Link to="/projet" class="nav-link" href="#">Projects</Link>
        </li>
        <li class="nav-item">
        <Link to="/Temoing" class="nav-link" href="#">Testimonials</Link>
        </li>
        <li class="nav-item">
        <Link to="/Technologie" class="nav-link" href="#">Technologies</Link>
        </li>
        <li class="nav-item">
        <Link to="/contact" class="nav-link" href="#">Contact</Link>
        </li>
      </ul>
      <Outlet />
    </div>
  </nav>
  );
}

export default Header;

