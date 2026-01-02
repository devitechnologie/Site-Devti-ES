import { LinkField } from "@prismicio/client"
import { PrismicNextLink } from "@prismicio/next"
import { useTranslations } from "next-intl"
import Image from "next/image"
import Link from "next/link"

type ServiceCardProps = {
  title: string
  imgSrc: string
  to?: LinkField
}

const ServiceCard = ({ title, imgSrc, to }: ServiceCardProps) => {
  const t = useTranslations()

  return (
    <div
      className="bg-primary-blue rounded-xl p-4 flex flex-col justify-between items-center min-h-[228px]"
    >
      <div className="min-h-[150px] flex justify-center items-center flex-col">
        <Image
          src={imgSrc}
          alt="service"
          className="w-[170px] -mt-28"
          width={800}
          height={800}
        />
        <h3
          className="text-base font-extrabold text-primary-dark-purple mt-5 max-w-[200px] mx-auto text-center"
        >
          {title}
        </h3>
      </div>
      {
        to?.link_type === "Any" ? (
          <Link
            href='/contact'
            className="bg-primary-dark-purple inline-block rounded-xl px-4 py-1 font-raleway text-primary-blue mx-auto mt-5 hover:opacity-80 transition-all"
          >
            {
              t('voir_plus')
            }
          </Link>
        )
          : (
            <PrismicNextLink
              field={to}
              className="bg-primary-dark-purple inline-block rounded-xl px-4 py-1 font-raleway text-primary-blue mx-auto mt-5 hover:opacity-80 transition-all"
            >
              {
                t('voir_plus')
              }
            </PrismicNextLink>
          )
      }
    </div >
  )
}

export default ServiceCard