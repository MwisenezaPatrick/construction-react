import React from "react";
import project1 from "../assets/project1.jpg";
import project2 from "../assets/project2.jpg";
import project3 from "../assets/project3.jpg";
import project4 from "../assets/project4.jpg";
import project5 from "../assets/project5.jpg";
import project6 from "../assets/project6.jpg";
import project7 from "../assets/project7.jpg";
import project8 from "../assets/project8.jpg";
import { motion } from "framer-motion";
import { slideUpVariants, zoomInVariants } from "./animation";

function Portfolio() {
  return (
    <div id="projects" className="container-fluid bg-light py-5">
      <motion.div
        initial="hidden"
        whileInView="visible"
        variants={slideUpVariants}
        className="container text-center"
      >
        <motion.h4 variants={slideUpVariants} className="text-warning fw-bold">
          PORTFOLIO
        </motion.h4>
        <motion.h1
          variants={slideUpVariants}
          className="text-dark text-uppercase display-4 fw-bold"
        >
          OUR BEST PROJECTS
        </motion.h1>
        <motion.div
          variants={slideUpVariants}
          className="mx-auto mt-2"
          style={{ width: "120px", height: "6px", backgroundColor: "yellow" }}
        ></motion.div>

        {/* Portfolio Grid */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          variants={zoomInVariants}
          className="row mt-4 g-4"
        >
          {[project1, project2, project3, project4, project5, project6, project7, project8].map(
            (project, index) => (
              <div key={index} className="col-lg-3 col-md-4 col-6">
                <motion.img
                  src={project}
                  alt="project image"
                  className="img-fluid rounded shadow-sm"
                  variants={zoomInVariants}
                />
              </div>
            )
          )}
        </motion.div>
      </motion.div>
    </div>
  );
}

export default Portfolio;
