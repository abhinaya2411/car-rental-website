import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import 'animate.css';
import About from './pages/About';
import Cars from './pages/Cars';
import Contact from './pages/Contact';
import Service from './pages/Service';
import Team from './pages/Team';
import Testimonial from './pages/Testimonial';
import Blog from './pages/Blog';
import Feature from "./pages/Feature";
import Home from "./pages/Home";
import Login from "./pages/Login"; 
import Register from "./pages/Register";
import BackToTop from "./pages/BackToTop";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/feature" element={<Feature />} />
        <Route path="/about" element={<About />} />
        <Route path="/cars" element={<Cars />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/service" element={<Service />} />
        <Route path="/team" element={<Team />} />
        <Route path="/testimonial" element={<Testimonial />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="*" element={<h1>404 - Page Not Found</h1>} />
      </Routes>
      <BackToTop />
    </Router>
  );
}

export default App;
