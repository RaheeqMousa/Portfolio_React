import React from 'react'
import style from './nav.module.css'

export default function navbar() {
  return (
    <nav className={`navbar navbar-expand-lg sticky-top`}>
      <div className="container">
        {/* Logo */}
        <div className="navbar-nav me-auto mb-2 mb-lg-0">
          <a className="nav-link fw-bold fs-3" href="#">Start Bootstrap</a>
        </div>
        
        {/* Centered Navbar links */}
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a className="nav-link fw-bold fs-4" href="#">Home</a>
            </li>
            <li className="nav-item">
              <a className="nav-link fw-bold fs-4" href="#">About Us</a>
            </li>
            <li className="nav-item">
              <a className="nav-link fw-bold fs-4" href="#">Contact</a>
            </li>
          </ul>
        </div>

        {/* Icon links on the right */}
        <div className="d-flex" id="icons">
          {/* Navbar toggler (for mobile view) */}
          <a className="nav-link" href="#"><i className="fa-solid fa-magnifying-glass" /></a>
          <a className="nav-link" href="Sign In.html"><i className="fa-solid fa-user" /></a>
          <a className="nav-link" href="#"><i className="fa-solid fa-cart-shopping" /></a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon" />
          </button>     
        </div>
      </div>
    </nav>

  )
}
