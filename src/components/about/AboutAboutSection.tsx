import { getTranslations } from 'next-intl/server'
import Image from 'next/image'
import Link from 'next/link'

const BgPic = '/images/desktop.jpg'

const AboutAboutSection = async () => {
  const t = await getTranslations()

  return (
    <section>
      <div className="app-container section-py">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          <div className="flex flex-col justify-center items-center md:items-start">
            <h6
              className="text-primary-normal-purple text-base border border-primary-normal-purple px-3 py-1 rounded-full w-fit font-normal font-raleway mx-auto sm:mx-0"
            >
              {
                t('about.about.h6')
              }
            </h6>
            <h2 className="title-h2 mt-4 text-center sm:text-start">
              {
                t('about.about.h2')
              }
            </h2>
            <p className="mt-4 title-p"
              dangerouslySetInnerHTML={{ __html: t.raw('about.about.description') }}
            />
            <p
              className="mt-4 title-p"
            >
              {
                t('about.about.description2')
              }
            </p>
            <div>
              <Link
                href={"/realisation"}
                className="button mt-4 block"
              >
                {
                  t('about.about.button')
                }
              </Link>
            </div>
          </div>
          <div className="md:flex justify-center items-center hidden">
            <Image
              src={BgPic}
              width={800}
              height={800}
              alt="Personal Growth"
              className='w-full object-cover  rounded-md overflow-hidden'
            />
          </div>
        </div>
      </div>
    </section>
  )
}

export default AboutAboutSection