import { IoCalendarOutline } from 'react-icons/io5'
import { IoMdStats } from 'react-icons/io'
import { LuCalendarCheck2 } from 'react-icons/lu'
import { MdSupportAgent } from 'react-icons/md'
import Image from 'next/image'
import { getTranslations } from 'next-intl/server'

const BgPic = '/images/location.jpg'

const AboutOurValuesSection = async () => {
  const t = await getTranslations()

  return (
    <section>
      <div className="app-container section-py">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          <div className="md:flex justify-center items-center hidden">
            <Image
              src={BgPic}
              width={800}
              height={800}
              alt="Personal Growth"
              className='w-full object-cover h-[355px] rounded-md overflow-hidden'
            />
          </div>
          {/* text */}
          <div className="flex flex-col justify-center items-center md:items-start">
            <h6
              className="text-primary-normal-purple text-base border border-primary-normal-purple px-3 py-1 rounded-full w-fit font-normal font-raleway mx-auto sm:mx-0"
            >
              {
                t('about.ourValues.h6')
              }
            </h6>
            <h2 className="title-h2 mt-4 text-center sm:text-start">
              {
                t('about.ourValues.h2')
              }
            </h2>
            <p className="mt-4 title-p">
              {
                t('about.ourValues.description')
              }
            </p>
            <div
              className="mt-8 w-full"
            >
              <ul
                className="grid grid-cols-1 md:grid-cols-2 gap-4"
              >
                <li
                  className="flex items-center gap-4 title-p"
                >
                  <div
                    className="text-white bg-primary-normal-purple text-2xl p-2 rounded-full w-fit font-normal font-raleway"
                  >
                    <IoCalendarOutline />
                  </div>
                  {
                    t('about.ourValues.integrite')
                  }
                </li>
                <li
                  className="flex items-center gap-4 title-p"
                >
                  <div
                    className="text-white bg-primary-normal-purple text-2xl p-2 rounded-full w-fit font-normal font-raleway"
                  >
                    <LuCalendarCheck2 />
                  </div>
                  {
                    t('about.ourValues.excellence')
                  }
                </li>
                <li
                  className="flex items-center gap-4 title-p"
                >
                  <div
                    className="text-white bg-primary-normal-purple text-2xl p-2 rounded-full w-fit font-normal font-raleway"
                  >
                    <MdSupportAgent />
                  </div>
                  {
                    t('about.ourValues.collaboration')
                  }
                </li>
                <li
                  className="flex items-center gap-4 title-p"
                >
                  <div
                    className="text-white bg-primary-normal-purple text-2xl p-2 rounded-full w-fit font-normal font-raleway"
                  >
                    <IoMdStats />
                  </div>
                  {
                    t('about.ourValues.innovation')
                  }
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default AboutOurValuesSection