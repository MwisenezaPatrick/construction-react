/* eslint-disable no-unused-vars */
import React from "react";
import heroimg from "../assets/heroimg.png";
import BackgroundImage from "../assets/homeimg.webp";
import { motion } from "framer-motion";
import { slideUpVariants, zoomInVariants } from "./animation";

function Hero() {
  return (
    <div
      id="hero"
      className="bg-black w-100 min-vh-100 d-flex flex-column flex-lg-row justify-content-center align-items-center text-center text-lg-start p-3 p-lg-5"
      style={{
        backgroundImage: `url(${BackgroundImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <motion.div
        initial="hidden"
        whileInView="visible"
        variants={slideUpVariants}
        className="col-lg-6 col-12 d-flex flex-column justify-content-center align-items-center align-items-lg-start"
      >
        <motion.h1
          variants={slideUpVariants}
          className="text-warning fs-2 fs-lg-1 fw-bold"
        >
          WE ARE BUILDERS
        </motion.h1>
        <motion.h1
          variants={slideUpVariants}
          className="text-white text-uppercase fs-2 fs-lg-1 fw-bold"
        >
          we will build your dream
        </motion.h1>
        <div className="w-50 w-lg-100 my-3" style={{ height: "5px", backgroundColor: "#ffc107" }}></div>
        <p className="text-white fs-6 fs-lg-5 px-3 px-lg-0">
          construction, the techniques and industry involved in the assembly and erection of structures, primaril…
              Construction is an ancient human activity!
        </p>
        <motion.div
          initial="hidden"
          whileInView="visible"
          variants={zoomInVariants}
          className="d-flex flex-column flex-sm-row justify-content-center justify-content-lg-start align-items-center gap-3 mt-3"
        >
          <motion.button
            variants={zoomInVariants}
            className="btn btn-warning fw-bold px-4 py-2"
          >
            READ MORE
          </motion.button>
          <motion.button
            variants={zoomInVariants}
            className="btn btn-outline-light fw-bold px-4 py-2"
          >
            REACH US
          </motion.button>
        </motion.div>
      </motion.div>

      <div className="col-lg-6 col-12 d-flex justify-content-center justify-content-lg-end mt-5 mt-lg-0">
        <motion.img
          initial="hidden"
          whileInView="visible"
          variants={zoomInVariants}
          src={heroimg}
          alt="heroimg"
          className="img-fluid"
          style={{ height: "350px", maxWidth: "90%" }}
        />
      </div>
    </div>
  );
}

export default Hero;
