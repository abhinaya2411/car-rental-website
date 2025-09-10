import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Link } from 'react-router-dom';
import '../assets/css/style.css';
import team1 from '../assets/img/team-1.jpg';
import team2 from '../assets/img/team-2.jpg';
import team3 from '../assets/img/team-3.jpg';
import team4 from '../assets/img/team-4.jpg';
import Navbar from '../pages/Navbar';
const teamImages = [team1, team2, team3, team4];

const Team = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <>
      <Navbar />

      {/* Header Start */}
      <div className='container-fluid bg-breadcrumb'>
        <div
          className='container text-center py-5'
          style={{ maxWidth: '900px' }}
        >
          <h4 className='text-white display-4 mb-4' data-aos='fade-down'>
            Our Team
          </h4>
          <ol
            className='breadcrumb d-flex justify-content-center mb-0'
            data-aos='fade-down'
            data-aos-delay='200'
          >
            <li className='breadcrumb-item'>
              <Link to='/'>Home</Link>
            </li>

            <li className='breadcrumb-item active text-primary'>Team</li>
          </ol>
        </div>
      </div>
      {/* Header End */}

      {/* Team Section Start */}
      <div className='container-fluid team py-5'>
        <div className='container py-5'>
          <div
            className='text-center mx-auto pb-5'
            data-aos='fade-up'
            style={{ maxWidth: '800px' }}
          >
            <h1 className='display-5 text-capitalize mb-3'>
              Customer<span className='text-primary'> Support</span> Center
            </h1>
            <p className='mb-0'>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ut amet
              nemo expedita asperiores commodi accusantium at cum harum,
              excepturi.
            </p>
          </div>

          <div className='row g-4'>
            {[1, 2, 3, 4].map((n, i) => (
              <div
                className='col-md-6 col-lg-6 col-xl-3'
                data-aos='fade-up'
                data-aos-delay={`${i * 200}`}
              >
                <div className='team-item p-4 pt-0'>
                  <div className='team-img'>
                    <img
                      src={teamImages[i]}
                      className='img-fluid rounded w-100'
                      alt={`Team ${n}`}
                    />
                  </div>
                  <div className='team-content pt-4'>
                    <h4>MARTIN DOE</h4>
                    <p>Profession</p>
                    <div className='team-icon d-flex justify-content-center'>
                      <Link
                        className='btn btn-square btn-light rounded-circle mx-1'
                        to=''
                      >
                        <i className='fab fa-facebook-f'></i>
                      </Link>
                      <Link
                        className='btn btn-square btn-light rounded-circle mx-1'
                        to=''
                      >
                        <i className='fab fa-twitter'></i>
                      </Link>
                      <Link
                        className='btn btn-square btn-light rounded-circle mx-1'
                        to=''
                      >
                        <i className='fab fa-instagram'></i>
                      </Link>
                      <Link
                        className='btn btn-square btn-light rounded-circle mx-1'
                        to=''
                      >
                        <i className='fab fa-linkedin-in'></i>
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
    </>
  );
};

export default Team;
