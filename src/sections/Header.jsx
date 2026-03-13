import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-scroll";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const navItem = [
    { link: "Home", path: "hero" },
    { link: "About", path: "about" },
    { link: "Services", path: "services" },
    { link: "Projects", path: "projects" },
    { link: "Contact", path: "contact" },
  ];

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-warning fixed-top shadow-sm px-lg-5 px-3">
      <div className="container-fluid">
        {/* ✅ Website Name */}
        <h1 className="navbar-brand fw-bold fs-3 text-dark m-0">
          WEBSITE<span className="text-white fst-italic"> Construction</span>
        </h1>

        {/* ✅ Mobile Menu Toggle */}
        <button className="navbar-toggler border-0" type="button" onClick={toggleMenu}>
          {isMenuOpen ? <FaTimes size={24} className="text-dark" /> : <FaBars size={24} className="text-dark" />}
        </button>

        {/* ✅ Navigation Links (Desktop) */}
        <div className={`collapse navbar-collapse ${isMenuOpen ? "show" : ""}`}>
          <ul className="navbar-nav ms-auto">
            {navItem.map(({ link, path }) => (
              <li className="nav-item" key={path}>
                <Link
                  className="nav-link fw-bold text-uppercase px-3 py-2 rounded-pill text-dark"
                  to={path}
                  spy={true}
                  offset={-80}
                  smooth={true}
                  onClick={closeMenu}
                  style={{ transition: "background 0.3s, color 0.3s", cursor: "pointer" }}
                  onMouseEnter={(e) => {
                    e.target.style.backgroundColor = "white";
                    e.target.style.color = "white";
                  }}
                  onMouseLeave={(e) => {
                    e.target.style.backgroundColor = "transparent";
                    e.target.style.color = "black";
                  }}
                >
                  {link}
                </Link>
              </li>
            ))}
          </ul>

          {/* ✅ Reach Us Button (Desktop) */}
          <button
            className="btn btn-dark fw-semibold px-4 py-2 rounded-pill d-md-flex d-none"
            style={{ transition: "transform 0.3s ease-in-out", cursor: "pointer" }}
            onMouseEnter={(e) => {
              e.target.style.transform = "scale(1.05)";
            }}
            onMouseLeave={(e) => {
              e.target.style.transform = "scale(1)";
            }}
          >
            REACH US
          </button>
        </div>

        {/* ✅ Mobile Menu (Half Yellow, Half White) */}
        {isMenuOpen && (
          <div className="position-fixed top-0 start-0 w-100 vh-100 d-lg-none">
            {/* ✅ Upper Half - Yellow Background */}
            <div className="d-flex flex-column align-items-center w-100 bg-warning pt-4 pb-2">
              {/* ✅ Website Name + Close Button */}
              <div className="d-flex justify-content-between align-items-center w-100 px-4">
                <h1 className="fw-bold fs-4 text-dark m-0">
                  WEBSITE<span className="text-white fst-italic"> Construction</span>
                </h1>
                <button className="btn border-0" onClick={closeMenu}>
                  <FaTimes size={30} className="text-dark" />
                </button>
              </div>

              {/* ✅ Mobile Navigation Links (Yellow Background) */}
              <ul className="navbar-nav text-center w-100 mt-3">
                {navItem.map(({ link, path }) => (
                  <li className="nav-item mb-2" key={path}>
                    <Link
                      className="nav-link fw-bold text-dark fs-5 px-4 py-2 rounded-pill w-100"
                      to={path}
                      spy={true}
                      offset={-80}
                      smooth={true}
                      onClick={closeMenu}
                      style={{
                        transition: "background 0.3s, color 0.3s",
                        cursor: "pointer",
                      }}
                      onMouseEnter={(e) => {
                        e.target.style.backgroundColor = "black"; 
                        e.target.style.color = "white"; 
                      }}
                      onMouseLeave={(e) => {
                        e.target.style.backgroundColor = "yellow"; 
                        e.target.style.color = "black"; 
                      }}
                    >
                      {link}
                    </Link>
                  </li>
                ))}
              </ul>

              {/* ✅ Reach Us Button (Now in Yellow Section) */}
              <button
                className="btn btn-dark fw-semibold px-4 py-2 rounded-pill mt-3"
                style={{ transition: "transform 0.3s ease-in-out", cursor: "pointer" }}
                onMouseEnter={(e) => {
                  e.target.style.transform = "scale(1.05)";
                }}
                onMouseLeave={(e) => {
                  e.target.style.transform = "scale(1)";
                }}
              >
                REACH US
              </button>
            </div>

            {/* ✅ Bottom Half - White Background */}
            <div className="d-flex flex-column align-items-center w-100 bg-white py-4"></div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Header;
