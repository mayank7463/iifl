import React, { useState } from 'react';
import './Navbar.css'; // Import your CSS file


const Navbar = () => {
  const [isActive, setIsActive] = useState(false);

  const toggleNavbar = () => {
    setIsActive(!isActive);
  };

  return (
    <header>
      <div className="container">
        <nav>
          <div className="navbar-brand">
             <img src="./Navbar/iifl_logo.svg" alt="" />
          </div>
          <ul className={`nav-list ${isActive ? 'active' : ''}`}>
            <li className="nav-item">
              <a className="nav-link" href="#">home</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Corporate Overview</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Statutory Reports</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Financial Statements <div className='dropdown-nav-ele'> <span> hiii1<br /></span><span>hii2<br /></span> </div> </a>
            </li>
          </ul>
          <div className={`hamburger ${isActive ? 'active' : ''}`} onClick={toggleNavbar}>
            <div className="line"></div>
            <div className="line"></div>
            <div className="line"></div>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;