// src/pages/Service.jsx
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import CountUp from "react-countup";
import { Link } from "react-router-dom";
import "../assets/css/style.css";
import "swiper/css";
import "swiper/css/navigation";
import t1 from "../assets/img/testimonial-1.jpg";
import t2 from "../assets/img/testimonial-2.jpg";
import t3 from "../assets/img/testimonial-3.jpg";
import Navbar from "../pages/Navbar"
const images = [t1, t2, t3];

const Service = () => {
  
  useEffect(() => {
    AOS.init({ duration: 1000 }); // This makes AOS “used”
  }, []);


  return (
    <>
  

   <Navbar />




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
                    <img src={images[index]} className="img-fluid" alt={`Testimonial ${index + 1}`} />

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
 
    </>
  );
};

export default Service;
