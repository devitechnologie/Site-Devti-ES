"use client"

import { cn } from "@/utils/cn";
import { useWindowScroll } from "@uidotdev/usehooks";
import { useTranslations } from "next-intl";
import { Link as ScrollLink } from "react-scroll";

const MobileAppsHeroSection = () => {
  const t = useTranslations()
  const [{ y }] = useWindowScroll()

  return (
    <section
      className="flex flex-col items-center justify-center app-container min-h-[calc(100vh-80px)] -mt-10 mb-10"
    >
      <div
        className="flex-1 flex justify-center items-center flex-col"
      >
        <h6
          className="text-primary-light-purple text-base border border-primary-light-purple px-3 py-1 rounded-full w-fit font-normal font-raleway mx-auto sm:mx-0"
        >
          DevtiTechnologie
        </h6>
        <h1
          className="mt-8 sm:mt-3 text-[42px] text-center font-bold font-raleway text-primary-dark-purple uppercase max-w-[600px] leading-[1.15]"
        >
          {t('mobile_apps.hero.title')}
          {' '}
          <span
            className="text-primary-normal-purple"
          >
            {t('mobile_apps.hero.title_highlight')}
          </span>
        </h1>
        <p
          className="mt-8 sm:mt-4 text-xl text-center font-normal font-raleway text-primary-dark-purple max-w-[550px]"
        >
          {t('mobile_apps.hero.description')}
        </p>
      </div>
      <ScrollLink
        to="portfolio"
        spy={true}
        smooth={true}
        offset={-120}
        duration={500}
      >
        <div
          className={cn(
            'absolute bottom-2 left-1/2 transform -translate-x-1/2 cursor-pointer z-50 h-[80px] w-[34px] transition-opacity duration-300',
            {
              '!opacity-0': y && y > 10,
            },
          )}
        >
          <div className="chevron"></div>
          <div className="chevron"></div>
          <div className="chevron"></div>
        </div>
      </ScrollLink>
    </section>
  )
}

export default MobileAppsHeroSection