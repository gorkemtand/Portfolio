import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";

function Navbar() {
  const [showNav, setShowNav] = useState(false);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  const handleScroll = (sectionId) => {
    const section = document.getElementById(sectionId);
    const navbarHeight = document.querySelector(".navbar").offsetHeight;
    const sectionTop = section.offsetTop - navbarHeight;

    window.scrollTo({
      top: sectionTop,
      behavior: "smooth"
    });
  };

  const toggleNav = () => {
    setShowNav(!showNav);
  };

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className="navbar">
      <div className="logo" onClick={toggleNav}>
        <span className="logoText">Gorkem.dev</span>
      </div>
      <ul className={`nav-links ${showNav ? "show" : ""}`}>
        <li>
          <NavLink
            exact={true.toString()}
            to="/"
            activeclassname="active"
            onClick={() => handleScroll("head")}
            className="nav-element"
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/about"
            activeclassname="active"
            onClick={() => handleScroll("about")}
            className="nav-element"
          >
            About
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/projects"
            activeclassname="active"
            onClick={() => handleScroll("projects")}
            className="nav-element"
          >
            Projects
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/contact"
            activeclassname="active"
            onClick={() => handleScroll("contact")}
            className="nav-element"
          >
            Contact
          </NavLink>
        </li>
      </ul>
    </div>
  );
}

export default Navbar;
