"use client"
import { Rating, ThinStar } from '@smastrom/react-rating'
import Marquee from 'react-fast-marquee'
import Image from 'next/image'
import { Content } from "@prismicio/client";
import { PrismicNextImage } from '@prismicio/next';

const ClientPic1 = "/images/logo_brands/park.png"
const ClientPic2 = "/images/logo_brands/one.png"
const ClientPic3 = "/images/logo_brands/addwork.png"
const ClientPic4 = "/images/logo_brands/cropped-logo_cemda_maroc_siteweb.png"
const ClientPic5 = "/images/logo_brands/oplo.png"
const ClientPic6 = "/images/logo_brands/logo_dark.png"
const ClientPic7 = "/images/client2.png"
const ClientPic8 = "/images/logo_brands/glucone.png"
const ClientPic10 = "/images/logo_brands/activation.png"
const ClientPic11 = "/images/logo_brands/beautyconcept.png"

const clientPics = [
  ClientPic1,
  ClientPic2,
  ClientPic3,
  ClientPic4,
  ClientPic5,
  ClientPic6,
  ClientPic7,
  ClientPic8,
  ClientPic10,
  ClientPic11
]

type LogosReviewsProps = {
  slice: {
    slice_type: "our_clients";
    slice_label: null;
    id: string;
  } & Content.OurClientsSliceDefault
};

const LogosReviews = ({ slice }: LogosReviewsProps): JSX.Element => {

  return (
    <div className='w-[350px] lg:w-[500px] overflow-hidden'>
      <Marquee
        speed={50}
      >
        {
          slice.primary.clients_logos.length > 0 ? (
            slice.primary.clients_logos.map((logo, index) => (
              <div key={index} className='flex flex-col items-start justify-start px-7 w-36'>
                <PrismicNextImage
                  field={logo.image}
                  width={100}
                  height={100}
                  className='w-full h-auto object-contain'
                />
                <div
                >
                  <Rating
                    value={5}
                    style={{ maxWidth: 100 }}
                    itemStyles={{
                      itemShapes: ThinStar,
                      activeFillColor: '#fff',
                      inactiveFillColor: '#fbf1a9',
                      inactiveBoxBorderColor: '#fbf1a9',
                      inactiveStrokeColor: '#ffb700',
                      activeBoxColor: '#210054',
                      boxBorderWidth: 1,
                      activeBoxBorderColor: '#FBFEFF',
                    }}
                    halfFillMode='box'
                    readOnly
                  />
                </div>
              </div>
            ))

          ) : (
            clientPics.map((pic, index) => (
              <div key={index} className='flex flex-col items-start justify-start px-7 w-36'>
                <Image
                  src={pic}
                  alt={`Client ${index + 1}`}
                  width={100}
                  height={100}
                  className='w-full h-auto object-contain'
                />
                <div
                >
                  <Rating
                    value={5}
                    style={{ maxWidth: 100 }}
                    itemStyles={{
                      itemShapes: ThinStar,
                      activeFillColor: '#fff',
                      inactiveFillColor: '#fbf1a9',
                      inactiveBoxBorderColor: '#fbf1a9',
                      inactiveStrokeColor: '#ffb700',
                      activeBoxColor: '#210054',
                      boxBorderWidth: 1,
                      activeBoxBorderColor: '#FBFEFF',
                    }}
                    halfFillMode='box'
                    readOnly
                  />
                </div>
              </div>
            ))
          )
        }

      </Marquee>
    </div>
  )
}

export default LogosReviews