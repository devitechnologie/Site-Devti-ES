import AboutAboutSection from "@/components/about/AboutAboutSection";
import AboutOurValuesSection from "@/components/about/AboutOurValuesSection";
import AboutTechLogosSection from "@/components/about/AboutTechLogosSection";
import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";

/**
 * Props for `AboutBody`.
 */
export type AboutBodyProps = SliceComponentProps<Content.AboutBodySlice>;

/**
 * Component for "AboutBody" Slices.
 */
const AboutBody = ({ slice }: AboutBodyProps): JSX.Element => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      <AboutAboutSection />
      <AboutTechLogosSection />
      <AboutOurValuesSection />
    </section>
  );
};

export default AboutBody;
