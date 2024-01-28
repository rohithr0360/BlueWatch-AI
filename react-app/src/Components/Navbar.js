import React from "react";
import "../Styles/Navbar.css";
import { Link } from "react-router-dom";

function Navbar() {



  const handleTryOurModelClick = () => {
    // Redirect to YouTube
    window.location.href = "http://127.0.0.1:5000/"; // You can replace this URL with the desired YouTube video URL
  };
  return (
    <div className="navbar-section">
      <h1 className="navbar-title">
        <Link to="/">
          BlueWatch.ai 
        </Link>
      </h1>

      {/* Desktop */}
      <ul className="navbar-items">
        <li>
          <Link to="/" className="navbar-links">
            Home
          </Link>
        </li>
        <li>
          <a href="#necess" className="navbar-links">
            Necessity
          </a>
        </li>
        <li>
          <a href="#probl" className="navbar-links">
            Problem
          </a>
        </li>
        <li>
          <a href="#solution" className="navbar-links">
            Solution
          </a>
        </li>
        <li>
          <a href="#yolomodel" className="navbar-links">
            YOLO
          </a>
        </li>
        <li>
          <a href="#Techstacks" className="navbar-links">
            Tech Stacks
          </a>
        </li>
        <li>
          <a href="#facts" className="navbar-links">
            Facts
          </a>
        </li>
      </ul>

      <button
        className="navbar-btn"
        type="button"
        onClick={handleTryOurModelClick}
      >
         Try Our AI model
      </button>

     
    </div>
  );
}

export default Navbar;
