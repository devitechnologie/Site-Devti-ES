import { Metadata } from "next"
import { notFound } from "next/navigation"
import { SliceZone } from "@prismicio/react"
import { unstable_setRequestLocale } from "next-intl/server"

import { createClient } from "@/prismicio"
import { components } from "@/slices"
import { TLocale } from "@/i18n"
import { getNextLocale, getPrismicLocale } from "@/utils/helpers"

type PageProps = {
  params: {
    locale: TLocale
    UID: string
  }
}

export default async function Page({ params: { locale, UID } }: PageProps) {
  unstable_setRequestLocale(locale)
  const client = createClient()
  const page = await client
    .getByUID("agence", UID, { lang: getPrismicLocale(locale) })
    .catch(() => notFound())

  return (
    <SliceZone
      slices={page.data.slices}
      components={components}
      context={{ lang: getPrismicLocale(locale) }}

    />
  )
}

export async function generateMetadata({
  params: { locale, UID },
}: PageProps
): Promise<Metadata> {
  const client = createClient()
  const page = await client
    .getByUID("agence", UID, { lang: getPrismicLocale(locale) })
    .catch(() => notFound())

  return {
    title: page.data.meta_title,
    description: page.data.meta_description,
    openGraph: {
      images: [page.data.meta_image.url || ""],
    },
    keywords: page.data.meta_keywords,
  }
}

export async function generateStaticParams() {
  const client = createClient()
  const pages = await client.getAllByType("agence")

  return pages.map((page) => {
    return { UID: page.uid, locale: getNextLocale(page.lang) }
  })
}