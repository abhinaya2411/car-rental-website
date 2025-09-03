import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { Link } from "react-router-dom";
import "../assets/css/style.css";
import testimonial1 from "../assets/img/testimonial-1.jpg";
import testimonial2 from "../assets/img/testimonial-2.jpg";
import testimonial3 from "../assets/img/testimonial-3.jpg";
import Navbar from "../pages/Navbar"
const images = [testimonial1, testimonial2, testimonial3];

const Testimonial = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <>
      {/* Topbar Start */}
      <div className="container-fluid topbar bg-secondary d-none d-xl-block w-100">
        <div className="container">
          <div className="row gx-0 align-items-center" style={{ height: "45px" }}>
            <div className="col-lg-6 text-center text-lg-start mb-lg-0">
              <div className="d-flex flex-wrap">
                <Link to="#" className="text-muted me-4">
                  <i className="fas fa-map-marker-alt text-primary me-2"></i>Find A Location
                </Link>
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
                <Link to="#" className="btn btn-light btn-sm-square rounded-circle me-3"><i className="fab fa-facebook-f"></i></Link>
                <Link to="#" className="btn btn-light btn-sm-square rounded-circle me-3"><i className="fab fa-twitter"></i></Link>
                <Link to="#" className="btn btn-light btn-sm-square rounded-circle me-3"><i className="fab fa-instagram"></i></Link>
                <Link to="#" className="btn btn-light btn-sm-square rounded-circle me-0"><i className="fab fa-linkedin-in"></i></Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Topbar End */}

       <Navbar />

      {/* Header Start */}
      <div className="container-fluid bg-breadcrumb">
        <div className="container text-center py-5" style={{ maxWidth: 900 }}>
          <h4 className="text-white display-4 mb-4" data-aos="fade-down">Our Testimonial</h4>
          <ol className="breadcrumb d-flex justify-content-center mb-0" data-aos="fade-down" data-aos-delay="300">
            <li className="breadcrumb-item"><Link to="/">Home</Link></li>
            <li className="breadcrumb-item active text-primary">Testimonial</li>
          </ol>
        </div>
      </div>
      {/* Header End */}

      {/* Testimonial Section */}
      <div className="container-fluid testimonial py-5" style={{ backgroundColor: "#f5f7fa" }}>
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
                   <img src={images[i - 1]} className="img-fluid" alt="" />

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
      </footer>

    </>
  );
};

export default Testimonial;
