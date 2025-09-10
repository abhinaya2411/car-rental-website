import { Link, useLocation } from 'react-router-dom';

export default function Navbar() {
  const location = useLocation();
  const currentPath = location.pathname;

  const isActive = (path) => (currentPath === path ? 'active' : '');

  return (
    <div className='container-fluid nav-bar sticky-top px-0 px-lg-4 py-2 py-lg-0'>
      <div className='container'>
        <nav className='navbar navbar-expand-lg navbar-light'>
          <Link
            to='/'
            className='navbar-brand d-flex align-items-center px-4 px-lg-0'
          >
            <h2 className='m-0 text-primary'>
              <i className='fa fa-car me-2'></i>CarRental
            </h2>
          </Link>
          <button
            className='navbar-toggler'
            type='button'
            data-bs-toggle='collapse'
            data-bs-target='#navbarCollapse'
          >
            <span className='fa fa-bars'></span>
          </button>
          <div className='collapse navbar-collapse' id='navbarCollapse'>
            <div className='navbar-nav mx-auto py-0'>
              <Link to='/' className={`nav-item nav-link ${isActive('/')}`}>
                Home
              </Link>
              <Link
                to='/about'
                className={`nav-item nav-link ${isActive('/about')}`}
              >
                About
              </Link>
              <Link
                to='/service'
                className={`nav-item nav-link ${isActive('/service')}`}
              >
                Service
              </Link>
              <Link
                to='/blog'
                className={`nav-item nav-link ${isActive('/blog')}`}
              >
                Blog
              </Link>
              <div className='nav-item dropdown'>
                <a
                  href='#'
                  className='nav-link dropdown-toggle'
                  data-bs-toggle='dropdown'
                >
                  Pages
                </a>
                <div className='dropdown-menu m-0'>
                  <Link
                    to='/feature'
                    className={`dropdown-item ${isActive('/feature')}`}
                  >
                    Our Feature
                  </Link>
                  <Link
                    to='/cars'
                    className={`dropdown-item ${isActive('/cars')}`}
                  >
                    Our Cars
                  </Link>
                  <Link
                    to='/team'
                    className={`dropdown-item ${isActive('/team')}`}
                  >
                    Our Team
                  </Link>
                  <Link
                    to='/testimonial'
                    className={`dropdown-item ${isActive('/testimonial')}`}
                  >
                    Testimonial
                  </Link>
                </div>
              </div>
              <Link
                to='/contact'
                className={`nav-item nav-link ${isActive('/contact')}`}
              >
                Contact
              </Link>
            </div>
            <Link
              to='/login'
              className='btn btn-primary rounded-pill py-2 px-4'
            >
              Login
            </Link>
          </div>
        </nav>
      </div>
    </div>
  );
}
