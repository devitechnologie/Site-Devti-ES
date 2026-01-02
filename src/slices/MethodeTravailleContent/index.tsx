import MethodetravailleEtapsSection from "@/components/methode-travaille/MethodetravailleEtapsSection";
import MethodeTravailleHeroSection from "@/components/methode-travaille/MethodeTravailleHeroSection";
import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";

/**
 * Props for `MethodeTravailleContent`.
 */
export type MethodeTravailleContentProps =
  SliceComponentProps<Content.MethodeTravailleContentSlice>;

/**
 * Component for "MethodeTravailleContent" Slices.
 */
const MethodeTravailleContent = ({
  slice,
}: MethodeTravailleContentProps): JSX.Element => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      <MethodeTravailleHeroSection />
      <MethodetravailleEtapsSection />
    </section>
  );
};

export default MethodeTravailleContent;
