"use client"

import { MdKeyboardArrowDown } from 'react-icons/md'
import { RxHamburgerMenu } from 'react-icons/rx'
import { motion, AnimatePresence } from 'framer-motion'
import { IoMdClose } from 'react-icons/io'
import Link from 'next/link'
import { PrismicNextImage, PrismicNextLink } from '@prismicio/next'
import { NavbarDocument, ServicepageDocument } from '../../prismicio-types'
import { useEffect, useState } from 'react'
import { cn } from '@/utils/cn'
import ServicesDropdown, { MobileServicesDropdown } from './ServicesDropdown'
import { usePathname } from 'next/navigation'
import { useLocale } from 'next-intl'
import LangMenu from './LangMenu'

type NavbarProps = {
  navbar: NavbarDocument<string>
  services: ServicepageDocument<string>[]
}

const Navbar = ({ navbar, services }: NavbarProps) => {
  let path = usePathname()
  const [isMenuServicesOpen, setIsMenuServicesOpen] = useState(false)
  const [isMenuMobileServicesOpen, setIsMenuMobileServicesOpen] = useState(false)
  const [isNavMobileOpen, setIsNavMobileOpen] = useState(false)
  const [isScrollOnHrefhrefp, setIsScrollOnHrefhrefp] = useState(true)
  const [openSubMenuIndex, setOpenSubMenuIndex] = useState<number | null>(null)
  const [openMobileSubMenuIndex, setOpenMobileSubMenuIndex] = useState<number | null>(null)
  const locale = useLocale()

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScrollOnHrefhrefp(false)
      } else {
        setIsScrollOnHrefhrefp(true)
      }
    }

    window.addEventListener('scroll', handleScroll)

    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header className={
      cn(
        'bg-primary-light-blue fixed top-0 left-0 right-0 z-50 transition-all',
        !isScrollOnHrefhrefp && 'shadow-card-shadow-border'
      )}
    >
      {/* main nav */}
      <nav className="app-container flex items-stretch justify-between min-h-[80px] relative">
        <figure
          className="w-32 flex items-center"
        >
          <Link
            href="/"
          >
            <PrismicNextImage
              draggable={false}
              field={navbar.data.brand_logo}
              className='-mt-5'
            />
          </Link>
        </figure>
        <div
          className="flex items-stretch gap-8"
        >
          <ul
            onMouseLeave={() => {
              setIsMenuServicesOpen(false)
              setOpenSubMenuIndex(null)
            }}
            className="md:flex items-stretch justify-between hidden"
          >
            {
              navbar.data.slices.map((item, index) => {
                let locationPath = '/not-found'
                if (item.variation === 'oneLinkUrl') {
                  if (item.primary.link_url && item.primary.link_url.link_type === "Document") {
                    locationPath = (item.primary.link_url as any).url
                  }
                }
                return item.variation === 'oneLinkUrl' ? (
                  <li
                    key={index}
                    onMouseEnter={() => {
                      if (item.primary.sub_nav_links.length > 0) {
                        setOpenSubMenuIndex(index)
                        setIsMenuServicesOpen(false)
                      }
                    }}
                    onMouseLeave={() => {
                      setOpenSubMenuIndex(null)
                    }}
                    onClick={() => {
                      setIsMenuServicesOpen(false)
                      setOpenSubMenuIndex(null)
                    }}
                    className={cn(
                      `nav-link relative`,
                      path === ('/' + locale + (locationPath === '/' ? '' : locationPath)) && 'active'
                    )}

                  >
                    <div className='flex items-center gap-2'>
                      <PrismicNextLink
                        field={item.primary.link_url}
                        // if link is external
                        {...(item.primary.link_url && item.primary.link_url.link_type === "Web" && { target: '_blank', rel: 'noopener noreferrer' })}
                      >
                        {item.primary.menu_text}
                      </PrismicNextLink>
                      {item.primary.sub_nav_links.length > 0 && (
                        <MdKeyboardArrowDown className='text-gray-400' />
                      )}
                    </div>

                    {/* if have items */}
                    <AnimatePresence>
                      {
                        item.primary.sub_nav_links.length > 0 && openSubMenuIndex === index && (
                          <motion.ul
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: 10 }}
                            transition={{ duration: .3 }}
                            className='absolute top-[70px] left-0 bg-white shadow-card-shadow-border rounded-md p-6 min-w-[240px] overflow-hidden z-50'
                          >
                            {
                              item.primary.sub_nav_links.map((subItem, subIndex) => {
                                let subLocationPath = '/not-found'
                                if (subItem.link && subItem.link.link_type === "Document") {
                                  subLocationPath = (subItem.link as any).url
                                }
                                return (
                                  <li
                                    key={subIndex}
                                    className='mb-3 last:mb-0'
                                  >
                                    <PrismicNextLink
                                      field={subItem.link}
                                      className={cn(
                                        'block text-gray-800 hover:text-primary-normal-purple hover:underline transition-all',
                                        path === ('/' + locale + (subLocationPath === '/' ? '' : subLocationPath)) && 'text-primary-normal-purple font-semibold'
                                      )}
                                    >
                                      {subItem.link_name}
                                    </PrismicNextLink>
                                  </li>
                                )
                              })
                            }
                          </motion.ul>
                        )
                      }
                    </AnimatePresence>
                  </li>
                ) : (
                  <li
                    key={index}
                    className={cn(
                      `nav-link`,
                      path === locationPath && 'active'
                    )}
                  >
                    <div>
                      <div
                        onMouseEnter={() => setIsMenuServicesOpen(true)}
                        onClick={() => {
                          setIsMenuServicesOpen((prev) => !prev)
                        }}
                        className='flex items-center gap-2'
                      >
                        {
                          item.primary.menu_text
                        }
                        <MdKeyboardArrowDown className='text-gray-400' />
                      </div>
                      <ServicesDropdown
                        isMenuServicesOpen={isMenuServicesOpen}
                        setIsMenuServicesOpen={setIsMenuServicesOpen}
                        services={services.slice().reverse()}
                        servicesHeader={item.primary.services_title}
                      />
                    </div>
                  </li>
                )
              })
            }
          </ul>
        </div>
        <div
          className="flex items-center"
        >
          <Link
            href="/contact"
            className={`px-4 py-2 rounded-md block ${path.includes('contact') && 'opacity-0'} hover:bg-primary-normal-purple text-primary-normal-purple hover:text-white transition-all duration-300 bg-primary-light-blue border italic font-semibold shadow-md border-primary-normal-purple ${!isScrollOnHrefhrefp && 'bg-primary-normal-purple text-white'}`}
          >
            <span
              className='hidden md:block'
            >
              {
                navbar.data.action_button_text
              }
            </span>
            <span
              className='md:hidden'
            >
              {
                navbar.data.action_mobile_button_text
              }
            </span>
          </Link>
          <div
            onClick={() => {
              setIsNavMobileOpen((prev) => !prev)
            }}
            className="md:hidden ml-2 sm:ml-4 cursor-pointer text-2xl p-2 rounded-md text-primary-normal-purple hover:bg-primary-normal-purple hover:text-white transition-all duration-300 bg-primary-light-blue border italic font-semibold shadow-md border-primary-normal-purple"
          >
            <RxHamburgerMenu />
          </div>
        </div>
      </nav>
      {/* nav mobile */}
      <nav
        className={`md:hidden overflow-y-scroll fixed top-0 bottom-0 w-[80%] ${isNavMobileOpen ? 'left-0' : 'left-[-100%]'} duration-300 transition-all bg-primary-light-blue z-50`}
      >
        <div>
          <div
            onClick={() => {
              setIsNavMobileOpen(false)
            }}
            className="ml-auto text-2xl p-2 w-fit m-4 cursor-pointer rounded-md text-primary-normal-purple hover:bg-primary-normal-purple hover:text-white transition-all duration-300 bg-primary-light-blue border italic font-semibold shadow-md border-primary-normal-purple"
          >
            <IoMdClose />
          </div>
        </div>
        <div>
          <ul
            className='flex flex-col gap-2 mt-4'
          >
            {
              navbar.data.slices.map((item, index) => {
                let locationPath = '/not-found'
                if (item.variation === 'oneLinkUrl') {
                  if (item.primary.link_url && item.primary.link_url.link_type === "Document") {
                    locationPath = (item.primary.link_url as any).url
                  }
                }
                return item.variation === 'oneLinkUrl' ? (
                  <li
                    key={index}
                  >
                    {item.primary.sub_nav_links.length > 0 ? (
                      <>
                        <div
                          onClick={() => {
                            setOpenMobileSubMenuIndex(openMobileSubMenuIndex === index ? null : index)
                          }}
                          className={`nav-link-mobile gap-3 ${path === locationPath && 'active'}`}
                        >
                          {item.primary.menu_text}
                          <MdKeyboardArrowDown className={`transition-transform text-xl ${openMobileSubMenuIndex === index ? 'rotate-180' : ''}`} />
                        </div>
                        <AnimatePresence>
                          {openMobileSubMenuIndex === index && (
                            <motion.ul
                              initial={{ opacity: 0, height: 0 }}
                              animate={{ opacity: 1, height: 'auto' }}
                              exit={{ opacity: 0, height: 0 }}
                              transition={{ duration: .1 }}
                              className='overflow-hidden'
                            >
                              {item.primary.sub_nav_links.map((subItem, subIndex) => {
                                let subLocationPath = '/not-found'
                                if (subItem.link && subItem.link.link_type === "Document") {
                                  subLocationPath = (subItem.link as any).url
                                }
                                return (
                                  <li key={subIndex} className='pl-8 mt-2'>
                                    <PrismicNextLink
                                      field={subItem.link}
                                      onClick={() => {
                                        setIsNavMobileOpen(false)
                                        setOpenMobileSubMenuIndex(null)
                                      }}
                                      className={cn(
                                        'hover:underline hover:text-primary-normal-purple transition-all',
                                        path === ('/' + locale + (subLocationPath === '/' ? '' : subLocationPath)) && 'text-primary-normal-purple font-semibold'
                                      )}
                                      {...(subItem.link && subItem.link.link_type === "Web" && { target: '_blank', rel: 'noopener noreferrer' })}
                                    >
                                      {subItem.link_name}
                                    </PrismicNextLink>
                                  </li>
                                )
                              })}
                            </motion.ul>
                          )}
                        </AnimatePresence>
                      </>
                    ) : (
                      <PrismicNextLink
                        field={item.primary.link_url}
                        onClick={() => setIsNavMobileOpen(false)}
                        className={`nav-link-mobile ${path === locationPath && 'active'}`}
                        {...(item.primary.link_url && item.primary.link_url.link_type === "Web" && { target: '_blank', rel: 'noopener noreferrer' })}
                      >
                        {item.primary.menu_text}
                      </PrismicNextLink>
                    )}
                  </li>
                ) : (
                  <li
                    key={index}
                  >
                    <span
                      onClick={() => {
                        setIsMenuMobileServicesOpen((prev) => !prev)
                      }}
                      className={`nav-link-mobile gap-3 ${path.includes('/service') && 'active'}`}
                    >
                      {
                        item.primary.menu_text
                      }
                      <MdKeyboardArrowDown className={`transition-transform text-xl ${isMenuMobileServicesOpen ? 'rotate-180' : ''}`} />
                    </span>
                    <MobileServicesDropdown
                      isMenuMobileServicesOpen={isMenuMobileServicesOpen}
                      setIsMenuMobileServicesOpen={setIsMenuMobileServicesOpen}
                      setIsNavMobileOpen={setIsNavMobileOpen}
                      services={services}
                      servicesHeader={item.primary.services_title}
                    />
                  </li>
                )
              })
            }
          </ul>
          {/* lang menu */}
          <div
            className="flex items-center justify-end px-4 mt-4"
          >
            <LangMenu />
          </div>
        </div>
      </nav>
      {/* shadow */}
      <AnimatePresence>
        {
          isNavMobileOpen && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: .3 }}
              onClick={() => {
                setIsNavMobileOpen(false)
              }}
              className='fixed top-0 bottom-0 left-0 right-0 z-40 bg-black bg-opacity-50'
            ></motion.div>
          )
        }
      </AnimatePresence>

    </header >
  )
}

export default Navbar