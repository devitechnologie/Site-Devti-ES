import PortfolioCard from "@/components/PortfolioCard";
import ServicesPortfolioSlider from "@/components/ServicesPortfolioSlider";
import WithReviewPortfolio from "@/components/WithReviewPortfolio";
import { Content, KeyTextField } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";
import { getTranslations } from "next-intl/server";

const NoImagePlaceholder = '/images/Logo DEVTI TECHNOLOGIE-08.png' 

/**
 * Props for `ServicesPortfolio`.
 */
export type ServicesPortfolioProps =
  SliceComponentProps<Content.ServicesPortfolioSlice>;

/**
 * Component for "ServicesPortfolio" Slices.
 */
const ServicesPortfolio = async ({ slice }: ServicesPortfolioProps): Promise<JSX.Element> => {

  if (slice.variation === "withReviews") {
    return (
      <div>
        <WithReviewPortfolio
          slice={slice}
        />
      </div>
    )
  }

  if (slice.variation === "sliderPortfolio") {
    return (
      <div>
        <ServicesPortfolioSlider
          slides={slice.primary.slides}
         />
      </div>
    );
  }

  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      <ServiceProcessusSection
        badge_text={slice.primary.badge_text}
        title={slice.primary.title}
        description={slice.primary.description}
        alt='site web'
        ListPhotos={[
          ...slice.primary.images.map((image) => image.image.url)
        ]}
      />
    </section>
  )
}

type ServiceProcessusSectionProps = {
  badge_text: KeyTextField
  title: KeyTextField
  description: KeyTextField
  ListPhotos: (string | null | undefined)[]
  alt: string
}

const ServiceProcessusSection = async ({ title, description, ListPhotos, badge_text, alt }: ServiceProcessusSectionProps) => {
  const t = await getTranslations()

  return (
    <div>
      <div className="app-container section-py">
        <div className="flex flex-col items-center justify-center">
          <h6
            className="text-primary-normal-purple text-base border border-primary-normal-purple px-3 py-1 rounded-full w-fit font-normal font-raleway mx-auto sm:mx-0"
          >
            {
              t('websiteDevelopment.processus.subtitle')
            }
          </h6>
          <h2 className="title-h2-2 mt-4 text-center max-w-[750px]">
            {title}
          </h2>
          <p className="mt-4 title-p text-center max-w-[750px]">
            {description}
          </p>
        </div>
        <div>
          {/* gallery */}
          <div className="py-4 lg:px-32 lg:pt-16 flex flex-col gap-4">
            <div
              className="grid grid-cols-5 gap-4"
            >
              <PortfolioCard
                image={ListPhotos[0] ? ListPhotos[0] : NoImagePlaceholder}
                title=""
                colspan={3}
                alt={alt}
              />
              <PortfolioCard
                image={ListPhotos[1] ? ListPhotos[1] : NoImagePlaceholder}
                title=""
                colspan={2}
                alt={alt}
              />
            </div>
            <div
              className="grid grid-cols-5 gap-4"
            >
              <PortfolioCard
                image={ListPhotos[2] ? ListPhotos[2] : NoImagePlaceholder}
                title=""
                colspan={2}
                alt={alt}
              />
              <PortfolioCard
                image={ListPhotos[3] ? ListPhotos[3] : NoImagePlaceholder}
                title=""
                colspan={3}
                alt={alt}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ServicesPortfolio;
