"use client"

import { useEffect, useState } from "react"
import { AnimatePresence, motion } from "framer-motion"
import Cookies from 'js-cookie'
import Link from "next/link"
import { useTranslations } from "next-intl"

const CookiesNotification = () => {
  const [isAccepted, setIsAccepted] = useState(false)
  const t = useTranslations()

  useEffect(() => {
    if (Cookies.get('cookieConsent') === 'accepted') {
      setIsAccepted(true)
    }
  }, [])

  const handleAccept = () => {
    Cookies.set('cookieConsent', 'accepted', { expires: 365 })
    setIsAccepted(true)
  }

  const handleRefuse = () => {
    Cookies.set('cookieConsent', 'refused', { expires: 365 })
    setIsAccepted(true)
  }

  return (
    <AnimatePresence>
      {!isAccepted && (
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 20 }}
          transition={{ duration: 0.3 }}
          className="fixed max-w-md p-4 mx-auto bg-white border border-gray-200 dark:bg-gray-800 left-4 bottom-4 right-4 sm:left-12 sm:right-auto dark:border-gray-700 rounded-2xl z-20">
          <h2 className="font-semibold text-gray-800 dark:text-white">
            {t("cookie-notification.title")}
          </h2>

          <p className="mt-4 text-sm text-gray-600 dark:text-gray-300">
             {" "}
            {t("cookie-notification.description")}
            <Link
              href="/terms"
              target="_blank"
              className="text-blue-500 hover:underline">
              {t("cookie-notification.link")}
            </Link>.
          </p>

          <div className="flex items-center justify-end mt-4 gap-x-2 shrink-0">
            <button
              onClick={handleAccept}
              className="text-xs bg-gray-900 font-medium rounded-lg hover:bg-gray-700 text-white px-4 py-2.5 duration-300 transition-colors focus:outline-none">
              {t("cookie-notification.accept")}
            </button>
            <button
              onClick={handleRefuse}
              className="text-xs bg-gray-200 font-medium rounded-lg hover:bg-gray-300 px-4 py-2.5 duration-300 transition-colors focus:outline-none">
              {t("cookie-notification.refuse")}
            </button>
          </div>
        </motion.section>
      )
      }
    </AnimatePresence>
  )
}

export default CookiesNotification