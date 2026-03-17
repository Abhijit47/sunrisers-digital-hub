import Image from 'next/image';
import Link from 'next/link';

const HomeThreeServices = () => {
  return (
    <section id='why-choose-us' className='section service-f fade-wrapper '>
      <div className='container'>
        <div className='row'>
          <div className='col-12'>
            <div className='section__header--secondary g-ind'>
              <div className='row gaper align-items-center'>
                <div className='col-12 col-lg-8'>
                  <div className='section__header text-center text-lg-start mb-0'>
                    <span className='sub-title'>
                      Why Choose
                      <i className='fa-solid fa-arrow-right'></i>
                    </span>
                    <h2 className='title title-anim'>Sunrisers Digital Hub</h2>
                  </div>
                </div>
                <div className='col-12 col-lg-4'>
                  <div className='text-center text-lg-end'>
                    <Link
                      href='#services'
                      className='btn btn--primary text-capitalize'>
                      view all service
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className='row'>
          <div className='col-12'>
            <div className='service-f-wrapper'>
              <div
                className={
                  'service-f-single fade-top service-f-single-active'
                  // +
                  // (imgTab == 0 ? ' service-f-single-active' : ' ')
                }>
                <div className='single-item'>
                  {/* <span className='sub-title'>
                    01
                    <i className='fa-solid fa-arrow-right'></i>
                  </span> */}
                  <h4>
                    Sunrisers Digital Hub - Your Trusted Partner for Digital
                    Marketing Success
                  </h4>
                  <div className='p-single'>
                    <p>
                      We build intelligent next-generation solutions at the
                      intersection of new business opportunities and
                      technological innovations.
                    </p>
                  </div>
                </div>
                <div className='p-single single-item p-sm'>
                  <ul>
                    <li>
                      <i className='fa-solid fa-angle-right'></i>
                      3+ Years of Digital Marketing Experience
                    </li>
                    <li>
                      <i className='fa-solid fa-angle-right'></i>
                      Creative & Result-Oriented Strategies
                    </li>
                    <li>
                      <i className='fa-solid fa-angle-right'></i>
                      Affordable Services for Businesses of All Sizes
                    </li>
                    <li>
                      <i className='fa-solid fa-angle-right'></i>
                      Dedicated Support for Clients
                    </li>
                    <li>
                      <i className='fa-solid fa-angle-right'></i>
                      Innovative Marketing Solutions
                    </li>
                  </ul>
                </div>
                <div className='single-item p-single p-sm'>
                  <Image
                    src={
                      'https://xpovio-ltr-nine.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fone.c12c058d.png&w=1080&q=75'
                    }
                    alt='Image'
                    width={300}
                    height={300}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Image
        src={'/images/agency/dot-large.png'}
        alt='Image'
        className='dot-img'
        width={130}
        height={130}
      />
    </section>
  );
};

export default HomeThreeServices;
