import React from 'react';
import NewsImg from './images/news.svg';
import { BrowserRouter, Route, Link } from 'react-router-dom';

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
        <Link to="/">
          {' '}
          <img src={NewsImg} alt="Logo Image" />
        </Link>
      </div>
      <div class="hamburger" onClick={menu}>
        <div class="line1"></div>
        <div class="line2"></div>
        <div class="line3"></div>
      </div>

      <ul class="nav-links">
        <li>
          <Link to="/topstories">Top Stories</Link>
        </li>
        <li>
          <Link to="/about"> Aboutpage</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Header;
