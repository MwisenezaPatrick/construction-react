import React from "react";
import { FaCopyright, FaArrowUp } from "react-icons/fa";
import { Link } from "react-scroll";

function Footer() {
  return (
    <>
    
      {/* Footer Section */}
      <div className="bg-black text-white d-flex flex-column flex-md-row justify-content-between align-items-start py-4 px-3 ms-2">
  {/* Left-Aligned Contact Section */}
  <div className="w-100" style={{ maxWidth: "400px" }}>
    <h3 className="text-white h5 fw-bold mb-3">Contact Us</h3>
    <div className="text-secondary">
      <h6 className="fw-bold text-light">Contact</h6>
      <p className="mb-2">+254 740 123 456</p>
      
      <h6 className="fw-bold text-light">Email</h6>
      <p className="mb-2">construction@gmail.com</p>
      
      <h6 className="fw-bold text-light">Location</h6>
      <p className="mb-0">Kigali</p>
    </div>
  </div>

  {/* Right-Aligned Company Section */}
  <div className="w-100 mt-4 mt-md-0" style={{ maxWidth: "400px" }}>
    <h3 className="text-white h5 fw-bold mb-3">Company</h3>
    <ul className="list-unstyled text-secondary text-start">
      <li>
        <a href="#hero" className="text-decoration-none text-secondary hover-text-white">Home</a>
      </li>
      <li>
        <a href="#about" className="text-decoration-none text-secondary hover-text-white">About Us</a>
      </li>
      <li>
        <a href="#contact" className="text-decoration-none text-secondary hover-text-white">Contact Us</a>
      </li>
      <li>
        <a href="#" className="text-decoration-none text-secondary hover-text-white">Privacy</a>
      </li>
    </ul>
  </div>
</div>

        <div className="bg-black text-white d-flex justify-content-center align-items-center gap-2 py-3">
        <FaCopyright className="text-warning fs-4" />
        <p className="mb-0 text-center fs-5">
        Copyright 2025 © Patrick. All Rights Reserved.
        </p>
      </div>
      

      {/* Scroll to Top Button */}
      <div
        id="icon-box"
        className="bg-warning text-black p-3 rounded-circle position-fixed bottom-0 end-0 m-3 
        d-flex align-items-center justify-content-center shadow-lg"
        style={{ cursor: "pointer", transition: "0.3s" }}
      >
        <Link to="hero" spy={true} offset={-100} smooth={true}>
          <FaArrowUp className="fs-4" />
        </Link>
      </div>

      {/* Hover Effect */}
      <style>{`
        #icon-box:hover {
          background: black !important;
          color: white !important;
        }
      `}</style>
    </>
  );
}

export default Footer;
