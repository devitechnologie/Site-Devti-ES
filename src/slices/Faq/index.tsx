import FAQListView, { FAQItemType } from "@/components/FAQListView"

import { Content } from "@prismicio/client"
import { PrismicRichText, SliceComponentProps } from "@prismicio/react"
import Image from "next/image"
import Link from "next/link"

const FaqPic = '/images/pic-faq.png'

/**
 * Props for `Faq`.
 */
export type FaqProps = SliceComponentProps<Content.FaqSlice>

/**
 * Component for "Faq" Slices.
 */
const Faq = ({ slice }: FaqProps): JSX.Element => {
  return (
    <section
      className="app-container section-py"
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      <div className="flex flex-col lg:flex-row items-start gap-8">
        <TextSection slice={slice} />
        <div
          className='flex-1 w-full'
        >
          <FAQListView
            faqItems={slice.primary.faq_items.map((item): FAQItemType => ({
              question: item.title as string,
              answer: item.description,
            }))}
            defaultOpenIndex={0}
          />
        </div>
      </div>
    </section>
  )
}

const TextSection = async ({ slice }: { slice: Content.FaqSlice }) => {
  return (
    <div>
      <h2
        className="title-h2 mt-8 lg:mt-0"
      >
        {slice.primary.heading}
      </h2>
      <p
        className="title-p max-w-[450px] mt-4 mb-8"
      >
        <PrismicRichText
          field={slice.primary.description}
          components={{
            paragraph: ({ children }) => (
              <p
                className="title-p"
              >
                {
                  children
                }
              </p>
            ),
            hyperlink: ({ children, node }) => {
              return (
                <Link
                  href={node.data.url ?? '/'}
                  className="text-primary-normal-purple hover:underline"
                >
                  {children}
                </Link>
              )
            }
          }}
        />
      </p>
      <Image
        src={FaqPic}
        width={202}
        height={278}
        quality={100}
        alt="pic-faq"
        className='ml-[150px] mt-[-30px] hidden lg:block'
      />
    </div>
  )
}

export default Faq
