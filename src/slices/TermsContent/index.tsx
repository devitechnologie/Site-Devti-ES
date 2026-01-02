"use client"

import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";
import { useState } from "react";

export type Tab = "conditions-generales" | "politique-de-confidentialite" | "politique-de-cookie" | "meilleur-prix-garanti"

/**
 * Props for `TermsContent`.
 */
export type TermsContentProps = SliceComponentProps<Content.TermsContentSlice>;

/**
 * Component for "TermsContent" Slices.
 */
const TermsContent = ({ slice }: TermsContentProps): JSX.Element => {
  const [activeTab, setActiveTab] = useState<Tab>("conditions-generales")

  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      <div className="app-container">
        <div
          id="conditions-generales"
          className="flex flex-col md:flex-row justify-between items-stretch gap-8 section-pb pt-4"
        >
          <GeneraleSelectBox
            activeTab={activeTab}
            setActiveTab={setActiveTab}
          />
          <div
            id="conditions-generales-content" 
            className="flex-1">
            {activeTab === "conditions-generales" && <TermsOfUseSection />}
            {activeTab === "politique-de-confidentialite" && <PolitiqueConfidentialiteSection />}
            {activeTab === "politique-de-cookie" && <PolitiqueDeCookie />}
            {activeTab === "meilleur-prix-garanti" && <MeilleurPrixGarantiSection />}
          </div>
        </div>
      </div>
    </section>
  )
}

type Props = {
  activeTab: Tab
  setActiveTab: (tab: Tab) => void
}

const GeneraleSelectBox = ({ activeTab, setActiveTab }: Props) => {
  return (
    <div>
      <ul
        className="md:sticky top-[90px] w-full md:w-[300px] shadow-card-shadow-border bg-white rounded-xl p-4 flex flex-col gap-4 font-medium"
      >
        <li
          onClick={() => setActiveTab("conditions-generales")}
          className={`${activeTab === "conditions-generales" && "active"}`}
        >
          General Terms of Use
        </li>
        <li
          onClick={() => setActiveTab("politique-de-confidentialite")}
          className={`${activeTab === "politique-de-confidentialite" && "active"}`}
        >
          Politique de Confidentialité
        </li>
        <li
          onClick={() => setActiveTab("politique-de-cookie")}
          className={`${activeTab === "politique-de-cookie" && "active"}`}
        >
          Politique en Matière de Cookies
        </li>
        <li
          onClick={() => setActiveTab("meilleur-prix-garanti")}
          className={`${activeTab === "meilleur-prix-garanti" && "active"}`}
        >
          Politique de Garantie
        </li>
      </ul>
    </div>
  )
}

const TermsOfUseSection = () => {
  return (
    <section className="flex-1">

      <h1>Conditions Générales d{"'"}Utilisation</h1>
      <p>Bienvenue sur le site web de DevtiTechnologie. L{"'"}utilisation de ce site est soumise aux conditions énoncées ci-dessous. En accédant à notre site, vous acceptez ces conditions sans réserve. Veuillez les lire attentivement.</p>
      <br />
      <h2>1. Acceptation des Termes</h2>
      <p>En accédant à ce site, vous acceptez d{"'"}être lié par ces Conditions Générales d{"'"}Utilisation, toutes les lois et réglementations applicables, et acceptez que vous êtes responsable du respect de toutes les lois locales applicables. Si vous n{"'"}acceptez pas ces termes, veuillez ne pas utiliser notre site.</p>

      <br />

      <h2>2. Utilisation du Site</h2>
      <p>Vous acceptez de n{"'"}utiliser ce site que dans un but légal et conforme à ces conditions. Vous vous engagez à ne pas utiliser le site d{"'"}une manière qui pourrait causer un préjudice à DevtiTechnologie ou à des tiers.</p>

      <br />

      <h2>3. Modifications des Conditions</h2>
      <p>DevtiTechnologie se réserve le droit de modifier ces Conditions Générales d{"'"}Utilisation à tout moment. Les modifications entrent en vigueur dès leur publication sur le site. Il est de votre responsabilité de consulter régulièrement ces conditions pour vous tenir informé des éventuelles modifications.</p>

      <br />

      <h2>4. Propriété Intellectuelle</h2>
      <p>Le contenu du site, y compris, mais sans s{"'"}y limiter, les textes, graphiques, images, logos, icônes de boutons, est la propriété exclusive de DevtiTechnologie et est protégé par les lois sur la propriété intellectuelle.</p>

      <br />

      <h2>5. Limitations de Responsabilité</h2>
      <p>DevtiTechnologie ne garantit pas l{"'"}exactitude, l{"'"}exhaustivité ni la pertinence du contenu du site. L{"'"}utilisation du site est à vos propres risques. Nous nous réservons le droit de modifier, suspendre ou interrompre le site à tout moment.</p>

      <br />

      <h2>6. Contact</h2>
      <p>Pour toute question concernant ces Conditions Générales d{"'"}Utilisation, veuillez nous contacter à l{"'"}adresse suivante : <a href="mailto:admin@devtitechnologie.com">admin@devtitechnologie.com</a></p>

    </section>
  )
}

