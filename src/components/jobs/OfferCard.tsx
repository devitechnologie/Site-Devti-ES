import { Content } from "@prismicio/client"
import { getTranslations } from "next-intl/server"
import Link from "next/link"
import { RiBriefcaseFill, RiMapPin2Fill } from "react-icons/ri"

type OfferCardProps = {
  job: Content.JobOfferDocument
}

const OfferCard = async ({ job }: OfferCardProps) => {
  const t = await getTranslations()

  return (
    <Link
      href={`/nous-rejoindre/${job.uid}`}
      className="cursor-pointer group group overflow-hidden relative flex flex-col items-start justify-center bg-white rounded-lg shadow-card-sm p-6 hover:shadow-card-shadow-border transition-all"
    >
      <h3
        className="text-xl group-hover:underline font-bold font-raleway text-primary-dark-purple"
      >
        {job.data.job_title}
      </h3>
      <p>
        {/* brief description */}
        <span
          className="text-base mt-1 font-normal font-raleway text-primary-dark-purple line-clamp-2"
        >
          {job.data.brief_description}
        </span>
      </p>
      <p
        className="mt-2 text-lg font-normal font-raleway gap-2 text-primary-dark-purple flex items-center"
      >
        <span className="flex items-center justify-center w-[20px]">
          <RiBriefcaseFill className="inline-block" />
        </span>
        <span
          className="bg-primary-normal-purple rounded-md px-1.5 py-0.5 text-xs font-medium font-raleway text-white"
        >
          {job.data.contract}
        </span>
      </p>
      <p
        className="mt-2 text-sm font-normal font-raleway gap-2 text-primary-dark-purple flex items-center"
      >
        <span className="flex items-center justify-center w-[20px]">
          <RiMapPin2Fill className="inline-block" />
        </span>
        <span
          className="bg-gray-100 rounded-md px-1.5 py-0.5 text-xs font-medium font-raleway text-primary-dark-purple"
        >
          {job.data.type}
        </span>
      </p>

      <div
        className="mt-auto flex items-center justify-between w-full"
      >
        <div></div>
        <button
          className="underline text-primary-normal-purple font-semibold font-raleway"
        >
          {t("en_savoir_plus")}
        </button>
      </div>


      {/* overlay text hover from bottom to top */}
      {/* <div
        className="absolute -bottom-full left-0 right-0 h-full w-full group-hover:bottom-0 bg-primary-normal-purple bg-opacity-90 text-white p-4 transition-all duration-300"
      >
        <div
          className="flex-1 flex flex-col items-center justify-center gap-4"
        >
          <button
            className="text-white font-semibold font-raleway"
          >
            Postuler
          </button>
          <button
            className="text-white font-semibold font-raleway"
          >
            En savoir plus
          </button>
        </div>
      </div> */}
    </Link>
  )
}

export default OfferCard