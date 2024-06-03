// src/components/HomePage.js
import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/logos/logo.png';
import './HomePage.css';

const HomePage = () => {
  return (
    <div className="home">
      <header className="header">
        <img src={logo} className="logo" alt="logo" />
        <h1 className="title">Meet Qonke: The King of Risk</h1>
        <h2 className="subtitle">A Degenerate Gambler Who Loves Losing It All on Russian Roulette</h2>
        <p className="description">What's your Degen level:</p>
        <div className="levels">
          <div className="level"><Link to="/game/beginner">Beginner</Link></div>
          <div className="level"><Link to="/game/intermediate">Intermediate</Link></div>
          <div className="level"><Link to="/game/advanced">Advanced</Link></div>
          <div className="level"><Link to="/game/expert">Expert</Link></div>
        </div>
      </header>
    </div>
  );
};

export default HomePage;