"use client"

import Image from "next/image"
import { Link } from "react-scroll";

const featureData = [
  {
    title: "1# Sites personnalisés",
    description: <>
      Que vous recherchiez un site pour promouvoir vos services ou renforcer la présence numérique de votre entreprise, l’agence <span className="font-bold">Devti Technologie</span> peut concevoir des sites uniques répondant parfaitement aux besoins de votre activité.
    </>,
    image: "/images/landing-page/build_website.png"
  },
  {
    title: "2# Présence digitale pour votre entreprise",
    description: <>
      Grâce à notre vaste expertise en développement et en conception de sites web, <span className="font-bold">Devti Technologie</span> peut vous aider à mettre en valeur votre activité de manière exceptionnelle sur Internet.
    </>,
    image: "/images/landing-page/Presence digitale en ligne.png"
  },
  {
    title: "3# Vision stratégique",
    description: <>
      Notre équipe de développement et de design travaillera avec vous pour définir une vision stratégique garantissant le succès de votre projet à long terme.
    </>,
    image: "/images/desktop.jpg"
  },
  {
    title: "4# Support continu",
    description: <>
      Notre équipe d’assistance est toujours prête à répondre à toutes vos questions ou demandes, et nous veillerons à ce que vous n’ayez aucune difficulté à utiliser le site que nous développerons pour vous.</>,
    image: "/images/landing-page/help.png"
  },
]


const WebSiteCreationMiniCtaFeatures = () => {
  return (
    <section>
      <div className="app-container section-py relative">
        <div className="grid gap-12 md:gap-6 xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1">
          {featureData.map((feature, index) => (
            <CTAFeatureCard
              key={index}
              feature={feature}
            />
          ))}
        </div>


        {/* patterns */}
        <div className="absolute -top-[130px] right-[-60%] opacity-70 pointer-events-none select-none max-lg:hidden">
          <Image
            src="/images/landing-page/pattern.png"
            alt="pattern"
            className="w-[500px]"
            width={500}
            height={500}
          />
        </div>

        {/* eclipse */}
        <div className="absolute -top-[250px] right-[-50%] pointer-events-none select-none max-lg:hidden">
          <Image
            src="/images/landing-page/eclipse.png"
            alt="eclipse"
            className="w-[600px]"
            width={600}
            height={600}
          />
        </div>
      </div>
    </section>
  )
}

const CTAFeatureCard = ({ feature }: { feature: { title: string, description: React.ReactNode, image?: string } }) => {
  return (
    <div
      className="text-primary-dark-purple text-center flex flex-col justify-between"
    >
      <div className="space-y-3 flex-1">
        <h3
          className="text-lg font-bold pb-1 min-h-[60px]"
        >
          {feature.title}
        </h3>
        <div className="space-y-3">
          {/* image placeholder */}
          <div
            className="bg-gray-100 aspect-[4/2.4] rounded-2xl mx-auto w-full"
          >
            {
              feature.image && (
                <div className="relative w-full h-full">
                  <Image
                    src={feature.image}
                    alt={feature.title}
                    width={800}
                    height={500}
                    className="object-cover w-full h-full rounded-2xl"
                  />
                </div>
              )}

          </div>

          <p
            className="text-base md:text-sm"
          >
            {feature.description}
          </p>
        </div>
      </div>

      <div>
        <Link
          to="cta-form"
          smooth={true}
          duration={500}
          offset={-300}
          className="bg-primary-normal-purple inline-block cursor-pointer text-white px-5 py-3 rounded-full w-fit font-bold mt-6 hover:bg-primary-dark-purple transition text-sm"
        >
          Réservez une consultation gratuite
        </Link>
      </div>
    </div>
  )
}

export default WebSiteCreationMiniCtaFeatures