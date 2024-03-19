import React from 'react';
import { BrowserRouter as Router, Route, Routes, NavLink } from 'react-router-dom';
import Home from './Home';
import About from './About';
import Blog from './Blog';
import Feed from './Feed';

import Contact from './Contact';
import './App.css'; // Make sure to import your CSS file
import logo from './assets/Logo.png'
import titleBanner from './assets/titleBanner.jpg'

function App() {
  return (
    <Router>
      <nav>
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <NavLink to="/" end className='non-active' style={{ flex: 1 }}>
          <img style={{ maxHeight: '50px', padding: '0 10px' }} src={logo} alt="Logo" />
        </NavLink>

        <NavLink  to="/" className='non-active' style={{ flex: 1, display: 'flex', justifyContent: 'center' }}>
          <img style={{ maxHeight: '50px', padding: '0 10px' }} src={titleBanner} alt="titleBanner" />
        </NavLink>

        <div style={{ flex: 1 }}></div>
      </div>
        <ul>
          <li>
            <NavLink to="/" end className={({ isActive }) => isActive ? 'active' : ''}>
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/about" className={({ isActive }) => isActive ? 'active' : ''}>
              About
            </NavLink>
          </li>
          <li>
            <NavLink to="/blog" className={({ isActive }) => isActive ? 'active' : ''}>
              Post
            </NavLink>
          </li>
          <li>
            <NavLink to="/feed" className={({ isActive }) => isActive ? 'active' : ''}>
              Feed
            </NavLink>
          </li>
          <li>
            <NavLink to="/contact" className={({ isActive }) => isActive ? 'active' : ''}>
              Contact
            </NavLink>
          </li>
        </ul>
      </nav>
      <div className='scroll-watcher'></div>

      <Routes>
        <Route path="/about" element={<About />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/feed" element={<Feed />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/" element={<Home />} />
      </Routes>
    </Router>
  );
}

export default App;

