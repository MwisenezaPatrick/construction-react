import React from "react";
import { motion } from "framer-motion";
import { slideUpVariants, zoomInVariants } from "./animation";


function About() {
  return (
    <div className="w-100 py-5"  style={{ background: "rgba(0, 0, 0, 0.8)", color: "white" }} id="about">
      <div className="container">
        <div className="row align-items-start g-5">
          <motion.div
            variants={slideUpVariants}
            whileInView="visible"
            initial="hidden"
            className="col-lg-7 d-flex flex-column justify-content-center"
          >
            <motion.h1 variants={slideUpVariants} className="text-warning fs-4">
              WELCOME TO
            </motion.h1>
            <motion.h1 variants={slideUpVariants} className="text-white text-uppercase fw-bold display-4">
              Construction Website
            </motion.h1>
            <div className="bg-warning" style={{ width: "120px", height: "6px" }}></div>
            <p className="fs-3 fst-italic text-light mt-4">
              construction, the techniques and industry involved in the assembly and erection of structures, primaril…
              Construction is an ancient human activity
            </p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            variants={slideUpVariants}
            className="col-lg-5 d-flex flex-column justify-content-center"
          >
            <p className="text-white fs-5 text-justify"style={{ textAlign: "justify", lineHeight: "1.6", margin: "0 auto" }}>
              construction, the techniques and industry involved in the assembly and erection of structures, primaril…
              Construction is an ancient human activity. It began with the purely functional need for a controlled 
              environment to moderate the effects of climate. Constructed shelters were one means by which human 
              beings were able to adapt themselves to a wide variety of climates and become a global species.
              Human shelters were at first very simple and perhaps lasted only a few days or months. Over time, how…
              The history of building is marked by a number of trends. One is the increasing durability of the 
              materials used. Early building materials were perishable, such as leaves, branches, and animal hides. 
              Later, more durable natural materials—such as clay, stone, and timber—and, finally, synthetic materials
            </p>
            <motion.button
              variants={zoomInVariants}
              className="btn btn-warning fw-bold px-3 py-2 mt-3"
              style={{ maxWidth: "130px" }}
            >
              READ MORE
            </motion.button>
          </motion.div>
        </div>
      </div>
    </div>
  );
}

export default About;
