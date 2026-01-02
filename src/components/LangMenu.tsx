"use client"

import { AnimatePresence, motion } from 'framer-motion'
import { useLocale, useTranslations } from 'next-intl'
import { usePathname, useRouter } from 'next/navigation'
import { useState } from 'react'

const LangMenu = () => {
  const lang = useLocale()
  const [isLangMenuOpen, setIsLangMenuOpen] = useState(false)

  return (
    <div className="relative">
      <button
        className="text-hover"
        onClick={() => setIsLangMenuOpen(!isLangMenuOpen)}
        onBlur={() => setIsLangMenuOpen(false)}
        tabIndex={0}
      >
        {lang === "fr" && <span className="fi fi-fr"></span>}
        {lang === "en" && <span className="fi fi-gb"></span>}
      </button>
      <AnimatePresence>
        {isLangMenuOpen && <LangMenuPopUp />}
      </AnimatePresence>
    </div>
  )
}

const LangMenuPopUp = () => {
  const t = useTranslations()
  const currentLocale = useLocale();
  const router = useRouter()
  let currentPathname = usePathname()

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
    <motion.div
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -10 }}
      transition={{ duration: 0.2 }}
      className={`w-[160px] h-fit absolute top-[32px] ${currentLocale === 'ar' ? 'left-0' : 'right-0'
        } bg-white dark:bg-contact-dark-primary rounded-md shadow-md z-50 border dark:border-sidebar-dark-primary py-2`}
    >
      <ul className='flex flex-col justify-center items-center h-full'>
        <li>
          <button
            onClick={() => {
              changeLanguage('fr')
            }}
            className={`h-9 w-[160px] flex items-center justify-between px-6 hover:bg-[#F8F9FA] cursor-pointer font-[400] text-md text-[#656A70] dark:hover:bg-sidebar-dark-primary dark:text-gray-300 ${currentLocale === 'fr' ? 'bg-[#F8F9FA]' : ''}`}
          >
            <span>
              {t('french')}
            </span>
            <span className="fi fi-fr"></span>
          </button>
        </li>
        <li>
          <button
            onClick={() => {
              changeLanguage('en')
            }}
            className={`h-9 w-[160px] flex items-center justify-between px-6 hover:bg-[#F8F9FA] cursor-pointer font-[400] text-md text-[#656A70] dark:hover:bg-sidebar-dark-primary dark:text-gray-300 ${currentLocale === 'en' ? 'bg-[#F8F9FA]' : ''}`}
          >
            <span>
              {t('english')}
            </span>
            <span className="fi fi-gb"></span>
          </button>
        </li>
      </ul>
    </motion.div>
  )
}

export default LangMenu