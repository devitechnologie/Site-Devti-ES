import { AnimatePresence, motion } from 'framer-motion'
import Link from 'next/link'
import React from 'react'
import { DropDownMenuSliceDefaultPrimaryServicesTitleItem, ServicepageDocument } from '../../prismicio-types'
import { useTranslations } from 'next-intl'

type ServicesDropdownProps = {
  isMenuServicesOpen: boolean
  setIsMenuServicesOpen: (value: boolean) => void
  services: ServicepageDocument<string>[]
  servicesHeader: DropDownMenuSliceDefaultPrimaryServicesTitleItem[]
}

type MobileServicesDropdownProps = {
  isMenuMobileServicesOpen: boolean
  setIsMenuMobileServicesOpen: (value: boolean) => void
  setIsNavMobileOpen: (value: boolean) => void
  services: ServicepageDocument<string>[]
  servicesHeader: DropDownMenuSliceDefaultPrimaryServicesTitleItem[]
}

const ServicesDropdown = ({ isMenuServicesOpen, setIsMenuServicesOpen, services,servicesHeader }: ServicesDropdownProps) => {
  const t = useTranslations()

  return (
    <AnimatePresence>
      {
        isMenuServicesOpen && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 10 }}
            transition={{ duration: .3 }}
            className="absolute top-[70px] min-h-[300px] right-0 cursor-default left-0 p-8 text-gray-800 flex gap-2 flex-col bg-white shadow-card-shadow-border rounded-md overflow-hidden"
          >
            <div className='flex justify-between items-start'>
              {/* site web dev */}
              <div>
                <Link
                  href={servicesHeader[0] ? (servicesHeader[0].service_title_link as any).url ?? '/' : '/'}
                  onClick={() => setIsMenuServicesOpen(false)}
                  className='font-bold uppercase font-poppins text-sm text-primary-normal-purple cursor-pointer hover:underline'
                >
                  {
                    t('navbar.services.siteWeb.title')
                  }
                </Link>
                <ul
                  className='mt-6 pl-2 flex flex-col gap-3'
                >
                  {
                    services.map((service) => {
                      if (service.data?.type_service && (service.data.type_service as any).uid != 'site-web') return null
                      return (
                        <li
                          key={service.uid}
                        >
                          <Link
                            className='hover:underline hover:text-primary-normal-purple'
                            href={service.url ?? '/'}
                            onClick={() => setIsMenuServicesOpen(false)}
                          >
                            {
                              service.data.nom_service
                            }
                          </Link>
                        </li>
                      )
                    })
                  }
                </ul>
              </div>
              {/* mobile dev */}
              <div>
                <Link
                  href={servicesHeader[1] ? (servicesHeader[1].service_title_link as any).url ?? '/' : '/'}
                  onClick={() => setIsMenuServicesOpen(false)}
                  className='cursor-pointer hover:underline font-bold uppercase font-poppins text-sm text-primary-normal-purple'
                >
                  {
                    t('navbar.services.mobile.title')
                  }
                </Link>
                <ul
                  className='mt-6 pl-2 flex flex-col gap-3'
                >
                  {
                    services.map((service) => {
                      if (service.data?.type_service && (service.data.type_service as any).uid != 'developpement-mobile') return null
                      return (
                        <li
                          key={service.uid}
                        >
                          <Link
                            className='hover:underline hover:text-primary-normal-purple'
                            href={service.url ?? '/'}
                            onClick={() => setIsMenuServicesOpen(false)}
                          >
                            {
                              service.data.nom_service
                            }
                          </Link>
                        </li>
                      )
                    })
                  }
                </ul>
              </div>

              {/* app web dev */}
              <div>
                <Link
                  href={servicesHeader[2] ? (servicesHeader[2].service_title_link as any).url ?? '/' : '/'}
                  onClick={() => setIsMenuServicesOpen(false)}
                  className='cursor-pointer hover:underline font-bold uppercase font-poppins text-sm text-primary-normal-purple'
                >
                  {
                    t('navbar.services.webapp.title')
                  }
                </Link>
                <ul
                  className='mt-6 pl-2 flex flex-col gap-3'
                >
                  {
                    services.map((service) => {
                      if (service.data?.type_service && (service.data.type_service as any).uid != 'developpement-dapplication-web') return null
                      return (
                        <li
                          key={service.uid}
                        >
                          <Link
                            className='hover:underline hover:text-primary-normal-purple'
                            href={service.url ?? '/'}
                            onClick={() => setIsMenuServicesOpen(false)}
                          >
                            {
                              service.data.nom_service
                            }
                          </Link>
                        </li>
                      )
                    })
                  }
                </ul>
              </div>
              {/* developpement specifique  */}
              <div>
                <Link
                  href={servicesHeader[3] ? (servicesHeader[3].service_title_link as any).url ?? '/' : '/'}
                  onClick={() => setIsMenuServicesOpen(false)}
                  className='cursor-pointer hover:underline font-bold uppercase font-poppins text-sm text-primary-normal-purple'
                >
                  {
                    t('navbar.services.developpement-specifique.title')
                  }
                </Link>
                <ul
                  className='mt-6 pl-2 flex flex-col gap-3'
                >
                  {
                    services.map((service) => {
                      if (service.data?.type_service && (service.data.type_service as any).uid != 'developpement-specifique') return null
                      return (
                        <li
                          key={service.uid}
                        >
                          <Link
                            className='hover:underline hover:text-primary-normal-purple'
                            href={service.url ?? '/'}
                            onClick={() => setIsMenuServicesOpen(false)}
                          >
                            {
                              service.data.nom_service
                            }
                          </Link>
                        </li>
                      )
                    })
                  }
                </ul>
              </div>
            </div>
          </motion.div>
        )
      }
    </AnimatePresence>
  )
}

