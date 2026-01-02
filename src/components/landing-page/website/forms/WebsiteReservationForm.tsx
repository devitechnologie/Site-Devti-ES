"use client"

import useSubmitForm from "@/services/api/submitForm"
import { useRouter } from "next/navigation"
import { Controller, useForm } from "react-hook-form"
import { FaRegHandPointer } from "react-icons/fa6"
import PhoneInput from 'react-phone-number-input'
import { toast } from "react-toastify"
import { useLeadTracking } from "@/hooks/useMetaConversions"
import { useEffect } from "react"

const industryOptions = [
  "Animal & Pet",
  "Vêtements, Mode & Bijoux",
  "Avocats, Droit & Légal",
  "Arts & Divertissement",
  "Automobile (Vente & Location)",
  "Beauté, Cosmétiques & Soins Personnels",
  "Carrière & Emploi",
  "Commerce en ligne",
  "Éducation, Coaching & Instruction",
  "Agriculture, Agroalimentaire & Durabilité",
  "Finance, Banques, Investissements & Comptabilité",
  "Fitness, Compléments & Vitamines",
  "Santé, Bien-être & Médical",
  "Soins de Santé",
  "Décoration d'Intérieur, Meubles, Amélioration de l'Habitat",
  "Industrie Lourde, Énergie & Fabrication",
  "Assurance",
  "Logistique & Transport",
  "Marketing, Publicité, RP & Services Numériques",
  "Pharmacie",
  "Services Professionnels & Entrepreneurs (Nettoyage, HVAC, Plombiers, etc.)",
  "Immobilier",
  "Restaurants, Aliments & Boissons",
  "SaaS, IT & Logiciels",
  "Voyages, Hôtels & Tourisme",
  "Autre"
]

type FormValues = {
  name: string
  email: string
  phone: string
  industry: string
  hasWebsite: 'yes' | 'no'
}

