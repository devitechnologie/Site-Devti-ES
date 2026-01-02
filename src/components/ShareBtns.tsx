'use client'

import React from 'react'
import { FaFacebookF } from 'react-icons/fa6'
import { RiTwitterXLine } from 'react-icons/ri'

export const ShareOnFb = ({ url, title }: { url: string, title: string }) => {
  const handleShareFb = () => {
    window.open(`https://www.facebook.com/sharer/sharer.php?u=${url}&quote=${title}`, 'facebook-share-dialog', 'width=800,height=600')
  }
  return (
    <div
      onClick={handleShareFb}
      className='w-8 h-8 rounded-full bg-gray-200 flex justify-center items-center cursor-pointer'
    >
      <FaFacebookF />
    </div>
  )
}
export const ShareOnTwitter = ({ url, title }: { url: string, title: string }) => {
  const handleShareTwitter = () => {
    window.open(`https://twitter.com/intent/tweet?text=${title}&url=${url}`, 'twitter-share-dialog', 'width=800,height=600')
  }
  return (
    <div
      onClick={handleShareTwitter}
      className='w-8 h-8 rounded-full bg-gray-200 flex justify-center items-center cursor-pointer'
    >
      <RiTwitterXLine />
    </div>
  )
}