import  { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import "../assets/css/style.css";
import Navbar from "../pages/Navbar"
import banner1 from "../assets/img/banner-1.jpg";
import OwlCarousel from "react-owl-carousel";
import blog1 from "../assets/img/blog-1.jpg";
import blog2 from "../assets/img/blog-2.jpg";
import blog3 from "../assets/img/blog-3.jpg";


const Blog = () => { 
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);



 const blogPosts = [
  { img: blog1, date: "30 Dec 2025", title: "Rental Cars how to check driving fines?" },
  { img: blog2, date: "25 Dec 2025", title: "Rental cost of sport and other cars" },
  { img: blog3, date: "27 Dec 2025", title: "Document required for car rental" }
];


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

       <Navbar />



      {/* Header Start */}
      <div className="container-fluid bg-breadcrumb">
        <div className="container text-center py-5" style={{ maxWidth: "900px" }}>
          <h4 className="text-white display-4 mb-4" data-aos="fade-down">Our Blog & News</h4>
          <ol className="breadcrumb d-flex justify-content-center mb-0" data-aos="fade-down" data-aos-delay="300">
            <li className="breadcrumb-item"><a href="/">Home</a></li>
   
            <li className="breadcrumb-item active text-primary">Blog & News</li>
          </ol>
        </div>
      </div>
      {/* Header End */}

      {/* Blog Start */}
      <div className="container-fluid blog py-5">
        <div className="container py-5">
          <div className="text-center mx-auto pb-5" data-aos="fade-up" style={{ maxWidth: "800px" }}>
            <h1 className="display-5 text-capitalize mb-3">Car<span className="text-primary"> Blog & News</span></h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ut amet nemo expedita asperiores...</p>
          </div>
          <OwlCarousel
            className="owl-theme"
            loop
            margin={30}
            nav
            dots={false}
            autoplay
            autoplayTimeout={4000}
            responsive={{
              0: { items: 1 },
              576: { items: 1 },
              768: { items: 2 },
              992: { items: 3 },
            }}
          >
            {blogPosts.map((item, i) => (
              <div className="item" key={i}>
                <div className="blog-item">
                  <div className="blog-img">
                   <img src={item.img} className="img-fluid rounded-top w-100" alt="Blog" />

                  </div>
                  <div className="blog-content rounded-bottom p-4">
                    <div className="blog-date">{item.date}</div>
                    <div className="blog-comment my-3">
                      <div className="small"><i className="fa fa-user text-primary"></i><span className="ms-2">Martin.C</span></div>
                      <div className="small"><i className="fa fa-comment-alt text-primary"></i><span className="ms-2">6 Comments</span></div>
                    </div>
                    <a href="#" className="h4 d-block mb-3">{item.title}</a>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                    <a href="#">Read More <i className="fa fa-arrow-right"></i></a>
                  </div>
                </div>
              </div>
            ))}
          </OwlCarousel>
        </div>
      </div>
      {/* Blog End */}


      {/* Fact Counter Start */}
<div className="container-fluid counter py-5">
  <div className="container py-5">
    <div className="row g-5">
      <div className="col-md-6 col-lg-6 col-xl-3" data-aos="fade-up" data-aos-delay="100">
        <div className="counter-item text-center">
          <div className="counter-item-icon mx-auto">
            <i className="fas fa-thumbs-up fa-2x"></i>
          </div>
          <div className="counter-counting my-3">
            <span className="text-white fs-2 fw-bold">829</span>
            <span className="h1 fw-bold text-white">+</span>
          </div>
          <h4 className="text-white mb-0">Happy Clients</h4>
        </div>
      </div>
      <div className="col-md-6 col-lg-6 col-xl-3" data-aos="fade-up" data-aos-delay="300">
        <div className="counter-item text-center">
          <div className="counter-item-icon mx-auto">
            <i className="fas fa-car-alt fa-2x"></i>
          </div>
          <div className="counter-counting my-3">
            <span className="text-white fs-2 fw-bold">56</span>
            <span className="h1 fw-bold text-white">+</span>
          </div>
          <h4 className="text-white mb-0">Number of Cars</h4>
        </div>
      </div>
      <div className="col-md-6 col-lg-6 col-xl-3" data-aos="fade-up" data-aos-delay="500">
        <div className="counter-item text-center">
          <div className="counter-item-icon mx-auto">
            <i className="fas fa-building fa-2x"></i>
          </div>
          <div className="counter-counting my-3">
            <span className="text-white fs-2 fw-bold">127</span>
            <span className="h1 fw-bold text-white">+</span>
          </div>
          <h4 className="text-white mb-0">Car Center</h4>
        </div>
      </div>
      <div className="col-md-6 col-lg-6 col-xl-3" data-aos="fade-up" data-aos-delay="700">
        <div className="counter-item text-center">
          <div className="counter-item-icon mx-auto">
            <i className="fas fa-clock fa-2x"></i>
          </div>
          <div className="counter-counting my-3">
            <span className="text-white fs-2 fw-bold">589</span>
            <span className="h1 fw-bold text-white">+</span>
          </div>
          <h4 className="text-white mb-0">Total Kilometers</h4>
        </div>
      </div>
    </div>
  </div>
</div>
{/* Fact Counter End */}

{/* Banner Start */}
<div className="container-fluid banner py-5" data-aos="zoom-in-down">
  <div className="container py-5">
    <div className="banner-item rounded position-relative overflow-hidden">
<img src={banner1} className="img-fluid rounded w-100" alt="Banner" />
      <div className="banner-content position-absolute top-50 start-50 translate-middle text-center">
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
{/* Banner End */}


      {/* Footer Start */}
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
      {/* Footer End */}

    
    </>
  );
};

export default Blog;
