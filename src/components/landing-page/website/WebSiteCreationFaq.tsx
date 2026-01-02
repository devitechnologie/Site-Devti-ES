"use client"

import SimpleFAQListView from "@/components/SimpleFAQListView"
import { Link } from "react-scroll"

const faqList = [
  {
    question: 'Utilisez-vous les technologies modernes et les outils les plus récents dans le processus de conception et de développement ?',
    answer: 'Oui, bien sûr. Nous utilisons les technologies modernes et les outils les plus récents dans nos processus de conception et de développement. À notre époque, il est impossible d’ignorer l’importance de la technologie pour améliorer la création et le développement des projets'
  },
  {
    question: "Avez-vous une équipe qualifiée et expérimentée dans le domaine du web design et du développement ?",
    answer: "Oui, nous disposons d’une équipe qualifiée et expérimentée en web design et en développement, composée de designers professionnels et de développeurs hautement compétents dans ces domaines.",
  },
  {
    question: "L’agence propose-t-elle une solution complète incluant la conception, le développement et la gestion de contenu ?",
    answer: "Oui, tout à fait. L’agence propose une solution complète englobant la conception, le développement et la gestion de contenu. Si vous recherchez une agence capable de répondre à tous vos besoins en matière de web et de marketing digital, le bon choix est de faire appel à une agence spécialisée offrant des services complets.",
  },
  {
    question: "Avez-vous déjà réalisé des projets réussis pour des clients précédents ?",
    answer: "Oui, nous avons réalisé avec succès de nombreux projets pour des clients précédents, qu’il s’agisse d’entreprises ou d’entrepreneurs dans divers secteurs d’activité.",
  },
]

const WebSiteCreationFaq = () => {
  return (
    <section className="app-container section-py text-primary-dark-purple">
      <div className="max-w-[850px] mx-auto">
        <h2
          className="text-center font-black uppercase text-2xl md:text-3xl"
        >
          Vous avez une question ? <span className="text-primary-normal-purple">Nous avons la réponse…</span>
        </h2>
        <p className="text-center font-medium text-lg mt-2">
          Vous recevrez votre site en moins de 3 semaines
        </p>
      </div>

      <div className="w-full mt-10">
        <SimpleFAQListView faqItems={faqList} defaultOpenIndex={[0, 1, 2, 3]} multipleOpen />
      </div>

      <div className="max-w-[850px] mx-auto mt-8 flex flex-col items-center">
        <p className="text-center font-medium text-lg">
          Nous vous offrons des services exceptionnels pour transformer votre idée en une réalité numérique impressionnante.
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

export default WebSiteCreationFaq