import  {useEffect } from "react";
import { Link } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
import "../assets/css/style.css"; // adjust path if needed

function Contact() {

  // Initialize AOS
  useEffect(() => {
    AOS.init({ duration: 1000 });
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
                  <i className="fas fa-map-marker-alt text-primary me-2"></i>
                  Find A Location
                </Link>
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
                <Link to="#" className="btn btn-light btn-sm-square rounded-circle me-3">
                  <i className="fab fa-facebook-f"></i>
                </Link>
                <Link to="#" className="btn btn-light btn-sm-square rounded-circle me-3">
                  <i className="fab fa-twitter"></i>
                </Link>
                <Link to="#" className="btn btn-light btn-sm-square rounded-circle me-3">
                  <i className="fab fa-instagram"></i>
                </Link>
                <Link to="#" className="btn btn-light btn-sm-square rounded-circle me-0">
                  <i className="fab fa-linkedin-in"></i>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Topbar End */}

      {/* Navbar Start */}
      <div className="container-fluid nav-bar sticky-top px-0 px-lg-4 py-2 py-lg-0">
        <div className="container">
          <nav className="navbar navbar-expand-lg navbar-light">
            <Link to="/" className="navbar-brand p-0">
             <h2 className="m-0 text-primary">
                        <i className="fa fa-car me-2"></i>CarRental
                      </h2>
            </Link>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
              <span className="fa fa-bars"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarCollapse">
              <div className="navbar-nav mx-auto py-0">
                <Link to="/" className="nav-item nav-link">Home</Link>
                <Link to="/about" className="nav-item nav-link">About</Link>
                <Link to="/service" className="nav-item nav-link">Service</Link>
                <Link to="/blog" className="nav-item nav-link">Blog</Link>

                <div className="nav-item dropdown">
                  <Link to="#" className="nav-link dropdown-toggle" data-bs-toggle="dropdown">Pages</Link>
                  <div className="dropdown-menu m-0">
                    <Link to="/feature" className="dropdown-item">Our Feature</Link>
                    <Link to="/cars" className="dropdown-item">Our Cars</Link>
                    <Link to="/team" className="dropdown-item">Our Team</Link>
                    <Link to="/testimonial" className="dropdown-item">Testimonial</Link>
                    
                  </div>
                </div>

                <Link to="/contact" className="nav-item nav-link active">Contact</Link>
              </div>
              <Link to="/login" className="btn btn-primary rounded-pill py-2 px-4">Login</Link>
            </div>
          </nav>
        </div>
      </div>
      {/* Navbar End */}

      {/* Header Start */}
      <div className="container-fluid bg-breadcrumb">
        <div className="container text-center py-5" style={{ maxWidth: "900px" }}>
          <h4 className="text-white display-4 mb-4" data-aos="fade-down" data-aos-delay="100">Contact Us</h4>
          <ol className="breadcrumb d-flex justify-content-center mb-0" data-aos="fade-down" data-aos-delay="300">
            <li className="breadcrumb-item"><Link to="/">Home</Link></li>
            <li className="breadcrumb-item active text-primary">Contact</li>
          </ol>
        </div>
      </div>
      {/* Header End */}

      {/* Contact Start */}
      <div className="container-fluid contact py-5">
        <div className="container py-5">
          <div className="text-center mx-auto pb-5" data-aos="fade-up" data-aos-delay="100" style={{ maxWidth: "800px" }}>
            <h1 className="display-5 text-capitalize text-primary mb-3">Contact Us</h1>

            {/* <p className="mb-0">
              The contact form is currently inactive. You can integrate it with a backend like PHP, Node.js, or use a form service.{" "}
              <a className="text-primary fw-bold" href="https://htmlcodex.com/contact-form" target="_blank" rel="noreferrer">
                Download Now
              </a>.
            </p> */}
          </div>

          <div className="row g-5">
            {/* Contact Info Boxes */}
            <div className="col-12" data-aos="fade-up" data-aos-delay="100">
              <div className="row g-5">
                {[
                  { icon: "fas fa-map-marker-alt", title: "Address", desc: "123 Street velachery, chennai" },
                  { icon: "fas fa-envelope", title: "Mail Us", desc: "info@example.com" },
                  { icon: "fa fa-phone-alt", title: "Telephone", desc: "(+91) 3456 7890" },
                  { icon: "fab fa-firefox-browser", title: "Yoursite@ex.com", desc: "(+91) 3456 7890" },
                ].map((item, i) => (
                  <div className="col-md-6 col-lg-6 col-xl-3" key={i} data-aos="fade-up" data-aos-delay={100 + i * 200}>
                    <div className="contact-add-item p-4">
                      <div className="contact-icon mb-4"><i className={`${item.icon} fa-2x`} /></div>
                      <div><h4>{item.title}</h4><p className="mb-0">{item.desc}</p></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Contact Form */}
            <div className="col-xl-6" data-aos="fade-up" data-aos-delay="100">
              <div className="bg-secondary p-5 rounded">
                <h4 className="text-primary mb-4">Send Your Message</h4>
                <form>
                  <div className="row g-4">
                    {[
                      { label: "Your Name", id: "name", type: "text" },
                      { label: "Your Email", id: "email", type: "email" },
                      { label: "Your Phone", id: "phone", type: "tel" },
                      { label: "Your Project", id: "project", type: "text" },
                      { label: "Subject", id: "subject", type: "text", full: true },
                    ].map((input, i) => (
                      <div className={`col-lg-12 col-xl-${input.full ? "12" : "6"}`} key={i}>
                        <div className="form-floating">
                          <input type={input.type} className="form-control" id={input.id} placeholder={input.label} />
                          <label htmlFor={input.id}>{input.label}</label>
                        </div>
                      </div>
                    ))}
                    <div className="col-12">
                      <div className="form-floating">
                        <textarea className="form-control" placeholder="Leave a message here" id="message" style={{ height: "160px" }}></textarea>
                        <label htmlFor="message">Message</label>
                      </div>
                    </div>
                    <div className="col-12">
                      <button className="btn btn-light w-100 py-3" type="submit">Send Message</button>
                    </div>
                  </div>
                </form>
              </div>
            </div>

            {/* Social Icons Vertical */}
            <div className="col-12 col-xl-1 d-flex flex-xl-column align-items-center justify-content-center" data-aos="fade-up" data-aos-delay="300">
              {["facebook-f", "twitter", "instagram", "linkedin-in"].map((icon, i) => (
                <a key={i} className="btn btn-xl-square btn-light rounded-circle mb-0 mb-xl-4 me-4 me-xl-0" href="#">
                  <i className={`fab fa-${icon}`}></i>
                </a>
              ))}
            </div>

            {/* Branch Addresses */}
            <div className="col-12 col-xl-5" data-aos="fade-up" data-aos-delay="100">
              <div className="p-5 bg-light rounded">
                {[1, 2, 3].map((num, i) => (
                  <div className="bg-white rounded p-4 mb-4" key={i}>
                    <h4 className="mb-3">Our Branch 0{num}</h4>
                    <div className="d-flex align-items-center mb-3">
                      <p className="mb-0 text-dark me-2">Address:</p>
                      <i className="fas fa-map-marker-alt text-primary me-2"></i>
                      <p className="mb-0">123 Street velachery, chennai</p>
                    </div>
                    <div className="d-flex align-items-center">
                      <p className="mb-0 text-dark me-2">Telephone:</p>
                      <i className="fa fa-phone-alt text-primary me-2"></i>
                      <p className="mb-0">(+91) 3456 7890</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Map Embed */}
            <div className="col-12" data-aos="fade-up" data-aos-delay="100">
              <div className="rounded">
               <iframe
  className="rounded w-100"
  style={{ height: "400px" }}
  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3890.0712608478393!2d80.21738017484414!3d13.063174212595698!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a525d6d0c185e67%3A0xf8122a6b6acbd3f4!2sLogin360%20-%20Software%20Training%20Institute%20in%20Velachery%2C%20Chennai!5e0!3m2!1sen!2sin!4v1694265588983!5m2!1sen!2sin"
  loading="lazy"
  referrerPolicy="no-referrer-when-downgrade"
  title="Map - Login360 Velachery Chennai"
  allowFullScreen
></iframe>

              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Contact End */}


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
}

export default Contact;
