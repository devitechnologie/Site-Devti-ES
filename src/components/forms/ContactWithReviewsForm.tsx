'use client'

import { Swiper, SwiperSlide } from "swiper/react"
import { Autoplay, Pagination } from "swiper/modules"
import PhoneInput from 'react-phone-number-input'
import { Controller, useForm } from "react-hook-form"
import { AiOutlineLoading3Quarters } from "react-icons/ai"
import { toast } from "react-toastify"

import { useTranslations } from "next-intl"
// import useSubmitForm from "../services/api/submitForm"
// import { FormSubmit } from "../services/types/FormSubmit"
import ReviewCard from "../ReviewCard"
import useSubmitForm from "@/services/api/submitForm"
import { FormSubmit } from "@/services/types/formSubmit"
import { useRouter } from "next/navigation"
const ReviewPic1 = "/images/client12.png"
const ReviewPic2 = "/images/client13.png"

type FormValues = {
  name: string
  email: string
  phone: string
  company: string
  industry: string
  interestedIn: string
  message: string
  office: 'tanger' | 'casablanca'
}


const ContactWithReviewsForm = () => {
  const t = useTranslations()
  const navigate = useRouter()
  const { mutateAsync, isLoading } = useSubmitForm()
  const { register, handleSubmit, formState: { errors }, reset, control } = useForm<FormValues>()

  const onSubmit = (data: FormValues) => {
    let fromPage = location.pathname
    if (fromPage === '/') {
      fromPage = 'accueil'
    }

    const formData: FormSubmit = {
      ...data,
      fromPage: 'Methode de travaille page: ' + fromPage,
      _cc: "contact@devtigroup.com"
    }

    mutateAsync(formData).then(() => {
      toast.success(t('forms.successMessage'))
      navigate.push('/thank-you')
      reset()
    }).catch((e) => {
      console.log(e)
      toast.error(t('forms.errorMessage'))
    })
  }

  return (
    <section
      id='call-to-action-form'
    >
      <div className="app-container section-py grid grid-cols-1 md:grid-cols-2 gap-8 lg:px-36">
        {/* form */}
        <div
          className="shadow-card-shadow-border rounded-lg bg-whiteh-fit"
        >
          <div
            className="bg-primary-normal-purple rounded-t-lg px-8 py-6"
          >
            <h2 className="text-xl font-bold text-primary-white text-center">
              {t('methodeTravaille.form.title')}
            </h2>
          </div>
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="flex flex-col gap-4 w-full px-8 py-6"
          >
            <div>
              <input
                type="text"
                id="name"
                placeholder={t('forms.fields.fullName')}
                className="input-field"
                {...register('name', {
                  required: {
                    value: true,
                    message: t('forms.errors.nameRequired')
                  }
                })}
              />
              {/* errors */}
              {errors.name && (
                <div className="text-red-500">
                  {errors.name.message}
                </div>
              )}
            </div>
            <div>
              <input
                type="text"
                id="company"
                placeholder={t('forms.fields.company')}
                className="input-field"
                {...register('company', {
                  required: {
                    value: true,
                    message: t('forms.errors.companyRequired')
                  }
                })}
              />
              {/* errors */}
              {errors.company && (
                <div className="text-red-500">
                  {errors.company.message}
                </div>
              )}
            </div>
            <div>
              <input
                type="email"
                id="email"
                placeholder={t('forms.fields.email')}
                className="input-field"
                {...register('email', {
                  required: {
                    value: true,
                    message: t('forms.errors.emailRequired')
                  },
                  pattern: {
                    value: /\S+@\S+\.\S+/,
                    message: t('forms.errors.emailInvalid')
                  }
                })}
              />
              {/* errors */}
              {errors.email && (
                <div className="text-red-500">
                  {errors.email.message}
                </div>
              )}
            </div>
            <div>
              <Controller
                name="phone"
                control={control}
                rules={{
                  required: {
                    value: true,
                    message: t('forms.errors.phoneRequired')
                  },
                  minLength: {
                    value: 10,
                    message: t('forms.errors.phoneInvalid')
                  }
                }}
                render={({ field }) => (
                  <PhoneInput
                    placeholder={t('forms.fields.phone')}
                    defaultCountry="MA"
                    international
                    {...field}
                  />
                )}
              />
              {/* errors */}
              {errors.phone && (
                <div className="text-red-500">
                  {errors.phone.message}
                </div>
              )}
            </div>
            <div>
              <select
                className="input-field"
                id="interestedIn"
                {...register('interestedIn', {
                  required: {
                    value: true,
                    message: t('forms.errors.interestedInRequired')
                  }
                })}
              >
                <option value="">
                  {
                    t('forms.fields.interessePar')
                  }
                </option>
                <option value="DÉVELOPPEMENT SITE WEB">
                  {
                    t('forms.fields.interesseParOptions.websiteDevelopment')
                  }
                </option>
                <option value="DÉVELOPPEMENT MOBILE">
                  {
                    t('forms.fields.interesseParOptions.mobileDevelopment')
                  }
                </option>
                <option value="Odoo">
                  {
                    t('forms.fields.interesseParOptions.odoo')
                  }
                </option>
                <option value="Automatisation n8n">
                  {
                    t('forms.fields.interesseParOptions.automationN8n')
                  }
                </option>
                <option value="DÉVELOPPEMENT LOGICIEL">
                  {
                    t('forms.fields.interesseParOptions.softwareDevelopment')
                  }
                </option>
                <option value="DÉVELOPPEMENT D'APPLICATION WEB">
                  {
                    t('forms.fields.interesseParOptions.webAppDevelopment')
                  }
                </option>
                <option value="UI/UX Design">
                  {
                    t('forms.fields.interesseParOptions.uiuxDesign')
                  }
                </option>
                <option value="Référencement naturel SEO">
                  {
                    t('forms.fields.interesseParOptions.seo')
                  }
                </option>
                <option value="Autre">
                  {
                    t('forms.fields.interesseParOptions.other')
                  }
                </option>
              </select>
              {/* error */}
              {errors.interestedIn && (
                <div className="text-red-500">
                  {errors.interestedIn.message}
                </div>
              )}
            </div>
            {/* industry */}
            <div>
              <select
                className="input-field"
                id='industry'
                {...register('industry', {
                  required: {
                    value: true,
                    message: t('forms.errors.industryRequired')
                  }
                })}
              >
                <option value="">
                  {
                    t('forms.fields.industry')
                  }
                </option>
                {
                  (t.raw('forms.fields.industryOptions') as string[]).map((industry: string, index: number) => (
                    <option key={index}
                      value={industry}>
                      {industry}
                    </option>
                  ))
                }
              </select>
              {/* errors */}
              {errors.industry && (
                <div className="text-red-500">
                  {errors.industry.message}
                </div>
              )}
            </div>
            <div>
              <select
                className="input-field"
                id="office"
                {...register('office', {
                  required: {
                    value: true,
                    message: t('forms.errors.officeRequired')
                  }
                })}
              >
                <option
                  value=""
                  selected
                  disabled
                  hidden
                >
                  {
                    t('forms.fields.office')
                  }
                </option>
                <option value="tanger">
                  {
                    t('forms.fields.tanger')
                  }
                </option>
                <option value="casablanca">
                  {
                    t('forms.fields.casablanca')
                  }
                </option>
              </select>
              {/* errors */}
              {errors.office && (
                <div className="text-red-500">
                  {errors.office.message}
                </div>
              )}
            </div>
            <textarea
              id="message"
              cols={30}
              rows={2}
              placeholder={t('forms.fields.message')}
              className="input-field"
              {...register('message')}
            ></textarea>
            <button
              type="submit"
              disabled={isLoading}
              className={`btn-colored-2 w-full flex justify-center items-center gap-1 ${isLoading ? 'isLoading' : ''}`}
            >
              <span>
                {t('methodeTravaille.form.placeHolder')}
              </span>
              {
                isLoading && (
                  <AiOutlineLoading3Quarters className="animate-spin" />
                )
              }
            </button>
          </form>
        </div>
        {/* reviews */}
        <div
          className="flex items-center"
        >
          <Swiper
            className="p-[1px]"
            spaceBetween={16}
            slidesPerView={1}
            loop={true}
            modules={[Autoplay, Pagination]}
            autoplay={{
              delay: 3000,
              disableOnInteraction: false
            }}
            pagination={{
              clickable: true
            }}
          >
            <SwiperSlide>
              <ReviewCard
                description={`"${t('reviews.waycab.description')}"`}
                position={t('reviews.waycab.position')}
                name="WayCab"
                countryCode="be"
                v2
                photo={ReviewPic1}
                className="min-h-[280px]"
              />
            </SwiperSlide>
            <SwiperSlide>
              <ReviewCard
                description={`"${t('reviews.betty.description')}"`}
                position={t('reviews.betty.position')}
                name="Betty Jardin"
                countryCode="fr"
                v2
                className="min-h-[280px]"
              />
            </SwiperSlide>
            <SwiperSlide>
              <ReviewCard
                description="Très professionnel et à l écoute... une agance au top!"
                name="LGDA"
                position="CEO"
                countryCode="MA"
                v2
                photo={ReviewPic2}
                className="min-h-[280px]"
              />
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </section>
  )
}

export default ContactWithReviewsForm