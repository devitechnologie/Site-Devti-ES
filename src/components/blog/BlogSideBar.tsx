"use client"

import Image from "next/image"
import Link from "next/link"
import axios from "axios"
import { useTranslations } from "next-intl"
import { useState } from "react"
import { AiOutlineLoading3Quarters } from "react-icons/ai"

import { cn } from "@/utils/cn"

const AppLogo = '/images/Logo DEVTI TECHNOLOGIE-06.png'

const CallToAction = () => {
  const t = useTranslations()
  const [email, setEmail] = useState<string>('')
  const [isLoading, setIsLoading] = useState(false)

  const handleSubscribe = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (isLoading) return
    setIsLoading(true)
    const fomData = new FormData()
    fomData.append('EMAIL', email)
    axios.post('https://13b0b9d0.sibforms.com/serve/MUIFADLyiRMRzJ_ToThMWho90RhbtLV3v_gmYOD4UBcHh887usXg7S2d6eoscvqdr49LvbT953LoSvuXSdjY7gYYFULPK8DW0HfMy1WAtEd13H-pSadecWEQp9fsgrt150jxGCnfT3OMaANWA1GxLqak79BpQ4z-ggKRyEXYGfVBebUOC8qfCciC8xyfEj-bmogZsusuxyfLtlCD', 
      fomData, {
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded'
        }
      }
    ).then((response) => {
      console.log(response)
      setEmail('')
    }).catch((error) => {
      console.log(error)
    }).finally(() => {
      setIsLoading(false)
    })
  }

  return (
    <div className="min-w-[350px] bg-white rounded-sm shadow-card-shadow-border">
      <div className="pt-12 px-10">
        <div className="flex justify-center items-center">
          <div className="w-[80px] h-[2px] bg-primary-normal-purple mb-4"></div>
        </div>
        <p
          className="text-3xl text-center mb-6"
        >
          {t('blog.about.title')} <strong>{t('blog.about.bold_title')}</strong>
        </p>
        <p className="text-center text-sm">
          {t('blog.about.description')}
        </p>
      </div>
      <form
        className="flex items-stretch mt-0 w-full px-8 py-8 pb-10"
        onSubmit={handleSubscribe}
      >
        <input
          required
          type="email"
          name="email"
          id="email"
          value={email}
          disabled={isLoading}
          onChange={(e) => setEmail(e.target.value)}
          placeholder={t('blog.about.placeholder')}
          className="border border-primary-normal-purple px-4 py-2 rounded-l-sm w-full outline-none"
        />
        <button
          className={
            cn(
              'bg-primary-normal-purple flex items-center gap-2 text-white px-4 py-2 rounded-r-sm h-[42px] outline-none transition-all hover:bg-primary-dark-purple',
              isLoading && 'bg-primary-dark-purple cursor-not-allowed'
            )
          }
        >
          {
            isLoading && (
              <AiOutlineLoading3Quarters className="animate-spin" />
            )
          }
          {t('blog.about.button')}
        </button>
      </form>
    </div>
  )
}

const BlogSideBar = () => {
  const t = useTranslations()

  return (
    <aside className="flex-1">
      <CallToAction />
      {/* about */}
      <div
        className="py-12 px-10 my-10 bg-white rounded-sm shadow-card-shadow-border flex flex-col justify-center items-center gap-4"
      >
        <div className='w-20 h-20 shadow-xl rounded-full overflow-hidden bg-white flex justify-center items-center'>
          <Image
            src={AppLogo}
            width={200}
            height={200}
            alt="DevTi Technology"
            className="w-full h-full object-cover"
          />
        </div>
        <p
          className="text-2xl font-bold text-start w-full"
        >
          {/* About us */}
          {t('blog.about_us.title')}
        </p>
        <div className="text-sm font-normal">
          <div dangerouslySetInnerHTML={{ __html: t.raw('blog.about_us.description') }}></div>
        </div>

        <Link
          href={'/a-propos'}
          className='button-2 mt-4'
        >
          {t('blog.about_us.button')}
        </Link>
      </div>

      <div className="sticky top-[90px]">
        <CallToAction />
      </div>
    </aside>
  )
}

export default BlogSideBar