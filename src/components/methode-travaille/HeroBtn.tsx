'use client'

import { useTranslations } from "next-intl"
import { FaLongArrowAltRight } from "react-icons/fa"
import { Link } from "react-scroll"

const HeroBtn = () => {
  const t = useTranslations()

  return (
    <Link
      to="methodetravaille"
      smooth
      duration={500}
      offset={-100}
      spy
      className="px-4 py-2 cursor-pointer rounded-md text-white transition-all italic duration-300 bg-primary-normal-purple hover:bg-opacity-80 font-semibold shadow-md border-primary-normal-purple flex items-center gap-2 border"
    >
      {
        t('methodeTravaille.heroSection.button')
      }
      <FaLongArrowAltRight className='rotate-90' />
    </Link>
  )
}

export default HeroBtn