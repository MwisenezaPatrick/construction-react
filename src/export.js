import building from "../src/assets/building.svg";
import construction from "../src/assets/construction.svg";
import design from "../src/assets/design.svg";
import document from "../src/assets/document.svg";
import paint from "../src/assets/paint.svg";
import support from "../src/assets/support.svg";

import { IoDocumentTextSharp } from "react-icons/io5";
import { MdOutlineDesignServices } from "react-icons/md";
import { FaRegBuilding } from "react-icons/fa";
import { FaSitemap } from "react-icons/fa";

import client1 from "../src/assets/client1.png";
import client2 from "../src/assets/client2.png";
import client3 from "../src/assets/client3.png";

export const allservices = [
  {
    icon: building,
    title: "BUILDING RENOVATION",
    about:
      "Transform your existing space with our expert renovation services. We specialize in modernizing homes and commercial buildings while preserving structural integrity and enhancing functionality.",
  },
  {
    icon: construction,
    title: "CONSTRUCTION SERVICES",
    about:
      "From foundation to finish, our comprehensive construction services cover residential and commercial projects. We deliver high-quality builds that meet your specifications and exceed expectations.",
  },
  {
    icon: design,
    title: "DESIGN & PLANNING",
    about:
      "Our architectural design and planning services bring your vision to life. We create detailed blueprints, 3D models, and construction plans that ensure successful project execution.",
  },
  {
    icon: document,
    title: "DOCUMENTATION",
    about:
      "Complete project documentation including permits, contracts, and compliance paperwork. We handle all regulatory requirements to keep your project on track and legally compliant.",
  },
  {
    icon: paint,
    title: "INTERIOR DESIGN",
    about:
      "Create stunning interiors with our design expertise. From color schemes to furniture layout, we provide comprehensive interior design services for homes and businesses.",
  },
  {
    icon: support,
    title: "CUSTOMER SUPPORT",
    about:
      "Dedicated customer support throughout your project journey. Our team is available to answer questions, provide updates, and ensure your complete satisfaction with our services.",
  },
];

export const planning = [
  {
    icon: IoDocumentTextSharp,
    title: "planning",
    about:
      "Initial project assessment and detailed planning phase. We evaluate your requirements, create timelines, and develop comprehensive project strategies to ensure successful execution.",
  },
  {
    icon: MdOutlineDesignServices,
    title: "design",
    about:
      "Creative design phase where our architects and designers transform concepts into detailed plans. We incorporate your vision with practical construction considerations.",
  },
  {
    icon: FaRegBuilding,
    title: "building",
    about:
      "Construction execution phase with skilled craftsmen and modern equipment. We maintain strict quality control and safety standards throughout the building process.",
  },
  {
    icon: FaSitemap,
    title: "finish",
    about:
      "Final touches and project completion. We handle finishing work, inspections, and final walkthroughs to deliver a completed project that meets all specifications.",
  },
];

export const clients = [
  {
    image: client1,
    name: "Alex Parker",
    about:
      "Outstanding construction work! The team delivered our commercial building on time and within budget. Their attention to detail and professional approach made the entire process smooth and stress-free.",
    post: "Constructor",
  },
  {
    image: client2,
    name: "Drew James",
    about:
      "As an architect, I appreciate their commitment to quality and design integrity. They brought our vision to life perfectly, maintaining the highest standards throughout the construction process.",
    post: "Architect",
  },
  {
    image: client3,
    name: "Sam Peterson",
    about:
      "Excellent renovation services! They transformed our outdated office space into a modern, functional workspace. The craftsmanship is top-notch and the communication was excellent throughout.",
    post: "Builder",
  },
];
