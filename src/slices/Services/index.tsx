"use client"

import ServiceCard from "@/components/ServiceCard"
import { cn } from "@/utils/cn"

import { motion } from "framer-motion"
import { Content } from "@prismicio/client"
import { PrismicNextImage } from "@prismicio/next"
import { SliceComponentProps } from "@prismicio/react"
import { useTranslations } from "next-intl"
import Image from "next/image"
import Link from "next/link"
import { useEffect, useRef, useState } from "react"
import { EffectCoverflow, Navigation } from 'swiper/modules'
import { Swiper, SwiperSlide } from "swiper/react"
import SwiperCore from 'swiper'
import { RiArrowLeftSLine, RiArrowRightSLine } from "react-icons/ri"


/**
 * Props for `Services`.
 */
export type ServicesProps = SliceComponentProps<Content.ServicesSlice>

/**
 * Component for "Services" Slices.
 */
const Services = ({ slice }: ServicesProps): JSX.Element => {
  const t = useTranslations()

  if (slice.variation === 'withSlides') {
    return <WithSlidesVariant slice={slice} t={t} />
  }

  return (
    <DefaultVariant slice={slice} t={t} />
  )
}

const WithSlidesVariant = ({ slice }: {
  slice: {
    slice_type: "services";
    slice_label: null;
    id: string;
  } & Content.ServicesSliceWithSlides,
  t: any
}) => {
  const [selectedItem, setSelectedItem] = useState<Content.ServicesSliceWithSlidesPrimaryServicesSlidesItem | undefined>(
    slice.primary.services_slides && slice.primary.services_slides.length > 1 ? slice.primary.services_slides[1] : undefined
  )
  const swiperRef = useRef<SwiperCore>()

  const listRef = useRef<HTMLDivElement[]>([])

  const handleItemClick = (item: Content.ServicesSliceWithSlidesPrimaryServicesSlidesItem, index: number) => {
    setSelectedItem(item)
    if (swiperRef.current) {
      swiperRef.current.slideTo(index)
    }

    // bring the item to the center
    if (listRef.current[index] && selectedItem !== item) {
      listRef.current[index].scrollIntoView({
        behavior: 'smooth',
        block: 'nearest',
        inline: 'center'
      })
    }
  }

  return (
    <section className="app-container section-py">
      <div
        className="mb-12 flex flex-col items-center gap-4"
      >
        <h6
          className="text-primary-light-purple text-base border border-primary-light-purple px-3 py-1 rounded-full w-fit font-normal font-raleway mx-auto sm:mx-0"
        >
          {slice.primary.badge_text}
        </h6>
        <h2 className="title-h2 sm:text-center max-w-[800px] mx-auto text-center">
          {slice.primary.title}
        </h2>
      </div>
      <div
        className="flex items-center w-full overflow-x-auto overflow-y-hidden"
      >
        {
          slice.primary.services_slides.map((tab, index) => (
            <TabItem
              key={index}
              isActive={selectedItem === tab}
              onClick={() => handleItemClick(tab, index)}
              onRef={(ref) => {
                listRef.current[index] = ref
              }}
            >
              {tab.service_name ?? ''}
            </TabItem>
          ))
        }
      </div>
      {/* line */}
      <div className="w-full h-[2px] bg-gray-100 mt-[-2px]" />


      <div
        className="md:mt-8 relative"
      >
        <Swiper
          effect={'coverflow'}
          onSwiper={(swiper) => {
            swiperRef.current = swiper
          }}
          onSlideChange={(swiper) => {
            handleItemClick(slice.primary.services_slides[swiper.activeIndex], swiper.activeIndex)
          }}
          initialSlide={1}
          grabCursor={true}
          centeredSlides={true}
          slidesPerView={'auto'}
          coverflowEffect={{
            rotate: 50,
            stretch: -50,
            depth: 100,
            modifier: 1,
            slideShadows: false,
          }}
          pagination={true}
          navigation={{
            nextEl: '.service-slider-next',
            prevEl: '.service-slider-prev',
          }}
          modules={[EffectCoverflow, Navigation]}
        >
          {
            slice.primary.services_slides.map((tab, index) => (
              <SwiperSlide
                key={index}
                className="service-slide"
              >
                <ServiceSliderCard
                  tab={tab}
                />
              </SwiperSlide>
            ))
          }
        </Swiper>

        <div
          className={cn(
            "bg-primary-normal-purple hover:bg-primary-light-purple shadow-md transition-all rounded-full p-1.5 absolute top-1/2 left-0 -translate-x-1/2 service-slider-prev cursor-pointer z-10",
            "max-md:translate-x-1 max-md:bg-white"
          )}
        >
          <RiArrowLeftSLine
            className="text-white text-2xl max-md:text-primary-dark-purple"
          />
        </div>
        <div
          className={cn(
            "bg-primary-normal-purple hover:bg-primary-light-purple shadow-md transition-all rounded-full p-1.5 absolute top-1/2 right-0 translate-x-1/2 service-slider-next cursor-pointer z-10",
            "max-md:-translate-x-1 max-md:bg-white"
          )}
        >
          <RiArrowRightSLine
            className="text-white text-2xl max-md:text-primary-dark-purple"
          />
        </div>
      </div>
    </section>
  )
}