const PolitiqueConfidentialiteSection = () => {
  return (
    <div>
      <h1>Politique de Confidentialité</h1>
      <p>La confidentialité de nos visiteurs est une priorité chez DevtiTechnologie. Cette politique de confidentialité explique comment nous collectons, utilisons, divulguons et protégeons vos informations personnelles.</p>
      <br />
      <h2>1. Collecte d{"'"}Informations</h2>
      <p>Nous collectons des informations personnelles telles que votre nom, adresse e-mail et informations de contact lorsque vous utilisez notre site. Ces données sont collectées de manière volontaire lorsque vous remplissez des formulaires, vous abonnez à notre newsletter ou interagissez avec nos services.</p>
      <br />
      <h2>2. Utilisation des Informations</h2>
      <p>Les informations que nous collectons sont utilisées pour personnaliser votre expérience sur notre site, répondre à vos demandes, améliorer nos services et vous informer de mises à jour importantes. Nous ne vendons ni ne louons vos informations à des tiers.</p>
      <br />
      <h2>3. Protection des Informations</h2>
      <p>Nous mettons en place des mesures de sécurité pour protéger vos informations personnelles contre tout accès non autorisé, divulgation, altération ou destruction. L{"'"}accès à vos données est limité aux employés qui en ont besoin pour fournir des services.</p>
      <br />
      <h2>4. Cookies</h2>
      <p>Notre site utilise des cookies pour améliorer votre expérience en ligne. Les cookies sont de petits fichiers texte stockés sur votre appareil qui nous aident à analyser le trafic du site et à personnaliser le contenu. Vous pouvez contrôler et/ou supprimer les cookies selon vos préférences.</p>
      <br />
      <h2>5. Liens vers des Sites Tiers</h2>
      <p>Notre site peut contenir des liens vers des sites tiers. Nous ne sommes pas responsables des pratiques de confidentialité de ces sites et vous encourageons à consulter leurs politiques de confidentialité.</p>
      <br />
      <h2>6. Modifications de la Politique</h2>
      <p>Nous nous réservons le droit de mettre à jour notre politique de confidentialité. Les modifications seront publiées sur cette page, et la date de révision en haut de la page sera mise à jour.</p>
      <br />
      <h2>7. Contact</h2>
      <p>Si vous avez des questions ou des préoccupations concernant notre politique de confidentialité, veuillez nous contacter à l{"'"}adresse suivante : <a href="mailto:admin@devtitechnologie.com">admin@devtitechnologie.com</a></p>
    </div>
  )
}

