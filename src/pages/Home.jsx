import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Link } from 'react-router-dom';
import '../assets/css/style.css';
import Navbar from '../pages/Navbar';
import CountUp from 'react-countup';
import featureImg from '../assets/img/features-img.png';
import carousel1 from '../assets/img/carousel-1.jpg';
import carousel2 from '../assets/img/carousel-2.jpg';
import banner1 from '../assets/img/banner-1.jpg';
import aboutIcon1 from '../assets/img/about-icon-1.png';
import aboutIcon2 from '../assets/img/about-icon-2.png';
import aboutImg1 from '../assets/img/about-img.jpg';
import aboutImg2 from '../assets/img/about-img-1.jpg';
import attachmentImg from '../assets/img/attachment-img.jpg';

const Home = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <>
      <Navbar />

      {/* Hero Start */}
      <div className='container-fluid hero-bg p-0 mb-5'>
        <div className='container-fluid hero-header'>
          <div className='container py-5'>
            <div className='row g-5 align-items-center'>
              <div className='col-lg-6 text-center text-lg-start'>
                <h1
                  className='display-4 text-dark mb-3 animated slideInLeft'
                  data-aos='fade-right'
                >
                  Find Your Perfect Car Today!
                </h1>
                <p
                  className='text-dark mb-4 animated slideInLeft'
                  data-aos='fade-right'
                  data-aos-delay='200'
                >
                  Quality vehicles, affordable prices, and seamless rental
                  experience await you. Book now and hit the road with
                  confidence!
                </p>
                <Link
                  to='/cars'
                  className='btn btn-primary py-2 px-4 me-3 animated slideInLeft'
                  data-aos='fade-right'
                  data-aos-delay='400'
                >
                  Book A Car
                </Link>
                <Link
                  to='/about'
                  className='btn btn-outline-dark py-2 px-4 animated slideInLeft'
                  data-aos='fade-right'
                  data-aos-delay='600'
                >
                  Learn More
                </Link>
              </div>
              <div className='col-lg-6 text-center text-lg-end'>
                <img
                  className='img-fluid animated zoomIn'
                  src={carousel2}
                  alt='Car Rental Hero'
                  data-aos='zoom-in'
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Hero End */}

      {/* Car Reservation Start */}
      <div className='header-carousel'>
        <div
          id='carouselId'
          className='carousel slide'
          data-bs-ride='carousel'
          data-bs-interval='false'
        >
          <div className='carousel-inner' role='listbox'>
            <div className='carousel-item active'>
              <img src={carousel1} className='d-block w-100' alt='Slide 1' />

              <div className='carousel-caption'>
                <div className='container py-4'>
                  <div className='row g-5'>
                    <div
                      className='col-lg-6 fadeInLeft animated'
                      style={{ animationDelay: '1s' }}
                    >
                      <div className='bg-secondary rounded p-5'>
                        <h4 className='text-white mb-4'>
                          CONTINUE CAR RESERVATION
                        </h4>
                        <form>
                          <div className='row g-3'>
                            <div className='col-12'>
                              <select className='form-select'>
                                <option>Select Your Car type</option>
                                <option value='1'>VW Golf VII</option>
                                <option value='2'>Audi A1 S-Line</option>
                                <option value='3'>Toyota Camry</option>
                                <option value='4'>BMW 320 ModernLine</option>
                              </select>
                            </div>
                            <div className='col-12'>
                              <div className='input-group'>
                                <div className='d-flex align-items-center bg-light text-body rounded-start p-2'>
                                  <span className='fas fa-map-marker-alt'></span>
                                  <span className='ms-1'>Pick Up</span>
                                </div>
                                <input
                                  className='form-control'
                                  type='text'
                                  placeholder='Enter a City or Airport'
                                />
                              </div>
                            </div>
                            <div className='col-12'>
                              <a
                                href='#'
                                className='text-start text-white d-block mb-2'
                              >
                                Need a different drop-off location?
                              </a>
                              <div className='input-group'>
                                <div className='d-flex align-items-center bg-light text-body rounded-start p-2'>
                                  <span className='fas fa-map-marker-alt'></span>
                                  <span className='ms-1'>Drop off</span>
                                </div>
                                <input
                                  className='form-control'
                                  type='text'
                                  placeholder='Enter a City or Airport'
                                />
                              </div>
                            </div>
                            <div className='col-12'>
                              <div className='input-group'>
                                <div className='d-flex align-items-center bg-light text-body rounded-start p-2'>
                                  <span className='fas fa-calendar-alt'></span>
                                  <span className='ms-1'>Pick Up</span>
                                </div>
                                <input className='form-control' type='date' />
                                <select className='form-select ms-3'>
                                  {Array.from({ length: 8 }, (_, i) => (
                                    <option key={i} value={i}>{`${
                                      i || 12
                                    }:00AM`}</option>
                                  ))}
                                </select>
                              </div>
                            </div>
                            <div className='col-12'>
                              <div className='input-group'>
                                <div className='d-flex align-items-center bg-light text-body rounded-start p-2'>
                                  <span className='fas fa-calendar-alt'></span>
                                  <span className='ms-1'>Drop off</span>
                                </div>
                                <input className='form-control' type='date' />
                                <select className='form-select ms-3'>
                                  {Array.from({ length: 8 }, (_, i) => (
                                    <option key={i} value={i}>{`${
                                      i || 12
                                    }:00AM`}</option>
                                  ))}
                                </select>
                              </div>
                            </div>
                            <div className='col-12'>
                              <button className='btn btn-light w-100 py-2'>
                                Book Now
                              </button>
                            </div>
                          </div>
                        </form>
                      </div>
                    </div>
                    <div
                      className='col-lg-6 d-none d-lg-flex fadeInRight animated'
                      style={{ animationDelay: '1s' }}
                    >
                      <div className='text-start'>
                        <h1 className='display-5 text-white'>
                          Get 15% off your rental Plan your trip now
                        </h1>
                        <p>Treat yourself in TN</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Features Start */}
      <div className='container-fluid feature py-5 feature-section'>
        <div className='container py-5'>
          <div
            className='text-center mx-auto pb-5 wow fadeInUp'
            data-wow-delay='0.1s'
            style={{ maxWidth: '800px' }}
          >
            <h1 className='display-5 text-capitalize mb-3'>
              Car <span className='text-primary'>Features</span>
            </h1>
            <p className='mb-0'>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ut amet
              nemo expedita asperiores commodi accusantium at cum harum,
              excepturi, quia tempora cupiditate! Adipisci facilis modi quisquam
              quia distinctio,
            </p>
          </div>
          <div className='row g-4 align-items-center'>
            <div className='col-xl-4'>
              <div className='row gy-4 gx-0'>
                <div className='col-12 wow fadeInUp' data-wow-delay='0.1s'>
                  <div className='feature-item'>
                    <div className='feature-icon'>
                      <span className='fa fa-trophy fa-2x'></span>
                    </div>
                    <div className='ms-4'>
                      <h5 className='mb-3'>First Class services</h5>
                      <p className='mb-0'>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      </p>
                    </div>
                  </div>
                </div>
                <div className='col-12 wow fadeInUp' data-wow-delay='0.3s'>
                  <div className='feature-item'>
                    <div className='feature-icon'>
                      <span className='fa fa-road fa-2x'></span>
                    </div>
                    <div className='ms-4'>
                      <h5 className='mb-3'>24/7 road assistance</h5>
                      <p className='mb-0'>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div
              className='col-lg-12 col-xl-4 wow fadeInUp'
              data-wow-delay='0.2s'
            >
              <img
                src={featureImg}
                className='img-fluid w-100'
                style={{ objectFit: 'cover' }}
                alt='Features'
              />
            </div>
            <div className='col-xl-4'>
              <div className='row gy-4 gx-0'>
                <div className='col-12 wow fadeInUp' data-wow-delay='0.1s'>
                  <div className='feature-item justify-content-end'>
                    <div className='text-end me-4'>
                      <h5 className='mb-3'>Quality at Minimum</h5>
                      <p className='mb-0'>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      </p>
                    </div>
                    <div className='feature-icon'>
                      <span className='fa fa-tag fa-2x'></span>
                    </div>
                  </div>
                </div>
                <div className='col-12 wow fadeInUp' data-wow-delay='0.3s'>
                  <div className='feature-item justify-content-end'>
                    <div className='text-end me-4'>
                      <h5 className='mb-3'>Free Pick-Up & Drop-Off</h5>
                      <p className='mb-0'>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      </p>
                    </div>
                    <div className='feature-icon'>
                      <span className='fa fa-map-pin fa-2x'></span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Features End */}

      {/* About Start */}
      <div className='container-fluid overflow-hidden about py-5'>
        <div className='container py-5'>
          <div className='row g-5'>
            <div className='col-xl-6 wow fadeInLeft' data-wow-delay='0.2s'>
              <div className='about-item'>
                <div className='pb-5'>
                  <h1 className='display-5 text-capitalize'>
                    Car<span className='text-primary'>About</span>
                  </h1>
                  <p className='mb-0'>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit...
                  </p>
                </div>
                <div className='row g-4'>
                  <div className='col-lg-6'>
                    <div className='about-item-inner border p-4'>
                      <div className='about-icon mb-4'>
                        <img
                          src={aboutIcon1}
                          className='img-fluid w-50 h-50'
                          alt='Vision Icon'
                        />
                      </div>
                      <h5 className='mb-3'>Our Vision</h5>
                      <p className='mb-0'>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      </p>
                    </div>
                  </div>
                  <div className='col-lg-6'>
                    <div className='about-item-inner border p-4'>
                      <div className='about-icon mb-4'>
                        <img
                          src={aboutIcon2}
                          className='img-fluid h-50 w-50'
                          alt='Mission Icon'
                        />
                      </div>
                      <h5 className='mb-3'>Our Mission</h5>
                      <p className='mb-0'>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      </p>
                    </div>
                  </div>
                </div>
                <p className='text-item my-4'>
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                </p>
                <div className='row g-4'>
                  <div className='col-lg-6'>
                    <div className='text-center rounded bg-secondary p-4'>
                      <h1 className='display-6 text-white'>17</h1>
                      <h5 className='text-light mb-0'>Years Of Experience</h5>
                    </div>
                  </div>
                  <div className='col-lg-6'>
                    <div className='rounded'>
                      <p className='mb-2'>
                        <i className='fa fa-check-circle text-primary me-1'></i>{' '}
                        Morbi tristique senectus
                      </p>
                      <p className='mb-2'>
                        <i className='fa fa-check-circle text-primary me-1'></i>{' '}
                        A scelerisque purus
                      </p>
                      <p className='mb-2'>
                        <i className='fa fa-check-circle text-primary me-1'></i>{' '}
                        Dictumst vestibulum
                      </p>
                      <p className='mb-0'>
                        <i className='fa fa-check-circle text-primary me-1'></i>{' '}
                        Dio aenean sed adipiscing
                      </p>
                    </div>
                  </div>
                  <div className='col-lg-5 d-flex align-items-center'>
                    <Link to='#' className='btn btn-primary rounded py-3 px-5'>
                      More About Us
                    </Link>
                  </div>
                  <div className='col-lg-7'>
                    <div className='d-flex align-items-center'>
                      <img
                        src={attachmentImg}
                        className='img-fluid rounded-circle border border-4 border-secondary'
                        style={{ width: '100px', height: '100px' }}
                        alt='Founder'
                      />
                      <div className='ms-4'>
                        <h4>William Burgess</h4>
                        <p className='mb-0'>Carveo Founder</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className='col-xl-6 wow fadeInRight' data-wow-delay='0.2s'>
              <div className='about-img'>
                <div className='img-1 mb-4'>
                  <img
                    src={aboutImg1}
                    className='img-fluid rounded h-100 w-100'
                    alt='About'
                  />
                </div>
                <div className='img-2'>
                  <img
                    src={aboutImg2}
                    className='img-fluid rounded w-100'
                    alt='About 2'
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* About End */}

      <div className='container-fluid counter bg-secondary py-5'>
        <div className='container py-5'>
          <div className='row g-5'>
            <div
              className='col-md-6 col-lg-6 col-xl-3'
              data-aos='fade-up'
              data-aos-delay='100'
            >
              <div className='counter-item text-center'>
                <div className='counter-item-icon mx-auto'>
                  <i className='fas fa-thumbs-up fa-2x text-white'></i>
                </div>
                <div className='counter-counting my-3'>
                  <span className='text-white fs-2 fw-bold'>
                    <CountUp end={829} duration={2} />
                  </span>
                  <span className='h1 fw-bold text-white'>+</span>
                </div>
                <h4 className='text-white mb-0'>Happy Clients</h4>
              </div>
            </div>

            <div
              className='col-md-6 col-lg-6 col-xl-3'
              data-aos='fade-up'
              data-aos-delay='300'
            >
              <div className='counter-item text-center'>
                <div className='counter-item-icon mx-auto'>
                  <i className='fas fa-car-alt fa-2x text-white'></i>
                </div>
                <div className='counter-counting my-3'>
                  <span className='text-white fs-2 fw-bold'>
                    <CountUp end={56} duration={2} />
                  </span>
                  <span className='h1 fw-bold text-white'>+</span>
                </div>
                <h4 className='text-white mb-0'>Number of Cars</h4>
              </div>
            </div>

            <div
              className='col-md-6 col-lg-6 col-xl-3'
              data-aos='fade-up'
              data-aos-delay='500'
            >
              <div className='counter-item text-center'>
                <div className='counter-item-icon mx-auto'>
                  <i className='fas fa-building fa-2x text-white'></i>
                </div>
                <div className='counter-counting my-3'>
                  <span className='text-white fs-2 fw-bold'>
                    <CountUp end={127} duration={2} />
                  </span>
                  <span className='h1 fw-bold text-white'>+</span>
                </div>
                <h4 className='text-white mb-0'>Car Center</h4>
              </div>
            </div>

            <div
              className='col-md-6 col-lg-6 col-xl-3'
              data-aos='fade-up'
              data-aos-delay='700'
            >
              <div className='counter-item text-center'>
                <div className='counter-item-icon mx-auto'>
                  <i className='fas fa-clock fa-2x text-white'></i>
                </div>
                <div className='counter-counting my-3'>
                  <span className='text-white fs-2 fw-bold'>
                    <CountUp end={589} duration={2} />
                  </span>
                  <span className='h1 fw-bold text-white'>+</span>
                </div>
                <h4 className='text-white mb-0'>Total kilometers</h4>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Banner Start */}
      <div className='container-fluid banner py-5' data-aos='zoom-in-down'>
        <div className='container py-5'>
          <div className='banner-item rounded position-relative overflow-hidden'>
            <img
              src={banner1}
              className='img-fluid rounded w-100'
              alt='Banner'
            />

            <div className='banner-content position-absolute top-50 start-50 translate-middle text-center'>
              <h2 className='text-primary'>Rent Your Car</h2>
              <h1 className='text-white'>Interested in Renting?</h1>
              <p className='text-white'>
                Don't hesitate and send us a message.
              </p>
              <div className='banner-btn'>
                <a
                  href='#'
                  className='btn btn-secondary rounded-pill py-3 px-4 px-md-5 me-2'
                >
                  WhatsApp
                </a>
                <a
                  href='#'
                  className='btn btn-primary rounded-pill py-3 px-4 px-md-5 ms-2'
                >
                  Contact Us
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Banner End */}
    </>
  );
};

export default Home;