const ServiceSliderCard = ({
  tab
}: {
  tab: Content.ServicesSliceWithSlidesPrimaryServicesSlidesItem
}) => {
  return (
    <div
      className="flex pt-10 relative"
    >
      <div
        className="w-full p-8 md:p-12 md:pr-24 text-white max-w-[500px] min-h-[400px] bg-gradient-to-b from-[#83dbeb] to-primary-normal-purple rounded-2xl"
      >
        <h3
          className="text-xl md:text-3xl font-extrabold">
          {tab.service_name}
        </h3>
        <p
          className="mt-5 font-medium"
        >
          {tab.description}
        </p>

        <div
          className="mt-8"
        >
          {
            tab.links?.map((link, index) => {
              if (link.type != "paragraph") return null
              return (
                <>
                  <Link
                    href={link.spans ? link.spans.map(span => span.type === "hyperlink" ? span.data.url : "")[0] ?? "" : ""}
                    className="text-white"
                  >
                    {link.text}
                  </Link>
                  {/* line */}
                  {
                    index !== tab.links.length - 1 && (
                      <div className="w-full h-[1px] bg-white bg-opacity-50 my-2" />
                    )
                  }
                </>
              )
            })
          }
        </div>
      </div>
      {/* image */}
      <div
        className="w-[200px] hidden md:block pointer-events-none"
      >
        <div
          className="w-[200px] h-full"
        >
          <div
            className="absolute top-0 right-0 left-0 flex justify-end w-full h-full pb-10"
          >
            <PrismicNextImage
              field={tab.image}
              width={1200}
              height={1200}
              className="!rounded-2xl object-cover overflow-hidden h-full w-[260px]"
            />
          </div>
        </div>
      </div>
    </div>
  )
}

const TabItem = ({
  children,
  isActive = false,
  onClick,
  onRef
}: {
  children: string,
  isActive?: boolean,
  onClick?: () => void,
  onRef?: (ref: HTMLDivElement) => void,
}) => {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (onRef && ref.current) {
      onRef(ref.current)
    }
  }, [ref, onRef])

  return (
    <div
      onClick={onClick}
      ref={ref}
      className={cn(
        'cursor-pointer min-w-max px-4 hover:bg-gray-50 transition-all duration-300 flex items-center justify-center w-1/4 py-3 relative font-semibold text-primary-dark-gray-800 text-lg',
        {
          'text-primary-normal-purple bg-gray-50': isActive
        }
      )}
    >
      {children}

      {/* line gradient */}
      {
        isActive && (
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: '100%' }}
            transition={{ duration: 0.3 }}
            layoutId="line"
            className="w-full h-1.5 bg-gradient-to-r from-primary-blue to-primary-normal-purple absolute bottom-[-2px] left-0"
          />
        )
      }
    </div>
  )
}

const DefaultVariant = ({ slice, t }: any) => {
  return (
    <section className="app-container section-py">
      <div>
        <h2 className="title-h2 sm:text-center max-w-[800px] mx-auto">
          {
            t('home.services.title')
          }
        </h2>
        <p className="title-p sm:text-center mt-5 max-w-[800px] mx-auto"
          dangerouslySetInnerHTML={{ __html: t.raw('home.services.description') }}
        />
      </div>
      <div className="mt-28 flex items-center justify-between">
        <div className="w-[400px] h-[560px] relative floating-animation hidden md:block">
          <Image
            src='/images/Saly-43.png'
            alt="rocket"
            className="absolute top-16 left-10 w-[150px]"
            width={400}
            height={560}
          />
        </div>
        <div className="max-w-[900px] mx-auto gap-28 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3"
        >
          <ServiceCard
            title={t('home.services.service1')}
            imgSrc='/images/service1.png'
            to={slice.primary.site_web_link}
          />
          <ServiceCard
            title={t('home.services.service2')}
            imgSrc='/images/service5.png'
            to={slice.primary.mobile_link}
          />
          <ServiceCard
            title={t('home.services.service3')}
            imgSrc='/images/service2.png'
            to={slice.primary.logiciel_link}
          />
          <ServiceCard
            title={t('home.services.service4')}
            imgSrc='/images/service3.png'
            to={slice.primary.web_app_link}
          />
          <ServiceCard
            title={t('home.services.service5')}
            imgSrc='/images/service4.png'
            to={slice.primary.ux_ui_link}
          />
          <ServiceCard
            title={t('home.services.service6')}
            imgSrc='/images/service6.png'
            to={slice.primary.seo_link}
          />
        </div>
      </div>
    </section>
  )
}

export default Services
