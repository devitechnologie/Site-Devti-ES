import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";
import { getTranslations } from "next-intl/server";
import Image from "next/image";

const Pic = '/images/172-Diversity-&-Inclusion-Revision.png'

/**
 * Props for `AboutHero`.
 */
export type AboutHeroProps = SliceComponentProps<Content.AboutHeroSlice>;

/**
 * Component for "AboutHero" Slices.
 */
const AboutHero = async ({ slice }: AboutHeroProps): Promise<JSX.Element> => {
  const t = await getTranslations()

  return (
    <section
      className="flex flex-col items-center justify-center app-container min-h-[calc(100vh-80px)] sm:pt-[60px] pt-[0px]"
    >
      <div
        className="flex-1 flex justify-center items-center flex-col"
      >
        <h6
          className="text-primary-light-purple text-base border border-primary-light-purple px-3 py-1 rounded-full w-fit font-normal font-raleway mx-auto sm:mx-0"
        >
          Devti Technologie
        </h6>
        <h1
          className="mt-8 sm:mt-3 text-4xl text-center font-bold font-raleway text-primary-dark-purple uppercase max-w-[600px] leading-[1.15]"
        >
          {
            slice.primary.title
          }
          <span
            className="text-primary-normal-purple"
          >
            {
              ` ${slice.primary.title_colored}`
            }
          </span>
        </h1>
        <p
          className="mt-8 sm:mt-4 text-xl text-center font-normal font-raleway text-primary-dark-purple max-w-[550px]"
        >
          {
            slice.primary.description
          }
        </p>
      </div>
      <div
        className="relative overflow-hidden select-none pointer-events-none sm:mt-6"
      >
        <div
          className="w-full lg:w-[550px]"
        >
          <Image
            src={Pic}
            alt="rocket women"
            width={980}
            height={980}
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </section>
  );
};

export default AboutHero;
