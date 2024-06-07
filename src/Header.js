import './App.css';
import React, { useState, useEffect } from 'react';
import { Outlet, Link, useLocation } from 'react-router-dom';

function Header() {
  const location = useLocation();
  const [isNavVisible, setIsNavVisible] = useState(false);

  const toggleNavVisibility = () => {
    if (isNavVisible) {
      document.querySelector('.nav-bar').classList.add('hide');
      setTimeout(() => setIsNavVisible(false), 500); // Подождите завершения анимации перед изменением состояния
    } else {
      setIsNavVisible(true);
    }
  };


  return (
    <>
      <div className="app-header">
        <div className='left-header'>
      <h2>Daria<br />Eremeeva</h2>
      <p>/ FRONT-END <br /> DEVELOPER</p>
      </div>
      {isNavVisible && (
        <div className={`nav-bar ${isNavVisible ? "show" : ""}`}>
      <ul>
        <li><Link to='/' className={location.pathname === "/" ? "active" : ""}>ABOUT ME</Link></li>
        <li><Link to='/Resume' className={location.pathname === "/Resume" ? "active" : ""}>RESUME</Link></li>
        <li><Link to='/Projects' className={location.pathname === "/Projects" ? "active" : ""}>PROJECTS</Link></li>
        <li><Link to='/Contact' className={location.pathname === "/Contact" ? "active" : ""}>CONTACT</Link></li>
      </ul>
      </div>
      )}
      <div className={`container ${isNavVisible ? "change" : ""}`} onClick={toggleNavVisibility}>
        <div className="bar1"></div>
        <div className="bar2"></div>
        <div className="bar3"></div>
      </div>
      </div>
    <Outlet />
    </>
  );
}

export default Header;
