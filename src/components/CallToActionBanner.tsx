'use client'

import { AttentionSeeker, Fade } from "react-awesome-reveal"
import { Link } from "react-scroll"
import  NextLink from "next/link"
import { PrismicRichText } from "@prismicio/react"
import Image from "next/image"
import { useTranslations } from "next-intl"
import { KeyTextField, RichTextField } from "@prismicio/client"

const PicCall = '/images/Customer-Support.png'

type CallToActionBannerProps = {
  title: KeyTextField
  description: RichTextField
  buttonText?: KeyTextField
}

const CallToActionBanner = ({ title, description, buttonText }: CallToActionBannerProps) => {
  const t = useTranslations()

  return (
    <section className="app-container overflow-hidden">
      <Fade
        direction="up"
        triggerOnce
        delay={200}
      >
        <div className="bg-primary-blue rounded-xl p-6 mx-auto flex items-center justify-between flex-col md:flex-row">
          <div>
            <AttentionSeeker
              effect="pulse"
              triggerOnce
            >
              <h2
                className="title-h2-2 text-primary-dark-purple max-w-[700px]"
              >
                {title}
              </h2>
            </AttentionSeeker>
            {/* <div
              className="max-w-[500px]"
              dangerouslySetInnerHTML={{ __html: description as string }}
            /> */}
            <div
              className="max-w-[500px]"
            >
              <PrismicRichText
                field={description}
                components={{
                  paragraph: ({ children }) => (
                    <p
                      className="mt-8 sm:mt-4 title-p font-normal font-raleway text-primary-dark-purple max-w-[550px]"
                    >
                      {children}
                    </p>
                  ),
                  hyperlink: ({ children, node }) => {
                    return (
                      <NextLink
                        href={node.data.url ?? '/'}
                        className="text-primary-normal-purple hover:underline"
                      >
                        {children}
                      </NextLink>
                    )
                  }
                }}
              />
            </div>
            <Link
              to="call-to-action-form"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              className="bg-primary-dark-purple w-full inline-block cursor-pointer md:w-fit rounded-xl px-4 py-3 font-semibold font-raleway text-primary-white mx-auto mt-5 hover:opacity-80 transition-all">
              {buttonText || t('websiteDevelopment.consultation.buttonText')}
            </Link>
          </div>
          <div
            className="w-[300px] mt-10 md:mt-0 hidden md:block"
          >
            <Image
              src={PicCall}
              width={500}
              height={500}
              alt="Call Us"
              className="w-full"
            />
          </div>
        </div>
      </Fade>
    </section>
  )
}

export default CallToActionBanner