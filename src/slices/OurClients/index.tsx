"use client"

import LogosReviews from "@/components/LogosReviews";
import ReviewCard from "@/components/ReviewCard";
import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";
import { useTranslations } from "next-intl";
import { Fade } from "react-awesome-reveal";
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, Navigation, Pagination } from 'swiper/modules'
import Image from "next/image";
import { PrismicNextImage } from "@prismicio/next";
import PartnersLogos from "@/components/PartnersLogos";
import { cn } from "@/utils/cn";
import { RiArrowLeftSLine, RiArrowRightSLine } from "react-icons/ri";

const UPOPhoto = "/images/client14.jpg"
const WaycabPhoto = "/images/client12.png"
const CabinetPhoto = "/images/client15.png"

const ClientPic1 = "/images/logo_brands/park.png"
const ClientPic2 = "/images/logo_brands/one.png"
const ClientPic3 = "/images/logo_brands/addwork.png"
const ClientPic4 = "/images/logo_brands/cropped-logo_cemda_maroc_siteweb.png"
const ClientPic5 = "/images/logo_brands/oplo.png"
const ClientPic6 = "/images/logo_brands/logo_dark.png"
const ClientPic7 = "/images/client2.png"
const ClientPic8 = "/images/logo_brands/glucone.png"
const ClientPic10 = "/images/logo_brands/activation.png"
const ClientPic11 = "/images/logo_brands/beautyconcept.png"

/**
 * Props for `OurClients`.
 */
export type OurClientsProps = SliceComponentProps<Content.OurClientsSlice>;

/**
 * Component for "OurClients" Slices.
 */
