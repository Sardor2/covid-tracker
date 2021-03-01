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
        <h1 className='homepage-title'>Track Covid-19</h1>
      </span>
    </nav>
  </div>
)

export default Header;