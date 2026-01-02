"use client"

import { useState } from "react"
import { AnimatePresence, motion } from "framer-motion"
import { PrismicRichText, PrismicRichTextProps } from "@prismicio/react"
import { RichTextField } from "@prismicio/client"
import Link from "next/link"

export type FAQItemType = {
  question: string
  answer: string | RichTextField
}

type FAQListViewProps = {
  faqItems: FAQItemType[]
  defaultOpenIndex?: number | null
}

type FAQItemProps = {
  item: FAQItemType
  index: number
  openIndex: number | null
  handleToggle: (index: number) => void
  isLastOne: boolean
}

const FAQListView = ({ faqItems, defaultOpenIndex }: FAQListViewProps) => {
  const [openIndex, setOpenIndex] = useState<number | null>(defaultOpenIndex ?? null)

  const handleToggle = (index: number) => {
    setOpenIndex((prevIndex) => (prevIndex === index ? null : index))
  }

  return (
    <div>
      {faqItems.map((item, index) => (
        <FAQItem
          key={index}
          item={item}
          index={index}
          openIndex={openIndex}
          handleToggle={handleToggle}
          isLastOne={index === faqItems.length - 1}
        />
      ))}
    </div>
  )
}

const FAQItem = ({ item, index, openIndex, handleToggle, isLastOne }: FAQItemProps) => {
  return (
    <div
      className={`flex items-center flex-col p-3 bg-primary-extra-light-purple cursor-pointer hover:bg-opacity-80 transition-all border-2 border-b-0 border-primary-normal-purple ${isLastOne ? "border-b-2" : ""}`}
    >
      <div
        onClick={() => handleToggle(index)}
        className="flex items-center w-full transition-all"
      >
        <div
          className={`flex items-center justify-center transition-all w-10 h-10 rounded-full mr-4 text-xl ${openIndex === index
            ? "text-white"
            : " text-gray-800"
            }`}
        >
          <div className="relative">
            <span
              className={`w-5 h-[3px] rounded-full transition-all absolute top-0 left-0 transform -translate-x-1/2 -translate-y-1/2 ${openIndex === index
                ? "bg-gray-800"
                : "bg-gray-800"
                } `}
            ></span>
            <span
              className={`w-5 h-[3px] rounded-full transition-all absolute top-0 left-0 transform -translate-x-1/2 -translate-y-1/2 ${openIndex === index
                ? "rotate-0 bg-gray-800"
                : "rotate-90 bg-gray-800"
                } `}
            ></span>
          </div>
        </div>
        <div>
          <p className='title-h4 text-primary-dark-purple w-full'>
            {index + 1}. {item.question}
          </p>
        </div>
      </div>
      <AnimatePresence>
        {openIndex === index && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="overflow-hidden"
          >
            {
              typeof item.answer === "string" ? (
                <p className="text-primary-dark-gray-800 text-base mt-2 pl-[56px]">
                  {item.answer}
                </p>
              ) : (
                <PrismicRichText
                  field={item.answer}
                  components={{
                    paragraph: ({ children }) => (
                      <p
                        className="text-primary-dark-gray-800 text-base mt-2 pl-[56px]"
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
              )
            }
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

export default FAQListView