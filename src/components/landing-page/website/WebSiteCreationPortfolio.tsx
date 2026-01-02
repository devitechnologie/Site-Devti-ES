"use client"

import { Swiper, SwiperSlide } from "swiper/react"
import { Navigation, Autoplay } from "swiper/modules"

import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'

import { cn } from '@/utils/cn'

import { useState } from "react"
import Image from "next/image"
import { Link } from "react-scroll"

const slides = [
  {
    image: '/images/portfolio/mojannah-web.png',
    name: 'mojannah',
  },
  {
    image: '/images/portfolio/oplo.webp',
    name: 'oplo',
  },
  {
    image: '/images/portfolio/atlasfleurie.png',
    name: 'atlasfleurie',
  },
  {
    image: '/images/portfolio/induwood.webp',
    name: 'induwood',
  },
]

const WebSiteCreationPortfolio = () => {
  return (
    <section className="max-md:bg-primary-dark-purple">
      <div className="app-container section-py">
        <div
          className="rounded-2xl overflow-hidden grid grid-cols-1 lg:grid-cols-2"
        >
          <div>
            <SectionSlider />
          </div>
          <div className="max-lg:order-first">
            <SectionText />
          </div>
        </div>
      </div>
    </section>
  )
}

const SectionSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(1)

  return (
    <div className='w-full h-full rounded-xl overflow-hidden relative'>
      <Swiper
        spaceBetween={0}
        slidesPerView={1}
        navigation={
          {
            nextEl: '.arrow-button-next',
            prevEl: '.arrow-button-prev',
          }
        }
        autoplay={{
          delay: 2000,
          waitForTransition: false,
        }}
        modules={[Navigation, Autoplay]}
        className="h-full bg-slate-50"
        onSlideChange={(swiper) => {
          setCurrentSlide(swiper.realIndex + 1)
        }}
      >
        {
          slides.map((slide, index) => {
            return (
              <SwiperSlide key={index}>
                <Image
                  src={slide.image}
                  alt={slide.name}
                  width={1200}
                  height={1200}
                  className='w-full h-full object-contain'
                />
              </SwiperSlide>
            )
          })
        }
      </Swiper>

      {/* page number */}
      <div
        className='absolute z-20 bottom-4 left-4'
      >
        <span
          className='title-p'
        >
          {
            currentSlide
          }/{slides.length}
        </span>
      </div>

      {/* arrow buttons */}
      <div
        className={cn(
          'arrow-button-prev sm:p-4 absolute top-1/2 left-0 transform -translate-y-1/2 z-20 cursor-pointer',
          currentSlide === 1 && 'opacity-0'
        )}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-9 w-9 text-primary-normal-purple"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M15 19l-7-7 7-7"
          />
        </svg>
      </div>
      {/* right control */}
      <div
        className={cn(
          "arrow-button-next sm:p-4 absolute top-1/2 right-0 transform -translate-y-1/2 z-20 cursor-pointer",
          currentSlide === slides.length && 'opacity-0'
        )}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-9 w-9 text-primary-normal-purple"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M9 5l7 7-7 7"
          />
        </svg>
      </div>
    </div>
  )
}

const SectionText = () => {
  return (
    <div className="bg-primary-dark-purple section-py md:px-6 text-center text-white max-lg:order-first flex flex-col justify-center items-center">
      <h6
        className="bg-white text-sm md:text-base font-semibold px-4 py-2 w-fit rounded-full text-primary-dark-purple max-md:text-center"
      >
        Bienvenue dans notre agence web experte.
      </h6>
      <h2
        className="font-black text-[28px] leading-[35px] uppercase mt-5 max-sm:max-w-[280px] mx-auto"
      >
        Demandez nos services et obtenez  <p className="text-primary-normal-purple">un site web impressionnant</p> qui donnera une valeur exceptionnelle à votre entreprise.
      </h2>
      <p
        className="text-base font-medium mt-5"
      >
        Votre site web contribuera à renforcer votre visibilité en ligne et à améliorer l’interaction avec votre public cible. Vous disposerez ainsi d’un outil puissant pour attirer davantage de clients et augmenter votre taux de conversion.
      </p>

      <div
        className="mt-5"
      >
        <Link
          to="cta-form"
          smooth={true}
          duration={500}
          offset={-300}
          className="bg-primary-normal-purple uppercase inline-block cursor-pointer text-white px-4 py-3 md:px-6 md:py-4 rounded-full w-fit font-bold hover:bg-white hover:text-primary-dark-purple transition-all duration-200 text-sm md:text-base"
        >
          Réservez une consultation gratuite
        </Link>
      </div>
    </div>
  )
}

export default WebSiteCreationPortfolio