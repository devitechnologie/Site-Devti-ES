"use client"

import { useState } from "react"
import { AnimatePresence, motion } from "framer-motion"
import { RiCloseFill } from "react-icons/ri"

export type FAQItemType = {
  question: string
  answer: string
}

type SimpleFAQListViewProps = {
  faqItems: FAQItemType[]
  defaultOpenIndex?: number | null | number[]
  multipleOpen?: boolean
}

type FAQItemProps = {
  item: FAQItemType
  index: number
  openIndexes: number[]
  handleToggle: (index: number) => void
  isLastOne: boolean
}

const SimpleFAQListView = ({
  faqItems,
  defaultOpenIndex,
  multipleOpen = false
}: SimpleFAQListViewProps) => {
  const initialOpenIndexes: number[] =
    typeof defaultOpenIndex === "number"
      ? [defaultOpenIndex]
      : Array.isArray(defaultOpenIndex)
        ? defaultOpenIndex
        : []

  const [openIndexes, setOpenIndexes] = useState<number[]>(initialOpenIndexes)

  const handleToggle = (index: number) => {

    setOpenIndexes((prevIndexes) => {
      if (multipleOpen) {
        // Si multipleOpen est true, permettre l'ouverture de plusieurs FAQ
        return prevIndexes.includes(index)
          ? prevIndexes.filter((i) => i !== index)
          : [...prevIndexes, index]
      } else {
        // Si multipleOpen est false, un seul FAQ ouvert à la fois (comportement original)
        return prevIndexes.includes(index) ? [] : [index]
      }
    })
  }

  return (
    <div className="flex flex-col gap-6">
      {faqItems.map((item, index) => (
        <FAQItem
          key={index}
          item={item}
          index={index}
          openIndexes={openIndexes}
          handleToggle={handleToggle}
          isLastOne={index === faqItems.length - 1}
        />
      ))}
    </div>
  )
}

const FAQItem = ({ item, index, openIndexes, handleToggle }: FAQItemProps) => {
  const isOpen = openIndexes.includes(index)

  return (
    <div>
      <div
        onClick={() => handleToggle(index)}
        className="flex items-center transition-all cursor-pointer bg-primary-dark-purple px-6 py-4 w-full rounded-2xl relative pr-10 "
      >
        <p className="title-h4 text-white w-full">
          {item.question}
        </p>

        <div
          className={`absolute right-4 top-1/2 -translate-y-1/2 transition-transform ${!isOpen ? 'rotate-45' : ''}`}
        >
          <RiCloseFill className="text-white text-2xl" />
        </div>
      </div>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="overflow-hidden"
          >
            <p className="text-primary-dark-gray-800 text-lg font-medium mt-2">
              {item.answer}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

export default SimpleFAQListView