"use client"

import { MdArrowOutward } from "react-icons/md"
import Image from "next/image"
import { useTranslations } from "next-intl"
import Link from "next/link"

type PortfolioCardProps = {
  image: string
  title: string
  colspan: number
  alt?: string
}

const PortfolioCard = ({ image, title, colspan, alt }: PortfolioCardProps) => {
  const t = useTranslations()

  return (
    <div
      className="relative group overflow-hidden rounded-lg shadow-card-shadow-border"
      style={{ gridColumn: `span ${colspan}` }}
    >
      <Image
        alt={alt ? alt : title}
        className="block h-full w-full rounded-lg object-cover object-center"
        src={image}
        width={900}
        height={700}
      />
      {/* shadow */}
      <div
        className="absolute inset-0 bg-black opacity-0 group-hover:opacity-50 transition-opacity duration-300"
      ></div>
      {/* text */}
      <Link
        href="/realisation"
        className="absolute inset-0 opacity-0 z-10 group-hover:opacity-100 flex-col flex justify-center items-center h-full w-full transition-opacity duration-300"
      >
        <div
          className="flex flex-col items-center justify-center group"
        >
          <div
            className="bg-primary-normal-purple text-white flex items-center justify-center p-4 text-2xl w-fit h-fit rounded-full"
          >
            <MdArrowOutward />
          </div>
          <p
            className="text-white mt-4 cursor-pointer hover:underline font-semibold"
          >
            {
              t('home.portfolio.seeMore')
            }
          </p>
        </div>
      </Link>
      {/* text-left-bottom */}
      <div
        className="absolute inset-0 opacity-0 group-hover:opacity-100 flex-col flex justify-end items-start h-full w-full transition-opacity duration-300"
      >
        <p
          className="text-primary-white text-lg m-4 cursor-pointer font-semibold"
        >
          {title}
        </p>
      </div>
    </div>
  )
}

export default PortfolioCard