import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => (
  <div className="header">
    <h1 className="banner">Math Magicians</h1>
    <nav className="nav-link">
      <Link to="/" className="nav-item">
        Home
        <span className="divider">|</span>
      </Link>
      <Link to="/calculator" className="nav-item">
        Calculator
        <span className="divider">|</span>
      </Link>
      <Link to="/quote" className="nav-item">
        Quote
      </Link>
    </nav>
  </div>
);
export default Navbar;
