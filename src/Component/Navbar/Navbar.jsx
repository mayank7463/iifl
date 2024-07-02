import React, { useState } from 'react';
import { Link } from 'react-router-dom';

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
              <Link className="nav-link" to="/">home</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/">
                Corporate Overview<div className='dropdown-nav-ele '>
                  <div className='flex flex-wrap justify-between'>
                    <ul className='w-full md:w-[48%]'>
                      <li><Link to="/journey">Looking Back At A Momentous Journey</Link></li>
                      <li><Link to='/where'>Where We Are</Link></li>
                      <li><Link to='/wedo'>What We Do For You</Link></li>
                      <li><Link to='/onehome'>IIFL One Home</Link></li>
                      <li><Link to='/chairman-msg'>Chairman’s Message</Link></li>
                      <li><Link to='/ceo-msg'>CEO’s Message</Link></li>
                      <li><Link to='/financial-highlights'>Financial Highlights</Link></li>
                      <li><Link to='/favourable'>A Favourable Environment For Home-ownership</Link></li>
                      <li><Link to='/building-strength'>Building Strength for Tomorrow</Link></li>
                      <li><Link to='/value-creation'>Our Approach to Value Creation</Link></li>
                    </ul>
                    <ul className='w-full md:w-[48%]'>
                      <li><Link to='/digital-tech'>Digital Technology and
                        Productivity Enhancement</Link></li>
                      <li><Link to='/esg-commitments'>ESG Commitments</Link></li>
                      <li><Link to='/empowered'>An Empowered and Engaged Workforce</Link></li>
                      <li><Link to='/championing'>Championing a Greener Future</Link></li>
                      <li><Link to='/fostering'>Fostering Social Well-being</Link></li>
                      <li><Link to='/robust'>Robust Governance</Link></li>
                      <li><Link to='/risk-management'>Risk Management</Link></li>
                      <li><Link to='/bod'>Board of Directors</Link></li>
                      <li><Link to='/awards'>Awards</Link></li>
                    </ul>
                  </div>
                </div>
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/">
              Statutory Reports
                <div className='dropdown-nav-ele'> 
                  <div className='flex flex-wrap justify-between'>
                    <ul className='w-full md:w-[48%]'>
                    <li><Link>Directors’ Report</Link></li>
                    <li><Link>Report on Corporate Governance</Link></li>
                    <li><Link>Management Discussion and Analysis</Link></li>
                    </ul>
                  </div> 
                </div> 
              </Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link" to="/">Financial Statements 
                <div className='dropdown-nav-ele'>
                <div className='flex flex-wrap justify-between'>
                    <ul className='w-full md:w-[48%]'>
                      <b>Standalone</b>
                      <li><Link>Independent Auditor’s Report</Link></li>
                      <li><Link>Standalone Balance Sheet</Link></li>
                      <li><Link>Standalone Statement of Profit and Loss</Link></li>
                      <li><Link>Standalone Statement of Cash Flows</Link></li>
                      <li><Link>Standalone Statement of Changes in Equity</Link></li>
                      <li><Link>Notes to the Financial Statements</Link></li>
                    </ul>
                    <ul className='w-full md:w-[48%]'>
                    <b>Consolidated</b>
                      <li><Link>Independent Auditor’s Report</Link></li>
                      <li><Link>Consolidated Balance Sheet</Link></li>
                      <li><Link>Consolidated Statement of Profit and Loss</Link></li>
                      <li><Link>Consolidated Statement of Cash Flows</Link></li>
                      <li><Link>Consolidated Statement of Changes in Equity</Link></li>
                      <li><Link>Notes to the Financial Statements</Link></li>
                    </ul>
                  </div> 
                </div> 
              </Link>
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