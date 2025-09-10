import {  useEffect } from "react";
import { Link } from 'react-router-dom';
import Navbar from "../pages/Navbar"
import team1 from '../assets/img/team-1.jpg';
import team2 from '../assets/img/team-2.jpg';
import team3 from '../assets/img/team-3.jpg';
import team4 from '../assets/img/team-4.jpg';
import aboutIcon1 from "../assets/img/about-icon-1.png";
import attachmentImg from "../assets/img/attachment-img.jpg";
import aboutIcon2 from "../assets/img/about-icon-2.png";
import aboutImg from "../assets/img/about-img.jpg";
import bannerImg from '../assets/img/banner-1.jpg';
import featuresImg from "../assets/img/features-img.png";
import aboutImg1 from "../assets/img/about-img-1.jpg";
import '../assets/css/style.css';

import AOS from 'aos';
import 'aos/dist/aos.css';


const About = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 }); // This makes AOS “used”
  }, []);

  return (
    <>

       <Navbar />
      
    {/* Header Start */}
<div className="container-fluid bg-breadcrumb">
  <div className="container text-center py-5" style={{ maxWidth: "900px" }}>
    <h4 className="text-white display-4 mb-4" data-aos="fade-down">
      About Us
    </h4>
    <ol
      className="breadcrumb d-flex justify-content-center mb-0"
      data-aos="fade-down"
      data-aos-delay="300"
    >
      <li className="breadcrumb-item"><Link to="/">Home</Link></li>
      <li className="breadcrumb-item active text-primary">About</li>
    </ol>
  </div>
</div>
{/* Header End */}



      {/* About Start */}
<div className="container-fluid overflow-hidden about py-5">
  <div className="container py-5">
    <div className="row g-5">
      {/* Left Column */}
      <div className="col-xl-6 wow fadeInLeft" data-wow-delay="0.2s">
        <div className="about-item">
          <div className="pb-5">
            <h1 className="display-5 text-capitalize">
              Car <span className="text-primary">About</span>
            </h1>
            <p className="mb-0">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ut amet nemo expedita asperiores commodi accusantium at cum harum, excepturi, quia tempora cupiditate! Adipisci facilis modi quisquam quia distinctio,
            </p>
          </div>

          <div className="row g-4">
            <div className="col-lg-6">
              <div className="about-item-inner border p-4">
                <div className="about-icon mb-4">
                 <img
  src={aboutIcon1}
  className="img-fluid w-50 h-50"
  alt="Vision Icon"
/>
                </div>
                <h5 className="mb-3">Our Vision</h5>
                <p className="mb-0">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="about-item-inner border p-4">
                <div className="about-icon mb-4">
                 <img
  src={aboutIcon2}
  className="img-fluid w-50 h-50"
  alt="Mission Icon"
/>

                </div>
                <h5 className="mb-3">Our Mission</h5>
                <p className="mb-0">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
              </div>
            </div>
          </div>

          <p className="text-item my-4">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Beatae, aliquam ipsum. Sed suscipit dolorem libero sequi aut natus debitis reprehenderit facilis quaerat similique, est at in eum. Quo, obcaecati in!
          </p>

          <div className="row g-4">
            <div className="col-lg-6">
              <div className="text-center rounded bg-secondary p-4">
                <h1 className="display-6 text-white">17</h1>
                <h5 className="text-light mb-0">Years Of Experience</h5>
              </div>
            </div>

            <div className="col-lg-6">
              <div className="rounded">
                <p className="mb-2">
                  <i className="fa fa-check-circle text-primary me-1"></i> Morbi tristique senectus
                </p>
                <p className="mb-2">
                  <i className="fa fa-check-circle text-primary me-1"></i> A scelerisque purus
                </p>
                <p className="mb-2">
                  <i className="fa fa-check-circle text-primary me-1"></i> Dictumst vestibulum
                </p>
                <p className="mb-0">
                  <i className="fa fa-check-circle text-primary me-1"></i> dio aenean sed adipiscing
                </p>
              </div>
            </div>

            <div className="col-lg-5 d-flex align-items-center">
              <a href="#" className="btn btn-primary rounded py-3 px-5">
                More About Us
              </a>
            </div>

            <div className="col-lg-7">
              <div className="d-flex align-items-center">
               <img
  src={attachmentImg}
  className="img-fluid rounded-circle border border-4 border-secondary"
  style={{ width: "100px", height: "100px" }}
  alt="Founder"
/>
                <div className="ms-4">
                  <h4>William Burgess</h4>
                  <p className="mb-0">Carveo Founder</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Right Column - Images */}
      <div className="col-xl-6 wow fadeInRight" data-wow-delay="0.2s">
        <div className="about-img">
          <div className="img-1">
           <img
  src={aboutImg}
  className="img-fluid rounded h-100 w-100"
  alt="About"
