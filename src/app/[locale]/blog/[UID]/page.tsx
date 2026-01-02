import { Metadata } from "next"
import { notFound } from "next/navigation"
import { SliceZone } from "@prismicio/react"
import { unstable_setRequestLocale } from "next-intl/server"

import { createClient } from "@/prismicio"
import { components } from "@/slices"
import { TLocale } from "@/i18n"
import { getNextLocale, getPrismicLocale } from "@/utils/helpers"
import BlogSideBar from "@/components/blog/BlogSideBar"
import BlogMainContent from "@/components/blog/BlogMainContent"

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
    .getByUID("blogpost", UID, { lang: getPrismicLocale(locale) })
    .catch(() => notFound())

  return (
    <div>
      <section className="app-container min-h-screen">
        <div className="section-pb pt-4 flex flex-col lg:flex-row justify-between gap-16">
          <BlogMainContent 
            blog={page}
          />
          <BlogSideBar />
        </div>
      </section>
      <SliceZone
        slices={page.data.slices}
        components={components}
        context={{ lang: getPrismicLocale(locale) }}
      />
    </div>
  )
}

export async function generateMetadata({
  params: { locale, UID },
}: PageProps
): Promise<Metadata> {
  const client = createClient()
  const page = await client
    .getByUID("blogpost", UID, { lang: getPrismicLocale(locale) })
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
  const pages = await client.getAllByType("blogpost")

  return pages.map((page) => {
    return { UID: page.uid, locale: getNextLocale(page.lang) }
  })
}