export const MobileServicesDropdown = ({ isMenuMobileServicesOpen, setIsMenuMobileServicesOpen, setIsNavMobileOpen, services,servicesHeader }: MobileServicesDropdownProps) => {
  const t = useTranslations()

  return (
    <div className='transition-all'>
      <AnimatePresence>
        {
          isMenuMobileServicesOpen && (
            <motion.ul
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: .1 }}
            >
              <li
                className='pl-8 mt-2'
              >
                <Link
                  href={servicesHeader[0] ? (servicesHeader[0].service_title_link as any).url ?? '/' : '/'}
                  onClick={() => {
                    setIsMenuMobileServicesOpen(false)
                    setIsNavMobileOpen(false)
                  }}
                  className='font-bold uppercase font-poppins text-sm text-primary-normal-purple cursor-pointer hover:underline'
                >
                  {
                    t('navbar.services.siteWeb.title')
                  }
                </Link>
                <ul
                  className='mt-2 flex flex-col gap-2'
                >
                  {
                    services.map((service) => {
                      if (service.data?.type_service && (service.data.type_service as any).uid != 'site-web') return null
                      return (
                        <li
                          key={service.uid}
                        >
                          <Link
                            className='hover:underline hover:text-primary-normal-purple'
                            href={service.url ?? '/'}
                            onClick={() => {
                              setIsMenuMobileServicesOpen(false)
                              setIsNavMobileOpen(false)
                            }}
                          >
                            {
                              service.data.nom_service
                            }
                          </Link>
                        </li>
                      )
                    })
                  }
                </ul>
              </li>
              <li
                className='pl-8 mt-2'
              >
                <Link
                  href={servicesHeader[1] ? (servicesHeader[1].service_title_link as any).url ?? '/' : '/'}
                  onClick={() => {
                    setIsMenuMobileServicesOpen(false)
                    setIsNavMobileOpen(false)
                  }}
                  className='font-bold uppercase font-poppins text-sm text-primary-normal-purple cursor-pointer hover:underline'
                >
                  {
                    t('navbar.services.mobile.title')
                  }
                </Link>
                <ul
                  className='mt-2 flex flex-col gap-2'
                >
                  {
                    services.map((service) => {
                      if (service.data?.type_service && (service.data.type_service as any).uid != 'developpement-mobile') return null
                      return (
                        <li
                          key={service.uid}
                        >
                          <Link
                            className='hover:underline hover:text-primary-normal-purple'
                            href={service.url ?? '/'}
                            onClick={() => {
                              setIsMenuMobileServicesOpen(false)
                              setIsNavMobileOpen(false)
                            }}
                          >
                            {
                              service.data.nom_service
                            }
                          </Link>
                        </li>
                      )
                    })
                  }
                </ul>
              </li>
              <li
                className='pl-8 mt-2'
              >
                <Link
                  href={servicesHeader[2] ? (servicesHeader[2].service_title_link as any).url ?? '/' : '/'}
                  onClick={() => {
                    setIsMenuMobileServicesOpen(false)
                    setIsNavMobileOpen(false)
                  }}
                  className='font-bold uppercase font-poppins text-sm text-primary-normal-purple cursor-pointer hover:underline'
                >
                  {
                    t('navbar.services.webapp.title')
                  }
                </Link>
                <ul
                  className='mt-2 flex flex-col gap-2'
                >
                  {
                    services.map((service) => {
                      if (service.data?.type_service && (service.data.type_service as any).uid != 'developpement-dapplication-web') return null
                      return (
                        <li
                          key={service.uid}
                        >
                          <Link
                            className='hover:underline hover:text-primary-normal-purple'
                            href={service.url ?? '/'}
                            onClick={() => {
                              setIsMenuMobileServicesOpen(false)
                              setIsNavMobileOpen(false)
                            }}
                          >
                            {
                              service.data.nom_service
                            }
                          </Link>
                        </li>
                      )
                    })
                  }
                </ul>
              </li>
              <li
                className='pl-8 mt-2'
              >
                <Link
                  href={servicesHeader[3] ? (servicesHeader[3].service_title_link as any).url ?? '/' : '/'}
                  onClick={() => {
                    setIsMenuMobileServicesOpen(false)
                    setIsNavMobileOpen(false)
                  }}
                  className='font-bold uppercase font-poppins text-sm text-primary-normal-purple cursor-pointer hover:underline'
                >
                  {
                    t('navbar.services.developpement-specifique.title')
                  }
                </Link>
                <ul
                  className='mt-2 flex flex-col gap-2'
                >
                  {
                    services.map((service) => {
                      if (service.data?.type_service && (service.data.type_service as any).uid != 'developpement-specifique') return null
                      return (
                        <li
                          key={service.uid}
                        >
                          <Link
                            className='hover:underline hover:text-primary-normal-purple'
                            href={service.url ?? '/'}
                            onClick={() => {
                              setIsMenuMobileServicesOpen(false)
                              setIsNavMobileOpen(false)
                            }}
                          >
                            {
                              service.data.nom_service
                            }
                          </Link>
                        </li>
                      )
                    })
                  }
                </ul>
              </li>
            </motion.ul>
          )
        }
      </AnimatePresence>
    </div>
  )
}

export default ServicesDropdown