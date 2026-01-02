"use client"

import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";
import { useTranslations } from "next-intl";
import { Fade } from "react-awesome-reveal"
// import Slider from "react-slick"
import Marquee from "react-fast-marquee"
import { Link } from 'react-scroll'
import Image from "next/image";

const WebSitePic = "/images/ourapps/ourapps1.png"
const SiteVitrine1 = "/images/ourapps/ourapps2.png"
const SiteVitrine2 = "/images/ourapps/ourapps3.png"
const SiteeCom1 = "/images/ourapps/ourapps4.png"
const SiteeCom2 = "/images/ourapps/ourapps5.webp"
const SiteInstutionel1 = "/images/ourapps/ourapps6.png"
const SiteInstutionel7 = "/images/ourapps/ourapps7.png"
// ---------------------
const SiteInstutionel2 = "/images/SiteInstutionel/pic2.webp"
const SiteRealisation3 = "/images/SiteReservation/pic3.webp"
const SiteRealisation4 = "/images/SiteReservation/pic4.webp"
const SiteB2B1 = "/images/SiteB2B/pic1.webp"
const WebSitePic2 = "/images/website3.png"
const SiteVitrine12 = "/images/siteweb/siteVitrinepic1.webp"
const SiteVitrine22 = "/images/siteweb/siteVitrinepic2.webp"
const SiteeCom12 = "/images/siteecom/pic1.webp"
const SiteeCom22 = "/images/siteecom/pic2.webp"
const SiteInstutionel12 = "/images/SiteInstutionel/pic1.webp"
const SiteInstutionel10 = "/images/ourapps/pic4.webp"
const SiteInstutionel125 = "/images/ourapps/website1.png"
const SiteInstutionel122 = "/images/ourapps/website2.png"



const listImagesTop = [
  WebSitePic, SiteVitrine1, SiteVitrine2, SiteeCom1, SiteeCom2, SiteInstutionel1, SiteInstutionel7, SiteRealisation3, SiteRealisation4, SiteB2B1,
]

const listImagesBottom = [
  SiteInstutionel2, WebSitePic2, SiteVitrine12, SiteVitrine22, SiteeCom12, SiteeCom22, SiteInstutionel12, SiteInstutionel10, SiteInstutionel125, SiteInstutionel122
]

/**
 * Props for `RealisationHero`.
 */
export type RealisationHeroProps =
  SliceComponentProps<Content.RealisationHeroSlice>;

/**
 * Component for "RealisationHero" Slices.
 */
const RealisationHero = ({ slice }: RealisationHeroProps): JSX.Element => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className="overflow-x-hidden"
    >
      <RealisationHeroSection
        listImagesTop={listImagesTop}
        listImagesBottom={listImagesBottom}
      />
    </section>
  );
};

type RealisationHeroSectionProps = {
  listImagesTop: string[],
  listImagesBottom: string[]
}

const RealisationHeroSection = ({ listImagesTop, listImagesBottom }: RealisationHeroSectionProps) => {
  const t = useTranslations()
  // const [firstHalf, secondHalf] = splitArrayInHalf(listImages)

  return (
    <section
      className="min-h-[calc(100vh-80px)] sm:pt-[50px] pt-[16px]"
    >
      <div className="flex flex-col items-center justify-center app-container ">
        <div
          className="flex-1 flex justify-center items-center flex-col"
        >
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
            <h1
              className="mt-8 sm:mt-4 text-5xl text-center sm:text-6xl font-bold font-raleway text-primary-dark-purple uppercase max-w-[600px] leading-[1.15]"
            >
              {
                t("realisation.heroSection.title") + " "
              }
              <span
                className="text-primary-normal-purple"
              >
                {t("realisation.heroSection.titleHighlight")}
              </span>
            </h1>
          </Fade>
          <Fade
            direction="up"
            triggerOnce
            delay={200}
          >
            <p
              className="mt-8 sm:mt-4 text-xl text-center font-normal font-raleway text-primary-dark-purple max-w-[550px]"
            >
              {
                t("realisation.heroSection.description")
              }
            </p>
          </Fade>
          <Fade
            direction="up"
            triggerOnce
            delay={300}
          >
            <div
              className="mt-8 sm:mt-4 flex justify-center items-center"
            >
              <Link
                to="portfolio"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                className="button-2 block cursor-pointer"
              >
                {
                  t("realisation.heroSection.button")
                }
              </Link>
            </div>
          </Fade>
        </div>
      </div>
      <div
        className="w-[100%] select-none pointer-events-none mt-16"
      >
        <div className="relative">
          <Marquee
            className="w-full h-full"
            gradient={false}
            speed={50}
            pauseOnHover={true}
            direction="right"
            style={{ overflow: "hidden" }}
          >
            {
              listImagesTop.map((item, index) => (
                <div
                  key={index}
                  className="flex justify-center items-center px-2 py-[2px]"
                >
                  <div className="shadow-card-shadow-border rounded-lg overflow-hidden w-[280px]">
                    <Image
                      width={500}
                      height={500}
                      src={item}
                      alt="item image"
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              ))
            }
          </Marquee>
          {/* shadow right */}
          <div
            className="absolute inset-y-0 right-[-2px] w-44 bg-gradient-to-l from-white to-transparent z-20 pointer-events-none"
          ></div>
          {/* shadow left */}
          <div
            className="absolute inset-y-0 left-[-2px] w-44 bg-gradient-to-r from-white to-transparent z-20 pointer-events-none"
          ></div>
        </div>
        <div className="relative">
          <Marquee
            gradient={false}
            speed={50}
            pauseOnHover={true}
            direction="left"
            style={{ overflow: "hidden" }}
            className="w-full h-full mt-1 md:mt-[10px]"
          >
            {
              listImagesBottom.reverse().slice().map((item, index) => (
                <div
                  key={index}
                  className="flex justify-center items-center px-2 py-[2px]"
                >
                  <div className="shadow-card-shadow-border rounded-lg overflow-hidden w-[280px]">
                    <Image
                      width={500}
                      height={500}
                      src={item}
                      alt="item image"
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              ))
            }
          </Marquee>
          {/* shadow right */}
          <div
            className="absolute inset-y-0 right-[-2px] w-44 bg-gradient-to-l from-white to-transparent z-20 pointer-events-none"
          ></div>
          {/* shadow left */}
          <div
            className="absolute inset-y-0 left-[-2px] w-44 bg-gradient-to-r from-white to-transparent z-20 pointer-events-none"
          ></div>
        </div>
      </div>
    </section >
  )
}

export default RealisationHero;