/>
          </div>
          <div className="img-2 mt-4">
            <img
  src={aboutImg1}
  className="img-fluid rounded w-100"
  alt="About Detail"
/>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
{/* About End */}

{/* Fact Counter Start */}
<div className="container-fluid counter py-5">
  <div className="container py-5">
    <div className="row g-5">
      {[
        { icon: 'fas fa-thumbs-up', count: 829, label: 'Happy Clients', delay: '0.1s' },
        { icon: 'fas fa-car-alt', count: 56, label: 'Number of Cars', delay: '0.3s' },
        { icon: 'fas fa-building', count: 127, label: 'Car Center', delay: '0.5s' },
        { icon: 'fas fa-clock', count: 589, label: 'Total kilometers', delay: '0.7s' },
      ].map((item, index) => (
        <div
          className="col-md-6 col-lg-6 col-xl-3 wow fadeInUp"
          data-wow-delay={item.delay}
          key={index}
        >
          <div className="counter-item text-center">
            <div className="counter-item-icon mx-auto">
              <i className={`${item.icon} fa-2x`}></i>
            </div>
            <div className="counter-counting my-3">
              <span className="text-white fs-2 fw-bold">{item.count}</span>
              <span className="h1 fw-bold text-white">+</span>
            </div>
            <h4 className="text-white mb-0">{item.label}</h4>
          </div>
        </div>
      ))}
    </div>
  </div>
</div>
{/* Fact Counter End */}

{/* Features Start */}
 <div className="container-fluid feature py-5 feature-section">
  <div className="container py-5">
    <div
      className="text-center mx-auto pb-5 wow fadeInUp"
      data-wow-delay="0.1s"
      style={{ maxWidth: '800px' }}
    >
      <h1 className="display-5 text-capitalize mb-3">
        Car <span className="text-primary">Features</span>
      </h1>
      <p className="mb-0">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ut amet nemo expedita asperiores
        commodi accusantium at cum harum, excepturi, quia tempora cupiditate! Adipisci facilis modi
        quisquam quia distinctio,
      </p>
    </div>
    <div className="row g-4 align-items-center">
      {/* Left Features */}
      <div className="col-xl-4">
        <div className="row gy-4 gx-0">
          <div className="col-12 wow fadeInUp" data-wow-delay="0.1s">
            <div className="feature-item">
              <div className="feature-icon">
                <span className="fa fa-trophy fa-2x"></span>
              </div>
              <div className="ms-4">
                <h5 className="mb-3">First Class services</h5>
                <p className="mb-0">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur, in illum
                  aperiam ullam magni eligendi?
                </p>
              </div>
            </div>
          </div>
          <div className="col-12 wow fadeInUp" data-wow-delay="0.3s">
            <div className="feature-item">
              <div className="feature-icon">
                <span className="fa fa-road fa-2x"></span>
              </div>
              <div className="ms-4">
                <h5 className="mb-3">24/7 road assistance</h5>
                <p className="mb-0">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur, in illum
                  aperiam ullam magni eligendi?
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Center Image */}
      <div className="col-lg-12 col-xl-4 wow fadeInUp" data-wow-delay="0.2s">
       <img
  src={featuresImg}
  className="img-fluid w-100"
  style={{ objectFit: 'cover' }}
  alt="Features"
