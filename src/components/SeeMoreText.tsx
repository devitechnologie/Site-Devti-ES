"use client"

import { truncateText } from "@/utils/helpers"

import { useTranslations } from "next-intl"
import { useState } from "react"

type SeeMoreTextProps = {
  text: string
  limit: number
}

const SeeMoreText = ({ text, limit }: SeeMoreTextProps) => {
  const [isExpanded, setIsExpanded] = useState(false)
  const t = useTranslations()
  return (
    <>
      {truncateText(text, isExpanded ? text.length : limit)}
      {' '}
      <div
        onClick={() => setIsExpanded((prev) => !prev)}
        className="text-primary-normal-purple underline text-sm font-semibold mt-2 cursor-pointer hover:text-primary-dark-purple transition-all duration-300"
      >
        {text.length > limit ? (!isExpanded ? t('lire_la_suite') : t('voir_moins')) : ''}
      </div>
    </>
  )
}

export default SeeMoreText