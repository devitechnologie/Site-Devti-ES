"use client"

import { useJobs } from "@/services/api/jobForm"
import { useTranslations } from "next-intl"
import { FileUploader } from "react-drag-drop-files"
import { useForm, Controller } from "react-hook-form"
import { AiOutlineLoading3Quarters } from "react-icons/ai"
import { RiUpload2Line } from "react-icons/ri"
import PhoneInput from 'react-phone-number-input'
import { toast } from "react-toastify"

type FormValues = {
  name: string
  email: string
  telephone: string
  address: string
  coverLetter: string
  file: File
}

type JobApplicationFormProps = {
  position?: string
  onSuccessfulSubmit?: () => void
}

const JobApplicationForm = ({ position = "Postulez spontanément", onSuccessfulSubmit }: JobApplicationFormProps) => {
  const {
    handleSubmit,
    formState: { errors },
    reset,
    register,
    control,
    getValues
  } = useForm<FormValues>()
  const t = useTranslations()
  const { mutateAsync: submitForm, isLoading } = useJobs()

  const onSubmit = (data: FormValues) => {
    const formData = new FormData()
    formData.append('name', data.name)
    formData.append('email', data.email)
    formData.append('telephone', data.telephone)
    formData.append('address', data.address)
    formData.append('coverLetter', data.coverLetter)
    formData.append('file', data.file)
    formData.append('position', position)

    submitForm(formData, {
      onSuccess: (res) => {
        toast.success(t('job.successMessage'))
        onSuccessfulSubmit && onSuccessfulSubmit()
      },
      onError: (error) => {
        toast.error(t('job.errorMessage'))
        console.error(error)
      },
      onSettled: () => {
        reset()
      }
    })
  }

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
    >
      <div
        className="grid grid-cols-1 gap-6 md:grid-cols-2"
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
            <div className="text-red-500 mt-0.5">
              {errors.name.message}
            </div>
          )}
        </div>

        <div>
          <input
            type="text"
            id="email"
            placeholder={t('forms.fields.email')}
            className="input-field"
            {...register('email', {
              required: {
                value: true,
                message: t('forms.errors.emailRequired')
              }
            })}
          />

          {/* errors */}
          {errors.email && (
            <div className="text-red-500 mt-0.5">
              {errors.email.message}
            </div>
          )}
        </div>
      </div>
      <div
        className="mt-5 grid grid-cols-1 gap-6 md:grid-cols-2"
      >
        <div>
          <Controller
            name="telephone"
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
          {errors.telephone && (
            <div className="text-red-500">
              {errors.telephone.message}
            </div>
          )}
        </div>

        <div>
          <input
            type="text"
            id="address"
            placeholder={t('forms.fields.address')}
            className="input-field"
            {...register('address')}
          />
        </div>
      </div>

      <div className="mt-5">
        <textarea
          id="coverLetter"
          placeholder={t('forms.fields.coverLetter')}
          className="input-field"
          rows={5}
          {...register('coverLetter')}
        />
      </div>

      <div
        className="mt-4 w-full"
      >
        <label
          className="block text-sm font-medium text-primary-dark-purple mb-2"
        >
          {t('add_resume')} <span className="font-bold">(PDF, DOC, DOCX)</span>
        </label>
        <div className="w-full">
          <Controller
            name="file"
            control={control}
            rules={{ required: t('forms.errors.fileRequired') }}
            render={({ field }) => (
              <FileUploader
                types={['pdf', 'doc', 'docx']}
                multiple={false}
                maxFileSize={10000000}
                minFileSize={0}
                clickable
                name="file"
                handleChange={(files: File) => field.onChange(files)}
              >
                <div
                  className="flex items-center gap-3 bg-white border border-dashed border-primary-dark-purple rounded-xl p-2 pr-3 cursor-pointer"
                >
                  <button
                    className="text-sm bg-white flex items-center gap-2 border border-primary-dark-purple rounded-lg px-4 py-2"
                  >
                    <RiUpload2Line
                      className="text-base text-primary-dark-purple"
                    />
                    <span
                      className="text-primary-dark-purple font-medium"
                    >

                      {/* Upload File */}
                      {t('upload_file')}
                    </span>
                  </button>
                  {
                    getValues('file') ? (
                      <span>
                        {getValues('file')?.name}
                      </span>
                    ) : (
                      <span>
                        {/* Or drop file */}
                        {t('drop_file')}
                      </span>
                    )
                  }
                </div>
              </FileUploader>
            )}
          />
          {/* error message */}
          {errors.file && (
            <p
              className="text-red-500 mt-1"
            >
              {errors.file.message}
            </p>
          )}
        </div>
      </div>

      <div className="mt-5">
        <button
          type="submit"
          className={`button w-full flex justify-center items-center gap-1 ${isLoading ? 'isLoading' : ''}`}
          disabled={isLoading}
        >
          <span>
            {
              t('submit_application')
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

export default JobApplicationForm