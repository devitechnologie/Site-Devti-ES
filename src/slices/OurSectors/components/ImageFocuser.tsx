"use client"

import { cn } from "@/utils/cn"

import { Content } from "@prismicio/client"
import { PrismicNextLink } from "@prismicio/next"
import { PrismicImage } from "@prismicio/react"
import { useState } from "react"

type ImageFocuserProps = {
  slides: Content.OurSectorsSliceDefaultPrimarySectorsItem[]
}

const ImageFocuser = ({ slides }: ImageFocuserProps) => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null)

  const handleMouseEnter = (index: number) => {
    setActiveIndex(index)
  }

  const handleMouseLeave = () => {
    setActiveIndex(null)
  }

  return (
    <>
      {/* desktop */}
      <div
        onMouseLeave={handleMouseLeave}
        className="w-full h-full hidden lg:flex cursor-pointer"
      >
        {slides.map((slide, index) => (
          <div
            key={index}
            onMouseEnter={() => handleMouseEnter(index)}
            onMouseLeave={handleMouseLeave}
            className={cn(
              "h-full transition-all duration-500 overflow-hidden group",
              activeIndex === index
                ? "flex-[2]" // Active slide takes more space
                : activeIndex !== null
                  ? "flex-[1]" // Inactive slides take less space
                  : "flex-1" // Default state when no slide is active
            )}
          >
            <PrismicNextLink
              field={slide.link}
              className="block w-full h-full relative"
            >
              <PrismicImage
                field={slide.image}
                width={800}
                height={800}
                className="w-full h-full object-cover"
              />

              {/* overlay */}
              <div
                className="absolute inset-0 bg-primary-dark-purple z-20 bg-opacity-30 flex items-center justify-center"
              >
                <div className="transition-all duration-300">
                  <p
                    className={cn(
                      "text-white font-semibold text-2xl w-max transform -rotate-90 transition-all duration-300",
                      activeIndex === index ? "opacity-0" : "opacity-100"
                    )}
                  >
                    {slide.link_text}
                  </p>
                  <p
                    className={cn(
                      "text-white font-semibold text-2xl w-max underline transition-all duration-300",
                      activeIndex === index ? "opacity-100" : "opacity-0"
                    )}
                  >
                    {slide.link_text}
                  </p>
                </div>
              </div>
            </PrismicNextLink>
          </div>
        ))}
      </div>

      {/* mobile col */}
      <div className="w-full h-full flex flex-col gap-2 lg:hidden">
        {slides.map((slide, index) => (
          <div key={index} className="h-[150px]">
            <PrismicNextLink
              field={slide.link}
              className="block w-full h-full relative"
            >
              <PrismicImage
                field={slide.image}
                width={800}
                height={800}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black-default z-20 bg-opacity-60 flex items-center justify-center">
                <div>
                  <p className="text-white font-semibold text-2xl w-max">
                    {slide.link_text}
                  </p>
                </div>
              </div>
            </PrismicNextLink>
          </div>
        ))}
      </div>
    </>
  )
}

export default ImageFocuser