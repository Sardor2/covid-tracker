import React from 'react';
import './header.styles.css';
import logo from '../../assets/coronavirus.png'

const Header = () => (
  <div className="header">
    <nav className="navbar">
      <span>
        <a href="#">
          <img className="logo" src={logo} />
        </a>
      </span>
      <ul>
        <li>
          <a href="#" className="nav-link">Home</a>
        </li>
        <li>
          <a href="#" className="nav-link">What`s Covid-19</a>
        </li>
        <li>
          <a href="#" className="nav-link">Contact</a>
        </li>
      </ul>
    </nav>
  </div>
)

export default Header;