const OurClients = ({ slice }: OurClientsProps): JSX.Element => {
  const t = useTranslations()

  if (slice.variation === 'slider') {
    return (
      <section className="app-container section-py select-none pointer-events-none">
        <Swiper
          spaceBetween={50}
          slidesPerView={2}
          breakpoints={{
            640: {
              slidesPerView: 2,
            },
            768: {
              slidesPerView: 3,
            },
            1024: {
              slidesPerView: 5.5,
            },
          }}
          loop={true}
          modules={[Autoplay]}
          autoplay={{
            delay: 2000,
            disableOnInteraction: false,
          }}
          draggable={false}
        >
          {
            slice.primary.images.length > 0 ? (
              slice.primary.images.map((image, index) => (
                <SwiperSlide key={index}>
                  <PrismicNextImage
                    field={image.image}
                    className="mx-auto"
                    width={500}
                    height={500}
                  />
                </SwiperSlide>
              ))
            ) : (<>
              <SwiperSlide>
                <Image width={500} height={500} src={ClientPic1} alt="client" className="mx-auto" />
              </SwiperSlide>
              <SwiperSlide>
                <Image width={500} height={500} src={ClientPic2} alt="client" className="mx-auto" />
              </SwiperSlide>
              <SwiperSlide>
                <Image width={500} height={500} src={ClientPic3} alt="client" className="mx-auto" />
              </SwiperSlide>
              <SwiperSlide>
                <Image width={500} height={500} src={ClientPic4} alt="client" className="mx-auto" />
              </SwiperSlide>
              <SwiperSlide>
                <Image width={500} height={500} src={ClientPic5} alt="client" className="mx-auto" />
              </SwiperSlide>
              <SwiperSlide>
                <Image width={500} height={500} src={ClientPic6} alt="client" className="mx-auto" />
              </SwiperSlide>
              <SwiperSlide>
                <Image width={500} height={500} src={ClientPic7} alt="client" className="mx-auto" />
              </SwiperSlide>
              <SwiperSlide>
                <Image width={500} height={500} src={ClientPic8} alt="client" className="mx-auto" />
              </SwiperSlide>
              <SwiperSlide>
                <Image width={500} height={500} src={ClientPic10} alt="client" className="mx-auto" />
              </SwiperSlide>
              <SwiperSlide>
                <Image width={500} height={500} src={ClientPic11} alt="client" className="mx-auto" />
              </SwiperSlide>
            </>)
          }
        </Swiper>
      </section>
    )
  }

  return (
    <section
      id="reviews"
      className="app-container section-py flex md:flex-row-reverse justify-between items-start gap-10 flex-col">
      <div className="h-full flex-1 md:sticky top-[calc(var(--nav-height)+1rem)]">
        <div>

          {/* review */}
          <div className="flex flex-col max-md:flex-col-reverse">
            <div className="max-md:mt-12">
              <Fade
                direction="up"
                triggerOnce
                delay={200}
              >
                <h2 className="title-h2">
                  {
                    t("home.ourClientsReviews.title")
                  }
                </h2>
              </Fade>
              <Fade
                direction="up"
                triggerOnce
                delay={400}
              >
                <p className="mt-5 title-p">
                  {
                    t("home.ourClientsReviews.description")
                  }
                </p>
              </Fade>
              <Fade
                direction="up"
                triggerOnce
                delay={600}
              >
                <div className="mt-5">
                  <LogosReviews slice={slice} />
                </div>
              </Fade>

              <Fade
                direction="up"
                triggerOnce
                delay={800}
              >
                <a
                  href="https://maps.app.goo.gl/tuweAAtxtzZLX7UL6"
                  target="_blank"
                  className="bg-primary-dark-purple inline-block rounded-xl px-4 py-3 font-semibold font-raleway text-primary-white mx-auto mt-5 hover:opacity-80 transition-all"
                >
                  {
                    t("home.ourClientsReviews.button")
                  }
                </a>
              </Fade>
            </div>


            <div>
              <Fade
                direction="up"
                triggerOnce
                delay={900}
              >
                <h2 className="title-h2 md:mt-12">
                  {t("home.ourClientsReviews.partnersLogosTitle")}
                </h2>
              </Fade>

              <Fade
                direction="up"
                triggerOnce
                delay={1000}
              >
                <div className="mt-5">
                  <PartnersLogos
                    images={slice.primary.partners_logos}
                  />
                </div>
              </Fade>
            </div>
          </div>
        </div>
      </div>
      <div
        className="w-full md:w-[500px] relative">
        <Swiper
          className="p-[2px]"
          spaceBetween={20}
          slidesPerView={1.2}
          loop={true}
          navigation={{
            nextEl: '.rev-slider-next',
            prevEl: '.rev-slider-prev',
          }}
          modules={[Autoplay, Pagination, Navigation]}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
        >

          {
            slice.primary.custom_reviews.length > 0 ? (
              <>
                {slice.primary.custom_reviews.map((review, index) => (
                  <SwiperSlide key={index} className="h-auto">
                    <ReviewCard
                      className="h-full bg-white"
                      name={review.name?.toString() || ""}
                      photo={review.avatar.url || undefined}
                      description={review.review_text?.toString() || ""}
                      countryCode={review.country_code?.toString().toLocaleLowerCase() || "fr"}
                    />
                  </SwiperSlide>
                ))}
              </>
            ) : (
              <>
                {/* card */}
                <SwiperSlide className="h-auto">
                  <ReviewCard
                    className="h-full bg-white"
                    name="UPO Maroc"
                    position={t("home.ourClientsReviews.presidente")}
                    photo={UPOPhoto}
                    description="DevtiTechnologie est vraiment une très bonne Agence, nous sommes satisfaits à 100% du travail réalisé ainsi que le service. Résultats assez rapides après un effort remarquable sur le site web, marketing digital, conception, réseaux sociaux... bref un package complet et très concret pour notre association.Le suivi, la compétence, l'écoute de l'équipe et le professionnalisme sont au top, merci DevtiTechnologie"
                    countryCode="ma"
                  />
                </SwiperSlide>

                {/* card */}
                <SwiperSlide className="h-auto">
                  <ReviewCard
                    className="h-full bg-white"
                    name="Betty Jardin"
                    position={t("home.ourClientsReviews.owner")}
                    description="Une équipe sérieuse, attentive et soucieuse de la qualité de travail rendu.Je recommande la société devti technologie pour tous ceux qui souhaitent avoir un prestataire dans la réalisation, le suivit et la livraison de projet."
                    countryCode="fr"
                  />
                </SwiperSlide>

                {/* card */}
                <SwiperSlide className="h-auto">
                  <ReviewCard
                    className="h-full bg-white"
                    name="WayCab"
                    position={t("home.ourClientsReviews.ceo")}
                    photo={WaycabPhoto}
                    description="Excellent développeur, mon site web realisé par cette entreprise est une pépite. Je recommande absolument. Merci pour le travail très pointue effectué"
                    countryCode="be"
                  />
                </SwiperSlide>

                {/* card */}
                <SwiperSlide className="h-auto">
                  <ReviewCard
                    className="h-full bg-white"
                    name="LGDA"
                    position={t("home.ourClientsReviews.ceo")}
                    photo={CabinetPhoto}
                    description="Très professionnel et à l écoute... une agance au top!"
                    countryCode="be"
                  />
                </SwiperSlide>
              </>
            )
          }

        </Swiper>

        {/* Arrow Navigation Buttons */}
        <div
          className={cn(
            "bg-primary-normal-purple max-md:hidden hover:bg-primary-light-purple shadow-md transition-all rounded-full p-1.5 absolute top-1/2 left-0 -translate-x-1/2 rev-slider-prev cursor-pointer z-10",
            "max-md:translate-x-1 max-md:bg-white"
          )}
        >
          <RiArrowLeftSLine
            className="text-white text-2xl max-md:text-primary-dark-purple"
          />
        </div>
        <div
          className={cn(
            "bg-primary-normal-purple max-md:hidden hover:bg-primary-light-purple shadow-md transition-all rounded-full p-1.5 absolute top-1/2 right-0 translate-x-1/2 rev-slider-next cursor-pointer z-10",
            "max-md:-translate-x-1 max-md:bg-white"
          )}
        >
          <RiArrowRightSLine
            className="text-white text-2xl max-md:text-primary-dark-purple"
          />
        </div>
      </div>
    </section >
  );
};

export default OurClients;
