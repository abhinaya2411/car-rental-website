import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Link } from 'react-router-dom';
import '../assets/css/style.css';

const Register = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <>
      {/* Header Section */}
      <div className='container-fluid bg-breadcrumb'>
        <div
          className='container text-center py-5'
          style={{ maxWidth: '900px' }}
        >
          <h4 className='text-white display-4 mb-4' data-aos='fade-down'>
            Register
          </h4>
          <ol
            className='breadcrumb d-flex justify-content-center mb-0'
            data-aos='fade-down'
            data-aos-delay='300'
          >
            <li className='breadcrumb-item'>
              <Link to='/'>Home</Link>
            </li>
            <li className='breadcrumb-item active text-primary'>Register</li>
          </ol>
        </div>
      </div>

      {/* Registration Form */}
      <div className='container py-5'>
        <div className='row justify-content-center'>
          <div className='col-md-6' data-aos='fade-up'>
            <div className='card shadow rounded'>
              <div className='card-body p-4'>
                <h3 className='text-center mb-4'>Create Your Account</h3>
                <form>
                  <div className='mb-3'>
                    <label htmlFor='name' className='form-label'>
                      Full Name
                    </label>
                    <input
                      type='text'
                      className='form-control'
                      id='name'
                      placeholder='Enter your full name'
                      required
                    />
                  </div>
                  <div className='mb-3'>
                    <label htmlFor='email' className='form-label'>
                      Email address
                    </label>
                    <input
                      type='email'
                      className='form-control'
                      id='email'
                      placeholder='Enter your email'
                      required
                    />
                  </div>
                  <div className='mb-3'>
                    <label htmlFor='password' className='form-label'>
                      Password
                    </label>
                    <input
                      type='password'
                      className='form-control'
                      id='password'
                      placeholder='Enter your password'
                      required
                    />
                  </div>
                  <div className='mb-4'>
                    <label htmlFor='confirmPassword' className='form-label'>
                      Confirm Password
                    </label>
                    <input
                      type='password'
                      className='form-control'
                      id='confirmPassword'
                      placeholder='Confirm your password'
                      required
                    />
                  </div>
                  <div className='d-grid'>
                    <button
                      type='submit'
                      className='btn btn-primary rounded-pill'
                    >
                      Register
                    </button>
                  </div>
                </form>
                <p className='mt-3 text-center'>
                  Already have an account?{' '}
                  <Link
                    to='/login'
                    className='text-decoration-none text-primary'
                  >
                    Login here
                  </Link>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Register;
