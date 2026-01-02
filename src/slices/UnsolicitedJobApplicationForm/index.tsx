import JobApplicationForm from "@/components/jobs/JobApplicationForm";
import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";

/**
 * Props for `UnsolicitedJobApplicationForm`.
 */
export type UnsolicitedJobApplicationFormProps =
  SliceComponentProps<Content.UnsolicitedJobApplicationFormSlice>;

/**
 * Component for "UnsolicitedJobApplicationForm" Slices.
 */
const UnsolicitedJobApplicationForm = ({
  slice,
}: UnsolicitedJobApplicationFormProps): JSX.Element => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className="app-container section-py"
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
        <div
          className="mt-8 w-full max-w-[600px]"
          data-testid="unsolicited-job-application-form"
        >
          <JobApplicationForm />
        </div>
      </div>

    </section>
  );
};

export default UnsolicitedJobApplicationForm;
