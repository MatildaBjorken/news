import React from 'react';
import NewsImg from './images/news.svg';

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
    <nav>
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
          <a href="#">Home</a>
        </li>
        <li>
          <a href="#">Solutions</a>
        </li>
        <li>
          <a href="#">Products</a>
        </li>
      </ul>
    </nav>
  );
};

export default Header;
