// Portfolio.js

import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  NavLink,
} from "react-router-dom";
import "./Portfolio.css";
import Home from "./Home/Home";
import Projects from "./Projects/Projects";
import Contact from "./Contact/Contact";

const Footer = () => (
  <footer style={footerStyle}>
    <p>
      &copy; {new Date().getFullYear()} Ameer's portfolio. All Rights Reserved.
    </p>
  </footer>
);

const footerStyle = {
  backgroundColor: "#333",
  color: "#fff",
  textAlign: "center",
  padding: "10px 0",
  position: "fixed",
  bottom: 0,
  width: "100%",
};

const Portfolio = () => (
  <Router>
    <div className="app-container">
      <nav>
        <ul>
          <li>
            {/* <Link to="/">Home</Link> */}
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to="/projects">Projects</NavLink>
          </li>
          <li>
            <NavLink to="/contact">Contact</NavLink>
          </li>
        </ul>
      </nav>

      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </div>
    <Footer />
  </Router>
);

export default Portfolio;
