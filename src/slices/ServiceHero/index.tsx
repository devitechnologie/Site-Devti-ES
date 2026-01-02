import { Content, ImageField, KeyTextField, RichTextField } from "@prismicio/client";
import { PrismicNextImage } from "@prismicio/next";
import { PrismicRichText, SliceComponentProps } from "@prismicio/react";
import { getTranslations } from "next-intl/server";
import Link from "next/link";
import { FaLongArrowAltRight } from "react-icons/fa";


/**
 * Props for `ServiceHero`.
 */
export type ServiceHeroProps = SliceComponentProps<Content.ServiceHeroSlice>;

/**
 * Component for "ServiceHero" Slices.
 */
const ServiceHero = async ({ slice }: ServiceHeroProps): Promise<JSX.Element> => {

  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      <ServiceHeroSection
        title={slice.primary.title}
        titleColor={slice.primary.colored_title}
        description={slice.primary.description}
        bgPic={slice.primary.image}
        subtitle={slice.primary.badge_text}
        btnText={slice.primary.button_text}
      />
    </section>
  );
};

type ServiceHeroSectionProps = {
  bgPic: ImageField
  title: KeyTextField
  titleColor?: KeyTextField
  subtitle: KeyTextField
  description: RichTextField
  afterColorText?: KeyTextField
  btnText?: KeyTextField
  className?: string
}

const ServiceHeroSection = async ({
  bgPic,
  title,
  subtitle,
  description,
  titleColor,
  afterColorText,
  btnText,
  className
}: ServiceHeroSectionProps) => {
  const t = await getTranslations()

  return (
    <div
      className="flex flex-col sm:flex-row items-center justify-center sm:justify-between app-container sm:min-h-[calc(100vh-var(--nav-height))] min-h-[70vh] py-16 sm:py-0"
    >
      <div>
        <h6
          className="text-primary-light-purple text-base border border-primary-light-purple px-3 py-1 rounded-full w-fit font-normal font-raleway mx-audto sm:mx-0"
        >
          {subtitle}
        </h6>
        <h1
          className={`mt-4 text-3xl sm:text-5xl text-start font-bold font-raleway text-primary-dark-purple uppercase max-w-[600px] leading-[1.15] ${className}`}
        >
          {title}
          <span
            className="text-primary-normal-purple"
          >
            {` `}{titleColor}
          </span>
          {afterColorText && (
            ` ` + afterColorText
          )
          }
        </h1>
        <div>
          <PrismicRichText
            field={description}
            components={{
              paragraph: ({ children }) => (
                <p
                  className="mt-4 text-xl text-start font-normal font-raleway text-primary-dark-purple max-w-[550px]"
                >
                  {children}
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

        <div
          className="mt-5 flex items-center gap-5 sm:justify-start"
        >
          <Link
            href="/contact"
            className="px-4 py-2 rounded-md text-white transition-all italic duration-300 bg-primary-normal-purple hover:bg-opacity-80 font-semibold shadow-md border-primary-normal-purple flex items-center gap-2 border"
          >
            {
              btnText ?? t('websiteDevelopment.hero.ctaButton')
            }
            <FaLongArrowAltRight />
          </Link>
        </div>
      </div>
      <div
        className="relative overflow-hidden aspect-square sm:w-[500px] sm:h-[500px] select-none pointer-events-none grid place-items-center"
      >
        <div
          className="sm:w-[500px]"
        >
          <PrismicNextImage
            width={800}
            height={800}
            field={bgPic}
            className="object-cover object-center w-full h-full"
          />
        </div>
      </div>
    </div>
  )
}

export default ServiceHero;
