import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";
import Image from "next/image";
import Link from "next/link";
import FAQListView, { FAQItemType } from "@/components/FAQListView";
import { getLocale, getTranslations } from "next-intl/server";

const FaqPic = '/images/pic-faq.png'
const PicHand = '/images/hand-pic.png'

/**
 * Props for `FaqContent`.
 */
export type FaqContentProps = SliceComponentProps<Content.FaqContentSlice>;

/**
 * Component for "FaqContent" Slices.
 */
const FaqContent = ({ slice }: FaqContentProps): JSX.Element => {
  return (
    <div
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      <FaqHeroSection />
      <FaqQuestionsSection />
    </div>
  );
};

const ListItemsFr: FAQItemType[] = [
  {
    question: "Quels sont les services offerts chez DevtiTechnologie?",
    answer: "Nous offrons une gamme complète de services de développement web, y compris la conception de sites web, le développement d’application, la maintenance, entre autres. Veuillez consulter notre page de services pour en savoir plus.",
  },
  {
    question: "Qu’est-ce qui nous distingue de nos concurrents?",
    answer: "Chez DevtiTechnologie, nous sommes fiers de fournir des solutions taillées, un service client collaboratif et un engagement envers la qualité de nos produits. Nous travaillons main dans la main avec vous pour atteindre vos objectifs.",
  },
  {
    question: "Quelles sont les démarches de développement chez DevtiTechnologie?",
    answer: "Notre processus comprend une consultation, la découverte des besoins, la conception et la rétroaction, la création et le développement final, et la livraison. Chaque étape est conçue pour garantir la réussite de votre projet.",
  },
  {
    question: "Quelle est la politique de garantie de DevtiTechnologie?",
    answer: "Nous offrons une garantie de 30 jours sur tous nos projets. Veuillez noter que notre garantie ne s’applique pas aux travaux entamés avant paiement des 50% de la somme totale, pour les projets supérieurs à 20 000 Dhs.",
  },
  {
    question: "Comment puis-je obtenir un devis pour mon projet?",
    answer: "Pour recevoir un devis gratuit, contactez-nous à admin@devtitechnologie.com ou utilisez le formulaire de demande de devis sur notre page contact.",
  },
  {
    question: "Quelles sont les technologies qui soutiennent notre développement?",
    answer: "Nous travaillons avec des technologies de pointe construites sur mesure pour nos besoins et ceux de nos clients. Contactez-nous pour discuter des options les mieux adaptées à votre projet.",
  },
  {
    question: "Puis-je surveiller l’avancement de mon projet?",
    answer: "Nous assurons des mises régulières tout le long du processus. Vous êtes également autorisé à suivre le processus sur notre plateforme en ligne.",
  },
]

const ListItemsEn: FAQItemType[] = [
  {
    question: "What services are offered at Devti Technologie?",
    answer: "We offer a full range of web development services including website design, application development, maintenance, among others. Please visit our services page to learn more.",
  },
  {
    question: "What sets us apart from our competitors?",
    answer: "At Devti Technologie, we pride ourselves on providing tailored solutions, collaborative customer service, and a commitment to product quality. We work hand in hand with you to achieve your goals.",
  },
  {
    question: "What are the development approaches at Devti Technologie?",
    answer: "Our process includes consultation, discovery of needs, design and feedback, creation and final development, and delivery. Each step is designed to ensure the success of your project.",
  },
  {
    question: "What is DevtiTechnologie's warranty policy?",
    answer: "We offer a 30-day warranty on all our projects. Please note that our warranty does not apply to work started before payment of 50% of the total amount, for projects over 20,000 Dhs.",
  },
  {
    question: "How can I get a quote for my project?",
    answer: "To receive a free quote, contact us at admin@devtitechnologie.com or use the quote request form on our contact page.",
  },
  {
    question: "What technologies support our development?",
    answer: "We work with cutting-edge technologies custom-built for our needs and those of our clients. Contact us to discuss the options best suited to your project.",
  },
  {
    question: "Can I monitor the progress of my project?",
    answer: "We provide regular updates throughout the process. You are also allowed to follow the process on our online platform.",
  },
]

const FaqQuestionsSection = async () => {
  const t = await getTranslations()
  const locale = await getLocale()

  const ListItems = locale === 'fr' ? ListItemsFr : ListItemsEn

  return (
    <section>
      <div className="app-container section-py">
        <div className="section-pt flex flex-col lg:flex-row items-start gap-8">
          <TextSection />
          <div
            className='flex-1 w-full'
          >
            <FAQListView
              faqItems={ListItems}
              defaultOpenIndex={0}
            />
          </div>
        </div>
        {/* note */}
        <div
          className="title-p mt-8"
        >
          {t('faq.note.text')} <Link href="/contact" className="text-primary-normal-purple">{t('faq.note.linkText')} </Link>.
        </div>
      </div>
    </section>
  )
}

const TextSection = async () => {
  const t = await getTranslations()

  return (
    <div>
      <h2
        className="title-h2 mt-8 lg:mt-0"
      >
        {t('faq.title')}
      </h2>
      <p
        className="title-p max-w-[450px] mt-4"
      >
        <span dangerouslySetInnerHTML={{__html: t.raw('faq.text')}}></span>

        {' '}<a
          href="mailto:admin@devtitechnologie.com"
          className="text-primary-normal-purple"
        >
          admin@devtitechnologie.com
        </a>.
      </p>
      <Image
        src={FaqPic}
        width={202}
        height={278}
        quality={100}
        alt="pic-faq"
        className='ml-[150px] mt-[-30px] hidden lg:block'
      />
    </div>
  )
}

const FaqHeroSection = async () => {
  const t = await getTranslations()
  return (
    <section
      className="bg-primary-normal-purple"
    >
      <div className="app-container  ">
        <div className='py-8 flex flex-col items-center justify-center lg:min-h-[50vh] 2xl:min-h-[40vh] '>
          <h1 className="title-h2-c  text-primary-white">
            {t('faq.hero.title')}
          </h1>
          <p className="mt-4 title-p-c text-primary-white max-w-[750px] text-center">
            {t('faq.hero.text')}
          </p>
          <div className='relative'>
            <Link
              href="/contact"
              className="mt-8 px-8 py-4 block text-primary-normal-purple bg-primary-white rounded-full hover:bg-primary-light-purple hover:text-primary-white"
            >
              {t('faq.hero.contact')}
            </Link>
            <Image
              width={250}
              height={250}
              className='w-32 absolute left-8 top-[155px] transform -translate-y-1/2'
              src={PicHand}
              alt="hand"
            />
          </div>
        </div>
      </div>
    </section>
  )
}

export default FaqContent;
