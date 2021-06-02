import React from 'react';
import NewsImg from './images/news.svg';
import { NavLink } from 'react-router-dom';
import { BrowserRouter, Route, Link } from 'react-router-dom';
import About from './about';

const Header = () => {
  const hamburger = document.querySelector('.hamburger');
  const navLinks = document.querySelector('.nav-links');
  const links = document.querySelectorAll('.nav-links li');
  function menu() {
    //Animate Links
    navLinks.classList.toggle('open');
    links.forEach((link) => {
      link.classList.toggle('fade');
    });

    //Hamburger Animation
    hamburger.classList.toggle('toggle');
  }
  return (
    <nav className="nav">
      <div class="logo">
        <img src={NewsImg} alt="Logo Image" />
      </div>
      <div class="hamburger" onClick={menu}>
        <div class="line1"></div>
        <div class="line2"></div>
        <div class="line3"></div>
      </div>

      <ul class="nav-links">
        <li>
          <a href="#">Top Stories</a>
        </li>
        <li>
          <Link to="/about"> Aboutpage</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Header;


