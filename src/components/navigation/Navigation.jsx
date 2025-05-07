import Home from "..//..//pages/Home";
import Services from "..//..//pages/Services";
import CaseStudies from "..//..//pages/CaseStudies";
import About from "..//..//pages/About";
import Contact from "..//..//pages/Contact";
import "./navigation.css";

import {
  BrowserRouter as Router,
  Routes, Route, Link
} from 'react-router-dom'


const Navigation = () => {
  return (
    <nav>
      <Router>
        <div id ="links">
          <Link to="/">Home</Link>
          <Link to="/services">Services</Link>
          <Link to="/case-studies">Case Studies</Link>
          <Link to="/about">About</Link>
          <Link to="/contact">Contact</Link>
        </div>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<Services />} />
          <Route path="/case-studies" element={<CaseStudies />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />


        </Routes>
      </Router>
    </nav>

  );
};

export default Navigation;
