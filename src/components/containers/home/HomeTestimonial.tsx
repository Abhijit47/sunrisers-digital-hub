'use client';

import { testimonials } from '@/constants';
import Link from 'next/link';
// import { useState } from 'react';
// import type SwiperType from 'swiper';
import { Autoplay, Navigation } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css';

const isDev = process.env.NODE_ENV === 'development';

const HomeTestimonial = () => {
  // const [nextSlideIndex, setNextSlideIndex] = useState<number>(1);

  // const handleSlideChange = (swiper: SwiperType) => {
  //   const nextIndex = (swiper.realIndex + 1) % swiper.slides.length;
  //   // setNextSlideIndex(nextIndex);
  // };

  return (
    <section className='section testimonial pt-0 position-relative'>
      <div className='testimonial__text-slider-w'>
        <Swiper
          slidesPerView='auto'
          spaceBetween={40}
          speed={5000}
          loop={true}
          centeredSlides={true}
          modules={[Autoplay]}
          autoplay={
            isDev
              ? undefined
              : {
                  delay: 1,
                  disableOnInteraction: false,
                  pauseOnMouseEnter: true,
                  reverseDirection: false,
                }
          }
          className='testimonial__text-slider'>
          {Array.from({ length: 7 }).map(() => (
            <SwiperSlide key={crypto.randomUUID()}>
              <div className='testimonial__text-slider-single'>
                <h2 className='h1'>
                  <Link href='#'>
                    client&apos;s testimonial
                    <i className='fa-sharp fa-solid fa-arrow-down-right'></i>
                  </Link>
                </h2>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      <div className='container position-relative'>
        <div className='row'>
          <div className='col-12 col-xxl-10'>
            <div className='testimonial-s__slider-w'>
              <Swiper
                slidesPerView={1}
                spaceBetween={30}
                slidesPerGroup={1}
                speed={800}
                loop={true}
                roundLengths={false}
                centeredSlides={false}
                centeredSlidesBounds={false}
                modules={[Autoplay, Navigation]}
                autoplay={
                  isDev
                    ? undefined
                    : {
                        delay: 5000,
                        disableOnInteraction: false,
                        pauseOnMouseEnter: true,
                      }
                }
                navigation={{
                  nextEl: '.next-testimonial-three',
                  prevEl: '.prev-testimonial-three',
                }}
                // onSlideChange={(swiper) => handleSlideChange(swiper)}
                className='testimonial-s__slider'>
                {testimonials.map((testimonial) => (
                  <SwiperSlide key={testimonial.id}>
                    <div className='testimonial-s__slider-single'>
                      <div className='row gaper align-items-center'>
                        <div className='col-12 col-lg-auto'>
                          <div className='thumb'>
                            <svg
                              xmlns='http://www.w3.org/2000/svg'
                              width='44'
                              height='322'
                              viewBox='0 0 44 322'
                              fill='none'
                              className='d-none d-lg-block'>
                              <path
                                d='M43 -0.000976562V151.999L2 192.999H43V321.999'
                                stroke='#414141'
                              />
                            </svg>
                          </div>
                        </div>
                        <div className='col-12 col-lg-10 offset-lg-1 col-xxl-10 offset-xxl-1'>
                          <div className='testimonial-s__content'>
                            <div className='quote'>
                              <i className='fa-solid fa-quote-right'></i>
                            </div>
                            <div className='content'>
                              <h4>{testimonial.comment}</h4>
                            </div>
                            <div className='content-cta'>
                              <h5>{testimonial.name}</h5>
                              <p>{testimonial.position}</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          </div>
        </div>
        <div className='slide-group justify-content-start'>
          <button
            aria-label='previous item'
            className='slide-btn prev-testimonial-three'>
            <i className='fa-light fa-angle-left'></i>
          </button>
          <button
            aria-label='next item'
            className='slide-btn next-testimonial-three'>
            <i className='fa-light fa-angle-right'></i>
          </button>
        </div>
      </div>
      {/* <div className='other-section'>
        <Image
          className='other-section-image'
          src={
            nextSlideIndex === 0
              ? sthumb
              : nextSlideIndex === 1
                ? sthumbtwo
                : sthumbthree
          }
          alt='Next Slide Image'
        />
      </div> */}
      <div className='lines d-none d-lg-flex'>
        <div className='line'></div>
        <div className='line'></div>
        <div className='line'></div>
        <div className='line'></div>
        <div className='line'></div>
      </div>
    </section>
  );
};

export default HomeTestimonial;
