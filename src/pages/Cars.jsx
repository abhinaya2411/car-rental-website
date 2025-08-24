import  {useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { Link } from "react-router-dom";
import "../assets/css/style.css"; // Your custom CSS

// Importing images
import banner1 from "../assets/img/banner-1.jpg";
import car1 from "../assets/img/car-1.png";
import car2 from "../assets/img/car-2.png";
import car3 from "../assets/img/car-3.png";
import car4 from "../assets/img/car-4.png";

import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";

const Cars = () => {
  
  // Initialize AOS
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  const carImages = [car1, car2, car3, car4];

  return (
    <>
      {/* Topbar */}
      <div className="container-fluid topbar bg-secondary d-none d-xl-block w-100">
        <div className="container">
          <div className="row gx-0 align-items-center" style={{ height: "45px" }}>
            <div className="col-lg-6 text-center text-lg-start mb-lg-0">
              <div className="d-flex flex-wrap">
                <a href="#" className="text-muted me-4">
                  <i className="fas fa-map-marker-alt text-primary me-2"></i>
                  Find A Location
                </a>
                <a href="tel:+01234567890" className="text-muted me-4">
                  <i className="fas fa-phone-alt text-primary me-2"></i>
                  +01234567890
                </a>
                <a href="mailto:example@gmail.com" className="text-muted me-0">
                  <i className="fas fa-envelope text-primary me-2"></i>
                  Example@gmail.com
                </a>
              </div>
            </div>
            <div className="col-lg-6 text-center text-lg-end">
              <div className="d-flex align-items-center justify-content-end">
                <a href="#" className="btn btn-light btn-sm-square rounded-circle me-3">
                  <i className="fab fa-facebook-f"></i>
                </a>
                <a href="#" className="btn btn-light btn-sm-square rounded-circle me-3">
                  <i className="fab fa-twitter"></i>
                </a>
                <a href="#" className="btn btn-light btn-sm-square rounded-circle me-3">
                  <i className="fab fa-instagram"></i>
                </a>
                <a href="#" className="btn btn-light btn-sm-square rounded-circle me-0">
                  <i className="fab fa-linkedin-in"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Navbar */}
      <div className="container-fluid nav-bar sticky-top px-0 px-lg-4 py-2 py-lg-0">
        <div className="container">
          <nav className="navbar navbar-expand-lg navbar-light">
            <Link to="/" className="navbar-brand p-0">
             <h2 className="m-0 text-primary">
                        <i className="fa fa-car me-2"></i>CarRental
                      </h2>
            </Link>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarCollapse"
            >
              <span className="fa fa-bars"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarCollapse">
              <div className="navbar-nav mx-auto py-0">
                <Link to="/" className="nav-item nav-link">
                  Home
                </Link>
                <Link to="/about" className="nav-item nav-link">
                  About
                </Link>
                <a href="#" className="nav-item nav-link active">
                  Cars
                </a>
                <Link to="/contact" className="nav-item nav-link">
                  Contact
                </Link>
              </div>
              <a href="/login" className="btn btn-primary rounded-pill py-2 px-4">
                Login
              </a>
            </div>
          </nav>
        </div>
      </div>

      {/* Header */}
      <div className="container-fluid bg-breadcrumb">
        <div
          className="container text-center py-5"
          style={{ maxWidth: "900px" }}
        >
          <h4
            className="text-white display-4 mb-4"
            data-aos="fade-down"
          >
            Our Cars
          </h4>
          <ol
            className="breadcrumb d-flex justify-content-center mb-0"
            data-aos="fade-down"
            data-aos-delay="300"
          >
            <li className="breadcrumb-item">
              <Link to="/">Home</Link>
            </li>
            
            <li className="breadcrumb-item active text-primary">
              Categories
            </li>
          </ol>
        </div>
      </div>

      {/* Car Categories (Owl Carousel instead of jQuery) */}
      <section className="container-fluid categories py-5">
        <div className="container py-5">
          <div
            className="text-center mx-auto pb-5"
            data-aos="fade-up"
            style={{ maxWidth: "800px" }}
          >
            <h1 className="display-5 text-capitalize mb-3">
              Vehicle <span className="text-primary">Categories</span>
            </h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit...</p>
          </div>

          <OwlCarousel
            className="owl-theme"
            loop
            margin={20}
            nav
            responsive={{
              0: { items: 1 },
              768: { items: 2 },
              992: { items: 4 }
            }}
          >
            {carImages.map((img, index) => (
              <div className="categories-item p-4 bg-white shadow-sm h-100" key={index}>
                <img
                  src={img}
                  className="img-fluid w-100 rounded-top"
                  alt={`Car ${index + 1}`}
                />
                <div className="p-3 text-center">
                  <h5 className="mb-2">Car {index + 1}</h5>
                  <p className="mb-2">4 Seats · AT/MT · Petrol</p>
                  <h5 className="text-primary mb-3">$99.00 / Day</h5>
                  <a href="#" className="btn btn-primary rounded-pill w-100 py-2">
                    Book Now
                  </a>
                </div>
              </div>
            ))}
          </OwlCarousel>
        </div>
      </section>

   
    {/* Car Steps Start */}
      <div className="container-fluid steps py-5">
        <div className="container py-5">
          <div
            className="text-center mx-auto pb-5 wow fadeInUp"
            data-wow-delay="0.1s"
            style={{ maxWidth: '800px' }}
          >
            <h1 className="display-5 text-capitalize text-white mb-3">
              Car<span className="text-primary"> Process</span>
            </h1>
            <p className="mb-0 text-white">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ut amet nemo expedita asperiores commodi accusantium at cum harum, excepturi, quia tempora cupiditate!
            </p>
          </div>
          <div className="row g-4">
            <div className="col-lg-4 wow fadeInUp" data-wow-delay="0.1s">
              <div className="steps-item p-4 mb-4">
                <h4>Come In Contact</h4>
                <p className="mb-0">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad, dolorem!</p>
                <div className="setps-number">01.</div>
              </div>
            </div>
            <div className="col-lg-4 wow fadeInUp" data-wow-delay="0.3s">
              <div className="steps-item p-4 mb-4">
                <h4>Choose A Car</h4>
                <p className="mb-0">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad, dolorem!</p>
                <div className="setps-number">02.</div>
              </div>
            </div>
            <div className="col-lg-4 wow fadeInUp" data-wow-delay="0.5s">
              <div className="steps-item p-4 mb-4">
                <h4>Enjoy Driving</h4>
                <p className="mb-0">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad, dolorem!</p>
                <div className="setps-number">03.</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Car Steps End */}

      {/* Banner */}
      <section
        className="container-fluid banner py-5"
        data-aos="zoom-in-down"
      >
        <div className="container py-5">
          <div className="banner-item position-relative rounded overflow-hidden">
            <img
              src={banner1}
              alt="Banner"
              className="img-fluid rounded w-100"
            />
            <div className="banner-content position-absolute top-50 start-50 translate-middle text-center text-white p-3">
              <h2 className="text-primary">Rent Your Car</h2>
              <h1 className="text-white">Interested in Renting?</h1>
              <p className="text-white">
                Don't hesitate and send us a message.
              </p>
              <div className="banner-btn d-flex justify-content-center gap-3 mt-3">
                <a
                  href="#"
                  className="btn btn-secondary rounded-pill py-3 px-5"
                >
                  WhatsApp
                </a>
                <a
                  href="#"
                  className="btn btn-primary rounded-pill py-3 px-5"
                >
                  Contact Us
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer
        className="container-fluid footer bg-dark text-white py-5"
        data-aos="fade-up"
      >
        <div className="container py-5">
          <div className="row g-5">
            <div className="col-lg-3">
              <h4>About Us</h4>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit...</p>
              <input
                className="form-control rounded-pill mb-2"
                type="text"
                placeholder="Enter email"
              />
              <button className="btn btn-secondary rounded-pill">
                Subscribe
              </button>
            </div>
            <div className="col-lg-3">
              <h4>Quick Links</h4>
              <ul className="list-unstyled">
                <li>
                  <a href="#">About</a>
                </li>
                <li>
                  <a href="#">Cars</a>
                </li>
                <li>
                  <a href="#">Car Types</a>
                </li>
                <li>
                  <a href="#">Team</a>
                </li>
                <li>
                  <a href="#">Contact</a>
                </li>
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
              <p>
                <i className="fa fa-map-marker-alt me-2"></i> 123 Street, City
              </p>
              <p>
                <i className="fa fa-envelope me-2"></i> info@example.com
              </p>
              <p>
                <i className="fa fa-phone me-2"></i> +012 345 6789
              </p>
              <div className="d-flex gap-2 mt-2">
                <a className="btn btn-secondary btn-sm" href="#">
                  <i className="fab fa-facebook-f"></i>
                </a>
                <a className="btn btn-secondary btn-sm" href="#">
                  <i className="fab fa-twitter"></i>
                </a>
                <a className="btn btn-secondary btn-sm" href="#">
                  <i className="fab fa-instagram"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>

      
    </>
  );
};

export default Cars;
