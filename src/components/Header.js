// src/components/Header.js
import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/logos/logo.png'; // Ensure the path is correct
import './Header.css';

const Header = () => {
  return (
    <header className="header">
      <img src={logo} className="logo" alt="Logo" />
      <nav className="nav">
        <Link to="/" className="nav-link">Home</Link>
        <Link to="/leaderboard" className="nav-link">Leaderboard</Link>
        <Link to="/challenges" className="nav-link">Challenges</Link>
      </nav>
    </header>
  );
};

export default Header;
