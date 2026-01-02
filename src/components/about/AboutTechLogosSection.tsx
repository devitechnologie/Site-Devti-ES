"use client"

import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay } from 'swiper/modules'
import Image from 'next/image'

const ReactLogo = '/images/react-logo.png'
const PhpLogo = '/images/pngwing.com.png'
const LaravelLogo = '/images/laravel.png'
const MySql = '/images/mysql.png'
const HTMLLogo = '/images/html.png'
const CSSLogo = '/images/css.png'
const TailwindLogo = '/images/tailwind.png'

const AboutTechLogosSection = () => {
  return (
    <section>
      <div className="app-container">
        <div
          className="select-none pointer-events-none"
        >
          <Swiper
            spaceBetween={50}
            slidesPerView={3.5}
            breakpoints={{
              640: {
                slidesPerView: 4.5,
              },
              768: {
                slidesPerView: 5.5,
              },
              1024: {
                slidesPerView: 6.5,
              },
            }}
            loop={true}
            modules={[Autoplay]}
            autoplay={{
              delay: 2000,
              disableOnInteraction: false,
            }}
            draggable={false}
          >
            <SwiperSlide>
              <div
                className='p-4'
              >
                <Image
                  width={528}
                  height={528}
                  src={ReactLogo}
                  alt="ReactJs"
                  className="w-32"
                />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div
                className='p-4'
              >
                <Image
                  width={528}
                  height={528}
                  src={PhpLogo}
                  alt="Php Logo"
                  className="w-32"
                />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div
                className='p-4'
              >
                <Image
                  width={528}
                  height={528}
                  src={LaravelLogo}
                  alt="Laravel Logo"
                  className="w-24"
                />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div
                className='p-4'
              >
                <Image
                  width={528}
                  height={528}
                  src={MySql}
                  alt="MySql Logo"
                  className="w-32"
                />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div
                className='p-4'
              >
                <Image
                  width={528}
                  height={528}
                  src={HTMLLogo}
                  alt="HTML Logo"
                  className="w-32"
                />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div
                className='p-4'
              >
                <Image
                  width={528}
                  height={528}
                  src={CSSLogo}
                  alt="CSS Logo"
                  className="w-32"
                />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div
                className='p-4 pt-8'
              >
                <Image
                  width={528}
                  height={528}
                  src={TailwindLogo}
                  alt="Tailwind Logo"
                  className="w-32"
                />
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </section >
  )
}

export default AboutTechLogosSection