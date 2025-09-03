import {  useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "../assets/css/style.css";
import { Link } from "react-router-dom";
import CountUp from "react-countup";
import banner1 from "../assets/img/banner-1.jpg";
import featuresImg from "../assets/img/features-img.png";
import Navbar from "../pages/Navbar"


const Feature = () => {
  
  // Initialize AOS
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  

  return (
    <>
      {/* Topbar */}
      <div className="container-fluid topbar bg-secondary d-none d-xl-block w-100">
        <div className="container">
          <div className="row gx-0 align-items-center" style={{ height: "45px" }}>
            <div className="col-lg-6 text-center text-lg-start mb-lg-0">
              <div className="d-flex flex-wrap">
                <a href="#" className="text-muted me-4"><i className="fas fa-map-marker-alt text-primary me-2"></i>Find A Location</a>
                <a href="tel:+01234567890" className="text-muted me-4"><i className="fas fa-phone-alt text-primary me-2"></i>+01234567890</a>
                <a href="mailto:example@gmail.com" className="text-muted me-0"><i className="fas fa-envelope text-primary me-2"></i>Example@gmail.com</a>
              </div>
            </div>
            <div className="col-lg-6 text-center text-lg-end">
              <div className="d-flex align-items-center justify-content-end">
                <a href="#" className="btn btn-light btn-sm-square rounded-circle me-3"><i className="fab fa-facebook-f"></i></a>
                <a href="#" className="btn btn-light btn-sm-square rounded-circle me-3"><i className="fab fa-twitter"></i></a>
                <a href="#" className="btn btn-light btn-sm-square rounded-circle me-3"><i className="fab fa-instagram"></i></a>
                <a href="#" className="btn btn-light btn-sm-square rounded-circle me-0"><i className="fab fa-linkedin-in"></i></a>
              </div>
            </div>
          </div>
        </div>
      </div>

     <Navbar />

      {/* Header */}
      <div className="container-fluid bg-breadcrumb">
        <div className="container text-center py-5" style={{ maxWidth: "900px" }}>
          <h4 className="text-white display-4 mb-4" data-aos="fade-down">Our Features</h4>
          <ol className="breadcrumb d-flex justify-content-center mb-0" data-aos="fade-down" data-aos-delay="300">
            <li className="breadcrumb-item"><Link to="/">Home</Link></li>
            <li className="breadcrumb-item active text-primary">Feature</li>
          </ol>
        </div>
      </div>

      {/* Feature Section */}
      <div className="container-fluid feature py-5 feature-section">
        <div className="container py-5">
          <div className="text-center mx-auto pb-5" data-aos="fade-up" style={{ maxWidth: "800px" }}>
            <h1 className="display-5 text-capitalize mb-3">Car <span className="text-primary">Features</span></h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ut amet nemo expedita asperiores...</p>
          </div>
          <div className="row g-4 align-items-center">
            {/* Left */}
            <div className="col-xl-4">
              <div className="row gy-4 gx-0">
                <div className="col-12" data-aos="fade-up" data-aos-delay="100">
                  <div className="feature-item">
                    <div className="feature-icon"><span className="fa fa-trophy fa-2x"></span></div>
                    <div className="ms-4">
                      <h5 className="mb-3">First Class Services</h5>
                      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit...</p>
                    </div>
                  </div>
                </div>
                <div className="col-12" data-aos="fade-up" data-aos-delay="300">
                  <div className="feature-item">
                    <div className="feature-icon"><span className="fa fa-road fa-2x"></span></div>
                    <div className="ms-4">
                      <h5 className="mb-3">24/7 Road Assistance</h5>
                      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit...</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Center Image */}
            <div className="col-lg-12 col-xl-4" data-aos="fade-up" data-aos-delay="200">
             <img src={featuresImg} className="img-fluid w-100" alt="Feature" />
            </div>

            {/* Right */}
            <div className="col-xl-4">
              <div className="row gy-4 gx-0">
                <div className="col-12" data-aos="fade-up" data-aos-delay="100">
                  <div className="feature-item justify-content-end">
                    <div className="text-end me-4">
                      <h5 className="mb-3">Quality at Minimum</h5>
                      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit...</p>
                    </div>
                    <div className="feature-icon"><span className="fa fa-tag fa-2x"></span></div>
                  </div>
                </div>
                <div className="col-12" data-aos="fade-up" data-aos-delay="300">
                  <div className="feature-item justify-content-end">
                    <div className="text-end me-4">
                      <h5 className="mb-3">Free Pick-Up & Drop-Off</h5>
                      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit...</p>
                    </div>
                    <div className="feature-icon"><span className="fa fa-map-pin fa-2x"></span></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Fact Counter */}
      <div className="container-fluid counter py-5">
        <div className="container py-5">
          <div className="row g-5">
            {[
              { icon: "fas fa-thumbs-up", label: "Happy Clients", count: 829 },
              { icon: "fas fa-car-alt", label: "Number of Cars", count: 56 },
              { icon: "fas fa-building", label: "Car Center", count: 127 },
              { icon: "fas fa-clock", label: "Total Kilometers", count: 589 },
            ].map((item, index) => (
              <div className="col-md-6 col-lg-6 col-xl-3" data-aos="fade-up" data-aos-delay={index * 200} key={index}>
                <div className="counter-item text-center">
                  <div className="counter-item-icon mx-auto"><i className={`${item.icon} fa-2x`}></i></div>
                  <div className="counter-counting my-3">
                    <span className="text-white fs-2 fw-bold"><CountUp end={item.count} duration={2} /></span>
                    <span className="h1 fw-bold text-white">+</span>
                  </div>
                  <h4 className="text-white mb-0">{item.label}</h4>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Banner */}
      <div className="container-fluid banner py-5" data-aos="zoom-in">
        <div className="container py-5">
          <div className="banner-item rounded">
     
           <img src={banner1} className="img-fluid rounded w-100" alt="Banner" />
            <div className="banner-content">
              <h2 className="text-primary">Rent Your Car</h2>
              <h1 className="text-white">Interested in Renting?</h1>
              <p className="text-white">Don't hesitate and send us a message.</p>
              <div className="banner-btn">
                <a href="#" className="btn btn-secondary rounded-pill py-3 px-4 px-md-5 me-2">WhatsApp</a>
                <a href="#" className="btn btn-primary rounded-pill py-3 px-4 px-md-5 ms-2">Contact Us</a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="container-fluid footer bg-dark text-white py-5" data-aos="fade-up">
        <div className="container py-5">
          <div className="row g-5">
            <div className="col-lg-3">
              <h4>About Us</h4>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit...</p>
              <input className="form-control rounded-pill mb-2" type="text" placeholder="Enter email" />
              <button className="btn btn-secondary rounded-pill">Subscribe</button>
            </div>
            <div className="col-lg-3">
              <h4>Quick Links</h4>
              <ul className="list-unstyled">
                <li><a href="#">About</a></li>
                <li><a href="#">Cars</a></li>
                <li><a href="#">Car Types</a></li>
                <li><a href="#">Team</a></li>
                <li><a href="#">Contact</a></li>
              </ul>
            </div>
            <div className="col-lg-3">
              <h4>Business Hours</h4>
              <p>Mon - Fri: 9am - 7pm</p>
              <p>Sat: 10am - 5pm</p>
              <p>Sun: Closed</p>
            </div>
            <div className="col-lg-3">
              <h4>Contact Info</h4>
              <p><i className="fa fa-map-marker-alt me-2"></i> 123 Street, City</p>
              <p><i className="fa fa-envelope me-2"></i> info@example.com</p>
              <p><i className="fa fa-phone me-2"></i> +012 345 6789</p>
            </div>
          </div>
        </div>
      </footer>

   
    </>
  );
};

export default Feature;
