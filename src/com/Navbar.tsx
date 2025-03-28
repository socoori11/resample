// src/components/Navbar.tsx
import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar: React.FC = () => {
  return (
    <nav className="navbar">
      <ul>
        <li><Link to="/">홈</Link></li>
        <li><Link to="/about">소개</Link></li>
        <li><Link to="/contact">연락처</Link></li>
        <li><Link to="/gallery">갤러리</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;