const WebsiteReservationForm = () => {
  const { mutateAsync, isLoading } = useSubmitForm()
  const navigate = useRouter()
  const { generateLead, requestQuote, trackPageView } = useLeadTracking()
  const { register, handleSubmit, formState: { errors }, reset, control } = useForm<FormValues>({
    defaultValues: {
      name: '',
      email: '',
      phone: '',
      industry: '',
      hasWebsite: 'yes'
    }
  })

  useEffect(() => {
    // Track page view on component mount - runs only once
    console.log('--------------Tracking page view for WebsiteReservationForm-------------');
    trackPageView()
  }, [])

  const onSubmit = async (data: FormValues) => {
    let fromPage = location.pathname
    if (fromPage === '/') {
      fromPage = 'accueil'
    }

    const formData = {
      ...data,
      fromPage: fromPage,
      _cc: "contact@devtigroup.com"
    }

    try {
      // Submit the form
      await mutateAsync(formData)

      // Track conversion in Meta Conversions API
      const [firstName, ...lastNameParts] = data.name.split(' ')
      const lastName = lastNameParts.join(' ')

      await requestQuote({
        email: data.email,
        phone: data.phone,
        first_name: firstName,
        last_name: lastName || undefined,
      }, 'Website Creation')

      toast.success('Votre demande a été envoyée avec succès!')

      // Navigate to success page
      navigate.push('/hqlead')
      reset()
    } catch (error) {
      console.error('Form submission error:', error)
      toast.error('Une erreur est survenue. Veuillez réessayer.')
    }
  }

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="space-y-4"
    >
      <div>
        <input
          type="text"
          id="name"
          placeholder="Nom complet"
          className="input-field"
          {...register('name', {
            required: {
              value: true,
              message: "Ce champ est requis"
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
          type="email"
          id="email"
          placeholder="Adresse e-mail "
          className="input-field"
          {...register('email', {
            required: {
              value: true,
              message: "Ce champ est requis"
            },
            pattern: {
              value: /\S+@\S+\.\S+/,
              message: "Ce champ est invalide"
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
              message: "Ce champ est requis"
            },
            minLength: {
              value: 10,
              message: "Ce champ est invalide"
            }
          }}
          // ma, fr, be, swisra, spain, us, uk
          render={({ field }) => (
            <PhoneInput
              placeholder="Téléphone"
              defaultCountry="FR"
              // countries
              countries={['MA', 'FR', 'BE', 'CH', 'ES', 'US', 'GB']}
              international
              locales={['fr']}
              labels={
                {
                  FR: 'France',
                  MA: 'Maroc',
                  BE: 'Belgique',
                  CH: 'Suisse',
                  ES: 'Espagne',
                  US: 'États-Unis',
                  GB: 'Royaume-Uni',
                }
              }
              {...register('phone')}
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
          id='industry'
          {...register('industry', {
            required: {
              value: true,
              message: "Ce champ est requis"
            }
          })}
        >
          <option value="">
            Secteur d’activité
          </option>
          {industryOptions.map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </select>
        {/* errors */}
        {errors.industry && (
          <div className="text-red-500">
            {errors.industry.message}
          </div>
        )}
      </div>

      <div

      >
        <label className="block mb-2 font-semibold">
          Avez-vous déjà un site web ?
        </label>
        <div className="flex sm:items-center flex-col sm:flex-row gap-4">
          <div className="inline-flex items-center">
            <label
              className="relative flex cursor-pointer items-center rounded-full"
              htmlFor="need"
              data-ripple-dark="true"
            >
              <input
                type="radio"
                value="yes"
                className="before:content[''] peer h-5 w-5 cursor-pointer appearance-none rounded-full border-2 border-slate-300 checked:border-primary-normal-purple transition-all before:absolute before:top-2/4 before:left-2/4 before:block before:h-8 before:w-8 before:-translate-y-2/4 before:-translate-x-2/4 before:rounded-full before:bg-slate-400 before:opacity-0 before:transition-opacity hover:before:opacity-10"
                id="need"
                {...register('hasWebsite', {
                  required: {
                    value: true,
                    message: "Ce champ est requis"
                  }
                })}
              />
              <span className="absolute bg-primary-normal-purple w-3 h-3 rounded-full opacity-0 peer-checked:opacity-100 transition-opacity duration-200 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"></span>
            </label>
            <label
              className="font-medium cursor-pointer text-base ml-3"
              htmlFor="need"
            >
              Non, j&apos;en ai besoin
            </label>
          </div>

          <div className="inline-flex items-center">
            <label
              className="relative flex cursor-pointer items-center rounded-full"
              htmlFor="improve"
              data-ripple-dark="true"
            >
              <input
                type="radio"
                value="no"
                className="before:content[''] peer h-5 w-5 cursor-pointer appearance-none rounded-full border border-slate-300 checked:border-slate-400 transition-all before:absolute before:top-2/4 before:left-2/4 before:block before:h-8 before:w-8 before:-translate-y-2/4 before:-translate-x-2/4 before:rounded-full before:bg-slate-400 before:opacity-0 before:transition-opacity hover:before:opacity-10"
                id="improve"
                {...register('hasWebsite')}
              />
              <span className="absolute bg-primary-normal-purple w-3 h-3 rounded-full opacity-0 peer-checked:opacity-100 transition-opacity duration-200 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"></span>
            </label>
            <label
              className="font-medium cursor-pointer text-base ml-3"
              htmlFor="improve"
            >
              Oui, à améliorer
            </label>
          </div>
        </div>
      </div>

      <div className="pt-2">
        <button
          type="submit"
          disabled={isLoading}
          className="bg-primary-dark-purple relative rounded-xl px-4 py-4 border-2 text-sm sm:text-base border-primary-normal-purple text-primary-white mx-auto hover:opacity-80 transition-all !uppercase !font-extrabold w-full disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {isLoading ? 'Envoi en cours...' : 'Cliquez ici pour envoyer vos informations'}

          {!isLoading && (
            <FaRegHandPointer
              className="rotate-[-45deg] text-xl text-white hidden sm:block absolute top-1/2 -translate-y-1/2 right-4"
            />
          )}
        </button>

      </div>
    </form>
  )
}

export default WebsiteReservationForm