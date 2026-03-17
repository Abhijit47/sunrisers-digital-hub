'use client';

// import dotlarge from '@/public/images/agency/dot-large.png';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import Image from 'next/image';
import Link from 'next/link';
import { useEffect } from 'react';
import dotlarge from '../../../../public/images/agency/dot-large.png';
import star from '../../../../public/images/star.png';

gsap.registerPlugin(ScrollTrigger);
const Agency = () => {
  useEffect(() => {
    const percentElements = document.querySelectorAll('[data-percent]');

    percentElements.forEach((el) => {
      const skillBarPercent = el.querySelector(
        '.skill-bar-percent',
      ) as HTMLElement | null;
      const percentValue = el.parentNode?.querySelector(
        '.percent-value',
      ) as HTMLElement | null;

      if (skillBarPercent && percentValue) {
        const percent = el.getAttribute('data-percent') || '0%';
        skillBarPercent.style.width = percent;
        percentValue.textContent = percent;
      }
    });

    const axProgressBar = document.querySelectorAll('.skill-bar-single');
    axProgressBar.forEach((element) => {
      const skillBarPercent = element.querySelector(
        '.skill-bar-percent',
      ) as HTMLElement | null;
      const percentValue = element.querySelector(
        '.percent-value',
      ) as HTMLElement | null;

      if (skillBarPercent && percentValue) {
        const target = percentValue.textContent || '0%';

        const axBarTimeline = gsap.timeline({
          defaults: {
            duration: 2,
          },
          scrollTrigger: {
            trigger: element,
          },
        });

        axBarTimeline.fromTo(
          skillBarPercent,
          {
            width: 0,
          },
          {
            width: target,
          },
        );

        axBarTimeline.from(
          percentValue,
          {
            textContent: '0%',
            snap: {
              textContent: 5,
            },
          },
          '<',
        );
      }
    });
  }, []);

  return (
    <section id='about' className='section agency'>
      <div className='container'>
        <div className='row gaper align-items-center'>
          <div className='col-12 col-lg-6'>
            <div className='agency__thumb'>
              <Image
                // src={
                //   'https://xpovio-ltr-nine.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fthumb-one.1ae45dc2.png&w=1080&q=75'
                // }
                src={'/images/about-us.jpeg'}
                alt='Image'
                className='thumb-one fade-left'
                priority
                width={1080}
                height={1080}
              />
              <Image
                // src={
                //   'https://xpovio-ltr-nine.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fthumb-two.96191b11.png&w=1080&q=75'
                // }
                // src={'/images/about-us.jpeg'}
                src={'/logo.png'}
                alt='Image'
                className='thumb-two fade-right'
                priority
                width={800}
                height={800}
              />
            </div>
          </div>
          <div className='col-12 col-lg-6'>
            <div className='agency__content section__content'>
              <span className='sub-title'>
                WELCOME
                <i className='fa-solid fa-arrow-right'></i>
              </span>
              <h2 className='title title-anim'>
                We are digital creative agency in Bangalore, India
              </h2>
              <div className='paragraph'>
                <p>
                  Founded by Dr. Rajini Santosh, the company has been delivering
                  creative, result-driven digital solutions for the past 3
                  years.
                </p>
                <p>
                  We believe every brand has the potential to shine in the
                  digital space. Our team combines creativity, strategy, and
                  technology to build strong digital presence for businesses of
                  all sizes. From startups to established brands, we help our
                  clients connect with their audience, increase visibility, and
                  achieve real business growth.
                </p>
                <p>
                  At Sunrisers Digital Hub, our goal is simple — to help your
                  brand rise and succeed in the digital world.
                </p>
              </div>
              <div className='skill-wrap'>
                <div className='skill-bar-single d-none'>
                  <div className='skill-bar-title'>
                    <p className='primary-text'>Website design</p>
                  </div>
                  <div className='skill-bar-wrapper' data-percent='75%'>
                    <div className='skill-bar'>
                      <div className='skill-bar-percent'>
                        <span className='percent-value'></span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className='skill-bar-single'>
                  <div className='skill-bar-title'>
                    <p className='primary-text'>Website design</p>
                  </div>
                  <div className='skill-bar-wrapper' data-percent='75%'>
                    <div className='skill-bar'>
                      <div className='skill-bar-percent'>
                        <span className='percent-value'></span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className='skill-bar-single'>
                  <div className='skill-bar-title'>
                    <p className='primary-text'>Digital Marketing</p>
                  </div>
                  <div className='skill-bar-wrapper' data-percent='90%'>
                    <div className='skill-bar'>
                      <div className='skill-bar-percent'>
                        <span className='percent-value'></span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className='section__content-cta'>
                <Link href='#why-choose-us' className='btn btn--primary'>
                  Know More
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Image src={star} alt='Image' className='star' priority />
      <Image src={dotlarge} alt='Image' className='dot-large' priority />
    </section>
  );
};

export default Agency;
