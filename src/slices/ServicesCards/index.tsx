"use client"

import { cn } from "@/utils/cn";
import { Content } from "@prismicio/client";
import { PrismicNextImage } from "@prismicio/next";
import { PrismicRichText, SliceComponentProps } from "@prismicio/react";
import Link from "next/link";
import { RiArrowLeftSLine, RiArrowRightSLine } from "react-icons/ri";
import { Navigation } from 'swiper/modules'
import { Swiper, SwiperSlide } from "swiper/react"

/**
 * Props for `ServicesCards`.
 */
export type ServicesCardsProps =
  SliceComponentProps<Content.ServicesCardsSlice>;

/**
 * Component for "ServicesCards" Slices.
 */
const ServicesCards = ({ slice }: ServicesCardsProps): JSX.Element => {
  return (
    <section className="app-container section-py"
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      <div>
        <h2 className="title-h2 text-center">
          {
            slice.primary.title
          }
        </h2>
        <div className="mt-5 max-w-[750px] mx-auto">
          <PrismicRichText
            field={slice.primary.description}
            components={{
              paragraph: ({ children }) => (
                <p
                  className="title-p text-center"
                >
                  {
                    children
                  }
                </p>
              ),
              hyperlink: ({ children, node }) => {
                return (
                  <Link
                    href={node.data.url ?? '/'}
                    className="text-primary-normal-purple hover:underline"
                  >
                    {children}
                  </Link>
                )
              }
            }}
          />
        </div>

        <div className="gap-16 mt-16 relative">
          <Swiper
            modules={[Navigation]}
            navigation={{
              prevEl: ".service-card-slider-prev",
              nextEl: ".service-card-slider-next",
            }}
            spaceBetween={24}
            slidesPerView={1}
            breakpoints={{
              640: {
                slidesPerView: 2,
              },
              1024: {
                slidesPerView: 3,
              },
            }}
          >
            {slice.primary.cards.map((card, index) => (
              <SwiperSlide key={index} className="h-auto">
                <ServiceCard card={card} />
              </SwiperSlide>
            ))}
          </Swiper>

          <div
            className={cn(
              "bg-primary-normal-purple hover:bg-primary-light-purple shadow-md transition-all rounded-full p-1.5 absolute top-1/2 left-0 -translate-x-1/2 service-card-slider-prev cursor-pointer z-10",
              "max-md:translate-x-1 max-md:bg-white"
            )}
          >
            <RiArrowLeftSLine
              className="text-white text-2xl max-md:text-primary-dark-purple"
            />
          </div>
          <div
            className={cn(
              "bg-primary-normal-purple hover:bg-primary-light-purple shadow-md transition-all rounded-full p-1.5 absolute top-1/2 right-0 translate-x-1/2 service-card-slider-next cursor-pointer z-10",
              "max-md:-translate-x-1 max-md:bg-white"
            )}
          >
            <RiArrowRightSLine
              className="text-white text-2xl max-md:text-primary-dark-purple"
            />
          </div>
        </div>

        <div className="flex justify-center mt-10">
          <Link
            href="/devti-ai"
            target="_blank"
            className="btn-colored"
          >
            {slice.primary.cta_text}
          </Link>
        </div>
      </div>
    </section>
  );
};

const ServiceCard = ({ card }: { card: Content.ServicesCardsSliceDefaultPrimaryCardsItem }) => {
  return (
    <div
      className="max-w-sm bg-primary-white rounded-lg overflow-hidden group flex flex-col h-full"
    >

      <div
        className="aspect-video"
      >
        <PrismicNextImage
          field={card.image}
          width={400}
          height={160}
          className="w-full h-full object-cover"
        />
      </div>

      <div className="p-4 flex flex-col justify-between flex-1">
        <div>
          <h3 className="title-h3 !text-primary-blue-dark mb-2">
            {card.title}
          </h3>
          <PrismicRichText
            field={card.description}
            components={{
              paragraph: ({ children }) => (
                <p
                  className="title-p"
                >
                  {
                    children
                  }
                </p>
              ),
              hyperlink: ({ children, node }) => {
                return (
                  <Link
                    href={node.data.url ?? '/'}
                    className="text-primary-normal-purple hover:underline"
                  >
                    {children}
                  </Link>
                )
              }
            }}
          />
        </div>
      </div>

    </div>
  );
};

export default ServicesCards;
