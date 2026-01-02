"use client"

import { useWindowScroll } from "@uidotdev/usehooks";
import { Link as ScrollLink } from "react-scroll";
import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";

import { cn } from "@/utils/cn";

/**
 * Props for `ScrollDownHero`.
 */
export type ScrollDownHeroProps =
  SliceComponentProps<Content.ScrollDownHeroSlice>;

/**
 * Component for "ScrollDownHero" Slices.
 */
const ScrollDownHero = ({ slice }: ScrollDownHeroProps): JSX.Element => {
  const [{ y }] = useWindowScroll()

  return (
    <section
      className="flex flex-col items-center justify-center app-container min-h-[calc(100vh-80px)] -mt-10 mb-10"
    >
      <div
        className="flex-1 flex justify-center items-center flex-col"
      >
        <h6
          className="text-primary-light-purple text-base border border-primary-light-purple px-3 py-1 rounded-full w-fit font-normal font-raleway mx-auto sm:mx-0"
        >
          {slice.primary.badge_text}
        </h6>
        <h1
          className="mt-8 sm:mt-3 text-[42px] text-center font-bold font-raleway text-primary-dark-purple uppercase max-w-[600px] leading-[1.15]"
        >
          {slice.primary.title} {' '}
          <span
            className="text-primary-normal-purple"
          >
            {slice.primary.colored_title}
          </span>
        </h1>
        <p
          className="mt-8 sm:mt-4 text-xl text-center font-normal font-raleway text-primary-dark-purple max-w-[550px]"
        >
          {slice.primary.subtitle}
        </p>
      </div>
      <ScrollLink
        to={slice.primary.to_section_id ?? ''}
        spy={true}
        smooth={true}
        offset={-120}
        duration={500}
      >
        <div
          className={cn(
            'absolute bottom-2 left-1/2 transform -translate-x-1/2 cursor-pointer z-50 h-[80px] w-[34px] transition-opacity duration-300',
            {
              '!opacity-0': y && y > 10,
            },
          )}
        >
          <div className="chevron"></div>
          <div className="chevron"></div>
          <div className="chevron"></div>
        </div>
      </ScrollLink>
    </section>
  );
};

export default ScrollDownHero;
