"use client"

import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";
import { FaLongArrowAltRight, FaWhatsapp } from "react-icons/fa"
import { Fade } from "react-awesome-reveal"
import { Swiper, SwiperSlide } from "swiper/react"
import { Autoplay, Pagination, Navigation } from "swiper/modules"
import Link from "next/link";
import Image from "next/image";
import { useTranslations } from "next-intl";
import { PrismicNextImage, PrismicNextLink } from "@prismicio/next";

/**
 * Props for `HeroSlider`.
 */
export type HeroSliderProps = SliceComponentProps<Content.HeroSliderSlice>;

/**
 * Component for "HeroSlider" Slices.
 */
const HeroSlider = ({ slice }: HeroSliderProps): JSX.Element => {
  const t = useTranslations()

  return (
    <Swiper
      spaceBetween={0}
      slidesPerView={1}
      navigation={
        {
          nextEl: '.custom-button-next',
          prevEl: '.custom-button-prev',
        }
      }
      pagination={{
        clickable: true,
        dynamicBullets: true,
      }}
      loop
      autoplay={{
        delay: 10000,
        waitForTransition: false,
      }}
      modules={[Autoplay, Pagination, Navigation]}
      className="relative z-10"
    >
      {
        slice.primary.hero_slides.map((item, index) => {
          // const TitleComponent = index === 0 ? 'h1' : 'h2'
          const TitleComponent = index === 0 ? 'p' : 'p'
          return (
            <SwiperSlide key={index}>
              <section
                className="flex items-center justify-center gap-16 md:gap-0 md:justify-between flex-col md:flex-row app-container pt-4 min-h-[calc(100vh-150px)]"
              >
                <div>
                  <Fade
                    direction="up"
                    triggerOnce
                  >
                    <h6
                      className="text-primary-light-purple text-base border border-primary-light-purple px-3 py-1 rounded-full w-fit font-normal font-raleway mx-auto sm:mx-0"
                    >
                      Devti Technologie
                    </h6>
                  </Fade>
                  <Fade
                    direction="up"
                    triggerOnce
                    delay={100}
                    duration={500}
                  >
                    <TitleComponent
                      className="mt-8 sm:mt-4 text-3xl text-center sm:text-start sm:text-6xl font-bold font-raleway text-primary-dark-purple uppercase max-w-[600px] leading-[1.15]"
                    >
                      {
                        item.title
                      }
                      <span
                        className="text-primary-normal-purple"
                      >
                        {
                          ` ${item.colored_title}`
                        }
                      </span>
                    </TitleComponent>
                  </Fade>
                  <Fade
                    direction="up"
                    triggerOnce
                    delay={200}
                  >
                    <p
                      className="mt-8 sm:mt-4 text-xl text-center sm:text-start font-normal font-raleway text-primary-dark-purple max-w-[550px]"
                    >
                      {
                        item.subtitle
                      }
                    </p>
                  </Fade>
                  <Fade
                    direction="up"
                    triggerOnce
                    delay={300}
                  >
                    <div
                      className="mt-5 flex items-center gap-5 justify-center sm:justify-start"
                    >
                      <PrismicNextLink
                        field={item.button_link}
                        className="px-4 py-2 rounded-md text-white transition-all italic duration-300 bg-primary-normal-purple hover:bg-opacity-80 font-semibold shadow-md border-primary-normal-purple flex items-center gap-2 border"
                      >
                        {
                          item.button_text
                        }
                        <FaLongArrowAltRight />
                      </PrismicNextLink>
                    </div>
                  </Fade>
                </div>
                {
                  item.hero_image === 'Rocket' && (
                    <div
                      className="relative overflow-hidden w-full md:w-[500px] md:h-[500px] select-none pointer-events-none"
                    >
                      <div
                        className="md:w-[500px] z-10"
                      >
                        <Image
                          src='/images/website_hero.png'
                          alt="Software PIC"
                          width={1500}
                          height={1500}
                        />
                      </div>
                    </div>
                  )
                }
                {
                  item.hero_image === 'Tech' && (
                    <div
                      className="relative overflow-hidden w-full md:w-[500px] md:h-[500px] select-none pointer-events-none"
                    >
                      <div
                        className="md:w-[500px] z-10"
                      >
                        <Image
                          src='/images/mobile_hero.png'
                          alt="Software PIC"
                          width={1500}
                          height={1500}
                        />
                      </div>
                    </div>
                  )
                }
                {
                  item.hero_image === 'Custom' && (
                    <div
                      className="relative overflow-hidden w-full md:w-[500px] md:h-[500px] select-none pointer-events-none"
                    >
                      <div
                        className="md:w-[500px] z-10"
                      >
                        <PrismicNextImage
                          field={item.custom_image}
                          width={1500}
                          height={1500}
                        />
                      </div>
                    </div>
                  )
                }
              </section>
            </SwiperSlide>
          )
        })
      }
      {/* left control */}
      <div
        className="custom-button-prev sm:p-4 absolute top-1/2 left-0 transform -translate-y-1/2 z-50 cursor-pointer"
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
        className="custom-button-next sm:p-4 absolute top-1/2 right-0 transform -translate-y-1/2 z-50 cursor-pointer"
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
    </Swiper>
  );
};

export default HeroSlider;
