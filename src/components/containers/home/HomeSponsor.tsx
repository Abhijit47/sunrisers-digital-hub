'use client';
import Image from 'next/image';
import { Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css';
// import five from '../../../../public/images/sponsor/five.png';
// import four from '../../../../public/images/sponsor/four.png';
// import one from '../../../../public/images/sponsor/one.png';
// import six from '../../../../public/images/sponsor/six.png';
// import three from '../../../../public/images/sponsor/three.png';
// import two from '../../../../public/images/sponsor/two.png';

const partners = [
  {
    id: crypto.randomUUID(),
    image: '/images/sponsor/logo-1.jpeg',
  },
  {
    id: crypto.randomUUID(),
    image: '/images/sponsor/logo-2.jpeg',
  },
  {
    id: crypto.randomUUID(),
    image: '/images/sponsor/logo-3.jpeg',
  },
  {
    id: crypto.randomUUID(),
    image: '/images/sponsor/logo-4.jpeg',
  },
  {
    id: crypto.randomUUID(),
    image: '/images/sponsor/logo-5.jpeg',
  },
  {
    id: crypto.randomUUID(),
    image: '/images/sponsor/logo-6.jpeg',
  },
  {
    id: crypto.randomUUID(),
    image: '/images/sponsor/logo-7.jpeg',
  },
  {
    id: crypto.randomUUID(),
    image: '/images/sponsor/logo-8.jpeg',
  },
  {
    id: crypto.randomUUID(),
    image: '/images/sponsor/logo-9.jpeg',
  },
  {
    id: crypto.randomUUID(),
    image: '/images/sponsor/logo-10.jpeg',
  },
  {
    id: crypto.randomUUID(),
    image: '/images/sponsor/logo-11.jpeg',
  },
  {
    id: crypto.randomUUID(),
    image: '/images/sponsor/logo-12.jpeg',
  },
];

const isDev = process.env.NODE_ENV === 'development';

const HomeSponsor = () => {
  return (
    <div className='sponsor section'>
      <div className='container-fluid'>
        <div className='row justify-content-center'>
          <div className='col-12'>
            <div className='sponsor__slider-w'>
              <Swiper
                slidesPerView={1}
                spaceBetween={30}
                slidesPerGroup={1}
                speed={1200}
                loop={isDev ? false : true}
                roundLengths={true}
                centeredSlides={true}
                centeredSlidesBounds={false}
                modules={[Autoplay]}
                autoplay={
                  isDev
                    ? undefined
                    : {
                        delay: 3000,
                        disableOnInteraction: false,
                        pauseOnMouseEnter: true,
                      }
                }
                breakpoints={{
                  1400: {
                    slidesPerView: 6,
                  },
                  1200: {
                    slidesPerView: 4,
                  },
                  992: {
                    slidesPerView: 3,
                  },
                  576: {
                    slidesPerView: 2,
                  },
                }}
                className='sponsor__slider'>
                {partners.map((partner) => (
                  <SwiperSlide key={partner.id}>
                    <div className='sponsor__slider-item ratio ratio-1x1 w-100 h-100'>
                      <Image
                        src={partner.image}
                        alt='Image'
                        width={1080}
                        height={800}
                        className='w-100 h-100 object-fit-contain'
                      />
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          </div>
        </div>
      </div>
      <div className='lines d-none d-lg-flex'>
        <div className='line'></div>
        <div className='line'></div>
        <div className='line'></div>
        <div className='line'></div>
        <div className='line'></div>
      </div>
    </div>
  );
};

export default HomeSponsor;
