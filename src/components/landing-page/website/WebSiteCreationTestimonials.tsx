"use client"

import Image from "next/image"
import { Link } from "react-scroll"

const WebSiteCreationTestimonials = () => {
  return (
    <section className="app-container section-py text-primary-dark-purple">
      <div className="max-w-[850px] mx-auto">
        <h2
          className="text-center font-black uppercase text-2xl md:text-3xl"
        >
          Témoignages et avis de <span className="text-primary-normal-purple">nos chers clients</span>
        </h2>
      </div>

      <div className="w-full mt-10">
        <Image
          src="/images/landing-page/review_images.png"
          alt="reviews"
          width={1200}
          height={600}
          className="w-full h-auto mt-10 hidden md:block"
        />
        <Image
          src="/images/landing-page/review_images_mobilev1.png"
          alt="reviews"
          width={1200}
          height={600}
          className="w-full h-auto md:hidden"
        />
      </div>

      <div className="max-w-[850px] mx-auto mt-8 flex flex-col items-center">
        <p className="text-center font-medium text-lg">
          Nous vous offrons des services exceptionnels pour transformer votre idée en une réalité numérique impressionnante
        </p>
        <div
          className="mt-5"
        >
          <Link
            to="cta-form"
            smooth={true}
            duration={500}
            offset={-300}
            className="bg-primary-normal-purple uppercase inline-block cursor-pointer text-white px-4 py-3 md:px-6 md:py-4 rounded-full w-fit font-bold hover:bg-primary-dark-purple transition-all duration-200 text-sm md:text-base"
          >
            Réservez une consultation gratuite
          </Link>
        </div>
      </div>
    </section>
  )
}

export default WebSiteCreationTestimonials