import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";

/**
 * Props for `Spacer`.
 */
export type SpacerProps = SliceComponentProps<Content.SpacerSlice>;

/**
 * Component for "Spacer" Slices.
 */
const Spacer = ({ slice }: SpacerProps): JSX.Element => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className="section-pt"
    >
    </section>
  );
};

export default Spacer;
