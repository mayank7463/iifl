import React, { useState, useEffect, useRef } from 'react';
import './Navbar.scss';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isOverlayActive, setIsOverlayActive] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const overlaysRef = useRef(null);
  const bodyRef = useRef(document.body);
  const menuBtnRef = useRef(null);
  const menuItemsRef = useRef(null);
  const expandBtnRefs = useRef([]);

  useEffect(() => {
    const body = bodyRef.current;
    const overlays = overlaysRef.current;
    const menuBtn = menuBtnRef.current;
    const menuItems = menuItemsRef.current;

    const liElems = menuItems.querySelectorAll('.menu-items li');
    liElems.forEach((elem) => {
      const childrenElems = elem.querySelectorAll('.dropdown-menu');
      if (childrenElems.length > 0) {
        elem.firstElementChild.classList.add('expand-btn');
        elem.classList.add('dropdown');
      }
    });

    function toggle() {
      body.classList.toggle('overflow');
      setIsOverlayActive(!isOverlayActive);
      setIsMenuOpen(!isMenuOpen);
    }

    const handleMenuClick = (e) => {
      e.stopPropagation();
      toggle();
    };

    const handleEscapeKey = (event) => {
      const key = event.key;
      if (key === 'Escape' && isMenuOpen) {
        toggle();
      }
    };

    const handleDocumentClick = (e) => {
      let target = e.target,
        its_menu = target === menuItems || menuItems.contains(target),
        its_hamburger = target === menuBtn,
        menu_is_active = isMenuOpen;
      if (!its_menu && !its_hamburger && menu_is_active) {
        toggle();
      }
    };

    const expandBtn = menuItems.querySelectorAll('.expand-btn');
    expandBtnRefs.current = Array.from(expandBtn);

    const handleExpandBtnClick = (e) => {
      if (window.innerWidth <= 1024) {
        e.preventDefault();
        e.currentTarget.classList.toggle('open');
        const submenu = e.currentTarget.nextElementSibling;
        submenu.style.display = submenu.style.display === 'block' ? 'none' : 'block';
      }
    };

    expandBtn.forEach((btn) => {
      btn.addEventListener('click', handleExpandBtnClick);
    });

    const handleResize = () => {
      if (window.innerWidth > 1024) {
        if (isMenuOpen) {
          toggle();
        }
        expandBtnRefs.current.forEach((btn) => {
          btn.classList.remove('open');
          const submenu = btn.nextElementSibling;
          submenu.style.display = ''; // Reset display style
        });
      }
    };

    menuBtn.addEventListener('click', handleMenuClick);
    window.addEventListener('keydown', handleEscapeKey);
    document.addEventListener('click', handleDocumentClick);
    window.addEventListener('resize', handleResize);

    return () => {
      menuBtn.removeEventListener('click', handleMenuClick);
      window.removeEventListener('keydown', handleEscapeKey);
      document.removeEventListener('click', handleDocumentClick);
      window.removeEventListener('resize', handleResize);
      expandBtn.forEach((btn) => {
        btn.removeEventListener('click', handleExpandBtnClick);
      });
    };
  }, [isMenuOpen, isOverlayActive]);

  return (
    <>
      <header className="navbar sticky">
        <Link to={'/'} className="logo"><img src="./Navbar/iifl_logo.svg" className="h-10" alt="Hil Logo" /></Link>
        <div ref={menuBtnRef} className="menu-btn">
          {/* <div className="menu-btn__lines"></div> */}
        </div>
        <ul ref={menuItemsRef} className={`menu-items ${isMenuOpen ? 'open' : ''}`}>
          <li><Link to={'/'} className="menu-item">Home</Link></li>
          <li>
            <a href="#" className="menu-item ">Corporate Overview</a>
            <ul className="dropdown-menu test-menu xyz w-[60%]">
               <div className='flex lg:flex-row flex-col'>
                    <div>
                          <li><Link to={'/WhoWe'} className="menu-item">Who We Are</Link></li>
                          <li><Link to={'/journey'} className="menu-item">Looking Back At A Momentous Journey</Link></li>
                          <li><Link to={'/where'} className="menu-item">Where We Are</Link></li>
                          <li><Link to={'/wedo'} className="menu-item">What We Do For You</Link></li>
                          <li><Link to={'/onehome'} className="menu-item">IIFL One Home</Link></li>
                          <li><Link Link to={'/chairman-msg'} className="menu-item">Chairman’s Message</Link></li>
                          <li><Link to={'/ceo-msg'} className="menu-item">CEO’s Message</Link></li>
                          <li><Link to={'/financial-highlights'} className="menu-item">Financial Highlights</Link></li>
                          <li><Link Link to={'/favourable'} className="menu-item">A Favourable Environment For Home-ownership</Link></li>
                          <li><Link to={'/human-capital'} className="menu-item">Human Capital</Link></li>
                          <li><Link to={'/building-strength'} className="menu-item">Building Strength for Tomorrow</Link></li>
                         
                    </div>
                    <div>
                          <li><Link to={'/value-creation'} className="menu-item">Our Approach to Value Creation</Link></li>
                          <li><Link to={'/digital-tech'} className="menu-item">Digital Technology and Productivity Enhancement</Link></li>
                          <li><Link to={'/esg-commitments'} className="menu-item">ESG Commitments</Link></li>
                          <li><Link to={'/empowered'} className="menu-item">An Empowered and Engaged Workforce</Link></li>
                          <li><Link to={'/championing'} className="menu-item">Championing a Greener Future</Link></li>
                          <li><Link to={'/fostering'} className="menu-item">Fostering Social Well-being</Link></li>
                          <li><Link to={'/robust'} className="menu-item">Robust Governance</Link></li>
                          <li><Link to={'/risk-management'} className="menu-item">Risk Management</Link></li>
                          <li><Link to={'/bod'} className="menu-item">Board of Directors</Link></li>
                          <li><Link to={'/awards'} className="menu-item">Awards</Link></li>
                    </div>
               </div>
            </ul>
          </li>
         
          <li>
            <a href="#" className="menu-item">Statutory Reports</a>
            <ul className="dropdown-menu">
              <li><Link target='_blank' to={''} className="menu-item">Directors’ Report</Link></li>
              <li><Link target='_blank' to={''} className="menu-item">Report on Corporate Governance</Link></li>
              <li><Link target='_blank' to={''} className="menu-item">Management Discussion and Analysis</Link></li>
            </ul>
          </li>
          <li>
            <a href="#" className="menu-item">Financial Statements</a>
            <ul className="dropdown-menu">
              <li><Link target='_blank' to={''} className="menu-item">Standalone</Link></li>
              <li><Link target='_blank' to={''} className="menu-item">Consolidated</Link></li>
            </ul>
          </li>
          {/* <li><Link target='_blank' to={'./Pdf/Notice.pdf'} className="menu-item"></Link></li> */}
        
        </ul>
      </header>
      
      
    </>
  );
};

export default Navbar;
