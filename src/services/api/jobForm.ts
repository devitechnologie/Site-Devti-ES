import { useMutation } from 'react-query'
import emailjs from '@emailjs/browser'
import axios from 'axios'

export const submitJobForm = async (form: FormData) => {
  const { data: { fileUrl } } = await axios.post('/api/job', form)
  form.delete('file')
  const res = await emailjs.send(
    "service_52z13ou",
    "template_liondxi",
    {
      cv_url: fileUrl,
      full_name: form.get('name'),
      email: form.get('email'),
      phone: form.get('telephone'),
      address: form.get('address'),
      cover_letter: form.get('coverLetter'),
      position: form.get('position')
    },
    "xT33-Jkm1-HeysWUa"
  )

  return res
}

export const useJobs = () => {
  return useMutation(submitJobForm)
}