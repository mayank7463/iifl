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
      <div className="container nav-li">
        <nav>
          <div className="navbar-brand ">
           <Link to={'/'}><img src="./Navbar/iifl_logo.svg" alt="" className=''/></Link>
          </div>
          <ul className={`nav-list ${isActive ? 'active' : ''}`}>
            <li className="nav-item">
              <div className="nav-link" onClick={toggleNavbar}>
                Corporate Overview
                <div className={`dropdown-nav-ele ${isActive ? 'active' : ''}`}>
                  <div className='flex flex-wrap justify-between'>
                    <ul className='sm:w-full md:w-[48%] cursor-pointer'>
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
                    <ul className='sm:w-full md:w-[48%]'>
                      <li><Link to='/digital-tech'>Digital Technology and Productivity Enhancement</Link></li>
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
              </div>
            </li>
            <li className="nav-item">
              <div className="nav-link" onClick={toggleNavbar}>
                Statutory Reports
                <div className={`dropdown-nav-ele ${isActive ? 'active' : ''}`}>
                  <div className='flex flex-wrap justify-between'>
                    <ul className='sm:w-full md:w-[48%]'>
                      <li><Link target='_blank' to={'./pdf/Directors Report.pdf'}>Directors’ Report</Link></li>
                      <li><Link target='_blank' to={'./pdf/Report on Corporate Governance.pdf'}>Report on Corporate Governance</Link></li>
                      <li><Link target='_blank' to={'./pdf/Management Discussion and Analysis.pdf'}>Management Discussion and Analysis</Link></li>
                    </ul>
                  </div>
                </div>
              </div>
            </li>
            <li className="nav-item">
              <div className="nav-link" onClick={toggleNavbar}>
                Financial Statements
                <div className={`dropdown-nav-ele ${isActive ? 'active' : ''}`}>
                  <div className='flex flex-wrap justify-between'>
                    <ul className='sm:w-full md:w-[48%]'>
                      <b>Standalone</b>
                      <li><Link target='_blank' to={'./pdf/Independent Auditor’s Report.pdf'}>Independent Auditor’s Report</Link></li>
                      <li><Link target='_blank' to={'./pdf/Standalone Statement of Cash Flows.pdf'}>Standalone Balance Sheet</Link></li>
                      <li><Link target='_blank' to="#">Standalone Statement of Profit and Loss</Link></li>
                      <li><Link target='_blank' to={'./pdf/Standalone Statement of Cash Flows.pdf'}>Standalone Statement of Cash Flows</Link></li>
                      <li><Link target='_blank' to="./pdf/Standalone Statement of Changes in Equity.pdf">Standalone Statement of Changes in Equity</Link></li>
                      <li><Link target='_blank' to={'./pdf/Notes to the Financial Statements standalone.pdf'}>Notes to the Financial Statements</Link></li>
                    </ul>
                    <ul className='sm:w-full md:w-[48%]'>
                      <b>Consolidated</b>
                      <li><Link to="#">Independent Auditor’s Report</Link></li>
                      <li><Link to="#">Consolidated Balance Sheet</Link></li>
                      <li><Link to="#">Consolidated Statement of Profit and Loss</Link></li>
                      <li><Link to="#">Consolidated Statement of Cash Flows</Link></li>
                      <li><Link to="#">Consolidated Statement of Changes in Equity</Link></li>
                      <li><Link to="#">Notes to the Financial Statements</Link></li>
                    </ul>
                  </div>
                </div>
              </div>
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
