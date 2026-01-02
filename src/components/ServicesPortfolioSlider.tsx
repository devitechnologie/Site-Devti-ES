"use client"

import { useState } from 'react'
import { Swiper, SwiperSlide } from "swiper/react"
import { Navigation, Autoplay } from "swiper/modules"
import { Content } from '@prismicio/client'
import { PrismicNextImage } from '@prismicio/next'

import ProgressLine from './ProgressLine'
import { cn } from '@/utils/cn'

type ServicesPortfolioSliderProps = {
  slides: Content.ServicesPortfolioSliceSliderPortfolioPrimarySlidesItem[]
}

const ServicesPortfolioSlider = ({ slides }: ServicesPortfolioSliderProps) => {
  const [currentSlide, setCurrentSlide] = useState(1)

  return (
    <div
      className='app-container section-py'
    >
      <div
        className='grid grid-cols-1 md:grid-cols-5 gap-2 md:min-h-[500px]'
      >
        <div className='md:col-span-2 rounded-xl bg-primary-normal-purple min-h-[360px]'>
          <TextSection
            slides={slides}
            currentSlide={currentSlide}
          />
        </div>
        <div className='md:col-span-3 bg-gray-100 rounded-xl'>
          <SliderSection
            slides={slides}
            currentSlide={currentSlide}
            setCurrentSlide={setCurrentSlide}
          />
        </div>
      </div>
    </div>
  )
}

const TextSection = ({ slides, currentSlide }: ServicesPortfolioSliderProps & { currentSlide: number }) => {
  return (
    <div
      className='p-7 md:p-12 flex flex-col items-center justify-center'
    >
      <ProgressLine
        progress={currentSlide}
        progressLength={slides.length}
      />
      <h2
        className='title-h2-c mt-7 md:mt-16 text-white text-center line-clamp-2'
      >
        {slides.length > 0 && slides[currentSlide - 1] ? slides[currentSlide - 1].title : ''}
      </h2>

      {/* divider */}
      <div
        className='mt-7 md:mt-16 flex items-center justify-center gap-4 w-full'
      >
        <div
          className='w-full h-[2px] rounded-full bg-primary-light-purple bg-opacity-30'
        ></div>
        <p
          className='px-4 py-2 bg-white rounded-full text-primary-normal-purple font-raleway font-normal text-base'
        >
          {slides.length > 0 && slides[currentSlide - 1] ? slides[currentSlide - 1].badge_text : ''}
        </p>
        <div
          className='w-full h-[2px] bg-primary-light-purple bg-opacity-30'
        ></div>
      </div>

      <p
        className='mt-7 md:mt-16 text-white text-center line-clamp-5'
      >
        {slides.length > 0 && slides[currentSlide - 1] ? slides[currentSlide - 1].description : ''}
      </p>
    </div>
  )
}

const SliderSection = ({ slides, currentSlide, setCurrentSlide }: ServicesPortfolioSliderProps & { currentSlide: number, setCurrentSlide: (slide: number) => void }) => {

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
          delay: 10000,
          waitForTransition: false,
        }}
        modules={[Navigation, Autoplay]}
        className="h-full"
        onSlideChange={(swiper) => {
          setCurrentSlide(swiper.realIndex + 1)
        }}
      >
        {
          slides.map((slide, index) => {
            return (
              <SwiperSlide key={index}>
                <PrismicNextImage
                  field={slide.image}
                  width={1920}
                  height={1080}
                  className='w-full h-full object-cover'
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

export default ServicesPortfolioSlider