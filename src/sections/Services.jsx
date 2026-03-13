import React from "react";
import { motion } from "framer-motion";
import { slideUpVariants, zoomInVariants } from "./animation";
import { allservices } from "../export";

function Services() {
  return (
    <div id="services" className="container-fluid bg-white py-5">
      <motion.div
        initial="hidden"
        whileInView="visible"
        variants={slideUpVariants}
        className="container text-center"
      >
        <motion.h1 variants={slideUpVariants} className="text-warning h4">
          SPECIAL OFFER
        </motion.h1>
        <motion.h1 variants={slideUpVariants} className="text-dark text-uppercase display-4 fw-bold">
          OUR BEST SERVICES
        </motion.h1>
        <motion.div variants={slideUpVariants} className="mx-auto mt-2" style={{ width: '120px', height: '6px', backgroundColor: 'yellow' }}></motion.div>

        {/* Services List */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          variants={zoomInVariants}
          className="row mt-4 justify-content-center"
        >
          {allservices.map((item, index) => (
            <motion.div
              key={index}
              variants={zoomInVariants}
              className="col-lg-4 col-md-6 mb-4"
            >
              <div className="d-flex align-items-start gap-3 p-4 border rounded shadow-sm">
                {/* Service Icon */}
                <img
                  src={item.icon}
                  alt="icon"
                  className="img-fluid border border-warning rounded p-2"
                  style={{ width: '80px', 
                  transition: "0.3s ease-in-out",
                  }}
                  onMouseOver={(e) => {
                    e.currentTarget.style.backgroundColor = "#ffc107";
                    e.currentTarget.style.borderColor = "#d39e00";
                  }}
                  onMouseOut={(e) => {
                    e.currentTarget.style.backgroundColor = "transparent";
                    e.currentTarget.style.borderColor = "#ffc107";
                  }}
                />
                
                {/* Service Details */}
                <div className="d-flex flex-column gap-2">
                  <h1 className="h5 fw-bold text-dark">{item.title}</h1>
                  <p className="mb-0 text-muted">{item.about}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </div>
  );
}

export default Services;
