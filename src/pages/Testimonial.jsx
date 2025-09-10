import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Link } from 'react-router-dom';
import '../assets/css/style.css';
import testimonial1 from '../assets/img/testimonial-1.jpg';
import testimonial2 from '../assets/img/testimonial-2.jpg';
import testimonial3 from '../assets/img/testimonial-3.jpg';
import Navbar from '../pages/Navbar';
const images = [testimonial1, testimonial2, testimonial3];

const Testimonial = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <>
      <Navbar />

      {/* Header Start */}
      <div className='container-fluid bg-breadcrumb'>
        <div className='container text-center py-5' style={{ maxWidth: 900 }}>
          <h4 className='text-white display-4 mb-4' data-aos='fade-down'>
            Our Testimonial
          </h4>
          <ol
            className='breadcrumb d-flex justify-content-center mb-0'
            data-aos='fade-down'
            data-aos-delay='300'
          >
            <li className='breadcrumb-item'>
              <Link to='/'>Home</Link>
            </li>
            <li className='breadcrumb-item active text-primary'>Testimonial</li>
          </ol>
        </div>
      </div>
      {/* Header End */}

      {/* Testimonial Section */}
      <div
        className='container-fluid testimonial py-5'
        style={{ backgroundColor: '#f5f7fa' }}
      >
        <div className='container py-5'>
          <div
            className='text-center mx-auto pb-5'
            data-aos='fade-up'
            style={{ maxWidth: 800 }}
          >
            <h1 className='display-5 text-capitalize mb-3'>
              Our Clients<span className='text-primary'> Reviews</span>
            </h1>
            <p className='mb-0'>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit...
            </p>
          </div>
          <div className='row g-4 justify-content-center'>
            {[1, 2, 3].map((i, index) => (
              <div
                className='col-md-6 col-lg-4'
                key={i}
                data-aos='fade-up'
                data-aos-delay={`${index * 200}`}
              >
                <div className='testimonial-item'>
                  <div className='testimonial-quote'>
                    <i className='fa fa-quote-right fa-2x'></i>
                  </div>
                  <div className='testimonial-inner p-4 d-flex'>
                    <img src={images[i - 1]} className='img-fluid' alt='' />

                    <div className='ms-4'>
                      <h4>Person Name</h4>
                      <p>Profession</p>
                      <div className='d-flex text-primary'>
                        {[...Array(5)].map((_, j) => (
                          <i
                            key={j}
                            className={`fas fa-star ${
                              j < 5 - index ? '' : 'text-body'
                            }`}
                          ></i>
                        ))}
                      </div>
                    </div>
                  </div>
                  <div className='border-top rounded-bottom p-4'>
                    <p className='mb-0'>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Quam soluta neque ab repudiandae...
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Testimonial;
