import { Metadata } from "next"
import { notFound } from "next/navigation"
import { PrismicRichText, SliceZone } from "@prismicio/react"
import { unstable_setRequestLocale } from "next-intl/server"

import { createClient } from "@/prismicio"
import { components } from "@/slices"
import { TLocale } from "@/i18n"
import { getNextLocale, getPrismicLocale } from "@/utils/helpers"
import Link from "next/link"
import { IoIosArrowForward } from "react-icons/io"
import JobSideBar from "@/components/blog/JobSideBar"

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
    .getByUID("job_offer", UID, { lang: getPrismicLocale(locale) })
    .catch(() => notFound())

  return (
    <div>
      <section
        className="py-5 flex bg-primary-dark-gray-100 shadow-inner items-start flex-col gap-2 justify-start w-full"
      >
        <div className="app-container">
          <h1
            className="leading-snug font-bold text-2xl text-primary-dark-purple"
          >
            {page.data.job_title}
          </h1>

          <div className="mt-2 flex items-center gap-2">
            <span
              className="bg-primary-normal-purple rounded-md px-2 py-1 text-sm font-medium font-raleway text-white"
            >
              {page.data.contract}
            </span>

            <span
              className="bg-gray-200 rounded-md px-2 py-1 text-sm font-medium font-raleway text-primary-dark-purple"
            >
              {page.data.type}
            </span>
          </div>
        </div>
      </section>
      <section className="app-container min-h-screen">
        <div
          className="section-pb flex flex-row justify-between lg:gap-16"
        >
          <div
            id='blog-content'
            className='mt-8 prose prose-headings:mt-3 max-w-full prose-ol:px-3 prose-ul:px-3 list-disc prose-li:marker:text-transparent'
          >
            <PrismicRichText
              field={page.data.job_description}
              components={{
                hyperlink: ({ children, node }) => (
                  <Link href={node.data.url ?? ''} className='text-primary-normal-purple hover:underline'>
                    {children}
                  </Link>
                )
              }}
            />
          </div>

          {/* sidebar */}
          <JobSideBar
            jobTitle={page.data.job_title}
          />
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
    .getByUID("job_offer", UID, { lang: getPrismicLocale(locale) })
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
  const pages = await client.getAllByType("job_offer")

  return pages.map((page) => {
    return { UID: page.uid, locale: getNextLocale(page.lang) }
  })
}