"use client"

import { cn } from '@/utils/cn'
import { AnimatePresence, motion } from 'framer-motion'
import { useEffect, useState } from 'react'
import { RiCloseLine } from 'react-icons/ri'
import { RemoveScrollBar } from 'react-remove-scroll-bar'

type ModalProps = {
  children: React.ReactNode
  isOpen: boolean
  onClose: (isOpen: boolean) => void
  className?: string
  wrapperClassName?: string
  headerText?: string
}

const Modal = ({
  children,
  isOpen,
  onClose,
  className,
  headerText,
  wrapperClassName
}: ModalProps) => {
  const [y, setY] = useState(0)

  useEffect(() => {
    if (isOpen == false) {
      setY(0)
    }
  }, [isOpen])

  return (
    <AnimatePresence
      mode='wait'
    >
      {isOpen && (
        <motion.div
          className={
            cn(
              'fixed inset-0 h-[100dvh] overflow-y-auto z-50 flex justify-center items-start modal-back-color-light',
              wrapperClassName
            )
          }
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={() => onClose(false)}
          onScroll={(e) => setY(e.currentTarget.scrollTop)}
        >
          <RemoveScrollBar />
          <motion.div
            className={cn(
              'relative bg-white rounded-b-none rounded-t-2xl lg:rounded-2xl min-h-[calc(100dvh-80px)] md:min-h-[calc(100dvh-64px)] 2xl:min-h-fit mt-20 lg:mb-16 w-full sm:w-[calc(100%-2rem)] max-w-[1024px]',
              className
            )}
            initial={{ opacity: 0, y: 500 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 500 }}
            transition={{ duration: 0.4, ease: 'easeOut', bounce: 0 }}
            onClick={(e) => e.stopPropagation()}
          >
            <div
              className='sticky -top-1.5 left-4 z-50 px-4 pt-4'
            >
              <button
                className='flex justify-center items-center w-10 h-10 rounded-full bg-primaryWhite shadow-card-sm'
              >
                <RiCloseLine
                  className='text-3xl text-primaryGrey'
                  onClick={() => onClose(false)}
                />
              </button>
            </div>
            {/* header */}
            {
              (headerText && (y && y > 128)) ? (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{
                    bounce: 0,
                    duration: 0.4,
                  }}
                  className='py-5 border-b-2 border-secondaryGrey sticky top-0 left-0 w-full bg-primaryWhite z-40'
                >
                  <h1
                    className="font-body font-medium text-center text-lg"
                  >
                    {headerText}
                  </h1>
                </motion.div>
              ) : (
                <div></div>
              )}
            {children}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}


export default Modal