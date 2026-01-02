"use client"

import Marquee from 'react-fast-marquee'
import { Content, GroupField } from '@prismicio/client'
import { PrismicNextImage } from '@prismicio/next'

import { Simplify } from '../../prismicio-types'

type PartnersLogosProps = {
  images: GroupField<Simplify<Content.OurClientsSliceDefaultPrimaryPartnersLogosItem>>
}

const PartnersLogos = ({ images }: PartnersLogosProps): JSX.Element => {

  return (
    <div className='w-[350px] lg:w-[500px] overflow-hidden'>
      <Marquee
        speed={40}
      >
        {images.map((pic, index) => (
          <div key={index} className='flex flex-col items-start justify-start px-7 w-36'>
            <PrismicNextImage
              field={pic.image}
              width={100}
              height={100}
              className='w-full h-auto object-contain'
            />
          </div>
        ))}
      </Marquee>
    </div>
  )
}

export default PartnersLogos