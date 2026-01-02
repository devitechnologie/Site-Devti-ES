"use client"

import PortfolioCard from "@/components/PortfolioCard";
import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";
import { useTranslations } from "next-intl";
import Link from "next/link";
import { useState } from "react";
import { Fade } from "react-awesome-reveal";

const WebSitePic1 = '/images/portfolio/gr8fulone.webp'
const WebSitePic2 = '/images/portfolio/induwood.webp'
const WebSitePic4 = '/images/portfolio/tripbookingSite.webp'
const DiabolusApp = '/images/portfolio/diabolus.png'
const SPAPic = '/images/portfolio/spa.webp'
const TripBookingPic = '/images/portfolio/tutor-mobile.png'
const AirCubPic = '/images/portfolio/aircub.webp'
const AirCubAppPic = '/images/portfolio/aircub-app.webp'
const AirCubSitePic = '/images/portfolio/aircub-site.webp'
const SPAAppPic = '/images/portfolio/spa-app.webp'
const MotorushPic = '/images/portfolio/motorush.webp'
const CareerLinkPic = '/images/portfolio/careerlink.webp'
const OPLOPic = '/images/portfolio/oplo.webp'
const SpaWebPic = '/images/portfolio/spa-web.webp'
const MojannahPic = '/images/portfolio/mojannah-web.png'
const AtlasfleuriePic = '/images/portfolio/atlasfleurie.png'

/**
 * Props for `Portfolio`.
 */
export type PortfolioProps = SliceComponentProps<Content.PortfolioSlice>;

type AppsTypes = "Application Mobile" | "Site Vitrine" | "Site sur Mesure" | "Application Web"

const listItems: AppsTypes[] = [
  "Application Mobile",
  "Site Vitrine",
  "Site sur Mesure",
  "Application Web"
]

const Portfolio = ({ slice }: PortfolioProps): JSX.Element => {
  const t = useTranslations()
  const [activeType, setActiveType] = useState<AppsTypes>("Application Mobile")

  return (
    <section className="app-container section-py">
      <div>
        <Fade
          direction="up"
          triggerOnce
        >
          <h2 className="title-h2 text-center">
            {
              t('home.portfolio.title')
            }
          </h2>
        </Fade>
        <Fade
          direction="up"
          triggerOnce
          delay={100}
        >
          <p className="title-p text-center mt-5 max-w-[750px] mx-auto">
            {
              t('home.portfolio.description')
            }
          </p>
        </Fade>
      </div>
      {/* websites images */}
      <div className='lg:mx-16 mt-8'>
        <div>
          {/* list types */}
          <div
            className="flex items-center justify-center gap-4 flex-wrap"
          >
            {Array.from(new Set(listItems)).map((type, index) => (
              <div
                key={index}
                onClick={() => setActiveType(type)}
                className={`select-type ${activeType === type ? "active" : ""}`}
              >
                {t(`${type}`)}
              </div>
            ))}
          </div>
          {
            activeType === "Site Vitrine" && <SiteVitrine />
          }
          {
            activeType === "Site sur Mesure" && <AppSurMesure />
          }
          {
            activeType === "Application Mobile" && <MobileApp />
          }
          {
            activeType === "Application Web" && <ApplicationWeb />
          }
        </div>
      </div>
      <div>
        <Fade
          direction="up"
          triggerOnce
          delay={100}
        >
          <div className="flex justify-center mt-10">
            <Link
              href="/realisation"
              className="btn-colored"
            >
              {
                t('voir_plus')
              }
            </Link>
          </div>
        </Fade>
      </div>
    </section>
  )
};

const ApplicationWeb = () => {
  return (
    <div className="py-4 lg:pt-8 flex flex-col gap-4">
      <div
        className="grid grid-cols-5 gap-4"
      >
        <PortfolioCard
          image={MotorushPic}
          title=""
          colspan={2}
        />
        <PortfolioCard
          image={AirCubAppPic}
          title=""
          colspan={3}
        />
      </div>
      <div
        className="grid grid-cols-5 gap-4"
      >
        <PortfolioCard
          image={SPAAppPic}
          title=""
          colspan={3}
        />
        <PortfolioCard
          image={CareerLinkPic}
          title=""
          colspan={2}
        />
      </div>
    </div>
  )
}

const AppSurMesure = () => {
  return (
    <div className="py-4 lg:pt-8 flex flex-col gap-4">
      <div
        className="grid grid-cols-5 gap-4"
      >
        <PortfolioCard
          image={SpaWebPic}
          title=""
          colspan={2}
        />
        <PortfolioCard
          image={MojannahPic}
          title=""
          colspan={3}
        />
      </div>
      <div
        className="grid grid-cols-5 gap-4"
      >
        <PortfolioCard
          image={AtlasfleuriePic}
          title=""
          colspan={3}
        />
        <PortfolioCard
          image={AirCubSitePic}
          title=""
          colspan={2}
        />
      </div>
    </div>
  )
}

const MobileApp = () => {
  return (
    <div className="py-4 lg:pt-8 flex flex-col gap-4">
      <div
        className="grid grid-cols-5 gap-4"
      >
        <PortfolioCard
          image={AirCubPic}
          title=""
          colspan={2}
        />
        <PortfolioCard
          image={TripBookingPic}
          title=""
          colspan={3}
        />
      </div>
      <div
        className="grid grid-cols-5 gap-4"
      >
        <PortfolioCard
          image={DiabolusApp}
          title=""
          colspan={3}
        />
        <PortfolioCard
          image={SPAPic}
          title=""
          colspan={2}
        />
      </div>
    </div>
  )
}

const SiteVitrine = () => {
  return (
    <div className="py-4 lg:pt-8 flex flex-col gap-4">
      <div
        className="grid grid-cols-5 gap-4"
      >
        <PortfolioCard
          image={WebSitePic1}
          title=""
          colspan={2}
        />
        <PortfolioCard
          image={WebSitePic4}
          title=""
          colspan={3}
        />
      </div>
      <div
        className="grid grid-cols-5 gap-4"
      >
        <PortfolioCard
          image={WebSitePic2}
          title=""
          colspan={3}
        />
        <PortfolioCard
          image={OPLOPic}
          title=""
          colspan={2}
        />
      </div>
    </div>
  )
}

export default Portfolio;
