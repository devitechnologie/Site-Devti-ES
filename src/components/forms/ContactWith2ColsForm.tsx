'use client'

import { useTranslations } from 'next-intl'
import React from 'react'
import { Fade } from 'react-awesome-reveal'
import ContactForm from './ContactForm'
import { RichTextField } from '@prismicio/client'
import { PrismicRichText } from '@prismicio/react'

type ContactWith2ColsFormProps = {
  bullets?: RichTextField
}

const ContactWith2ColsForm = ({ bullets }: ContactWith2ColsFormProps) => {
  const t = useTranslations()

  return (
    <section
      className="app-container sm:min-h-[calc(100vh-0px)] pt-[0px] min-h-[90vh]"
    >
      <div className='section-py flex sm:items-start justify-between flex-col-reverse sm:flex-row gap-4 sm:gap-0'>
        <div>
          <Fade
            direction="up"
            triggerOnce
          >
            <h6
              className="text-primary-light-purple hidden sm:block text-base border border-primary-light-purple px-3 py-1 rounded-full w-fit font-normal font-raleway mx-auto sm:mx-0"
            >
              {
                t('contact.nous-contacter')
              }
            </h6>
          </Fade>
          <Fade
            direction="up"
            triggerOnce
            delay={100}
            duration={500}
          >
            <h1
              className="mt-8 sm:mt-4 text-3xl text-center sm:text-start sm:text-4xl font-bold font-raleway text-primary-dark-purple uppercase max-w-[600px] leading-[1.15]"
            >
              {
                t('contact.titre')
              }
              <span
                className="text-primary-normal-purple"
              >
                {` `}{t('entreprise')}{` `}
              </span>
            </h1>
          </Fade>
          <Fade
            direction="up"
            triggerOnce
            delay={200}
          >
            <p
              className="mt-8 sm:mt-4 text-xl text-center sm:text-start font-normal font-raleway text-primary-dark-purple max-w-[550px]"
            >
              {
                t('contact.sous-titre')
              }
            </p>
          </Fade>
          <Fade
            direction="up"
            triggerOnce
            delay={250}
          >
            <PrismicRichText
              field={bullets}
              components={{
                list: ({ children }) => (
                  <ul className="list-bullet mt-8 sm:mt-10 text-lg text-center sm:text-start space-y-4 font-normal font-raleway text-primary-dark-purple max-w-[550px]">
                    {children}
                  </ul>
                ),
                listItem: ({ children }) => (
                  <li className="list-item">
                    {children}
                  </li>
                )
              }}
            />
          </Fade>
        </div>
        <div
          className=""
        >
          <div>
            <Fade
              direction="up"
              triggerOnce
              delay={300}
            >
              <h2
                className="text-2xl text-center sm:text-start font-bold font-raleway text-primary-dark-purple uppercase max-w-[600px] leading-[1.15]"
              >
                {
                  t('contact.nous-contacter')
                }
              </h2>
            </Fade>
          </div>
          <div
            className="w-full flex-1 max-w-[500px] sm:w-[500px] mt-8 sm:mt-2 shadow-card-shadow-border p-6 bg-white rounded-xl"
          >
            <ContactForm />
          </div>
        </div>
      </div>
    </section>
  )
}

export default ContactWith2ColsForm