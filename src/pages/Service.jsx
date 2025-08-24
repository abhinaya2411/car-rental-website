// src/pages/Service.jsx
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import CountUp from "react-countup";
import { Link } from "react-router-dom";
import "../assets/css/style.css";
import "swiper/css";
import "swiper/css/navigation";


const Service = () => {
  
  useEffect(() => {
    AOS.init({ duration: 1000 }); // This makes AOS “used”
  }, []);


  return (
    <>
      {/* Topbar Start */}
      <div className="container-fluid topbar bg-secondary d-none d-xl-block w-100">
        <div className="container">
          <div className="row gx-0 align-items-center" style={{ height: "45px" }}>
            <div className="col-lg-6 text-center text-lg-start mb-lg-0">
              <div className="d-flex flex-wrap">
                <a href="#" className="text-muted me-4">
                  <i className="fas fa-map-marker-alt text-primary me-2"></i>Find A Location
                </a>
                <a href="tel:+01234567890" className="text-muted me-4">
                  <i className="fas fa-phone-alt text-primary me-2"></i>+01234567890
                </a>
                <a href="mailto:example@gmail.com" className="text-muted me-0">
                  <i className="fas fa-envelope text-primary me-2"></i>Example@gmail.com
                </a>
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
      {/* Topbar End */}

   {/* Navbar & Hero Start */}
<div className="container-fluid nav-bar sticky-top px-0 px-lg-4 py-2 py-lg-0">
  <div className="container">
    <nav className="navbar navbar-expand-lg navbar-light">
      <a href="/" className="navbar-brand p-0">
       <h2 className="m-0 text-primary">  <i className="fa fa-car me-2"></i>CarRental </h2>
      </a>
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
          <a href="/" className="nav-item nav-link">Home</a>
          <a href="/about" className="nav-item nav-link">About</a>
          <a href="/service" className="nav-item nav-link active">Service</a>
          <a href="/blog" className="nav-item nav-link">Blog</a>
          <div className="nav-item dropdown">
            <a href="#" className="nav-link dropdown-toggle" data-bs-toggle="dropdown">Pages</a>
            <div className="dropdown-menu m-0">
              <a href="/feature" className="dropdown-item">Our Feature</a>
              <a href="/cars" className="dropdown-item">Our Cars</a>
              <a href="/team" className="dropdown-item">Our Team</a>
              <a href="/testimonial" className="dropdown-item">Testimonial</a>
            </div>
          </div>
          <a href="/contact" className="nav-item nav-link">Contact</a>
        </div>
        <a href="/login" className="btn btn-primary rounded-pill py-2 px-4">Login</a>
      </div>
    </nav>
  </div>
</div>
{/* Navbar & Hero End */}
<div className="container-fluid bg-breadcrumb">
  <div className="container text-center py-5" style={{ maxWidth: "900px" }}>
    <h4 className="text-white display-4 mb-4" data-aos="fade-down">
      Our Services
    </h4>
    <ol
      className="breadcrumb d-flex justify-content-center mb-0"
      data-aos="fade-down"
      data-aos-delay="300"
    >
      <li className="breadcrumb-item"><Link to="/">Home</Link></li>
      <li className="breadcrumb-item active text-primary">Services</li>
    </ol>
  </div>
</div>
{/* Header End */}

  {/* Services Start */}
      <div className="container-fluid service py-5">
        <div className="container py-5">
          <div className="text-center mx-auto pb-5" style={{ maxWidth: 800 }} data-aos="fadeInUp" data-aos-delay="100">
            <h1 className="display-5 text-capitalize mb-3">Car <span className="text-primary">Services</span></h1>
            <p className="mb-0">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ut amet nemo expedita asperiores commodi accusantium at cum harum, excepturi, quia tempora cupiditate! Adipisci facilis modi quisquam quia distinctio,</p>
          </div>

          <div className="row g-4">
            <div className="col-md-6 col-lg-4" data-aos="fadeInUp" data-aos-delay="100">
              <div className="service-item p-4">
                <div className="service-icon mb-4">
                  <i className="fa fa-phone-alt fa-2x"></i>
                </div>
                <h5 className="mb-3">Phone Reservation</h5>
                <p className="mb-0">Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit ipsam quasi quibusdam ipsa perferendis iusto?</p>
              </div>
            </div>

            <div className="col-md-6 col-lg-4" data-aos="fadeInUp" data-aos-delay="300">
              <div className="service-item p-4">
                <div className="service-icon mb-4"><i className="fa fa-money-bill-alt fa-2x"></i></div>
                <h5 className="mb-3">Special Rates</h5>
                <p className="mb-0">Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit ipsam quasi quibusdam ipsa perferendis iusto?</p>
              </div>
            </div>

            <div className="col-md-6 col-lg-4" data-aos="fadeInUp" data-aos-delay="500">
              <div className="service-item p-4">
                <div className="service-icon mb-4"><i className="fa fa-road fa-2x"></i></div>
                <h5 className="mb-3">One Way Rental</h5>
                <p className="mb-0">Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit ipsam quasi quibusdam ipsa perferendis iusto?</p>
              </div>
            </div>

            <div className="col-md-6 col-lg-4" data-aos="fadeInUp" data-aos-delay="100">
              <div className="service-item p-4">
                <div className="service-icon mb-4"><i className="fa fa-umbrella fa-2x"></i></div>
                <h5 className="mb-3">Life Insurance</h5>
                <p className="mb-0">Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit ipsam quasi quibusdam ipsa perferendis iusto?</p>
              </div>
            </div>

            <div className="col-md-6 col-lg-4" data-aos="fadeInUp" data-aos-delay="300">
              <div className="service-item p-4">
                <div className="service-icon mb-4"><i className="fa fa-building fa-2x"></i></div>
                <h5 className="mb-3">City to City</h5>
                <p className="mb-0">Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit ipsam quasi quibusdam ipsa perferendis iusto?</p>
              </div>
            </div>

            <div className="col-md-6 col-lg-4" data-aos="fadeInUp" data-aos-delay="500">
              <div className="service-item p-4">
                <div className="service-icon mb-4"><i className="fa fa-car-alt fa-2x"></i></div>
                <h5 className="mb-3">Free Rides</h5>
                <p className="mb-0">Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit ipsam quasi quibusdam ipsa perferendis iusto?</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Services End */}


       {/* Testimonial Section */}
      <div className="container-fluid testimonial py-5">
        <div className="container py-5">
          <div className="text-center mx-auto pb-5" data-aos="fade-up" style={{ maxWidth: 800 }}>
            <h1 className="display-5 text-capitalize mb-3">Our Clients<span className="text-primary"> Reviews</span></h1>
            <p className="mb-0">Lorem ipsum dolor sit amet, consectetur adipisicing elit...</p>
          </div>
          <div className="row g-4 justify-content-center">
            {[1, 2, 3].map((i, index) => (
              <div className="col-md-6 col-lg-4" key={i} data-aos="fade-up" data-aos-delay={`${index * 200}`}>
                <div className="testimonial-item">
                  <div className="testimonial-quote"><i className="fa fa-quote-right fa-2x"></i></div>
                  <div className="testimonial-inner p-4 d-flex">
                    <img src={`/src/assets/img/testimonial-${i}.jpg`} className="img-fluid" alt="" />
                    <div className="ms-4">
                      <h4>Person Name</h4>
                      <p>Profession</p>
                      <div className="d-flex text-primary">
                        {[...Array(5)].map((_, j) => (
                          <i
                            key={j}
                            className={`fas fa-star ${j < 5 - index ? '' : 'text-body'}`}
                          ></i>
                        ))}
                      </div>
                    </div>
                  </div>
                  <div className="border-top rounded-bottom p-4">
                    <p className="mb-0">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam soluta neque ab repudiandae...</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Banner */}
      <div className="container-fluid py-5 text-center bg-secondary text-light" data-aos="zoom-in">
        <h1>Book Your Car Today!</h1>
        <Link to="/cars" className="btn btn-primary mt-3">View Cars</Link>
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
              <div className="d-flex gap-2 mt-2">
                <a className="btn btn-secondary btn-sm" href="#"><i className="fab fa-facebook-f"></i></a>
                <a className="btn btn-secondary btn-sm" href="#"><i className="fab fa-twitter"></i></a>
                <a className="btn btn-secondary btn-sm" href="#"><i className="fab fa-instagram"></i></a>
              </div>
            </div>
          </div>
        </div>
      </footer> {/* Footer End */}
      
     
    </>
  );
};

export default Service;
