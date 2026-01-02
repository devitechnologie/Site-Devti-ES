'use client'

import { Content } from "@prismicio/client";
import { PrismicRichText, SliceComponentProps } from "@prismicio/react";
import { useTranslations } from "next-intl";
import Image from "next/image";
import { Briefcase, Users, UserCheck, Timer } from "lucide-react";
import { useRef } from "react";
import { Fade } from "react-awesome-reveal";
import { useInView } from "react-intersection-observer";
import { Link } from "react-scroll";
import CountUp from 'react-countup'
import NextLink from "next/link";

/**
 * Props for `Chiffres`.
 */
export type ChiffresProps = SliceComponentProps<Content.ChiffresSlice>;

/**
 * Component for "Chiffres" Slices.
 */
const Chiffres = ({ slice }: ChiffresProps): JSX.Element => {
  const t = useTranslations()
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true
  })

  const startCounting = useRef(false)

  // Once the component is in view, start counting
  if (inView) {
    startCounting.current = true
  }
  const StatCard = ({ icon, value, label }: { icon: JSX.Element; value: number; label: string }) => (
    <div className="group rounded-lg p-6 hover:bg-primary-dark-purple transition duration-300 ease-in-out flex flex-col items-center justify-center">
      <div className="rounded-full w-[100px] h-[40px] flex justify-center items-center text-primary-normal-purple group-hover:text-white transition duration-300 ease-in-out">
        {icon}
      </div>
      <h3 className="text-5xl text-primary-normal-purple group-hover:text-white font-bold mt-2 transition duration-300 ease-in-out">
        <CountUp
          start={startCounting.current ? 0 : undefined}
          end={value}
          duration={4}
          delay={0}
          separator=" "
          decimals={0}
          decimal=","
          suffix="+"
          useEasing={true}
        />
      </h3>
      <p className="text-base sm:text-lg text-primary-normal-purple group-hover:text-white transition duration-300 ease-in-out mt-1">{label}</p>
    </div>
  )

  return (
    <section
      ref={ref}
      className="app-container section-py flex justify-between items-center gap-10 md:gap-16 flex-col md:flex-row">
      <div
        className="w-[100%] max-w-[560px]"
      >
        <Fade
          direction="up"
          triggerOnce
          delay={200}
        >
          <h2 className="title-h2">
            {
              slice.primary.title
            }
          </h2>
        </Fade>
        <Fade
          direction="up"
          triggerOnce
          delay={400}
        >
          <div className="mt-8">
            <PrismicRichText
              field={slice.primary.description}
              components={{
                paragraph: ({ children }) => (
                  <p
                    className="title-p mt-3"
                  >
                    {
                      children
                    }
                  </p>
                ),
                hyperlink: ({ children, node }) => {
                  if (node.data.url?.includes("#")) {
                    return (
                      <Link
                        to={node.data.url?.replace("#", "")}
                        href={node.data.url}
                        spy={true}
                        smooth={true}
                        offset={-25}
                        duration={500}
                        className="text-primary-normal-purple hover:underline"
                      >
                        {children}
                      </Link>
                    )
                  }
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
        </Fade>
      </div>
      <div className='w-[100%] relative select-none'>
        <div className="rounded-xl shadow-card-shadow-border bg-white p-4 sm:p-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <StatCard icon={<Briefcase className="w-16 h-12" />} value={100} label={t("home.chiffres.projects")} />
            <StatCard icon={<Users className="w-16 h-12" />} value={70} label={t("home.chiffres.clients")} />
            <StatCard icon={<UserCheck className="w-16 h-12" />} value={12} label={t("home.chiffres.team")} />
            <StatCard icon={<Timer className="w-16 h-12" />} value={6} label={t("home.chiffres.annees_d_experience")} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Chiffres;
