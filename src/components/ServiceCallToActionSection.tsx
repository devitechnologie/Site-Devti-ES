'use client'

import PhoneInput from 'react-phone-number-input'
import { Controller, useForm } from 'react-hook-form'
import { AiOutlineLoading3Quarters } from 'react-icons/ai'
import { toast } from 'react-toastify'

import { useTranslations } from 'next-intl'
import Image from 'next/image'
import Link from 'next/link'
import { KeyTextField } from '@prismicio/client'
import useSubmitForm from '@/services/api/submitForm'
import { useRouter } from 'next/navigation'
import { FormSubmit } from '@/services/types/formSubmit'
import { cn } from '@/utils/cn'
// import useSubmitForm from '../services/api/submitForm'
// import { FormSubmit } from '../services/types/FormSubmit'

const BgImage = '/images/Customer-Support.png'

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

type ServiceCallToActionSectionProps = {
  imageUrl?: string
  title: KeyTextField
  buttonText: KeyTextField
  selectOptions: string[]
  contactTitle: KeyTextField
  contactDescription: KeyTextField
}

const ServiceCallToActionSection = ({ title, buttonText, selectOptions, contactTitle, contactDescription, imageUrl }: ServiceCallToActionSectionProps) => {
  const navigate = useRouter()
  const t = useTranslations()
  const { mutateAsync, isLoading } = useSubmitForm()
  const { register, handleSubmit, formState: { errors }, reset, control } = useForm<FormValues>()

  const onSubmit = (data: FormValues) => {
    let fromPage = location.pathname
    if (fromPage === '/') {
      fromPage = 'accueil'
    }

    const formData: FormSubmit = {
      ...data,
      fromPage: 'service page: ' + fromPage,
      _cc: "contact@devtigroup.com"
    }

    mutateAsync(formData).then(() => {
      toast.success('Votre message a été envoyé avec succès')
      navigate.push('/thank-you')
      reset()
    }).catch((e) => {
      console.log(e)
      toast.error('Une erreur est survenue')
    })
  }

  return (
    <section
      id='call-to-action-form'
    >
      <div className="app-container section-py grid grid-cols-1 md:grid-cols-2 gap-8 lg:px-36">
        {/* form */}
        <div
          className="shadow-card-shadow-border rounded-lg bg-white h-fit"
        >
          <div
            className="bg-primary-normal-purple text-center rounded-t-lg px-8 py-6"
          >
            <h2 className="text-xl font-bold text-primary-white">
              {title}
            </h2>
          </div>
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="flex flex-col justify-start gap-4 w-full px-4 py-4 sm:px-8 sm:py-6"
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
                {
                  selectOptions?.map((option: string, index: number) => (
                    <option key={index}
                      value={option}>
                      {option}
                    </option>
                  ))
                }
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
                {buttonText}
              </span>
              {
                isLoading && (
                  <AiOutlineLoading3Quarters className="animate-spin" />
                )
              }
            </button>
          </form>
        </div>
        {/* contact */}
        <div
          className="flex flex-col justify-center items-center gap-5"
        >
          <div
            className={cn(
              "w-72 relative",
              imageUrl && "w-full rounded-xl overflow-hidden",
            )}
          >
            <Image
              src={imageUrl || BgImage}
              alt="customer support"
              width={500}
              height={500}
              className="w-full"
            />
          </div>
          <div className='space-y-2 text-center'>
            <h3 className="title-h3 text-primary-dark-purple">
              {
                contactTitle
              }
            </h3>
            <p
              className='title-p text-center'
            >
              {
                contactDescription
              }
            </p>
          </div>
          {/* <Link
            href="/contact"
            className="block button-2 font-semibold"
          >
            {
              contactBtnText
            }
          </Link>  */}
        </div>
      </div>
    </section>
  )
}

export default ServiceCallToActionSection