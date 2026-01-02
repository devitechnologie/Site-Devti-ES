import { useMutation } from 'react-query'
import axios from 'axios'

import { FormSubmit } from '../types/formSubmit'

// send form data
async function submitForm(data: FormSubmit | any) {
  const res = await axios.post('https://formspree.io/f/xzbnanwd', data)
  return res.data
}

// useMutation hook to handle form submission
export default function useSubmitForm() {
  return useMutation(submitForm)
}

// devtiai form
export async function submitDevtiAIForm(data: any) {
  const res = await axios.post('https://formspree.io/f/xkgzvldy', data)
  return res.data
}

export function useDevtiAIForm() {
  return useMutation(submitDevtiAIForm)
}