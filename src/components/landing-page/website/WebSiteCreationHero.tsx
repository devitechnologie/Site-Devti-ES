import Image from "next/image"
import WebsiteReservationForm from "./forms/WebsiteReservationForm"

const WebSiteCreationHero = () => {
  return (
    <section>
      <div className="bg-primary-dark-purple min-h-[400px]">
        <div className="app-container section-py flex flex-col items-center justify-center gap-10">
          <ContentText />
        </div>

        <div className="h-[260px]"></div>
      </div>
      <ContactForm />
      <div className="section-pt"></div>
      <div className="sm:hidden border-b border-primary-dark-purple"></div>

      {/* patterns */}
      <div className="absolute -bottom-[130px] left-[-20%] opacity-70 pointer-events-none select-none max-lg:hidden">
        <Image
          src="/images/landing-page/pattern.png"
          alt="pattern"
          className="w-[500px]"
          width={500}
          height={500}
        />
      </div>

      {/* eclipse */}
      <div className="absolute -bottom-[250px] left-[-12%] pointer-events-none select-none max-lg:hidden">
        <Image
          src="/images/landing-page/eclipse.png"
          alt="eclipse"
          className="w-[600px]"
          width={600}
          height={600}
        />
      </div>
    </section>
  )
}

const ContactForm = () => {
  return (
    <div
      id="cta-form"
      className="w-full flex-1 max-w-[550px] md:shadow-2xl md:shadow-primary-normal-purple/10 sm:w-[550px] text-primary-dark-purple border-primary-dark-purple md:border-2 p-6 md:p-8 bg-primary-light-blue md:bg-white rounded-xl mt-[-280px] min-h-[400px] mx-auto"
    >
      <div className="text-center uppercase text-2xl mb-6">
        <h2
          className="font-medium mb-0.5"
        >
          Remplissez le formulaire pour une
        </h2>
        <p className="font-extrabold">
          consultation <span
            className="text-primary-normal-purple"
          >gratuite</span>
        </p>
      </div>
      <WebsiteReservationForm />
    </div>
  )
}

const ContentText = () => {
  return (
    <div className="flex flex-col items-center text-center text-white gap-6 max-w-[980px] mx-auto">
      <h6
        className="bg-white text-sm md:text-base font-semibold px-[9px] md:px-4 py-2 rounded-full text-primary-dark-purple text-center"
      >
        Offre spéciale pour Entrepreneurs & Dirigeants
      </h6>
      <h1
        className="text-center md:text-[42px] md:leading-[59px] font-black uppercase text-[28px] leading-[42px] max-sm:max-w-[320px] mx-auto"
      >
        Vous obtiendrez un <span className="text-primary-normal-purple">site exceptionnel</span> qui reflète l’identité de votre marque de manière créative et unique
      </h1>
      <p
        className="text-base md:text-lg leading-7 font-medium"
      >
        Que vous ayez un petit ou un grand projet, l’agence <span className="font-bold">Devti Technologie</span> facilite la création d’un site web qui répond à vos besoins, vous aide à augmenter vos ventes et à attirer davantage de clients.
      </p>
    </div>
  )
}

export default WebSiteCreationHero