import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";
import { RealisationPortfolioSection } from "./components/RealisationPortfolioSection";
import { getTranslations } from "next-intl/server";

import ScrollWrapper from "@/components/ScrollWrapper";
import { createClient } from "@/prismicio";

/**
 * Props for `RealisationPortfolio`.
 */
export type RealisationPortfolioProps =
  SliceComponentProps<Content.RealisationPortfolioSlice>;

/**
 * Component for "RealisationPortfolio" Slices.
 */
const RealisationPortfolio = async ({
  slice,
}: RealisationPortfolioProps): Promise<JSX.Element> => {
  const client = createClient();
  const t = await getTranslations();

  const categories = await client.getAllByType("realisation_category");
  const projects = await client.getAllByType("realisationdetailspage");

  const orderedCategories = categories.sort((a, b) => {
    return parseInt(a.data.priority) - parseInt(b.data.priority);
  });

  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className="overflow-x-hidden"
    >
      <ScrollWrapper
        name="portfolio"
      >
        <RealisationPortfolioSection
          title={t("realisation.title")}
          categories={orderedCategories}
          listItems={projects}
        />
      </ScrollWrapper>
    </section>
  );
};

export default RealisationPortfolio;
