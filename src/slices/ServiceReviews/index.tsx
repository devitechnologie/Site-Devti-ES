import { ReviewCardService } from "@/components/ReviewCard";
import { Content, KeyTextField } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";
import { getTranslations } from "next-intl/server";

/**
 * Props for `ServiceReviews`.
 */
export type ServiceReviewsProps =
  SliceComponentProps<Content.ServiceReviewsSlice>;

/**
 * Component for "ServiceReviews" Slices.
 */
const ServiceReviews = async ({ slice }: ServiceReviewsProps): Promise<JSX.Element> => {
  const t = await getTranslations()

  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      <ServiceReviewSection
        title={slice.primary.title}
        description={slice.primary.subtitle}
        reviews={slice.primary.reviews}
      />
    </section>
  );
};


type ServiceReviewSectionProps = {
  title: KeyTextField
  description: KeyTextField
  reviews: Content.ServiceReviewsSliceDefaultPrimaryReviewsItem[]
}

const ServiceReviewSection = async ({ title, description, reviews }: ServiceReviewSectionProps) => {
  const t = await getTranslations()

  return (
    <div
      className="bg-primary-white"
      id="reviews"
    >
      <div className="app-container section-py">
        <div
          className="w-full flex flex-col items-center justify-center"
        >
          <h6
            className="text-primary-normal-purple text-base border border-primary-normal-purple px-3 py-1 rounded-full w-fit font-normal font-raleway mx-auto sm:mx-0"
          >
            {
              t('websiteDevelopment.serviceReview.subtitle')
            }
          </h6>
          <h2 className="title-h2-2 mt-4 text-center max-w-[750px]">
            {title}
          </h2>
          <p className="mt-4 title-p text-center max-w-[750px]">
            {description}
          </p>
        </div>
        <div
          className="grid grid-cols-1 sm:grid-cols-2 lg:px-32 gap-0 sm:gap-6 mt-8"
        >
          {
            reviews.map((review, index) => (
              <ReviewCardService
                key={index}
                description={review.review_text}
                position={review.partenaire_position}
                name={review.partenaire_name}
                className="mt-8 bg-white"
                photo={review.partenaire_image?.url}
                countryCode={review.review_country}
              />
            ))
          }
        </div>
      </div>
    </div>
  )
}

export default ServiceReviews;
