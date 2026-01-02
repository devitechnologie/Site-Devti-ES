import ReactCountryFlag from "react-country-flag"
import Image from "next/image"

import StarIcon from "./ui/StarIcon"
import { KeyTextField } from "@prismicio/client"

const NoImage = "/images/nouser.webp"

type ReviewCardProps = {
  description: string
  className?: string
  v2?: boolean
  name: string
  position?: string
  photo?: string
  countryCode?: string
}

type ReviewCardServiceProps = {
  description: KeyTextField
  className?: string
  name: KeyTextField
  position?: KeyTextField
  photo?: string | null
  countryCode?: string
}

const ReviewCard = ({ description, className, v2, name, position, photo, countryCode }: ReviewCardProps) => {
  if (v2) return (
    <div className={`rounded-lg p-8 shadow-card-shadow-border max-w-[500px] flex justify-between flex-col ${className}`}>
      <div>
        <div className="mt-5">
          <p className="title-p">
            {description}
          </p>
        </div>
      </div>
      <div
        className="flex flex-row justify-between mt-5"
      >
        <div className="flex flex-row items-center gap-3">
          <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center">
            <Image
              width={500}
              height={500}
              src={photo || NoImage}
              alt={name}
              className="w-full h-full object-cover rounded-full"
            />
          </div>
          <div>
            <div
              className="flex flex-row items-center gap-2"
            >
              <h3 className="title-h3">
                {name}
              </h3>
              <ReactCountryFlag
                countryCode={countryCode || 'FR'}
                svg
                className="w-4 h-4"
                title={countryCode || 'FR'}
              />
            </div>
            <p className="title-p">
              {position}
            </p>
          </div>
        </div>
        <div className="flex flex-row items-center gap-1 mt-2">
          <StarIcon />
          <StarIcon />
          <StarIcon />
          <StarIcon />
          <StarIcon />
        </div>
      </div>
    </div>
  )

  return (
    <div className={`rounded-lg p-8 shadow-card-shadow-border max-w-[500px] flex justify-between flex-col ${className}`}>
      <div>
        <div className="flex flex-row items-center gap-3">
          <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center">
            <Image
              width={500}
              height={500}
              src={photo || NoImage}
              alt={name}
              className="w-full  object-contain rounded-full"
            />
          </div>
          <div>
            <h3 className="title-h3">
              {name}
            </h3>
            {
              position && (
                <p className="title-p">
                  {position}
                </p>
              )
            }
          </div>
        </div>
        <div className="mt-5">
          <p className="title-p">
            {description}
          </p>
        </div>
      </div>
      <div
        className="flex justify-between mt-2"
      >
        <div className="flex flex-row items-center gap-1 mt-2">
          <StarIcon />
          <StarIcon />
          <StarIcon />
          <StarIcon />
          <StarIcon />
        </div>
        <div className="flex flex-row items-center gap-1 mt-2">
          <ReactCountryFlag
            countryCode={countryCode || 'FR'}
            svg
            style={{
              width: '1.5em',
              height: '1.5em',
            }}
            title={countryCode || 'FR'}
          />
        </div>
      </div>
    </div>
  )
}

export const ReviewCardService = ({ description, className, name, position, photo, countryCode }: ReviewCardServiceProps) => {
  return (
    <div className={`rounded-lg p-8 shadow-card-shadow-border max-w-[500px] flex justify-between flex-col ${className}`}>
      <div>
        <div className="mt-5">
          <p className="title-p">
            {description}
          </p>
        </div>
      </div>
      <div
        className="flex flex-row justify-between mt-5"
      >
        <div className="flex flex-row items-center gap-3">
          {
            (name && name.length > 0) && (
              <>
                <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center">
                  <Image
                    width={500}
                    height={500}
                    src={photo || NoImage}
                    alt={name}
                    className="w-full h-full object-cover rounded-full"
                  />
                </div>
                <div>
                  <div
                    className="flex flex-row items-center gap-2"
                  >
                    <h3 className="title-h3">
                      {name}
                    </h3>
                    <ReactCountryFlag
                      countryCode={countryCode || 'FR'}
                      svg
                      className="w-4 h-4"
                      title={countryCode || 'FR'}
                    />
                  </div>
                  <p className="title-p">
                    {position}
                  </p>
                </div>
              </>
            )
          }
        </div>
        <div className="flex flex-row items-center gap-1 mt-2">
          <StarIcon />
          <StarIcon />
          <StarIcon />
          <StarIcon />
          <StarIcon />
        </div>
      </div>
    </div>
  )
}


export default ReviewCard