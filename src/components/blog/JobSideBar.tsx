"use client"

import { useTranslations } from "next-intl"
import { useState } from "react"
import Modal from "../wrappers/Modal"
import JobApplicationForm from "../jobs/JobApplicationForm"
import { KeyTextField } from "@prismicio/client"

type JobSideBarProps = {
  jobTitle: KeyTextField
}

const JobSideBar = ({ jobTitle }: JobSideBarProps) => {
  const [isOpen, setIsOpen] = useState(false)
  const t = useTranslations()

  return (
    <>
      <div className="flex-1 pt-12">
        <aside
          className="hidden md:flex flex-col w-full min-w-[350px] max-w-[350px] sticky top-[90px] bg-white p-4 rounded-lg shadow-card-sm"
        >
          <h2
            className="text-lg font-bold font-raleway text-primary-dark-purple"
          >
            {t("job.postuler_a_ce_poste")}
          </h2>
          <p
            className="text-sm font-raleway text-primary-dark-gray mt-2"
          >
            {t("job.si_vous_etes_interesse")}
          </p>
          {/* we open modal */}
          <button
            onClick={() => setIsOpen(true)}
            className={`mt-4 button w-full flex justify-center items-center gap-1`}
          >
            <span>
              {t("job.postuler")}
            </span>
          </button>
          <div className='mt-2 flex justify-center'>
            <span
              className="text-xs text-primary-dark-gray text-center"
            >
              {t("job.ou_envoyer_votre_candidature")}{" "}
              <a
                href="mailto:entreprise.devtitechnologie@gmail.com"
                className="text-primary-normal-purple"
              >
                entreprise.devtitechnologie@gmail.com
              </a>
            </span>
          </div>
        </aside>
      </div>

      <div className="lg:hidden fixed bottom-0 right-0 left-0 z-10 bg-white p-4 shadow-card-sm">
        <button
          onClick={() => setIsOpen(true)}
          className="button w-full flex justify-center items-center gap-1"
        >
          <span>
            {t("job.postuler")}
          </span>
        </button>
        <div className='mt-2 flex justify-center'>
          <span
            className="text-xs text-primary-dark-gray text-center"
          >
            {t("job.ou_envoyer_votre_candidature")}{" "}
            <a
              href="mailto:entreprise.devtitechnologie@gmail.com"
              className="text-primary-normal-purple"
            >
              entreprise.devtitechnologie@gmail.com
            </a>
          </span>
        </div>
      </div>

      <Modal
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        className="max-w-[600px]"
      >
        <div
          className="p-4 bg-white"
        >
          <JobApplicationForm
            position={jobTitle as string}
            onSuccessfulSubmit={() => setIsOpen(false)}
          />
        </div>
      </Modal>
    </>
  )
}

export default JobSideBar