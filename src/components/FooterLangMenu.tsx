"use client"

import { IoMdArrowDropup } from "react-icons/io"
import { motion, AnimatePresence } from "framer-motion"
import { useState } from "react"
import { useLocale, useTranslations } from "next-intl"

import { usePathname, useRouter } from "next/navigation"

const FooterLangMenu = () => {
  const t = useTranslations()
  const currentLocale = useLocale();
  const lang = currentLocale === 'fr' ? 'french' : 'english'
  const router = useRouter()
  let currentPathname = usePathname()
  const [isLangMenuOpen, setIsLangMenuOpen] = useState(false)

  const handleLangMenu = () => {
    setIsLangMenuOpen(!isLangMenuOpen)
  }

  const changeLanguage = (newLocale: string) => {
    const days = 30;
    const date = new Date();
    date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000);
    const expires = date.toUTCString();
    document.cookie = `NEXT_LOCALE=${newLocale};expires=${expires};path=/`;

    if (
      currentLocale === 'fr' &&
      !currentLocale
    ) {
      router.push('/' + newLocale + currentPathname);
    } else {
      router.push(
        currentPathname.replace(`/${currentLocale}`, `/${newLocale}`)
      );
    }

    router.refresh();

  }

  return (
    <div className='relative'>
      <button
        onClick={() => handleLangMenu()}
        onBlur={() => setIsLangMenuOpen(false)}
        className='flex items-center gap-2 text-sm not-italic font-normal px-4 py-3 rounded-md text-primary-white hover:text-primary-normal-purple transition-all bg-gray-800'
      >
        <span>
          {t(lang)}
          {' '}<span className='uppercase'>({currentLocale})</span>
        </span>
        <IoMdArrowDropup />
      </button>
      {/* lang menu */}
      <AnimatePresence>
        {
          isLangMenuOpen && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              transition={{ duration: .2 }}
              className='absolute bottom-full right-0  w-full bg-primary-white py-1 rounded-sm shadow-md overflow-hidden'
            >
              <ul
                className='flex flex-col gap-1'
              >
                <li
                  className={`text-sm not-italic font-normal hover:bg-gray-200  px-4 py-3 text-gray-800 cursor-pointer hover:text-primary-dark-purple transition-all ${currentLocale === 'fr' ? 'bg-gray-200' : 'bg-primary-white'}`}
                  onClick={() => changeLanguage('fr')}
                >
                  {t('french')} (FR)
                </li>
                <li
                  className={`text-sm not-italic font-normal hover:bg-gray-200  px-4 py-3 text-gray-800 cursor-pointer hover:text-primary-dark-purple transition-all ${currentLocale === 'en' ? 'bg-gray-200' : 'bg-primary-white'}`}
                  onClick={() => changeLanguage('en')}
                >
                  {t('english')} (EN)
                </li>
              </ul>
            </motion.div>
          )
        }
      </AnimatePresence>
    </div>
  )
}

export default FooterLangMenu