import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import '/src/pages/navBar.css';

const NavBar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="navbar-container">
      <div className="navbar-content">
        <div className="navbar-logo">
          <NavLink to="/" className="navbar-brand">
            <span className="font-bold text-xl text-blue-900">SkillAI</span>
          </NavLink>
        </div>
        <button
          className="navbar-toggle"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <span className="navbar-toggle-bar"></span>
          <span className="navbar-toggle-bar"></span>
          <span className="navbar-toggle-bar"></span>
        </button>
        <div className={`navbar-links ${menuOpen ? 'open' : ''}`}>
          <NavLink to="/" end className={({ isActive }) => (isActive ? "is-active" : "")}>
            Home
          </NavLink>
          <NavLink to="/input" className={({ isActive }) => (isActive ? "is-active" : "")}>
            Input
          </NavLink>
          <NavLink to="/login" className={({ isActive }) => (isActive ? "is-active" : "")}>
            <button className="border border-solid rounded-sm text-sm font-bold px-4 py-1 items-center logIn">
              Log in
            </button>
          </NavLink>
          <NavLink to="/signup" className={({ isActive }) => (isActive ? "is-active font-extrabold" : "text-gray-950")}>
            <button className="bg-white items-center p-2 flex gap-2 mx-0 rounded-sm transition-all ease-linear duration-200 hover:text-lightBlue">
              <p className="text-sm">Sign up</p>
              <img
                className="w-[20px] h-[20px]"
                src="https://icon-library.com/images/free-icon-arrow/free-icon-arrow-20.jpg"
                alt="Arrow icon"
              />
            </button>
          </NavLink>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;