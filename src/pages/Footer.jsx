import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer
      className='container-fluid footer bg-dark text-white py-5'
      data-aos='fade-up'
    >
      <div className='container py-5'>
        <div className='row g-5'>
          {/* About Us */}
          <div className='col-lg-3'>
            <h4>About Us</h4>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit...</p>
            <input
              className='form-control rounded-pill mb-2'
              type='text'
              placeholder='Enter email'
            />
            <button className='btn btn-secondary rounded-pill'>
              Subscribe
            </button>
          </div>

          {/* Quick Links */}
          <div className='col-lg-3'>
            <h4>Quick Links</h4>
            <ul className='list-unstyled'>
              <li>
                <Link to='/about'>About</Link>
              </li>
              <li>
                <Link to='/cars'>Cars</Link>
              </li>
              <li>
                <Link to='/feature'>Car Types</Link>
              </li>
              <li>
                <Link to='/team'>Team</Link>
              </li>
              <li>
                <Link to='/contact'>Contact</Link>
              </li>
            </ul>
          </div>

          {/* Business Hours */}
          <div className='col-lg-3'>
            <h4>Business Hours</h4>
            <p>Mon - Fri: 9am - 7pm</p>
            <p>Sat: 10am - 5pm</p>
            <p>Sun: Closed</p>
          </div>

          {/* Contact Info */}
          <div className='col-lg-3'>
            <h4>Contact Info</h4>
            <p>
              <i className='fa fa-map-marker-alt me-2'></i> 123 Street, City
            </p>
            <p>
              <i className='fa fa-envelope me-2'></i> info@example.com
            </p>
            <p>
              <i className='fa fa-phone me-2'></i> +012 345 6789
            </p>
            <div className='d-flex gap-2 mt-2'>
              <a
                className='btn btn-secondary btn-sm'
                href='https://facebook.com'
                target='_blank'
                rel='noopener noreferrer'
              >
                <i className='fab fa-facebook-f'></i>
              </a>
              <a
                className='btn btn-secondary btn-sm'
                href='https://twitter.com'
                target='_blank'
                rel='noopener noreferrer'
              >
                <i className='fab fa-twitter'></i>
              </a>
              <a
                className='btn btn-secondary btn-sm'
                href='https://instagram.com'
                target='_blank'
                rel='noopener noreferrer'
              >
                <i className='fab fa-instagram'></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