const PolitiqueDeCookie = () => {
  return (
    <div>
      <h1>Politique en Matière de Cookies</h1>
      <p>Chez DevtiTechnologie, nous utilisons des cookies pour améliorer votre expérience sur notre site. Cette politique explique ce que sont les cookies, comment nous les utilisons et comment vous pouvez les contrôler.</p>
      <br />
      <h2>1. Qu{"'"}est-ce qu{"'"}un Cookie ?</h2>
      <p>Un cookie est un petit fichier texte stocké sur votre ordinateur ou appareil mobile lorsque vous visitez un site web. Les cookies sont largement utilisés pour faire fonctionner les sites web, les rendre plus efficaces, et fournir des informations aux propriétaires du site.</p>
      <br />
      <h2>2. Comment Nous Utilisons les Cookies</h2>
      <p>Nous utilisons des cookies pour comprendre comment les visiteurs interagissent avec notre site, analyser les tendances, administrer le site, et recueillir des informations démographiques sur notre base d{"'"}utilisateurs dans son ensemble. Ces informations sont utilisées pour améliorer constamment notre site et offrir une expérience utilisateur optimale.</p>
      <br />
      <h2>3. Types de Cookies Utilisés</h2>
      <br />
      <ul>
        <li><strong>Cookies Essentiels :</strong> Ces cookies sont nécessaires au bon fonctionnement du site et vous permettent de naviguer et d{"'"}utiliser ses fonctionnalités.</li>
        <li><strong>Cookies de Performance :</strong> Ces cookies collectent des informations sur la manière dont les visiteurs utilisent le site, par exemple, quelles pages sont les plus visitées. Ces données nous aident à améliorer la performance du site.</li>
        <li><strong>Cookies de Fonctionnalité :</strong> Ces cookies permettent au site de se souvenir de vos choix et de fournir des fonctionnalités améliorées.</li>
      </ul>
      <br />
      <h2>4. Contrôle des Cookies</h2>
      <p>Vous pouvez contrôler et/ou supprimer les cookies selon vos préférences. Vous pouvez les supprimer de votre navigateur ou configurer votre navigateur pour qu{"'"}il refuse les cookies. Cependant, veuillez noter que la désactivation des cookies peut affecter certaines fonctionnalités de notre site.</p>
      <br />
      <h2>5. Mises à Jour de la Politique</h2>
      <p>Nous nous réservons le droit de mettre à jour notre politique en matière de cookies. Les modifications seront publiées sur cette page, et la date de révision en haut de la page sera mise à jour.</p>
      <br />
      <h2>6. Contact</h2>
      <p>Si vous avez des questions ou des préoccupations concernant notre politique en matière de cookies, veuillez nous contacter à l{"'"}adresse suivante : <a href="mailto:admin@devtitechnologie.com">admin@devtitechnologie.com</a></p>
    </div>
  )
}

const MeilleurPrixGarantiSection = () => {
  return (
    <div>
      <h1>Politique de Garantie</h1>
      <p>Chez DevtiTechnologie, nous nous engageons à fournir des services de qualité exceptionnelle à nos clients. Notre politique de garantie vise à assurer votre entière satisfaction.</p>
      <br />
      <h2>1. Durée de Garantie</h2>
      <p>Tous les projets réalisés par DevtiTechnologie sont couverts par une garantie de satisfaction de 30 jours. Si, pour une raison quelconque, vous n{"'"}êtes pas entièrement satisfait de notre travail, nous nous engageons à retravailler le projet pour répondre à vos attentes.</p>
      <br />
      <h2>2. Conditions pour Bénéficier de la Garantie</h2>
      <br />
      <ul>
        <li><strong>Paiement d{"'"}Avance :</strong> Afin de bénéficier de la garantie de 30 jours, un paiement d{"'"}avance de 50% du coût total du projet est requis.</li>
        <li><strong>Exclusions :</strong> La garantie ne s{"'"}applique pas aux projets dont le coût total est inférieur à 20 000 Dhs. Cependant, pour les projets dont le coût total excède 20 000 Dhs, la garantie de 30 jours est automatiquement incluse.</li>
      </ul>
      <br />
      <h2>3. Processus de Réclamation</h2>
      <p>Si vous n{"'"}êtes pas satisfait de notre travail dans les 30 jours suivant la livraison du projet, veuillez nous contacter immédiatement à l{"'"}adresse e-mail de contact <a href="mailto:admin@devtitechnologie.com">admin@devtitechnologie.com</a>. Nous discuterons de vos préoccupations et prendrons des mesures pour ajuster le projet selon vos attentes.</p>
      <br />
      <h2>4. Engagements Additionnels</h2>
      <br />
      <ul>
        <li>Nous nous efforçons de comprendre pleinement vos besoins dès le début du projet.</li>
        <li>Nous mettons en œuvre des révisions et des ajustements selon vos commentaires tout au long du processus.</li>
        <li>Notre équipe est disponible pour répondre à vos questions et préoccupations à tout moment.</li>
      </ul>
      <br />
      <h2>5. Limitations de la Garantie</h2>
      <p>La garantie de 30 jours est valable une seule fois par projet et ne s{"'"}applique pas aux ajouts ou modifications ultérieurs au projet initial.</p>
      <br />
      <h2>6. Modifications de la Politique</h2>
      <p>Nous nous réservons le droit de mettre à jour notre politique de garantie. Les modifications seront publiées sur cette page, et la date de révision en haut de la page sera mise à jour.</p>
      <br />
      <h2>7. Contact</h2>
      <p>Si vous avez des questions ou des préoccupations concernant notre politique de garantie, veuillez nous contacter à l{"'"}adresse suivante : <a href="mailto:admin@devtitechnologie.com">admin@devtitechnologie.com</a></p>

    </div>
  )
}

export default TermsContent;
