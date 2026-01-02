import { truncateText } from "@/utils/helpers";
import { Content } from "@prismicio/client";
import { PrismicNextImage, PrismicNextLink } from "@prismicio/next";
import Image from "next/image";
import Link from "next/link";
import ReactCountryFlag from "react-country-flag";
import { PiCursorClickBold } from "react-icons/pi";
import SeeMoreText from "./SeeMoreText";

type WithReviewPortfolioProps = {
  slice: Content.ServicesPortfolioSliceWithReviews
}

const WithReviewPortfolio = ({ slice }: WithReviewPortfolioProps) => {
  return (
    <section
      className="app-container"
      id="portfolio"
    >
      <div className='grid grid-cols-1 md:grid-cols-5 gap-2 md:min-h-[500px]'>
        {/* Left Column */}
        <div className='md:col-span-2 rounded-xl bg-primary-dark-gray-100 min-h-[360px]'>
          <div className='p-7 md:p-10 flex flex-col items-center justify-center'>
            <div className="grid place-items-center">

              {/* App Logo */}
              <div className='w-20 h-20 rounded-2xl overflow-hidden'>
                <PrismicNextImage
                  field={slice.primary.app_icon}
                  width={80}
                  height={80}
                  className='w-20 h-20 object-cover rounded-2xl'
                />
              </div>

              <h2 className='title-h2-c text-primary-dark-gray-800 text-center line-clamp-2 mt-4'>
                {slice.primary.app_name}
              </h2>

              <div
                className='mt-2'
              >
                <p
                  className='text-primary-normal-purple text-center text-sm rounded-full w-fit font-normal font-raleway'
                >
                  {slice.primary.app_category_text}
                </p>
              </div>
            </div>
            <div className='text-center my-4 '>
              <div className={`rounded-lg p-6 bg-white shadow-casrd-shadow-border max-w-[500px] flex justify-between flex-col`}>
                <div className="title-p">
                  <SeeMoreText
                    text={slice.primary.review_text ?? ''}
                    limit={160}
                  />
                </div>
                <div className="flex flex-row items-center justify-center gap-1 mt-4">
                  <Image
                    src={`/images/stars.png`}
                    width={400}
                    height={400}
                    className="w-40"
                    alt="rate"
                  />
                </div>
                <div
                  className="flex flex-col justify-center gap-4 items-center mt-4"
                >
                  <div
                    className="flex flex-row justify-center items-center gap-2"
                  >
                    <h3 className="text-base font-bold text-primary-dark-gray-800">
                      {slice.primary.reviewer_name}
                    </h3>
                    <ReactCountryFlag
                      countryCode={slice.primary.reviewer_country}
                      svg
                      title={slice.primary.reviewer_country}
                      style={{
                        width: '16px',
                        height: '16px',
                      }}
                    />
                  </div>

                </div>
              </div>
            </div>
            <div>
              <h6
                className="text-primary-dark-purple text-sm font-normal font-raleway mb-2 text-center"
              >
                {slice.primary.download_title}
              </h6>

              <div className='flex items-center justify-center gap-2'>

                {
                  (slice.primary.google_play_link as { url: string } | null)?.url && (
                    <PrismicNextLink
                      target="_blank"
                      className="block"
                      field={slice.primary.google_play_link}
                    >
                      <Image
                        src={`/images/googlepaly.svg`}
                        width={40}
                        height={40}
                        className="w-28"
                        alt="google play"
                      />
                    </PrismicNextLink>
                  )
                }
                {
                  (slice.primary.apple_store_link as { url: string } | null)?.url && (
                    <PrismicNextLink
                      target="_blank"
                      className="block"
                      field={slice.primary.apple_store_link}
                    >
                      <Image
                        src={`/images/applestore.svg`}
                        width={40}
                        height={40}
                        className="w-28"
                        alt="apple store"
                      />
                    </PrismicNextLink>
                  )
                }
              </div>

              {/* call to action */}
              <div className="w-full grid place-items-center">
                <Link
                  href="/contact"
                  className="mt-4 w-fit grid place-items-center relative text-primary-normal-purple hover:text-primary-dark-purple underline transition-all duration-300"
                >
                  <span
                    className="inline-block text-center font-semibold text-lg "
                  >
                    {slice.primary.link_text}
                  </span>
                  <div
                    className="absolute -bottom-2 right-[-20px]"
                  >
                    <PiCursorClickBold
                      className="text-lg"
                    />
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </div>
        {/* Right Column */}
        <div className='md:col-span-3 bg-gray-100 rounded-xl'>
          <div className='w-full h-full rounded-xl overflow-hidden relative'>
            <PrismicNextImage
              field={slice.primary.image_portfolio}
              width={1920}
              height={1080}
              className='w-full h-full object-cover'
            />
          </div>
        </div>
      </div>
    </section>
  )
}

export default WithReviewPortfolio