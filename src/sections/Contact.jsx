/* eslint-disable no-unused-vars */
import React from "react";
import { motion } from "framer-motion";
import { slideUpVariants, zoomInVariants } from "./animation";

function Contact() {

  const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "34c840bc-5504-4ecf-af7d-51b5d0b52f35");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      setResult();
      alert("Form Submitted Successfully")
      event.target.reset();
    } else {
      console.log("Error", data);
      alert(data.message)
      setResult("");
    }
  };

  return (
    <div id="contact" className="bg-white w-100">
      <div className="w-100 py-5" style={{ background: "rgba(0, 0, 0, 0.8)", color: "white" }}>
        <div className="container">
          <div className="row align-items-start g-5">
            <motion.div
              variants={slideUpVariants}
              whileInView="visible"
              initial="hidden"
              className="col-lg-7 d-flex flex-column justify-content-center"
            >
              <motion.h1 variants={slideUpVariants} className="text-warning fs-4">
                CONTACT US
              </motion.h1>
              <motion.h1 variants={slideUpVariants} className="text-white text-uppercase fw-bold display-4">
                REACH US FOR ANY QUERY
              </motion.h1>
              <div className="bg-warning" style={{ width: "120px", height: "6px" }}></div>
              <p className="fs-3 fst-italic text-light mt-4">
                construction, the techniques and industry involved in the assembly and erection of structures, primaril…
                Construction is an ancient human activity.
              </p>
            </motion.div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              variants={slideUpVariants}
              className="col-lg-5 d-flex flex-column justify-content-center"
            >
              <motion.form onSubmit={onSubmit}
                initial="hidden"
                whileInView="visible"
                variants={zoomInVariants}
                className="d-flex flex-column gap-3 w-100"
              >
                <input type="text" name="name" placeholder="Enter Fullname" className="form-control border border-dark text-dark py-2 px-3" />
                <input type="email" name="email" placeholder="Enter Email" className="form-control border border-dark text-dark py-2 px-3" />
                <input type="number" name="phone" placeholder="Enter Phone Number" className="form-control border border-dark text-dark py-2 px-3" />
                <textarea name="message" placeholder="Enter your message" rows="4" className="form-control border border-dark text-dark py-2 px-3"></textarea>

                <motion.button
                  variants={zoomInVariants}
                  className="btn btn-warning fw-bold py-3 w-100"
                  style={{ transition: "0.3s" }}
                  onMouseOver={(e) => {
                    e.target.style.backgroundColor = "black";
                    e.target.style.color = "white";
                  }}
                  onMouseOut={(e) => {
                    e.target.style.backgroundColor = "#ffc107";
                    e.target.style.color = "black";
                  }}
                >
                  {result ? result : "SUBMIT"}
                </motion.button>
              </motion.form>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
