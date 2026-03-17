import Link from 'next/link';
import { FaRegClock } from 'react-icons/fa6';
import {
  MdCall,
  MdOutlineAddLocationAlt,
  MdOutlineEmail,
} from 'react-icons/md';
import ContactForm from '../contact-form';
// import location from 'public/images/location.png';
// import mail from 'public/images/mail.png';
// import phone from 'public/images/phone.png';
// import time from 'public/images/time.png';

const ContactMain = () => {
  return (
    <section id='contact' className='section pt-0 pb-0 contact-m fade-wrapper'>
      <div className='container'>
        <div className='row gaper'>
          <div className='col-12 col-sm-6 col-xl-3'>
            <div className='contact-m__single topy-tilt fade-top'>
              <div className='thumb'>
                {/* <Image
                  src={'/images/location.png'}
                  alt='Image'
                  width={32}
                  height={32}
                /> */}
                <MdCall size={48} />
              </div>
              <div className='content'>
                <h4>Phone</h4>
                <p>
                  <Link href='tel:+919845732329'>Mobile : +919845732329</Link>
                </p>
                <p>
                  <Link href='tel:+919739932329'>Mobile : +919739932329</Link>
                </p>
              </div>
            </div>
          </div>
          <div className='col-12 col-sm-6 col-xl-3'>
            <div className='contact-m__single topy-tilt fade-top'>
              <div className='thumb'>
                {/* <Image
                  src={'/images/mail.png'}
                  alt='Image'
                  width={48}
                  height={48}
                /> */}
                <MdOutlineEmail size={48} />
              </div>
              <div className='content'>
                <h4>Mail Address</h4>
                <p>
                  <Link href='mailto:sunrisersdigitalhub@gmail.com'>
                    sunrisersdigitalhub@gmail.com
                  </Link>
                </p>
                {/* <p>
                  <Link href='mailto:info.company@gmail.com'>
                    Info.company@yahoo.com
                  </Link>
                </p> */}
              </div>
            </div>
          </div>
          <div className='col-12 col-sm-6 col-xl-3'>
            <div className='contact-m__single topy-tilt fade-top'>
              <div className='thumb'>
                {/* <Image
                  src={'/images/phone.png'}
                  alt='Image'
                  width={32}
                  height={32}
                /> */}
                <MdOutlineAddLocationAlt size={48} />
              </div>
              <div className='content'>
                <h4>Our Location</h4>
                <p>
                  <Link
                    href='https://www.google.com/maps/place/Indiranagar,+Bengaluru,+Karnataka/@12.97296,77.6279118,3232m/data=!3m2!1e3!4b1!4m6!3m5!1s0x3bae16a418770391:0xb50f46b826501036!8m2!3d12.9783692!4d77.6408356!16zL20vMDZ5M3Zj?entry=ttu&g_ep=EgoyMDI2MDMxMS4wIKXMDSoASAFQAw%3D%3D'
                    target='_blank'>
                    Indira nagar Bangalore, India
                  </Link>
                </p>
              </div>
            </div>
          </div>
          <div className='col-12 col-sm-6 col-xl-3'>
            <div className='contact-m__single topy-tilt fade-top'>
              <div className='thumb'>
                {/* <Image
                  src={'/images/time.png'}
                  alt='Image'
                  width={32}
                  height={32}
                /> */}
                <FaRegClock size={48} />
              </div>
              <div className='content'>
                <h4>Office Hour</h4>
                <p>Sun - Thu 09 am - 06pm</p>
                <p>Fri - Sat 4 pm - 10pm</p>
              </div>
            </div>
          </div>
        </div>
        <div className='row'>
          <div className='col-12'>
            <div className='map-wrapper'>
              <div className='row gaper'>
                <div className='col-12 col-lg-6'>
                  <div className='contact__map fade-top'>
                    {/* <div className='mapouter'>
                      <div className='gmap_canvas'>
                        <iframe
                          title='google map'
                          name='google-map'
                          className='gmap_iframe'
                          width='100%'
                          frameBorder='0'
                          scrolling='no'
                          marginHeight={0}
                          marginWidth={0}
                          src='https://maps.google.com/maps?width=600&amp;height=400&amp;hl=en&amp;q=Indira nagar Bangalore, India&amp;t=k&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed'></iframe>
                        <a href="https://embedgooglemap.xyz/">google maps iframe</a>
                      </div>
                      <style>.mapouter{position:relative;text-align:right;width:100%;height:400px;}.gmap_canvas {overflow:hidden;background:none!important;width:100%;height:400px;}.gmap_iframe {height:400px!important;}</style>
                    </div> */}
                    <iframe
                      title='google map'
                      name='google-map'
                      className='gmap_iframe'
                      width={'100%'}
                      height={'100%'}
                      frameBorder='0'
                      scrolling='no'
                      marginHeight={0}
                      marginWidth={0}
                      style={{ border: '0px' }}
                      allowFullScreen
                      loading='lazy'
                      referrerPolicy='no-referrer-when-downgrade'
                      src='https://maps.google.com/maps?width=600&amp;height=400&amp;hl=en&amp;q=Indira nagar Bangalore, India&amp;t=k&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed'></iframe>
                    {/* <iframe
                      title='google map'
                      name='google-map'
                      src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d20342.411046372905!2d-74.16638039276373!3d40.719832743885284!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c24fa5d33f083b%3A0xc80b8f06e177fe62!2sNew%20York%2C%20NY%2C%20USA!5e0!3m2!1sen!2sbd!4v1649562691355!5m2!1sen!2sbd'
                      width='100'
                      height='800'
                      style={{ border: '0px' }}
                      allowFullScreen
                      loading='lazy'
                      referrerPolicy='no-referrer-when-downgrade'></iframe> */}
                  </div>
                </div>
                <div className='col-12 col-lg-6'>
                  <div className='contact-main__form  fade-top'>
                    <h3>Leave A Message</h3>
                    <ContactForm />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactMain;
