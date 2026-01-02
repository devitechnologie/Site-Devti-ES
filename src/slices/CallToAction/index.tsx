'use client'

import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";
import { AttentionSeeker, Fade } from "react-awesome-reveal";
import { Link } from "react-scroll"
import { useTranslations } from "next-intl";
import { PrismicNextLink } from "@prismicio/next";
import CallToActionBanner from "@/components/CallToActionBanner";

/**
 * Props for `CallToAction`.
 */
export type CallToActionProps = SliceComponentProps<Content.CallToActionSlice>;

/**
 * Component for "CallToAction" Slices.
 */
const CallToAction = ({ slice }: CallToActionProps): JSX.Element => {
  const t = useTranslations()

  if (slice.variation === 'withImage') {
    return (
      <div className='section-pt'>
        <CallToActionBanner
          title={slice.primary.title}
          description={slice.primary.description}
          buttonText={slice.primary.button_text}
        />
      </div>
    )
  }

  return (
    <section className="app-container section-py overflow-hidden">
      <Fade
        direction="up"
        triggerOnce
        delay={200}
      >
        <div className="bg-primary-blue rounded-xl p-10  mx-auto flex items-center justify-between flex-col md:flex-row">
          <div>
            <AttentionSeeker
              effect="pulse"
              triggerOnce
            >
              <h2
                className="title-h2-2 text-primary-dark-purple max-w-[700px] mb-4"
              >
                {
                  t("home.callToAction.title")
                }
              </h2>
            </AttentionSeeker>
            <p
              className="title-p text-primary-dark-purple max-w-[500px]"
            >
              {
                t("home.callToAction.description")
              }
            </p>
          </div>
          <div>
            {
              slice.primary.link?.link_type != 'Any' ?
                <PrismicNextLink
                  field={slice.primary.link}
                  className="bg-primary-dark-purple inline-block cursor-pointer rounded-xl px-4 py-3 font-semibold font-raleway text-primary-white mx-auto mt-5 hover:opacity-80 transition-all"
                >
                  {
                    t("home.callToAction.button")
                  }
                </PrismicNextLink>
                :
                <Link
                  to="contact"
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={1000}
                  className="bg-primary-dark-purple inline-block cursor-pointer rounded-xl px-4 py-3 font-semibold font-raleway text-primary-white mx-auto mt-5 hover:opacity-80 transition-all">
                  {
                    t("home.callToAction.button")
                  }
                </Link>
            }
          </div>
        </div>
      </Fade>
    </section>
  );
};

export default CallToAction;
