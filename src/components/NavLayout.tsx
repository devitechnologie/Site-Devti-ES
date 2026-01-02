import { createClient } from '@/prismicio'

import React from 'react'
import Navbar from './Navbar'
import { getPrismicLocale } from '@/utils/helpers'
import { TLocale } from '@/i18n'

const NavLayout = async ({ locale }: { locale: TLocale }) => {
  const client = createClient()
  const navbar = await client.getSingle("navbar", { lang: getPrismicLocale(locale) })
  const services = await client.getAllByType(
    "servicepage",
    { 
      lang: getPrismicLocale(locale),
      fetch: [
        "servicepage.uid",
        "servicepage.url",
        "servicepage.type",
        "servicepage.nom_service",
        "servicepage.type_service",
      ]
    }
  )

  return (
    <Navbar
      navbar={navbar}
      services={services}
    />
  )
}

export default NavLayout