/>
      </div>

      {/* Right Features */}
      <div className="col-xl-4">
        <div className="row gy-4 gx-0">
          <div className="col-12 wow fadeInUp" data-wow-delay="0.1s">
            <div className="feature-item justify-content-end">
              <div className="text-end me-4">
                <h5 className="mb-3">Quality at Minimum</h5>
                <p className="mb-0">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur, in illum
                  aperiam ullam magni eligendi?
                </p>
              </div>
              <div className="feature-icon">
                <span className="fa fa-tag fa-2x"></span>
              </div>
            </div>
          </div>
          <div className="col-12 wow fadeInUp" data-wow-delay="0.3s">
            <div className="feature-item justify-content-end">
              <div className="text-end me-4">
                <h5 className="mb-3">Free Pick-Up & Drop-Off</h5>
                <p className="mb-0">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur, in illum
                  aperiam ullam magni eligendi?
                </p>
              </div>
              <div className="feature-icon">
                <span className="fa fa-map-pin fa-2x"></span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
{/* Features End */}


 {/* Car Steps Start */}
      <div className="container-fluid steps py-5">
        <div className="container py-5">
          <div
            className="text-center mx-auto pb-5 wow fadeInUp"
            data-wow-delay="0.1s"
            style={{ maxWidth: '800px' }}
          >
            <h1 className="display-5 text-capitalize text-white mb-3">
              Cental<span className="text-primary"> Process</span>
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

      {/* Team Start */}
      <div className="container-fluid team py-5">
        <div className="container py-5">
          <div
            className="text-center mx-auto pb-5 wow fadeInUp"
            data-wow-delay="0.1s"
            style={{ maxWidth: '800px' }}
          >
            <h1 className="display-5 text-capitalize mb-3">
              Customer<span className="text-primary"> Support</span> Center
            </h1>
            <p className="mb-0">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ut amet nemo expedita asperiores commodi accusantium at cum harum, excepturi, quia tempora cupiditate!
            </p>
          </div>
          <div className="row g-4">
            {[team1, team2, team3, team4].map((img, i) => (
              <div
                key={i}
                className="col-md-6 col-lg-6 col-xl-3 wow fadeInUp"
                data-wow-delay={`${0.1 + i * 0.2}s`}
              >
                <div className="team-item p-4 pt-0">
                  <div className="team-img">
                    <img
                      src={img}
                      className="img-fluid rounded w-100"
                      alt={`Team member ${i + 1}`}
                    />
                  </div>
                  <div className="team-content pt-4">
                    <h4>MARTIN DOE</h4>
                    <p>Profession</p>
                    <div className="team-icon d-flex justify-content-center">
                      <a className="btn btn-square btn-light rounded-circle mx-1" href="#">
                        <i className="fab fa-facebook-f"></i>
                      </a>
                      <a className="btn btn-square btn-light rounded-circle mx-1" href="#">
                        <i className="fab fa-twitter"></i>
                      </a>
                      <a className="btn btn-square btn-light rounded-circle mx-1" href="#">
                        <i className="fab fa-instagram"></i>
                      </a>
                      <a className="btn btn-square btn-light rounded-circle mx-1" href="#">
                        <i className="fab fa-linkedin-in"></i>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      {/* Team End */}
       

       
      {/* Banner Section */}
      <div className="container-fluid banner pb-5 wow zoomInDown" data-wow-delay="0.1s">
        <div className="container pb-5">
          <div className="banner-item rounded">
            <img src={bannerImg} className="img-fluid rounded w-100" alt="Banner" />
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
 
    </>
  );
};

export default About;
