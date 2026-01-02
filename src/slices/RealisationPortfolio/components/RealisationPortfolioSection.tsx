"use client"

import { useTranslations } from "next-intl";
import { useEffect, useState } from "react"
import { AnimatePresence, motion } from "framer-motion"
import Image from "next/image";
import { Content } from "@prismicio/client";
import { PrismicNextImage, PrismicNextLink } from "@prismicio/next";
import { MdArrowOutward } from "react-icons/md";
import Link from "next/link";

type SitesTypes = Content.RealisationCategoryDocument<string>

type RealisationPortfolioSectionProps = {
  title: string
  categories: Content.RealisationCategoryDocument<string>[]
  listItems: Content.RealisationdetailspageDocument<string>[]
}

export const RealisationPortfolioSection = ({ title, listItems, categories }: RealisationPortfolioSectionProps) => {
  const t = useTranslations()
  const [activeType, setActiveType] = useState<string | "all">("all")

  return (
    <section>
      <div className="app-container section-pt">
        <div>
          <h2
            className="title-h2-2"
          >
            {title}
          </h2>
        </div>
        <div className="mt-8">
          {/* list types */}
          <div
            className="flex items-center gap-4 flex-wrap"
          >
            <div
              onClick={() => setActiveType("all")}
              className={`select-type ${activeType === "all" ? "active" : ""}`}
            >
              {t("realisation.portfolio.all")}
            </div>
            {categories.map((type, index) => (
              <div
                key={index}
                onClick={() => setActiveType(type.uid)}
                className={`select-type ${activeType === type.uid ? "active" : ""}`}
              >
                {type.data.name}
              </div>
            ))}
          </div>
        </div>
        <div
          className="grid grid-cols-1 overflow-hidden md:grid-cols-2 gap-6 md:gap-16 mt-8"
        >
          <AnimatePresence>
            {
              listItems.sort((a, b) => (parseFloat(a.data.priority) ?? 0) - (parseFloat(b.data.priority) ?? 0)).reverse().map((item) => {
                if ((activeType !== "all" && (item.data.category as any)?.uid !== activeType)) return null;
                return (
                  <motion.div
                    animate={{
                      opacity: 1,
                    }}
                    initial={{
                      opacity: 0,
                    }}
                    exit={{
                      opacity: 0,
                    }}
                    layout="position"
                    key={item.uid}

                  >
                    <Link
                      href={`/realisation/${item.uid}`}
                    >
                      <div className="bg-gray-100 rounded-lg overflow-hidden px-6 pt-4 md:px-14 md:pt-10 group relative">
                        <div className="hover:scale-105 hover:-translate-y-2 transform transition-all duration-300">
                          <PrismicNextImage
                            width={400}
                            height={600}
                            field={item.data.project_presentation_image}
                            className="hover:scale-105 hover:-translate-y-2 w-full h-full max-h-[468px] max-w-[440px] object-cover object-top hover:object-bottom duration-[10s] rounded-t-xl overflow-hidden transform transition-all ease-in-out"
                          />
                        </div>
                        <span
                          className="absolute top-5 right-5 opacity-0 z-10 group-hover:opacity-100 flex-col flex transition-opacity duration-300"
                        >
                          <div
                            className="flex flex-col items-center justify-center group"
                          >
                            <div
                              className="bg-primary-normal-purple text-white flex items-center justify-center p-4 text-2xl w-fit h-fit rounded-full"
                            >
                              <MdArrowOutward />
                            </div>
                          </div>
                        </span>

                        {/* project name position */}
                        <div
                          className="absolute bottom-[12px] left-5 right-5 z-10"
                        >
                          <h3 className="text-primary-normal-purple group-hover:underline text-lg text-center font-semibold">{item.data.project_name}</h3>
                          <p
                            className="text-black font-semibold text-sm text-center"
                          >
                            {item.data.client_name}
                          </p>
                        </div>

                        <div className="h-[70px]"></div>

                        {/* overlay */}
                        <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-10 pointer-events-none transition-opacity duration-300"></div>
                      </div>
                    </Link>
                  </motion.div>
                )
              })
            }
          </AnimatePresence>
        </div>
      </div>
    </section>
  )
}
