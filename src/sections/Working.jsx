import React from "react";
import { motion } from "framer-motion";
import { slideUpVariants, zoomInVariants } from "./animation";
import { planning } from "../export";

function Working() {
  return (
    <div id="working" className="container-fluid bg-white py-5">
      <motion.div
        initial="hidden"
        whileInView="visible"
        variants={slideUpVariants}
        className="container text-center"
      >
        <motion.h1 variants={slideUpVariants} className="text-warning h4">
          STEP BY STEP
        </motion.h1>
        <motion.h1 variants={slideUpVariants} className="text-dark text-uppercase display-4 fw-bold">
          HOW IT'S WORKING
        </motion.h1>
        <motion.div
          variants={slideUpVariants}
          className="mx-auto mt-2 bg-warning"
          style={{ width: "120px", height: "6px" }}
        ></motion.div>

        {/* Services List */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          variants={zoomInVariants}
          className="row mt-4 justify-content-between"
        >
          {planning.map((item, index) => (
            <div
              key={index}
              className="col-md-3 d-flex flex-column align-items-center text-center border border-warning rounded p-4"
            >
              <div
                className="d-flex justify-content-center align-items-center rounded-circle p-4"
                style={{
                  width: "80px",
                  height: "80px",
                  backgroundColor: "yellow",
                  cursor: "pointer",
                  transition: "background-color 0.3s ease-in-out",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = "gray";
                  e.currentTarget.children[0].style.color = "white";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = "yellow";
                  e.currentTarget.children[0].style.color = "gray";
                }}
              >
                <item.icon className="fs-1 text-dark" />
              </div>
              <h1 className="fs-5 fw-bold text-uppercase mt-3">{item.title}</h1>
              <p className="fs-6 text-secondary">{item.about}</p>
            </div>
          ))}
        </motion.div>
      </motion.div>
    </div>
  );
}

export default Working;
