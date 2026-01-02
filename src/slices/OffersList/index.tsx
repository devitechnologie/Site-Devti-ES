import OfferCard from "@/components/jobs/OfferCard";
import { createClient } from "@/prismicio";
import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";

/**
 * Props for `OffersList`.
 */
export type OffersListProps = SliceComponentProps<Content.OffersListSlice, { lang: string }>;

/**
 * Component for "OffersList" Slices.
 */
const OffersList = async ({ slice, context }: OffersListProps) => {
  const client = createClient()
  const allJobs = await client.getAllByType("job_offer",
    {
      lang: context.lang
    }
  )

  return (
    <section
      id={slice.primary.section_id ?? ''}
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className="app-container section-pb"
    >
      <div className="flex flex-col items-center justify-center">
        <h2 className="text-3xl font-bold font-raleway text-primary-dark-purple uppercase text-center max-w-[600px] leading-[1.15]">
          {slice.primary.title}
        </h2>
        <p
          className="mt-2 text-lg font-normal font-raleway text-primary-dark-purple text-center max-w-[600px]"
        >
          {slice.primary.subtitle}
        </p>
      </div>
      <div
        className="grid grid-cols-1 gap-8 mt-10 sm:grid-cols-2 lg:grid-cols-3"
      >
        {
          allJobs.map((job, index) => (
            <OfferCard
              key={index}
              job={job}
            />
          ))
        }
      </div>
    </section>
  );
};

export default OffersList;
