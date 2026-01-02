import { Metadata } from "next";
import { SliceZone } from "@prismicio/react";
import { unstable_setRequestLocale } from "next-intl/server";

import { createClient } from "@/prismicio";
import { components } from "@/slices";
import { TLocale } from "@/i18n";
import { getPrismicLocale } from "@/utils/helpers";
import MobileAppsHeroSection from "@/components/MobileAppsHeroSection";

type PageProps = {
  params: {
    locale: TLocale;
  };
};

export default async function Page({ params: { locale } }: PageProps) {
  unstable_setRequestLocale(locale);
  const client = createClient();
  const page = await client.getSingle("our_apps", { lang: getPrismicLocale(locale) });

  return (
    <>
      <MobileAppsHeroSection />
      <div className="section-pb grid gap-[40px] md:gap-[70px]">
        <SliceZone
          slices={page.data.slices}
          components={components}
          context={{ lang: getPrismicLocale(locale) }}
        />
      </div>
    </>
  );
}

export async function generateMetadata({ params: { locale } }: PageProps): Promise<Metadata> {
  const client = createClient();
  const page = await client.getSingle("our_apps", { lang: getPrismicLocale(locale) });

  return {
    title: page.data.meta_title,
    description: page.data.meta_description,
    openGraph: {
      images: [page.data.meta_image.url || ""],
    },
    keywords: page.data.meta_keywords,
  };
}