import { FaFacebookF, FaLinkedin, FaPinterest, FaTwitter } from "react-icons/fa"
import { SiGooglemybusiness, SiInstagram } from "react-icons/si"
import Link from "next/link"
import Image from "next/image"
import { getTranslations } from "next-intl/server"
import { PrismicNextLink } from "@prismicio/next"

import FooterLangMenu from "./FooterLangMenu"
import { createClient } from "@/prismicio"
import { TLocale } from "@/i18n"
import { getPrismicLocale } from "@/utils/helpers"
import ClientSafeLink from "./common/ClientSafeLink"

const AppLogo = "/images/Logo DEVTI TECHNOLOGIE-05 - light.png"

const Footer = async ({ locale }: { locale: TLocale }) => {
  const client = createClient()
  const footer = await client.getSingle("footer", { lang: getPrismicLocale(locale) })
  const t = await getTranslations()

  return (
    <footer
      className="bg-primary-dark-gray-800 text-primary-white"
    >
      <div
        className="app-container section-pt pb-2"
      >
        <div className="flex flex-row justify-start md:justify-start md:gap-8 xl:gap-20 flex-wrap">
          <div className='max-w-[300px] sm:pl-2'>
            <span
              className='flex items-center gap-3'
            >
              <Link
                href="/"
                className="flex items-center gap-3 pb-4 pr-2"
                title="DevTi Technologie"
              >
                <div>
                  <Image
                    src={AppLogo}
                    draggable={false}
                    alt="DevTi Technologie"
                    width={400}
                    height={400}
                    className='w-40 -ml-4 -mt-4'
                  />
                </div>
              </Link>
            </span>
            <p className='text-sm not-italic font-normal text-primary-white'>
              {
                footer.data.description
              }
            </p>
            <div className='text-sm mt-6 not-italic font-normal mb-[20px] hover:underline hover:text-primary-white transition-all'>
              <div className='flex items-center flex-wrap gap-2'>
                <a
                  href='https://facebook.com/DEVTITECHNOLOGIELTD'
                  target='_blank'
                  rel='noreferrer'
                  className="p-1.5 text-xl rounded-full bg-primary-white text-primary-dark-gray-800 transition-all hover:bg-primary-normal-purple hover:text-primary-white"
                >
                  <FaFacebookF />
                </a>
                <a
                  href='https://twitter.com/Devtitech'
                  target='_blank'
                  rel='noreferrer'
                  className="p-1.5 text-xl rounded-full bg-primary-white text-primary-dark-gray-800 transition-all hover:bg-primary-normal-purple hover:text-primary-white"
                >
                  <FaTwitter />
                </a>
                <a
                  href='https://www.linkedin.com/company/devtetechnologieltd'
                  target='_blank'
                  rel='noreferrer'
                  className="p-1.5 text-xl rounded-full bg-primary-white text-primary-dark-gray-800 transition-all hover:bg-primary-normal-purple hover:text-primary-white"
                >
                  <FaLinkedin />
                </a>
                <a
                  href='https://www.pinterest.com/devtitechnologie'
                  target='_blank'
                  rel='noreferrer'
                  className="p-1.5 text-xl rounded-full bg-primary-white text-primary-dark-gray-800 transition-all hover:bg-primary-normal-purple hover:text-primary-white"
                >
                  <FaPinterest />
                </a>
                <a
                  href='https://www.google.com/search?q=devtitechnologie'
                  target='_blank'
                  rel='noreferrer'
                  className="p-1.5 text-xl rounded-full bg-primary-white text-primary-dark-gray-800 transition-all hover:bg-primary-normal-purple hover:text-primary-white"
                >
                  <SiGooglemybusiness />
                </a>
                <a
                  href='https://www.instagram.com/devtitechnologieltd'
                  target='_blank'
                  rel='noreferrer'
                  className="p-1.5 text-xl rounded-full bg-primary-white text-primary-dark-gray-800 transition-all hover:bg-primary-normal-purple hover:text-primary-white"
                >
                  <SiInstagram />
                </a>
              </div>

            </div>
            <div>
              <PrismicNextLink
                field={footer.data.location_link}
                target="_blank"

              >
                <h4 className='font-semibold text-sm uppercase mt-4'>
                  {
                    footer.data.footer_location_title
                  }
                </h4>
                <p className='text-sm mt-2 not-italic font-normal block underline hover:text-primary-normal-purple transition-all'>
                  {footer.data.location_link_text}
                </p>
              </PrismicNextLink>
            </div>
          </div>
          <div className='min-w-[300px] xl:min-w-0 mt-12 sm:mt-0 sm:pl-2'>
            <h3 className='uppercase h-12 font-medium text-xl text-primary-white'>
              {
                t('footer.quickLinks.title')
              }
            </h3>
            <ul className='mt-0'>
              {
                footer.data.liens_rapides.map((link, index) => (

                  <li
                    key={index}
                    className='text-sm not-italic font-normal mb-[20px] hover:underline hover:text-primary-white transition-all'>

                    {
                      (link?.link?.link_type === 'Web' ?
                        <ClientSafeLink
                          href={link.link}
                          className='text-sm not-italic font-normal mb-[20px] hover:underline hover:text-primary-white transition-all'
                        >
                          {link.link_text}
                        </ClientSafeLink>
                        :
                        <PrismicNextLink field={link.link}>
                          {link.link_text}
                        </PrismicNextLink>
                      )
                    }
                  </li>
                ))
              }
            </ul>
          </div>

          <div className='min-w-[300px] xl:min-w-0 mt-12 lg:mt-0 sm:pl-2'>
            <h3 className='uppercase h-12 font-medium text-xl text-primary-white'>
              {
                t('footer.services.title')
              }
            </h3>
            <ul className='mt-0'>
              {
                footer.data.services.map((service, index) => (
                  <li
                    key={index}
                    className='text-sm not-italic font-normal mb-[20px] hover:underline hover:text-primary-white transition-all'>
                    <PrismicNextLink field={service.link}>
                      {
                        service.link_text
                      }
                    </PrismicNextLink>
                  </li>
                ))
              }
            </ul>
          </div>
          <div className='min-w-[300px] xl:min-w-0 mt-12 xl:mt-0 sm:pl-2'>
            <h3 className='uppercase h-12 font-medium text-xl text-primary-white'>
              {
                footer.data.links_col_3_title
              }
            </h3>
            <ul className='mt-0'>
              {
                footer.data.legal.map((legale, index) => (
                  <li
                    key={index}
                    className='text-sm not-italic font-normal mb-[20px] hover:underline hover:text-primary-white transition-all'>
                    <PrismicNextLink field={legale.link}>
                      {
                        legale.link_text
                      }
                    </PrismicNextLink>
                  </li>
                ))
              }
            </ul>
          </div>
        </div>

        <div>
          <div className='w-full mt-10 '>
            <div
              className='h-[1px] bg-primary-normal-purple w-full'
            ></div>
          </div>
          <div className='my-10 flex items-center justify-center gap-6 md:gap-0 md:justify-between flex-wrap'>
            <div>
              <p className='text-sm not-italic font-normal px-2'>
                {
                  t('footer.copyRight', { year: new Date().getFullYear() })
                }
              </p>
            </div>
            <div>
              {/* links footer */}
              <div
                className='flex items-center justify-center gap-6 md:justify-between flex-wrap'
              >
                <ul className='flex items-center gap-6 px-2'>
                  {
                    footer.data.footer_links.map((link, index) => (
                      <li
                        key={index}
                        className='text-sm not-italic font-normal hover:underline hover:text-primary-white transition-all'>
                        <PrismicNextLink field={link.link}>
                          {
                            link.link_text
                          }
                        </PrismicNextLink>
                      </li>
                    ))
                  }
                </ul>
                <FooterLangMenu />
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer