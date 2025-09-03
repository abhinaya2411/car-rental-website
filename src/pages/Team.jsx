import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { Link } from "react-router-dom";
import "../assets/css/style.css";
import team1 from "../assets/img/team-1.jpg";
import team2 from "../assets/img/team-2.jpg";
import team3 from "../assets/img/team-3.jpg";
import team4 from "../assets/img/team-4.jpg";
import Navbar from "../pages/Navbar"
const teamImages = [team1, team2, team3, team4];

const Team = () => {
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

      <Navbar />

      {/* Header Start */}
      <div className="container-fluid bg-breadcrumb">
        <div className="container text-center py-5" style={{ maxWidth: "900px" }}>
          <h4 className="text-white display-4 mb-4" data-aos="fade-down">
            Our Team
          </h4>
          <ol className="breadcrumb d-flex justify-content-center mb-0" data-aos="fade-down" data-aos-delay="200">
            <li className="breadcrumb-item">
              <Link to="/">Home</Link>
            </li>
           
            <li className="breadcrumb-item active text-primary">Team</li>
          </ol>
        </div>
      </div>
      {/* Header End */}

      {/* Team Section Start */}
      <div className="container-fluid team py-5">
        <div className="container py-5">
          <div className="text-center mx-auto pb-5" data-aos="fade-up" style={{ maxWidth: "800px" }}>
            <h1 className="display-5 text-capitalize mb-3">
              Customer<span className="text-primary"> Support</span> Center
            </h1>
            <p className="mb-0">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ut amet nemo expedita asperiores commodi
              accusantium at cum harum, excepturi.
            </p>
          </div>

          <div className="row g-4">
            {[1, 2, 3, 4].map((n, i) => (
              <div className="col-md-6 col-lg-6 col-xl-3" data-aos="fade-up" data-aos-delay={`${i * 200}`}>
                <div className="team-item p-4 pt-0">
                  <div className="team-img">
                  <img
  src={teamImages[i]}
  className="img-fluid rounded w-100"
  alt={`Team ${n}`}
/>

                  </div>
                  <div className="team-content pt-4">
                    <h4>MARTIN DOE</h4>
                    <p>Profession</p>
                    <div className="team-icon d-flex justify-content-center">
                      <Link className="btn btn-square btn-light rounded-circle mx-1" to="">
                        <i className="fab fa-facebook-f"></i>
                      </Link>
                      <Link className="btn btn-square btn-light rounded-circle mx-1" to="">
                        <i className="fab fa-twitter"></i>
                      </Link>
                      <Link className="btn btn-square btn-light rounded-circle mx-1" to="">
                        <i className="fab fa-instagram"></i>
                      </Link>
                      <Link className="btn btn-square btn-light rounded-circle mx-1" to="">
                        <i className="fab fa-linkedin-in"></i>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      {/* Team Section End */}

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

export default Team;
