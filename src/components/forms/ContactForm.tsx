"use client"

import PhoneInput from 'react-phone-number-input'
import { useForm, Controller } from 'react-hook-form'
import { toast } from 'react-toastify'
import { AiOutlineLoading3Quarters } from 'react-icons/ai'

import { useTranslations } from 'next-intl'
import useSubmitForm from '@/services/api/submitForm'
import { FormSubmit } from '@/services/types/formSubmit'
import { useRouter } from 'next/navigation'

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

const ContactForm = () => {
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
      fromPage: fromPage,
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
    <form
      onSubmit={handleSubmit(onSubmit)}
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
      <div className="mt-5">
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
      <div className="mt-5">
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
      <div className="mt-5">
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
      <div className="mt-5">
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
      <div className="mt-5">
        <select
          id="interestedIn"
          className="input-field"
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
          <option value="Création de sites web">
            {
              t('forms.fields.interesseParOptions.creationDeSitesWeb')
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
          <option value="Développement mobile">
            {
              t('forms.fields.interesseParOptions.developmentMobile')
            }
          </option>
          <option value="Développement web spécifique">
            {
              t('forms.fields.interesseParOptions.specificWebDevelopment')
            }
          </option>
          <option value="Intégration de services en Intelligence Artificielle">
            {
              t('forms.fields.interesseParOptions.integrationIA')
            }
          </option>
          <option value="Visualisation et analyse des données">
            {
              t('forms.fields.interesseParOptions.visualisationAnalyseDonnees')
            }
          </option>
          <option value="Autre">
            {
              t('forms.fields.interesseParOptions.other')
            }
          </option>
        </select>
        {/* errors */}
        {errors.interestedIn && (
          <div className="text-red-500">
            {errors.interestedIn.message}
          </div>
        )}
      </div>
      <div className="mt-5">
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
      <div className="mt-5">
        <textarea
          id="message"
          placeholder={t('forms.fields.message')}
          className="input-field"
          rows={5}
          {...register('message')}
        ></textarea>
      </div>
      <div className="mt-5">
        <button
          type="submit"
          className={`button w-full flex justify-center items-center gap-1 ${isLoading ? 'isLoading' : ''}`}
          disabled={isLoading}
        >
          <span>
            {
              t('forms.fields.submit')
            }
          </span>
          {
            isLoading && (
              <AiOutlineLoading3Quarters className="animate-spin" />
            )
          }
        </button>
      </div>
    </form>
  )
}

export default ContactForm