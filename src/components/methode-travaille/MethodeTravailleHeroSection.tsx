import HyperLink from "next/link"
import Image from "next/image"
import { getTranslations } from "next-intl/server"
import HeroBtn from "./HeroBtn"

const BgPic = "/images/Mind map-bro.svg"

const MethodeTravailleHeroSection = async () => {
  const t = await getTranslations()

  return (
    <section
      className="flex flex-col sm:flex-row items-center justify-between app-container min-h-[calc(100vh-80px)] sm:pt-[0px] pt-[16px]"
    >
      <div>
        <h6
          className="text-primary-light-purple text-base border border-primary-light-purple px-3 py-1 rounded-full w-fit font-normal font-raleway mx-auto sm:mx-0"
        >
          {
            t('methodeTravaille.heroSection.h6')
          }
        </h6>
        <h1
          className="mt-8 title-h1-2"
        >
          {
            t('methodeTravaille.heroSection.h1')
          }
          <span
            className="text-primary-normal-purple"
          >
            {` `}{t('methodeTravaille.heroSection.h1Highlight')}
          </span>
        </h1>
        <p
          className="mt-8 title-p-2"
        >
          {
            t('methodeTravaille.heroSection.p')
          }
          {' '}
          <HyperLink
            href="/"
            className="hover:underline hover:text-primary-normal-purple transition-all duration-300"
          >
            {
              t('methodeTravaille.heroSection.p2')
            }
          </HyperLink>
          {
            t('methodeTravaille.heroSection.p3')
          }
        </p>
        <div
          className="mt-5 flex items-center gap-5 justify-center sm:justify-start"
        >
          <HeroBtn />
        </div>
      </div>
      <div
        className="relative overflow-hidden w-[300px] h-[300px] sm:w-[500px] sm:h-[500px] select-none pointer-events-none "
      >
        <div
          className="sm:w-[500px]"
        >
          <Image
            width={800}
            height={800}
            src={BgPic}
            alt="Mind map"
          />
        </div>
      </div>
    </section>
  )
}

export default MethodeTravailleHeroSection