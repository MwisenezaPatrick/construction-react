import React from "react";
import { motion } from "framer-motion";
import { slideUpVariants, zoomInVariants } from "./animation";
import { clients } from "../export";

function Testimonials() {
  return (
    <div
      id="clients"
      className="container-fluid py-5"
      style={{ background: "rgba(0, 0, 0, 0.8)", color: "white" }}
    >
      <motion.div
        initial="hidden"
        whileInView="visible"
        variants={slideUpVariants}
        className="container text-center"
      >
        <motion.h1 variants={slideUpVariants} className="text-warning h4">
          TESTIMONIALS
        </motion.h1>
        <motion.h1
          variants={slideUpVariants}
          className="text-white text-uppercase display-4 fw-bold"
        >
          WHAT OUR CLIENTS SAY
        </motion.h1>
        <motion.div
          variants={slideUpVariants}
          className="mx-auto mt-2 bg-warning"
          style={{ width: "120px", height: "6px" }}
        ></motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          variants={zoomInVariants}
          className="row mt-4 justify-content-center"
        >
          {clients.map((item, index) => (
            <div key={index} className="col-lg-4 col-md-6 d-flex flex-column align-items-center mb-4">
              <div className="border border-white p-4 rounded text-center shadow-sm testimonial-box">
                <p className="text-white m-0">{item.about}</p>
              </div>
              <div className="text-center mt-n5 position-relative">
                <img className="rounded-circle border border-white p-1" src={item.image} alt="client" width="80" />
                <h1 className="text-white mt-2 h5 fw-bold text-uppercase">{item.name}</h1>
                <h2 className="text-warning h6">{item.post}</h2>
              </div>
            </div>
          ))}
        </motion.div>
      </motion.div>

      {/* CSS for hover effect */}
      <style>{`
        .testimonial-box {
          transition: background 0.3s ease-in-out, transform 0.3s;
        }
        .testimonial-box:hover {
          background: #ffc107;
          color: black;
          transform: scale(1.05);
        }
      `}</style>
    </div>
  );
}

export default Testimonials;
